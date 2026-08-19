# streamer-bot-triggers

## ADDED Requirements

### Requirement: Complete trigger coverage
The triggers reference SHALL document every official Streamer.bot trigger group across all 10 top-level categories (twitch, elgato, integrations, core, youtube, kick, obs-studio, meld-studio, streamlabs-desktop, custom), mirroring the official docs hierarchy at `https://docs.streamer.bot/api/triggers/`.

#### Scenario: Every official group present
- **WHEN** a reader opens `tools/automation/streamer-bot/triggers/`
- **THEN** each of the 10 top-level categories is represented by a folder or file matching the official docs

#### Scenario: No invented entries
- **WHEN** an entry is added to the reference
- **THEN** it MUST be traceable to an official Streamer.bot docs page (source URL recorded per file)

### Requirement: Per-trigger reference format
Each trigger entry SHALL be documented with the same structure: name as a heading, UI location, description, parameters, and variables it exposes.

#### Scenario: Entry renders all required fields
- **WHEN** a reader views any trigger entry, e.g. Twitch Chat Message
- **THEN** the entry shows a UI location, a plain-language description of when it fires, the list of parameters, and any output variables

#### Scenario: Firing conditions described
- **WHEN** a trigger entry has no parameters
- **THEN** the parameters field still appears and explicitly states "None", while the description explains the firing condition

### Requirement: Hierarchy mirrors official docs
Trigger files SHALL be organized to mirror the official docs hierarchy (category → sub-group → entry). Deep groups SHALL be nested in matching subfolders.

#### Scenario: Nested group resolved
- **WHEN** a reader looks up a trigger in a nested group (e.g. twitch → chat → mode)
- **THEN** they find it under `triggers/twitch/chat/mode.md` (or the index route documented for it), matching the official URL path

#### Scenario: Category folder naming
- **WHEN** a category contains multiple sub-groups
- **THEN** the category is a folder whose name matches the official docs top-level slug

### Requirement: Micro-group merging
Trigger sub-groups containing 3 or fewer entries SHALL NOT receive a dedicated file; they SHALL be documented inline as H2 sections in the category's index file.

#### Scenario: Micro-group inline in index
- **WHEN** a category has a trigger sub-group with 3 or fewer entries
- **THEN** those entries appear as H2 sections inside the category index file, and the index still links to all dedicated group files

#### Scenario: Larger groups keep files
- **WHEN** a trigger sub-group has 4 or more entries
- **THEN** it gets its own markdown file under the category folder

### Requirement: Index navigation
`triggers/index.md` SHALL list every top-level category with links to its folder or file, so the whole reference is reachable in two clicks from the folder root.

#### Scenario: Index links resolve
- **WHEN** a reader follows any link in `triggers/index.md`
- **THEN** the target file exists and is a triggers reference file

#### Scenario: Category index completeness
- **WHEN** a category has a dedicated folder
- **THEN** that folder contains an `index.md` listing its sub-groups and inline micro-group sections
