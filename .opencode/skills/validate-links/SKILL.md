---
name: validate-links
description: Check INDEX.md links resolve to existing plugin files.
---

# Validate Links

Run this skill periodically or after adding plugins to verify that all links in INDEX.md point to actual files.

## What It Checks

1. Reads INDEX.md and extracts all markdown links to plugin files
2. Verifies each relative path resolves to an existing file under `plugins/`
3. Reports broken links and orphaned files (plugin files not linked from INDEX.md)

## Usage

```bash
node .opencode/scripts/rebuild-index.js   # rebuild INDEX.md first
node .opencode/scripts/validate-links.js  # then validate
```
