## ADDED Requirements

### Requirement: INDEX.md displays plugin descriptions in category bullet lists

When the "By Category" section of INDEX.md is generated, each plugin entry SHALL display a short one-sentence description alongside the plugin name, subcategory, and price. The description SHALL be sourced from the tagline (first `> ` blockquote line after the H1 heading) in the plugin's `.md` file.

#### Scenario: Plugin with tagline shows description
- **WHEN** `rebuild-index.js` generates INDEX.md
- **THEN** each plugin entry in the "By Category" bullet list SHALL include the tagline as an indented continuation line

#### Scenario: Plugin without tagline shows no description
- **WHEN** a plugin `.md` file has no `> ` blockquote tagline
- **THEN** its INDEX.md bullet list entry SHALL remain in the current format without a description line

#### Scenario: Tagline with continuation lines uses only the first line
- **WHEN** a tagline spans multiple lines (first line prefixed with `> `, subsequent lines without `>`)
- **THEN** only the first `> ` line SHALL be used as the description in INDEX.md

### Requirement: rebuild-index.js extracts taglines from plugin files

The `rebuild-index.js` script SHALL parse each plugin `.md` file to extract the tagline by stripping the YAML frontmatter and finding the first `> ` blockquote line in the remaining content.

#### Scenario: Extraction from standard plugin file
- **WHEN** processing a file with `---YAML---\n# Title\n\n> Description text\n## Quick Start`
- **THEN** the extracted description SHALL be "Description text"

#### Scenario: Extraction from file with no tagline
- **WHEN** processing a file that has no `> ` blockquote after the H1
- **THEN** the script SHALL return null for the description and the bullet list entry SHALL not include a description line

### Requirement: INDEX.md "All Plugins (Table)" section is unchanged

The table view SHALL retain its current format (Plugin, Category, Subcategory, Price, Audience columns) without a description column.

#### Scenario: Table format preserved after regeneration
- **WHEN** INDEX.md is regenerated with the updated script
- **THEN** the "All Plugins (Table)" section SHALL contain the same columns as before
- **THEN** all existing plugin rows SHALL remain in the table

### Requirement: Validation passes after regeneration

After INDEX.md is regenerated, all plugin links SHALL resolve to existing files, and all plugin files SHALL be linked from INDEX.md.

#### Scenario: No broken links after update
- **WHEN** `validate-links.js` runs after regeneration
- **THEN** all links in INDEX.md SHALL resolve to existing files
- **THEN** no plugin files SHALL be orphaned (unlinked from INDEX.md)
