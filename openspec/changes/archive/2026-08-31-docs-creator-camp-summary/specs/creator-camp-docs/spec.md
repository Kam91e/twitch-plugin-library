## ADDED Requirements

### Requirement: Creator Camp docs surface exists at docs/creator-camp
The system SHALL provide a documentation surface at `docs/creator-camp/` (primary; `knowledge/creator-camp/` accepted as alias) via agent-browser Chrome extraction, covering all text-based Creator Camp lessons while skipping Live Learning video sessions.

#### Scenario: Docs directory exists
- **WHEN** the repository is inspected after the change
- **THEN** a directory exists at `docs/creator-camp/` (or `knowledge/creator-camp/` if docs/ is reserved) containing markdown files

#### Scenario: Live Learning excluded
- **WHEN** the docs surface is reviewed
- **THEN** no file attempts to summarize `https://www.twitch.tv/creatorcamp/en/live-learning/` sessions; Live Learning is explicitly excluded per spec

### Requirement: README index with combined Option D table
The `docs/creator-camp/README.md` SHALL serve as the index and contain a combined sortable table covering all 9 paths (Option D): Path | Chapters | Total Time | Link, with source links to each path's canonical `creatorcamp` URL.

#### Scenario: Combined table present
- **WHEN** a reader opens `docs/creator-camp/README.md`
- **THEN** they find a single table listing 9 paths (7 Level 1 + 2 Level 2) with chapter count, total minutes, and link per path

#### Scenario: README references 9 path files
- **WHEN** the README is inspected
- **THEN** it links to 9 sibling files (e.g., `level1/get-to-know-twitch.md` ... `level2/better-broadcasts.md`) that actually exist

### Requirement: Per-path file structure mixes A+B+D
Each of the 9 path files SHALL follow the mixed A+B+D structure: path synthesis (B) + per-chapter table row (D) + per-chapter TL;DR section (A), written in English.

#### Scenario: Path synthesis present
- **WHEN** a path file (e.g., `level1/going-live.md`) is opened
- **THEN** the top contains a 3-5 sentence path-level synthesis (Option B) summarizing the purpose of that path

#### Scenario: Per-chapter TL;DR present
- **WHEN** a path file is read through its Details section
- **THEN** each chapter within the path (e.g., `Stream on PC`) has a 2-3 sentence TL;DR paraphrase (Option A) in the author's own words, not copy-paste

#### Scenario: Language is English
- **WHEN** any docs/creator-camp file is inspected
- **THEN** its body text is in English, matching the source and repo policy

### Requirement: All 52 chapters enumerated with traceability
The docs surface SHALL enumerate all 52 chapters discovered via Chrome snapshots (43 Level 1 + 9 Level 2) — each with its canonical URL, declared time, and TL;DR — and provide `last-reviewed` per file.

#### Scenario: Chapter coverage complete
- **WHEN** chapter URLs from the Chrome enumeration (@e36..@e110) are cross-checked against the docs
- **THEN** all 52 URLs appear as source links across the 9 files (3+8+4+7+9+5+7 + 5+4)

#### Scenario: Time and source link per chapter
- **WHEN** a chapter row is inspected in any path table
- **THEN** it shows the declared minutes (e.g., `2m`) wrapped as link to `https://www.twitch.tv/creatorcamp/en/.../<chapter>/` and the TL;DR cites `Source: https://www.twitch.tv/creatorcamp/...`

#### Scenario: Last-reviewed present
- **WHEN** any path file frontmatter or footer is checked
- **THEN** it contains `last-reviewed: YYYY-MM-DD` set to extraction date

### Requirement: Extraction via Chrome with video handling and zero-hallucination
The implementation SHALL extract text via `agent-browser` Chrome (open → snapshot -i -u → get text on main article) with fallback `webfetch extract_main`; single embedded videos that duplicate textual information SHALL be skipped and marked, and every factual TL;DR SHALL trace to its source URL or be marked "could not be verified".

#### Scenario: Chrome extraction trace
- **WHEN** a TL;DR is verified
- **THEN** it traces to text obtained via Chrome `get text` on the chapter's main article node; if Chrome failed, fallback source is noted

#### Scenario: Video skipping rule
- **WHEN** a chapter contains a single embedded video that repeats the text
- **THEN** the TL;DR notes "Video skipped — duplicates text" and does not invent video-only details

#### Scenario: Unverified marker
- **WHEN** text extraction fails for a chapter
- **THEN** the entry is marked "could not be verified on creatorcamp directly" per `AGENTS.md` rather than fabricating

### Requirement: No local image vendoring and no unrelated surfaces changed
All images SHALL use external URLs only (or be omitted), and the change SHALL NOT modify `plugins/`, `tools/`, `INDEX.md`, `categories.md`, or existing `openspec/specs/` outside the new `creator-camp-docs` capability.

#### Scenario: No local images
- **WHEN** docs/creator-camp files are scanned for `![...](`
- **THEN** no image path points inside the repository

#### Scenario: Unrelated surfaces untouched
- **WHEN** git diff is inspected
- **THEN** no changes appear in `plugins/`, `tools/`, `INDEX.md`, or `categories.md`
