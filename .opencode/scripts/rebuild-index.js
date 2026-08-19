#!/usr/bin/env node
/**
 * INDEX.md Rebuilder
 *
 * Scans all .md files under plugins/ for YAML frontmatter,
 * groups them by category, and regenerates INDEX.md.
 *
 * Usage: node .opencode/scripts/rebuild-index.js
 */

const fs = require('fs');
const path = require('path');

const PLUGINS_DIR = path.join(__dirname, '..', '..', 'plugins');
const INDEX_PATH = path.join(__dirname, '..', '..', 'INDEX.md');

// Category descriptions (single source: categories.md)
const CATEGORY_META = {
  'extensions-for-games': {
    name: 'Extensions for Games',
    desc: 'Extensions built to work with specific games.',
    icon: '🎮',
  },
  'schedule-and-countdowns': {
    name: 'Schedule & Countdowns',
    desc: 'Share your streaming schedule and encourage your viewers to keep coming back.',
    icon: '📅',
  },
  'loyalty-and-recognition': {
    name: 'Loyalty and Recognition',
    desc: 'Reward viewers for showing their support with leaderboards and other tools.',
    icon: '🏆',
  },
  'streamer-tools': {
    name: 'Streamer Tools',
    desc: 'Tools that help you improve your stream so that you can focus on making great content.',
    icon: '🛠️',
  },
  'viewer-engagement': {
    name: 'Viewer Engagement',
    desc: 'Fun ways to allow your audience to engage with you.',
    icon: '🎯',
  },
  'music': {
    name: 'Music',
    desc: "Show your viewers what song you're playing or let them suggest what to play next.",
    icon: '🎵',
  },
  'polling-and-voting': {
    name: 'Polling & Voting',
    desc: 'Get feedback from your audience.',
    icon: '📊',
  },
  'games-in-extensions': {
    name: 'Games in Extensions',
    desc: 'Extensions that are games themselves, played on Twitch.',
    icon: '🕹️',
  },
};

/**
 * Extract the tagline (first > blockquote line) from a plugin .md file.
 * Strips YAML frontmatter first, then finds the first line starting with "> ".
 * Returns the text after "> " or null if no tagline is found.
 */
function extractTagline(content) {
  // Remove YAML frontmatter (between opening and closing ---)
  const body = content.replace(/^---[\s\S]*?---\n*/, '');
  // Find first blockquote line
  const match = body.match(/^> (.+)$/m);
  return match ? match[1].trim() : null;
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) return null;

  const yaml = match[1];
  const data = {};
  const lines = yaml.split('\n');
  let currentKey = null;
  let currentList = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    const listItemMatch = trimmed.match(/^\s*-\s+(.+)$/);
    if (listItemMatch && currentKey) {
      currentList.push(listItemMatch[1].replace(/"/g, ''));
      continue;
    }

    if (currentKey && currentList.length > 0) {
      data[currentKey] = currentList;
      currentList = [];
    }

    const keyMatch = trimmed.match(/^(\w+):\s*$/);
    if (keyMatch) {
      // Key with no value (will be followed by a list of items)
      if (currentKey && currentList.length > 0) {
        data[currentKey] = currentList;
        currentList = [];
      }
      currentKey = keyMatch[1];
      data[currentKey] = [];  // Initialize as empty array for list items
      continue;
    }

    const keyValueMatch = trimmed.match(/^(\w+):\s*(?:"(.+?)"|(.+))$/);
    if (keyValueMatch) {
      // Flush any pending list before switching to a key-value
      if (currentKey && currentList.length > 0) {
        data[currentKey] = currentList;
        currentList = [];
      }
      currentKey = keyValueMatch[1];
      const value = keyValueMatch[2] || keyValueMatch[3];
      if (currentKey === 'screenshots' && value === '') {
        data[currentKey] = [];
      } else {
        data[currentKey] = value;
      }
      currentList = [];
      continue;
    }
  }

  // Capture last list if any
  if (currentKey && currentList.length > 0) {
    data[currentKey] = currentList;
  }

  return data;
}

