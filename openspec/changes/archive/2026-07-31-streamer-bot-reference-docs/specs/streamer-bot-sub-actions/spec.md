# streamer-bot-sub-actions

## ADDED Requirements

### Requirement: Complete sub-action coverage
The sub-actions reference SHALL document every official Streamer.bot sub-action group across all 14 top-level categories (core, twitch, elgato, obs-studio, integrations, streamlabs-desktop, kick, meld-studio, youtube, speakerbot, streamfog, settings, streamerbot, polypop), mirroring the official docs hierarchy at `https://docs.streamer.bot/api/sub-actions/`.

#### Scenario: Every official group present
- **WHEN** a reader opens `tools/automation/streamer-bot/sub-actions/`
- **THEN** each of the 14 top-level categories is represented by a folder or file matching the official docs

#### Scenario: No invented entries
- **WHEN** an entry is added to the reference
- **THEN** it MUST be traceable to an official Streamer.bot docs page (source URL recorded per file)

### Requirement: Per-entry reference format
Each sub-action entry SHALL be documented with the same structure: name as a heading, UI location, description, parameters, and variables it exposes.

#### Scenario: Entry renders all required fields
- **WHEN** a reader views any sub-action entry, e.g. Send Message
- **THEN** the entry shows a UI location (e.g. `Twitch > Chat > Send Message`), a plain-language description, the list of parameters, and any output variables

#### Scenario: Location is always present
- **WHEN** a sub-action has no output variables
- **THEN** the variables field still appears and explicitly states "None"

### Requirement: Hierarchy mirrors official docs
Sub-action files SHALL be organized to mirror the official docs hierarchy (category → sub-group → entry). Deep groups (e.g. twitch → moderation → chat-modes) SHALL be nested in matching subfolders.

#### Scenario: Nested group resolved
- **WHEN** a reader looks up a chat-modes sub-action
- **THEN** they find it under `sub-actions/twitch/moderation/chat-modes.md` (or the index route documented for it), matching the official URL path

#### Scenario: Category folder naming
- **WHEN** a category contains multiple sub-groups
- **THEN** the category is a folder whose name matches the official docs top-level slug

### Requirement: Micro-group merging
Sub-groups containing 3 or fewer entries SHALL NOT receive a dedicated file; they SHALL be documented inline as H2 sections in the category's index file.

#### Scenario: Micro-group inline in index
- **WHEN** a category has a sub-group with 3 or fewer sub-actions
- **THEN** those entries appear as H2 sections inside the category index file, and the index still links to all dedicated group files

#### Scenario: Larger groups keep files
- **WHEN** a sub-group has 4 or more sub-actions
- **THEN** it gets its own markdown file under the category folder

### Requirement: Index navigation
`sub-actions/index.md` SHALL list every top-level category with links to its folder or file, so the whole reference is reachable in two clicks from the folder root.

#### Scenario: Index links resolve
- **WHEN** a reader follows any link in `sub-actions/index.md`
- **THEN** the target file exists and is a sub-actions reference file

#### Scenario: Category index completeness
- **WHEN** a category has a dedicated folder
- **THEN** that folder contains an `index.md` listing its sub-groups and inline micro-group sections
