# Design — Services Sections Reference

## Context

The Streamer.bot vault reference (`tools/automation/streamer-bot/`) documents Actions, Commands, Triggers, Sub-Actions, Platforms, and Integrations, but the four **service tabs** — Services, Servers/Clients, Voice Control, MIDI — have no dedicated files. Existing notes only cross-reference them in passing (e.g., "enable it via `Services > Process Watcher`").

The official docs (v1.0.5) barely cover these sections: File/Folder Watcher, File Tail, and Process Watcher exist only as trigger API pages; Servers/Clients configuration pages are absent from the docs sidebar; Quotes says "Documentation Needed". The only reliable source is the live application (v1.0.4 on Windows 10), which we can capture with the existing tooling (`clickname.ps1`, `clk.ps1`, `rightclick.ps1`, `capture.ps1`, UIA dump scripts).

The current UIA evidence for these tabs is **card-list only** (the landing view): `Services-uia.txt` (6 sections, scrollable — more below fold), `Servers-Clients-uia.txt` (5), `Voice-Control-uia.txt` (3), `MIDI-uia.txt` (2). No section internals, no context menus, no dialogs are captured yet.

## Goals / Non-Goals

**Goals:**
- Document every section of the Services, Servers/Clients, Voice Control, and MIDI tabs from the live v1.0.4 app
- Per section, capture and record: panel content (grid/list columns, toggles, buttons, status), left-click behavior, right-click menu (or its explicit absence) **including the dialog options its items lead to**, and any dialogs that open
- Follow the established note pattern (`platforms.md`, `commands.md`): frontmatter with `app-evidence`, structured sections, zero-hallucination sourcing
- Link the new files from `overview.md` nav

**Non-Goals:**
- No coverage of Stream Apps, OBS Studio (tab), Settings, or Integrations tabs (deferred)
- No changes to `plugins/` vault docs or `INDEX.md`
- No syncing to `openspec/specs/` (project convention is archive-without-sync)
- No deep functional testing of the services — we document the UI, we do not exercise service behavior beyond opening panels/menus/dialogs

## Decisions

**D1: File structure — decided by a depth probe, not up front.**
The folder-vs-single-file question (per proposal) is resolved by a **depth spike** before writing files:
- Probe 2–3 representative sections (File/Folder Watcher, Quotes, Credits) with the full per-section template
- If sections run deep (grids + context menus + multiple dialogs each), use a `services/` folder with per-section files (mirroring `sub-actions/`)
- If sections are thin (checkbox lists, minimal dialogs), use one `services.md` per tab (mirroring `platforms.md` at 169 lines)
- Rationale: `platforms.md` proves a single file works at ~170 lines, but Services has more sections than Platforms did; the spike gives evidence instead of guessing.
- Alternative considered: always one file per tab — rejected because the Services tab alone may exceed a maintainable single-file size.

**D1 DECIDED (2026-08-04, depth spike complete):** one file per tab — `services.md`, `servers-clients.md`, `voice-control.md`, `midi.md`. All 6 Services sections were probed; none runs deeper than panel + right-click menu + single Add dialog. Each section maps to one note subsection (grid columns / checkbox list / status panel + ctx menu + dialog fields), comparable to `platforms.md`. No section warrants its own file.

**D2: Per-section capture template (the finding IS the data).**
Every section gets the same treatment:
1. **Open the section** (click the card / arrow) → dump panel UIA + PNG. Note whether the arrow navigates, expands in place, or is decorative (the Platforms probe showed arrow behavior varies per card).
2. **Left-click test** on panel elements (buttons, toggles, rows, columns, links) → dump UIA as needed. Record what each left-click target does — opens a dialog, toggles a state, selects a row, sorts, or nothing. Left-click is a first-class interaction to document, not an afterthought.
3. **Right-click test** on the panel body and on a row → dump ctx UIA. Record the menu items, OR record explicitly "no right-click functionality".
4. **Dialog chain from right-click items** — for each right-click menu item that opens a dialog, choose it and dump the resulting dialog UIA (title, size, fields, Ok/Cancel, modal behavior). The dialog options reached through right-click items are part of the section's documentation, not skipped.
5. **Dialog hunt from visible controls** — trigger action buttons visible in the panel (Create X, Add, Edit, Reset, Refresh) that open windows → dump dialog UIA. Record dialog options even when the dialog is reachable from both a button and a right-click item; note both entry points.
- Rationale: the user's probing found some sections have right-click and some don't; choosing options sometimes opens new windows; and left-clicks (buttons, double-click on rows, toggles) are themselves sources of dialogs and state changes. The template makes presence/absence explicit instead of assuming uniformity, and captures the dialogs reachable from both left- and right-click paths.

**D3: Evidence naming follows the existing convention.**
New dumps use the established pattern:
- `<section>-panel-uia.txt` — panel content
- `<section>-ctx-uia.txt` — right-click menu
- `<dialog>-modal-uia.txt` — dialog window
- PNGs alongside each
- Files land in `/mnt/d/Twitch/shots/`; each note's frontmatter `app-evidence` cites the dump paths used.

**D4: Services tab section list is enumerated first.**
The existing `Services-uia.txt` capture shows 6 sections with scroll buttons — the full list is unknown. The first probe step scrolls the Services tab to enumerate **all** sections, so scope is fixed before per-section probing.

**D4 RESOLVED (2026-08-04):** sidebar scrolled via nav PageDown button + observer-verified screenshots — exactly 6 sections (File/Folder Watcher, Timers, File Tails, Process Watcher, Credits, Quotes); none below the fold. MIDI / Voice Control / Servers/Clients follow as separate top-level tabs. Also: the nav scrollbar's PageDown button (`AutomationId=PageDown`) is the reliable scroll mechanism; wheel events do not scroll the sidebar.

**D5: Docs are secondary, never primary, for section internals.**
The docs sidebar lacks config pages for most of these sections. Where a docs page exists (`guide/core/timers`, `guide/core/credits`, `guide/core/quotes`), it is used to cross-check app findings; where it does not, the app is the sole source and that gap is noted (mirroring the Trovo app-vs-docs treatment in the triggers work).

## Risks / Trade-offs

- **[Section internals may be thin]** → The depth spike (D1) sizes the files correctly before committing to a structure; worst case is a slightly larger `services.md`.
- **[Arrow/card behavior varies per section]** → D2 step 1 records the actual behavior (navigate/expand/decorative) per section rather than assuming.
- **[Right-click absent on some sections]** → The template treats absence as a documented finding, so no section is silently skipped.
- **[App state drift during probing]** → All captures reference the same v1.0.4 instance and are timestamped; `last-reviewed` frontmatter records the review date.
- **[Scope creep into excluded tabs]** → Non-goals are explicit; if a section in scope references an excluded tab (e.g., Settings), we document the reference, not the excluded tab.

## Open Questions

1. Does the Services tab have sections beyond the 6 visible in `Services-uia.txt`? — resolved by D4 during the first probe.
2. Do any Services sections open dialogs that themselves contain sub-dialogs? — discovered during probing; if so, documented at the depth found.
3. Folder vs single file per tab — resolved by the depth spike (D1).
