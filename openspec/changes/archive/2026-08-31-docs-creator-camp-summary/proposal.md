## Why

Creator Camp at https://www.twitch.tv/creatorcamp/en/ contains ~52 text-based lessons (Level 1: 43 chapters / 128 min, Level 2: 9 chapters / 20 min) that cover the entire Twitch creator journey, yet the knowledge library has no consolidated reference for this official material. Streamers must browse the external site without a quick TL;DR or structured index. A curated summary in the repo will give beginners a 2-minute per-chapter overview and veterans a scannable path synthesis, while preserving traceability to the original URLs.

## What Changes

- Create new documentation surface `docs/creator-camp/` (preferred) or `knowledge/creator-camp/` — 9 markdown files (7 for Level 1 paths + 2 for Level 2), plus `README.md` index. Alternative `knowledge/` accepted if `docs/` conflicts with existing conventions.
- Each path file mixes **Option B** (path-level synthesis, 3-5 sentences), **Option A** (per-chapter TL;DR, 2-3 sentences extracted from the chapter text, videos ignored if they duplicate text), and **Option D** (sortable table per path: Chapter | Time | Link | Tags + combined index table in README).
- **Live Learning skipped** — contains video-only sessions, excluded per user request.
- All 52 chapter URLs enumerated via Chrome exploration (agent-browser snapshots @e36..@e110) are covered; text is extracted via Chrome (`agent-browser get text`) with fallback `webfetch`, single embedded videos ignored when they repeat textual information.
- All files written in **English**, include `last-reviewed` and source link per chapter, no local image vendoring (external URLs only if used), language and zero-hallucination rules from `AGENTS.md` apply.
- No changes to `plugins/`, `tools/`, `INDEX.md`, `categories.md`, or existing `openspec/specs/`.

## Capabilities

### New Capabilities
- `creator-camp-docs`: Consolidated, source-traced summaries of all Creator Camp lessons (Level 1 + Level 2, live-learning excluded) as `docs/creator-camp/` documentation — path synthesis + per-chapter TL;DR + tables.

### Modified Capabilities
<!-- No existing spec requirements are changed. This is a new documentation surface; existing specs (streamlabs-*, betterttv-tool, seven-tv-tool) remain untouched. -->

## Impact

- **New files:** `docs/creator-camp/README.md` (index + combined Option D table) + 9 path files (`level1/*.md`, `level2/*.md`) — ~52 TL;DRs total, estimated 9× 120-200 lines each.
- **New directory:** `docs/creator-camp/` (or `knowledge/creator-camp/` if docs/ is reserved) — top-level alongside `plugins/` and `tools/`, referenced from `README.md` navigation if desired.
- **No breaking changes:** No plugin/tool index regeneration; no category taxonomy change.
- **Dependencies:** Chrome-based extraction from https://www.twitch.tv/creatorcamp/en/ (verified 52 URLs), external link stability, English source fidelity.
- **Systems affected:** Documentation navigation only; no runtime code, no scripts.
