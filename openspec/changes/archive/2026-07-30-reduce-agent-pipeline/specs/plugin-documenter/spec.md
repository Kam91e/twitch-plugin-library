## ADDED Requirements

### Requirement: Plugin research and documentation in one agent

The system SHALL use a single agent `plugin-documenter` to research a Twitch plugin and create its documentation file, replacing the previous split of `plugin-researcher` + `plugin-writer`.

The agent SHALL read `categories.md` (or receive category context from the orchestrator), research the plugin on Twitch, determine category/subcategory assignment, and directly create the plugin `.md` file.

#### Scenario: Successful documentation flow
- **WHEN** a user requests documentation for a new plugin
- **THEN** `plugin-documenter` researches the plugin, creates the file at `plugins/<category>/<subcategory>/<name>.md`, and returns the file path

#### Scenario: New subcategory needed
- **WHEN** a plugin fits no existing subcategory
- **THEN** `plugin-documenter` creates the new subcategory folder and adds the entry to `categories.md`

### Requirement: Index update via script, not agent

The system SHALL NOT use a subagent for index regeneration. Instead, the orchestrator SHALL directly invoke `node .opencode/scripts/rebuild-index.js` followed by `node .opencode/scripts/validate-links.js` after plugin documentation is created.

#### Scenario: Index update after documentation
- **WHEN** a plugin file is created
- **THEN** the orchestrator runs `rebuild-index.js` and `validate-links.js` directly

### Requirement: Removal of obsolete agent definitions

The agent definition files `plugin-researcher.md`, `plugin-writer.md`, and `index-updater.md` SHALL be removed from `.opencode/agents/` after the migration.

#### Scenario: Cleanup
- **WHEN** `plugin-documenter` is operational
- **THEN** the three old agent files are deleted

### Requirement: AGENTS.md reflects new pipeline

The `AGENTS.md` file SHALL document the updated pipeline: `plugin-documenter` as the single documentation agent, followed by direct script execution from the orchestrator.

#### Scenario: Pipeline documentation
- **WHEN** reading AGENTS.md
- **THEN** the Agent Workflow and Role Boundaries sections show the 1-agent + scripts pipeline
