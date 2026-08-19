## 1. Script update — tagline extraction

- [x] 1.1 Add `extractTagline(content)` function to `rebuild-index.js` that strips YAML frontmatter and returns the first `> ` blockquote line
- [x] 1.2 Modify `collectPlugins()` to call `extractTagline()` for each plugin file and store the result in the plugin object
- [x] 1.3 Modify the bullet list output in `generateIndex()` to append the tagline as an indented continuation line when present
- [x] 1.4 Handle edge cases: no tagline, multi-line tagline (use only first `>` line), empty content

## 2. Regenerate INDEX.md and validate

- [x] 2.1 Run `node .opencode/scripts/rebuild-index.js` to regenerate INDEX.md with descriptions
- [x] 2.2 Run `node .opencode/scripts/validate-links.js` to confirm all links still resolve
- [x] 2.3 Visually review the regenerated INDEX.md for correct formatting of description lines in bullet lists
