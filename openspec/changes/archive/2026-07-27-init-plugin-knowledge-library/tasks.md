## 1. Foundation Files

- [x] 1.1 Create `AGENTS.md` with project identity, repo structure, documentation standards, language policy, zero-hallucination policy, source-attribution rules, subcategory creation rules, and the three-role agent workflow (researcher → writer → index-updater)
- [x] 1.2 Create `README.md` as the project entry point — explain what the repo is, how to navigate it, and how to contribute
- [x] 1.3 Update `.gitignore` to exclude `.opencode/tmp/` and any generated artifacts

## 2. Category Definitions

- [x] 2.1 Replace the draft `categories.md` with the full version — list all 8 Twitch categories with their official descriptions, all subcategories with descriptions, and subcategory-to-directory-path mapping
- [x] 2.2 Validate that `categories.md` content matches Twitch's official category descriptions from the reference file

## 3. Plugin Directory Structure

- [x] 3.1 Create the `plugins/` directory with all 8 Twitch category folders: `extensions-for-games/`, `schedule-and-countdowns/`, `loyalty-and-recognition/`, `streamer-tools/`, `viewer-engagement/`, `music/`, `polling-and-voting/`, `games-in-extensions/`
- [x] 3.2 Create subcategory folder stubs under each category folder as defined in design.md (e.g., `streamer-tools/overlays/`, `streamer-tools/alerts/`, `loyalty-and-recognition/channel-points/`, etc.)
- [x] 3.3 Add a `.gitkeep` to each empty subcategory folder so the structure is preserved in version control

## 4. Plugin Documentation Template

- [x] 4.1 Create a plugin template reference file — either at `plugins/_TEMPLATE.md` or as a section in `AGENTS.md` — showing the complete frontmatter schema and section structure
- [x] 4.2 Ensure the template includes: YAML frontmatter (title, category, subcategory, tags, audience, price, url, screenshots, last-reviewed), H1 heading, tagline blockquote, and all 5 sections in order (Quick Start, Features, Configuration, Tips & Tricks, Alternatives)

## 5. Navigation Index

- [x] 5.1 Create `INDEX.md` with category-grouped navigation — each category as a heading with description, plugins listed with links and one-sentence descriptions
- [x] 5.2 Add a flat table view in `INDEX.md` with columns: Plugin, Category, Subcategory, Price, Tags
- [x] 5.3 Create a script or agent skill that scans frontmatter from `plugins/` and regenerates INDEX.md (so it can be re-run as plugins are added)

## 6. Agent Configuration

- [x] 6.1 Clean up existing draft `categories.md` (already committed earlier) — ensure it is replaced by the full version from task 2.1
- [x] 6.2 Create `.opencode/agents/` directory with subagent definitions for the three-role pipeline:
  - `plugin-researcher` (explorer + web research)
  - `plugin-writer` (content creation)
  - `index-updater` (scanning + regeneration)
- [x] 6.3 Create `.opencode/skills/validate-links.md` — a skill that checks all INDEX.md links resolve to existing plugin files

## 7. Temp Workspace

- [x] 7.1 Create `.opencode/tmp/` directory for inter-agent scratch space
- [x] 7.2 Add cleanup step to the index-updater workflow that removes all files from `.opencode/tmp/` after each run

## 8. Verification

- [x] 8.1 Verify that README.md, AGENTS.md, categories.md, and INDEX.md all exist at the repo root
- [x] 8.2 Verify that all 8 category directories exist under `plugins/` with the correct kebab-case names
- [x] 8.3 Verify that every subcategory listed in categories.md has a corresponding directory
- [x] 8.4 Verify that INDEX.md links resolve to existing paths (or stub paths via `.gitkeep`)
- [x] 8.5 Verify `.gitignore` excludes `.opencode/tmp/`
