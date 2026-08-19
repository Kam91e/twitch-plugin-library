## Why

Streamers looking for Twitch plugins lack a curated, well-organized knowledge base. Twitch's own extension directory is category-driven but has no central navigable index, no cross-plugin comparisons, and no structured documentation — each plugin's page lives in isolation. This repo fills that gap: a community-oriented knowledge library where both new and veteran streamers can browse, compare, and learn how to use Twitch plugins, organized by Twitch's own taxonomy.

## What Changes

- Create `README.md` — project entry point explaining what this repo is
- Create `AGENTS.md` — rules for AI agents working on this repo (project identity, structure, standards, workflow)
- Create `categories.md` — single reference file listing all Twitch extension categories and their subcategories with descriptions
- Create `INDEX.md` — navigable index of all documented plugins (table view + category-grouped view)
- Create `plugins/` directory tree — one folder per Twitch category, with subcategory folders underneath
- Create plugin documentation markdown files under `plugins/<category>/<subcategory>/` with YAML frontmatter and standard sections
- Create `.opencode/tmp/` — scratch space for inter-agent handoff, cleaned after use
- Define agent workflows for token-efficient plugin documentation (researcher → writer → index-updater)
- Add `.gitignore` to keep generated files and tmp clean

## Capabilities

### New Capabilities
- `agent-rules-config`: AGENTS.md — rules, project identity, and documentation standards for AI agents working in this repo
- `plugin-documentation-template`: The standard structure (frontmatter + sections) for every plugin documentation file
- `navigation-index`: INDEX.md — dual-view index (categorical table of contents + flat table) that links to every documented plugin
- `categories-definition`: categories.md — complete list of Twitch's 8 official extension categories, their subcategories, and descriptions
- `agent-workflows`: Researcher → Writer → Index-updater pipeline definition for token-efficient plugin documentation

### Modified Capabilities
*(None — no existing specs to modify)*

## Impact

- New directory structure: `plugins/<category>/<subcategory>/`, `.opencode/tmp/`
- New root files: `README.md`, `AGENTS.md`, `categories.md`, `INDEX.md`
- Existing `categories.md` (draft) will be replaced with full version
- `.gitignore` updated to exclude `.opencode/tmp/`
- No existing code, APIs, or systems affected — greenfield project
