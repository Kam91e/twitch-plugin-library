# streamer-bot-reference-docs — Design

## Context

`tools/automation/streamer-bot/` currently holds 4 conceptual files: `overview.md`, `actions-system.md`, `commands-and-timers.md`, `integrations.md`. The actual building blocks of Streamer.bot — 350+ sub-actions across 14 top-level categories and 413+ triggers across 10 — are only documented on the official site (`https://docs.streamer.bot/`, formerly wiki.streamer.bot). The official docs expose a machine-readable index (`/llms.txt`, full: `/llms-full.txt`) whose paths map 1:1 to raw markdown pages under `/raw/api/sub-actions/...` and `/raw/api/triggers/...`. That index was already extracted to a working file and is the source of truth for the full group map.

Constraints: zero-hallucination policy (every fact traceable to a source URL), all docs in English, screenshots external-only (so none added here), frontmatter per `tools/_TEMPLATE.md`.

## Goals / Non-Goals

**Goals:**
- Full, navigable, offline reference for all sub-actions and triggers, organized exactly like the official docs.
- Every entry: UI location, description, parameters, variables.
- Index files that make the whole reference reachable in ≤2 clicks.
- `variables.md` for system + user variables.
- Refactor `actions-system.md` to a conceptual intro linking into the new reference.

**Non-Goals:**
- Rewriting the official docs in prose — the reference is a structured catalog, not a tutorial.
- Screenshots or media (blocked by external-URLs-only rule).
- Changing how Streamer.bot works — documentation only.
- Documenting every trigger's full variable table exhaustively where the official page is the canonical source (entries link out; summaries suffice).

## Decisions

### D1: Folder/file structure mirrors official docs, micro-groups merged
One folder per top-level category; one file per official sub-group with ≥4 entries; groups with ≤3 entries become H2 sections in the category `index.md` (user-approved merge rule). Deep nesting (e.g. `twitch/moderation/chat-modes`) is reproduced with subfolders.
- *Alternative considered*: one file per entry (~763 files) — rejected: unmaintainable, over-fragmenting the vault.
- *Alternative considered*: flat files per category (~24 files) — rejected: user explicitly chose full hierarchy.

### D2: Standard entry format
```
### <Action/Trigger Name>
**Location:** `Category > Group > Name`
**Description:** plain-language summary (what it does / when it fires)
**Parameters:** comma-separated list, or "None"
**Variables:** comma-separated output variables, or "None"
```
Derived from the user's approved example; satisfies "description + UI location" requirement for every entry.

### D3: Source-of-truth pipeline (anti-hallucination)
Every file's frontmatter carries `source: <official docs URL>` (raw markdown path) and `last-reviewed: <date>`. Implementation fetches each official page (via `/raw/api/...md`) and converts the real content — never memory. The extracted group map (llms.txt index) already pins the exact set of files, so coverage is provable against the official index.
- *Alternative*: write from LLM knowledge — rejected outright by zero-hallucination policy.

### D4: Index structure
- `sub-actions/index.md` and `triggers/index.md`: top-level category list with links + micro-group H2 sections that are shared at root level (categories with no folder, e.g. single-file categories).
- Category `index.md` per folder: lists group files + inline micro-groups (H2).
- Every index is a real navigation hub, and doubles as the merge target for micro-groups.

### D5: actions-system.md refactor
Keep `actions-system.md` as the conceptual entry (what an Action is, Action Queue, folders, conditions) with a "Browse the reference" section linking to `sub-actions/` and `triggers/`. Detailed per-action content that already exists there migrates into the reference files; nothing is deleted, only relocated.
- *Alternative*: delete the file — rejected; it carries conceptual value with no home elsewhere.

### D6: variables.md
New file: system variables (with `%...%` syntax, context scope), user variables (creation, naming, persistence), and cross-links from sub-action entries that expose variables. No duplication — entries link here.

### D7: Execution lanes during implementation
Categories are independent lanes. A writer subagent per category folder (sub-actions: 14 lanes, triggers: 10 lanes) fetches raw docs and produces the files; each lane is verified against its source index before the next gate. No two lanes write the same file. Index files and refactor are a final sequential pass.

## Risks / Trade-offs

- **Hallucination / stale facts** → every entry pulled from `/raw/...` pages fetched live; source URL + last-reviewed in frontmatter; zero-invention rule enforced in task specs.
- **Scale (763 entries)** → parallel lanes per category; each lane bounded to one folder; progress tracked per folder in tasks.md.
- **Official docs URL drift** → pin root to `docs.streamer.bot`; index extraction (llms.txt) redone if a batch fetch 404s; verification step re-checks link resolution.
- **Vault bloat (~120 files)** → justified: this is the reference for the library's most capable tool; index files keep it navigable.
- **English-only rule vs. Polish-speaking user** → content is English per AGENTS.md; user-facing structure decisions (already made in Polish) do not affect content language.

## Migration Plan

Docs-only change; no runtime. Steps: create `sub-actions/` + `triggers/` + `variables.md` → refactor `actions-system.md` → update `overview.md` nav links → run index/validate scripts → archive change. Rollback: delete new folders and restore `actions-system.md` from backup copy (repo has no git history — a pre-refactor backup copy is taken before edits).

## Open Questions

None blocking. Settled with the user: full hierarchy (D1), micro-merge threshold ≤3 (D1), index files yes (D4), `actions-system.md` refactor not delete (D5).
