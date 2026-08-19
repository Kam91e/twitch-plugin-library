## ADDED Requirements

### Requirement: AGENTS.md defines project identity
The AGENTS.md file SHALL declare this repo as a non-code knowledge library for Twitch plugins.
It SHALL state that only plugins downloadable directly from Twitch are documented.
It SHALL specify that documentation targets both beginner and veteran streamers.

#### Scenario: Agent reads project identity
- **WHEN** an AI agent begins work in this repo
- **THEN** it reads AGENTS.md and understands it is working on a documentation knowledge library, not application code

### Requirement: AGENTS.md documents repository structure
The AGENTS.md SHALL describe the top-level file layout: README.md, INDEX.md, categories.md, plugins/ directory tree, and .opencode/ config.

#### Scenario: Agent navigates the repo
- **WHEN** an agent needs to know where plugin docs live
- **THEN** AGENTS.md provides enough context to locate the correct category folder

### Requirement: AGENTS.md defines plugin documentation standards
The AGENTS.md SHALL specify that each plugin file requires YAML frontmatter (title, category, subcategory, tags, price, url, screenshots) and standard sections (Quick Start, Features, Configuration, Tips, Alternatives). Screenshots MUST be external links only.

#### Scenario: Agent creates a new plugin doc
- **WHEN** an agent writes a new plugin documentation file
- **THEN** it follows the frontmatter and section standards defined in AGENTS.md

### Requirement: AGENTS.md defines subcategory creation rules
The AGENTS.md SHALL state that if a plugin does not fit any existing subcategory, the agent MAY create a new subcategory folder, add it to categories.md, and record it for future reference.

#### Scenario: Agent creates a new subcategory
- **WHEN** an agent encounters a plugin that matches no existing subcategory
- **THEN** it creates a new subcategory folder, adds an entry to categories.md, and includes the new subcategory in agent notes so future agents are aware of it

### Requirement: AGENTS.md defines the agent workflow
The AGENTS.md SHALL document the three-role pipeline: plugin-researcher (gathers raw data), plugin-writer (formats markdown), index-updater (rebuilds INDEX.md).

#### Scenario: Agent follows workflow
- **WHEN** an agent is asked to document a plugin
- **THEN** it follows the researcher → writer → index-updater pipeline, passing data between stages without duplicating work

### Requirement: AGENTS.md specifies language
The AGENTS.md SHALL specify that all documentation MUST be written in English.

#### Scenario: Agent writes documentation
- **WHEN** an agent creates or edits documentation
- **THEN** it writes in English only

### Requirement: AGENTS.md enforces a zero-hallucination policy
The AGENTS.md SHALL state a strict ban on hallucination. If an agent does not know something — a plugin's price, features, configuration steps, or whether a plugin exists at all — it MUST say so explicitly rather than inventing information. Agents MUST not guess, fabricate, or assume undocumented details about any plugin.

#### Scenario: Agent lacks plugin information
- **WHEN** an agent cannot verify a plugin's price, features, or configuration from a reliable source (Twitch page, official documentation)
- **THEN** the agent states "I couldn't verify this" instead of guessing or fabricating

#### Scenario: Agent is unsure about plugin existence
- **WHEN** an agent cannot confirm that a plugin is available on Twitch
- **THEN** the agent reports the uncertainty and does not proceed with creating documentation

### Requirement: AGENTS.md requires source attribution for all plugin data
Every piece of information about a plugin SHALL be traceable to a source (Twitch extension page, official developer docs). Agents MUST note in their research output where each fact came from.

#### Scenario: Agent cites source
- **WHEN** an agent documents a plugin feature
- **THEN** the research notes include the source URL or reference where that feature was described
