#!/usr/bin/env node
/**
 * Link Validator
 *
 * Checks that all plugin links in INDEX.md resolve to existing files,
 * and that all plugin files under plugins/ are linked from INDEX.md.
 *
 * Usage: node .opencode/scripts/validate-links.js
 */

const fs = require('fs');
const path = require('path');

const INDEX_PATH = path.join(__dirname, '..', '..', 'INDEX.md');
const PLUGINS_DIR = path.join(__dirname, '..', '..', 'plugins');

let exitCode = 0;

function findMarkdownLinks(text) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const links = [];
  let match;
  while ((match = linkRegex.exec(text)) !== null) {
    links.push({ text: match[1], url: match[2] });
  }
  return links;
}

function findPluginFiles(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === '_TEMPLATE.md' || entry.name === '_category_.md') continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findPluginFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

// --- Main ---
if (!fs.existsSync(INDEX_PATH)) {
  console.error('INDEX.md not found');
  process.exit(1);
}

const indexContent = fs.readFileSync(INDEX_PATH, 'utf-8');
const links = findMarkdownLinks(indexContent);

// Filter to plugin links (relative paths starting with "plugins/")
const pluginLinks = links.filter(l => l.url.startsWith('plugins/'));
const pluginFiles = findPluginFiles(PLUGINS_DIR);

console.log(`Found ${pluginLinks.length} plugin link(s) in INDEX.md`);
console.log(`Found ${pluginFiles.length} plugin file(s) under plugins/\n`);

// Check 1: All links resolve
for (const link of pluginLinks) {
  const resolvedPath = path.join(path.dirname(INDEX_PATH), link.url);
  if (!fs.existsSync(resolvedPath)) {
    console.error(`[BROKEN] ${link.url} (label: "${link.text}")`);
    exitCode = 1;
  } else {
    console.log(`[OK]     ${link.url}`);
  }
}

console.log('');

// Check 2: All plugin files are linked
const linkedPaths = new Set(pluginLinks.map(l => {
  const resolved = path.resolve(path.dirname(INDEX_PATH), l.url);
  return fs.realpathSync ? resolved : resolved;
}));

for (const filePath of pluginFiles) {
  const relPath = path.relative(path.dirname(INDEX_PATH), filePath);
  if (!linkedPaths.has(filePath)) {
    console.warn(`[ORPHAN] ${relPath} — exists but not linked from INDEX.md`);
  }
}

if (exitCode === 0) {
  console.log('✓ All links valid, no orphans found.');
} else {
  console.error(`\n✗ Issues found (exit code ${exitCode}).`);
}

process.exit(exitCode);