function collectPlugins(dir) {
  const plugins = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name === '_TEMPLATE.md' || entry.name === '_category_.md') continue;

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      plugins.push(...collectPlugins(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      const fm = parseFrontmatter(content);
      if (fm) {
        // Determine category from path (relative to plugins/)
        const relPath = path.relative(PLUGINS_DIR, fullPath);
        const pathParts = relPath.split(path.sep);
        const categoryDir = pathParts[0];
        const subcategoryDir = pathParts.length > 1 ? pathParts[1] : '';
        const relativeLink = 'plugins/' + relPath;

        plugins.push({
          title: fm.title || entry.name.replace('.md', ''),
          category: fm.category || categoryDir,
          categoryDir,
          subcategory: fm.subcategory || subcategoryDir,
          price: fm.price || '—',
          audience: Array.isArray(fm.audience) ? fm.audience.join(', ') : (fm.audience || '—'),
          tags: Array.isArray(fm.tags) ? fm.tags : [],
          link: relativeLink,
          description: extractTagline(content),
        });
      }
    }
  }

  return plugins;
}

function generateIndex(plugins) {
  const lines = [];
  lines.push('# Plugin Index');
  lines.push('');
  lines.push('This index lists all documented Twitch plugins. Browse by category or use the table below.');
  lines.push('');
  lines.push('---');
  lines.push('');

  // Group plugins by category
  const byCategory = {};
  for (const p of plugins) {
    const cat = p.categoryDir;
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push(p);
  }

  // Category-grouped view
  lines.push('## By Category');
  lines.push('');

  const categoryOrder = [
    'extensions-for-games',
    'schedule-and-countdowns',
    'loyalty-and-recognition',
    'streamer-tools',
    'viewer-engagement',
    'music',
    'polling-and-voting',
    'games-in-extensions',
  ];

  for (const catKey of categoryOrder) {
    const meta = CATEGORY_META[catKey];
    if (!meta) continue;

    lines.push(`### ${meta.icon} ${meta.name}`);
    lines.push(meta.desc);
    lines.push('');

    const catPlugins = (byCategory[catKey] || []).sort((a, b) => a.title.localeCompare(b.title));
    if (catPlugins.length === 0) {
      lines.push('*No plugins documented yet.*');
    } else {
      for (const p of catPlugins) {
        const sub = p.subcategory ? ` (${p.subcategory})` : '';
        const entry = `- **[${p.title}](${p.link})**${sub} — ${p.price}`;
        if (p.description) {
          lines.push(entry, `  ${p.description}`);
        } else {
          lines.push(entry);
        }
      }
    }
    lines.push('');
  }

  // Flat table
  lines.push('---');
  lines.push('');
  lines.push('## All Plugins (Table)');
  lines.push('');
  lines.push('| Plugin | Category | Subcategory | Price | Audience |');
  lines.push('|--------|----------|-------------|-------|----------|');

  const allSorted = [...plugins].sort((a, b) => {
    const catCmp = a.categoryDir.localeCompare(b.categoryDir);
    return catCmp !== 0 ? catCmp : a.title.localeCompare(b.title);
  });
  if (allSorted.length === 0) {
    lines.push('| *(none yet)* | — | — | — | — |');
  } else {
    for (const p of allSorted) {
      const catName = CATEGORY_META[p.categoryDir]?.name || p.categoryDir;
      lines.push(`| [${p.title}](${p.link}) | ${catName} | ${p.subcategory} | ${p.price} | ${p.audience} |`);
    }
  }

  lines.push('');
  lines.push('---');
  lines.push('> This index is auto-generated. To rebuild it: `node .opencode/scripts/rebuild-index.js`');
  lines.push('');

  return lines.join('\n');
}

// --- Main ---
if (!fs.existsSync(PLUGINS_DIR)) {
  console.error('Plugins directory not found:', PLUGINS_DIR);
  process.exit(1);
}

const plugins = collectPlugins(PLUGINS_DIR);
const indexContent = generateIndex(plugins);
fs.writeFileSync(INDEX_PATH, indexContent, 'utf-8');
console.log(`INDEX.md regenerated — ${plugins.length} plugin(s) found.`);
