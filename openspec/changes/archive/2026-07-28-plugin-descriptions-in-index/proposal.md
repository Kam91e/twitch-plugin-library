## Why

The current INDEX.md lists plugins by name, subcategory, and price — but gives readers no sense of what each plugin actually does. A beginner streamer browsing the index has to click through to every plugin file to find out. Adding one-sentence descriptions to the "By Category" section makes the index useful at a glance, turning it from a navigation hub into a browsable directory.

## What Changes

- **INDEX.md "By Category" bullet list**: Each plugin entry gets its tagline appended as an indented continuation line, sourced from the `> ` blockquote (tagline) in each plugin's `.md` file.
- **rebuild-index.js**: Updated to extract taglines from plugin files and include them in the bullet list output.
- **INDEX.md "All Plugins (Table)"**: Unchanged — stays compact as a quick-reference table.
- **Summary messages**: When reporting completed work, include short descriptions alongside plugin names.

## Capabilities

### New Capabilities
- `index-descriptions`: Display one-sentence descriptions of each plugin in the INDEX.md "By Category" section, sourced automatically from taglines in plugin documentation files.

### Modified Capabilities

None — no existing specs change.

## Impact

- **`INDEX.md`** — bullet list format changes; all links, categories, and table stay the same.
- **`.opencode/scripts/rebuild-index.js`** — needs a new function to parse taglines from plugin `.md` files.
- **24 existing plugin `.md` files** — no changes needed (taglines already exist in every file).
- **Orchestrator behavior** — summary messages should include descriptions from INDEX.md or from plugin taglines.
