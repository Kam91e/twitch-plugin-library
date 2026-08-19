## ADDED Requirements

### Requirement: Three-role pipeline
The agent workflow SHALL have three distinct roles: plugin-researcher, plugin-writer, and index-updater. Each role SHALL perform a specific subset of work and SHALL NOT duplicate work done by another role.

#### Scenario: Pipeline execution
- **WHEN** a user requests a new plugin be documented
- **THEN** the task follows researcher → writer → index-updater in sequence

### Requirement: plugin-researcher role
The plugin-researcher SHALL: read categories.md for category context, locate the plugin on Twitch, determine its category/subcategory, gather raw data (description, price, features, setup steps, screenshot URLs), and pass raw notes to the writer. The researcher SHALL NOT format markdown or create final documentation files.

#### Scenario: Researcher gathers data
- **WHEN** plugin-researcher is assigned a plugin
- **THEN** it returns structured raw notes with all required data but no formatted markdown documentation

### Requirement: plugin-writer role
The plugin-writer SHALL: read raw notes from researcher, create the plugin documentation file with frontmatter and standard sections at the correct path under `plugins/<category>/<subcategory>/`, create a new subcategory folder and update categories.md if needed.

#### Scenario: Writer creates plugin doc
- **WHEN** plugin-writer receives raw notes
- **THEN** it creates a complete plugin documentation file at the correct path with frontmatter and all required sections

#### Scenario: Writer creates new subcategory
- **WHEN** the plugin matches no existing subcategory
- **THEN** writer creates a new subcategory folder and updates categories.md with the new subcategory entry

### Requirement: index-updater role
The index-updater SHALL: scan frontmatter of all files under `plugins/`, rebuild INDEX.md from scanned data, verify that categories.md entries have corresponding directories, and clean `.opencode/tmp/` if it was used.

#### Scenario: Index rebuilt after plugin added
- **WHEN** a new plugin documentation file is created
- **THEN** index-updater regenerates INDEX.md to reflect the new addition

#### Scenario: Temp cleanup
- **WHEN** index-updater completes its work
- **THEN** it cleans up any files in `.opencode/tmp/`

### Requirement: Pass data via task handoff
Data between roles SHALL be passed via task output and input, not through shared mutable state. The `.opencode/tmp/` directory MAY be used for larger data but MUST be cleaned after use.

#### Scenario: Task handoff
- **WHEN** researcher completes its work
- **THEN** raw notes are passed to writer via task output or `.opencode/tmp/` file

### Requirement: Category assignment is collaborative
Category assignment MAY be determined by either the user (explicitly stating the category) or the plugin-researcher (inferring from the plugin). The researcher SHALL state its category recommendation and reasoning.

#### Scenario: User specifies category
- **WHEN** a user says "Document plugin X, it's in Streamer Tools"
- **THEN** the researcher uses that category without re-evaluating

#### Scenario: Researcher infers category
- **WHEN** a user says "Document plugin X" without specifying category
- **THEN** the researcher determines the best category/subcategory based on reading categories.md and the plugin's Twitch page
