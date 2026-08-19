#!/usr/bin/env node
/**
 * Evidence Validator
 *
 * Checks that every evidence file cited in the library documentation exists
 * on disk under /mnt/d/Twitch/shots/ (or the EVIDENCE_DIR override).
 * Expands brace {a,b} and range 1..6 citation patterns into concrete
 * filenames before checking.
 *
 * Usage:
 *   node .opencode/scripts/validate-evidence.js            # validate citations
 *   node .opencode/scripts/validate-evidence.js --dry-run  # also print unreferenced files
 *   node .opencode/scripts/validate-evidence.js --junk     # dry-run filtered to junk patterns
 *
 * Exit codes:
 *   0  all cited files exist
 *   1  at least one cited file is missing
 */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.join(__dirname, '..', '..');
const EVIDENCE_DIR = process.env.EVIDENCE_DIR || '/mnt/d/Twitch/shots/';

// Directories excluded from the citation scan (planning artifacts, tooling, VCS).
const EXCLUDED_DIRS = new Set(['.git', '.opencode', 'node_modules', 'openspec', 'archive']);
// File extensions scanned for backtick evidence citations.
const SCAN_EXT = '.md';

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const junkOnly = args.includes('--junk');

// Diagnostic-junk name patterns (Stage A). A file matches if ANY pattern matches its name.
const JUNK_PATTERNS = [
  /^tmp/, /^probe/, /-verify\.txt$/, /^state.*\.txt$/, /^navstate.*\.txt$/,
  /^scan2-delay\.txt$/, /^wincheck\.txt$/, /^cleanup2\.txt$/, /^checkwin-after-source\.txt$/,
  /^sidebar-dump.*\.txt$/, /^back\d+-verify\.txt$/,
];
const TOOLING_EXT = new Set(['.ps1', '.cs', '.dll']);

function collectMarkdownFiles(dir) {
  const files = [];
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch (e) {
    return files;
  }
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (!EXCLUDED_DIRS.has(entry.name)) {
        files.push(...collectMarkdownFiles(path.join(dir, entry.name)));
      }
    } else if (entry.isFile() && entry.name.endsWith(SCAN_EXT)) {
      files.push(path.join(dir, entry.name));
    }
  }
  return files;
}

/** Expand a citation token (brace {a,b} then range 1..6) into concrete filenames. */
function expandCitation(token) {
  let current = [token];
  // Brace expansion: a{b,c}d -> abd, acd (repeat until no braces remain)
  let changed = true;
  while (changed) {
    changed = false;
    const next = [];
    for (const c of current) {
      const braceMatch = c.match(/^(.*)\{([^{}]*)\}(.*)$/);
      if (braceMatch) {
        changed = true;
        for (const part of braceMatch[2].split(',')) {
          next.push(braceMatch[1] + part + braceMatch[3]);
        }
      } else {
        next.push(c);
      }
    }
    current = next;
  }
  // Range expansion: wheel1..6 -> wheel1, wheel2, ..., wheel6
  const out = [];
  for (const c of current) {
    const rangeMatch = c.match(/^(.*?)(\d+)\.\.(\d+)(\.[^.]+)$/);
    if (rangeMatch) {
      const [, prefix, startStr, endStr, suffix] = rangeMatch;
      const start = parseInt(startStr, 10);
      const end = parseInt(endStr, 10);
      for (let i = start; i <= end; i++) {
        out.push(prefix + i + suffix);
      }
    } else {
      out.push(c);
    }
  }
  return out;
}

function findCitations(files) {
  const citationRegex = /`([A-Za-z0-9_{}.,-]+\.(?:png|txt))`/g;
  const tokens = new Set();
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    let match;
    while ((match = citationRegex.exec(content)) !== null) {
      tokens.add(match[1]);
    }
  }
  const filenames = new Set();
  for (const token of tokens) {
    for (const expanded of expandCitation(token)) {
      filenames.add(expanded);
    }
  }
  return { tokens, filenames };
}

// --- Main ---
if (!fs.existsSync(EVIDENCE_DIR)) {
  console.error(`Evidence directory not found: ${EVIDENCE_DIR}`);
  process.exit(1);
}

const mdFiles = collectMarkdownFiles(REPO_ROOT);
const { tokens, filenames } = findCitations(mdFiles);

const onDisk = new Set(fs.readdirSync(EVIDENCE_DIR));
const missing = [...filenames].filter(f => !onDisk.has(f)).sort();
const referenced = [...filenames].filter(f => onDisk.has(f)).sort();
const unreferenced = [...onDisk].filter(f => !filenames.has(f)).sort();

console.log(`Scanned ${mdFiles.length} markdown file(s) in ${REPO_ROOT}`);
console.log(`Found ${tokens.size} citation token(s) -> ${filenames.size} concrete filename(s)`);
console.log(`Evidence dir: ${EVIDENCE_DIR} (${onDisk.size} files on disk)\n`);

let exitCode = 0;
if (missing.length > 0) {
  exitCode = 1;
  console.error(`✗ ${missing.length} cited file(s) MISSING:`);
  for (const f of missing) console.error(`   ${f}`);
} else {
  console.log(`✓ All ${referenced.length} cited files exist on disk.`);
}

if (dryRun) {
  const tooling = f => TOOLING_EXT.has(path.extname(f).toLowerCase());
  const target = junkOnly
    ? unreferenced.filter(f => !tooling(f) && JUNK_PATTERNS.some(p => p.test(f)))
    : unreferenced.filter(f => !tooling(f));
  console.log(`\n[DRY-RUN] ${junkOnly ? 'junk-pattern' : 'unreferenced'} files (${target.length}, tooling excluded):`);
  for (const f of target) {
    const size = fs.statSync(path.join(EVIDENCE_DIR, f)).size;
    console.log(`   ${(size / 1024).toFixed(1).padStart(9)} KB  ${f}`);
  }
}

console.log(exitCode === 0 ? '\n✓ Validation passed.' : '\n✗ Validation failed (exit 1).');
process.exit(exitCode);
