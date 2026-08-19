# Design — streamer-bot-catalog-add-flows

## Context

The Streamer.bot reference in `tools/automation/streamer-bot/` was generated (2026-07-31 change `streamer-bot-reference-docs`) directly from official docs at `https://docs.streamer.bot/`. That source reflects **v1.0.5**, while the running application is **v1.0.4** (verified live on the user's machine, PID 36100, logged in as Kameo_S).

Live UI exploration produced hard evidence the docs alone cannot provide:
- A full catalog walk of the running app captured **14 categories / 114 groups / 353 sub-actions** (`/mnt/d/Twitch/shots/catalog-consolidated.txt`).
- "Single-item groups" were identified: groups where the group name equals the only sub-action (e.g. OBS `Recording`, `Get Current Scene`, Speaker.bot `Speak`, YouTube `Set Title`) — these do not expand a submenu; the group item itself is the sub-action.
- The app's trigger picker shows **11 sources** (incl. Trovo), while the official docs index lists **10** (no Trovo).
- Version gates: Logic has 6 sub-actions in v1.0.4 vs 8 in v1.0.5 docs (`Loop Continue`/`Loop Break`); StreamFog (6 sub-actions) exists only in v1.0.5; Twitch `Get/Pin Chat Message`, `Add/Remove Suspicious Status` are v1.0.5 additions. Note: `Get Clip Download Urls` was initially assumed v1.0.5 but IS in the v1.0.4 dump (`catalog-consolidated.txt` line 376) — no version gate.
- The add-flows UI was captured: right-click context menus (Sub-Actions: Add/Add Group/Delete All/Favorites/Recent; Triggers: Add/Clear/Disable/Enable All/Favorites/Recent; Actions: Add/Collapse/Expand All) and the "Add Action" dialog (Name, Enabled, Group, Queue, Random Action, Concurrent, Always Run, Exclude from Action Queue Pending/History, Ok/Cancel).

**Constraints:**
- Zero-hallucination policy (AGENTS.md): every app-derived fact must trace to a captured dump; docs facts to a docs URL.
- English only.
- Screenshots: external URLs only; no local images.
- Existing reference structure must be preserved (no breaking nav changes).

## Goals / Non-Goals

**Goals:**
- Reconcile the sub-action and trigger reference with the live v1.0.4 app: annotate version-gated entries, mark single-item groups, correct category/source lists.
- Add a step-by-step add-flows reference (Trigger, Action, Sub-Action) grounded in captured UI dumps.
- Keep every claim traceable (dump path or docs URL in frontmatter `source`/`app-evidence`).
- Preserve all existing files/navigation; additions only.

**Non-Goals:**
- Re-documenting every parameter of all 353 sub-actions (existing entries already cover parameters from docs; this change focuses on structure, version reconciliation, and flows).
- Adding local screenshots (blocked by AGENTS.md external-URLs-only rule).
- Changing the vault taxonomy or plugin categories.
- Verifying behavior of triggers against a live stream (requires streaming credentials/setup).

## Decisions

### D1. Evidence model: dump paths in frontmatter
App-derived facts cite the captured artifact in frontmatter (`app-evidence: /mnt/d/Twitch/shots/catalog-consolidated.txt`) instead of prose. Rationale: dumps are immutable snapshots; citing them satisfies zero-hallucination without bloating prose. Alternative considered: embedding counts in prose — rejected (no traceability).

### D2. Version annotations inline, not separate files
Entries that differ between v1.0.4 and v1.0.5 get an inline note `> **Version note (v1.0.5+):** …` next to the entry, plus a version matrix in `overview.md`. Rationale: keeps one file per entry (existing structure), avoids a parallel "versions" tree that would drift. Alternative: separate `version-notes.md` — rejected (harder to keep in sync with entries).

### D3. Single-item groups: mark, don't expand
In category indexes and group listings, single-item groups are flagged (e.g. `Recording (single-item group — the group IS the sub-action)`). No new subfolder/file is created for them. Rationale: they behave differently in the UI (no submenu); a reader clicking them would expect a flyout that doesn't exist.

### D4. Add-flows as one file: `add-flows.md`
A single `tools/automation/streamer-bot/add-flows.md` with three H2 sections (Trigger / Action / Sub-Action). Each flow: entry point (right-click location), picker navigation, dialog fields, and confirm/cancel. Rationale: three short flows share context; one file is simpler than a folder. Alternative: `flows/` folder with per-flow files — rejected (overkill for ~3 flows).

### D5. Trigger sources reconciled in `triggers/index.md`
The index lists the 11 app-visible sources (incl. Trovo) with a note that official docs index omits Trovo (10 sources) — app is source of truth for the app itself; docs remain source of truth for trigger *types* per source.

### D6. No automated verification in this change
This is pure documentation; no build/test tooling exists in the vault. Verification = `validate-links.js` (index links) after edits, plus manual spot-check of a sample of entries against dumps.

## Risks / Trade-offs

- **Docs drift while change is open** → pin to the exact docs URLs already in frontmatter; re-verify at archive time.
- **App state drift (user edits actions during exploration)** → all dumps are dated snapshots; citations pin the evidence; a re-walk script (`catalog.ps1`) exists to regenerate if needed.
- **Annotation noise in ~120 files** → keep annotations minimal (only where version/single-item applies); version matrix centralizes the rest.
- **Flow steps may vary on other platforms/versions** → state explicitly the flows were captured on v1.0.4 (Windows 10); mark as approximate elsewhere.
