## Context

The library documents 413 triggers and 351 sub-actions (`**Location:**` entries) with descriptions, parameters, and variables. For **676 of 764** items the parameters line reads `Not documented in official docs`. That text currently conflates two distinct UX behaviors that the official docs cannot distinguish:

- **Direct**: clicking the item in the Add picker adds it immediately (no dialog)
- **Dialog**: clicking the item opens a config modal first (e.g. `Add Trigger - Test`, `Add SubAction - Run Action`)

`add-flows.md` documents the *generic* flows (right-click → Add → picker → hover-chain) and already notes the two behaviors exist (trigger step 5-6, sub-action step 6), but does not say **which items** are which. The user wants the per-item classification documented, all dialogs' fields captured, and the full context-menu map consolidated into `add-flows.md`.

Evidence pipeline exists and is proven: WSL drives `powershell.exe` with UIA dumps (`*-uia.txt`) + screenshots (`*.png`) into `/mnt/d/Twitch/shots/`. A hover-only catalog walker (`triggers-catalog.ps1`) walks the Trigger Add picker tree (CAT/GRP/ITEM) without clicking. The Sub-Actions picker is a hover-chain (category → group → item). Several dialogs are already captured (`add-trigger-test-modal-uia.txt`, `subaction-runaction-modal-uia.txt`, `add-action-dialog-uia.txt`, per-service add dialogs).

## Goals / Non-Goals

**Goals:**
- Classify all 764 items (413 triggers + 351 sub-actions) as **dialog** or **direct** via live-app probing (v1.0.4), recorded per-item
- Capture and document the config dialog (title, size, fields with control types, Ok/Cancel) for every item that opens one, traced to `*-dialog-uia.txt` + `.png`
- Produce a machine-readable catalog (`creation-flows-catalog.txt`) mapping every item → dialog|direct, plus dialog metadata
- Add `## Context menus` to `add-flows.md`: every right-click context (entry point, items in order, resulting flow)
- Integrate: per-item `**Add behavior:**` line; `**Parameters:**` upgraded to app-verified fields where a dialog was captured; `validate-links.js` + `validate-evidence.js` pass

**Non-Goals:**
- Documenting every field's *value semantics* beyond what the UI exposes (labels, control types, required/optional where visible) — no reverse-engineering of internal defaults
- Re-capturing the picker tree itself (catalog already captured); only the click-result classification is new
- Touching items that require configured connections to open their dialog (e.g. MIDI triggers need a registered device) — those are classified from the dialog they *do* open when a connection exists, with a note
- Any application-code changes

## Decisions

### D1: Probe methodology — extend the catalog walker to click, detect modal, cancel, record

New script `classify-flows.ps1` (pattern: `triggers-catalog.ps1` + `probe-types.ps1`) that for each catalog item:

1. Open picker (existing `openaddflyout.ps1`/`triggersctx.ps1` entry points), hover-path to the item (existing walker logic)
2. **Click** the item (not just hover)
3. Enumerate windows (`all-windows` style); if a **new modal window** appears (non-main, ControlType.Window with dialog chrome) → record `dialog`; else → record `direct`
4. If dialog: dump `*-dialog-uia.txt` + screenshot `*.png` (existing capture helpers), then **Cancel** (ESC or Cancel button)
5. If direct: verify the item actually got added (grid/tree row count changed), then **remove it** to restore clean state (see D3)
6. Append `CAT > GRP > ITEM | dialog|direct | dialogFile` to `creation-flows-catalog.txt`

- **Rationale:** reuses the proven hover-walker; only the click/observe/cancel loop is new.
- **Alternative considered:** classify from official docs — rejected: docs conflate "no params" with "undocumented params" (676/764 are `Not documented`), so it cannot answer the question.
- **Alternative considered:** manual click-through — rejected: 764 items, automation is faster and uniform.

### D2: Modal detection — new-window enumeration, not title matching

After click, wait up to ~1.5 s, then enumerate all top-level windows of the process. A dialog is present iff a window exists that is (a) not the main window, (b) has `ControlType.Window` with non-empty Name, and (c) is modal (owner = main window). ESC-fallible: some dialogs need a Cancel button click; the script tries ESC then looks for a `Cancel` button if the window persists.

- **Rationale:** matches how `all-windows-uia.txt` / `add-action-dialog` were already detected; title matching is fragile (many dialogs share "Add..." titles).
- **Risk:** a dialog that is styled as a non-modal flyout could be missed → mitigate by sampling: after classification, @observer verifies a sample of `direct` items against screenshots (see D5).

### D3: State hygiene — every probe restores the app to a clean state

The Streamer.bot instance under test is the user's real app. Two pollution vectors:

- **Dialog items**: Cancel leaves no trace (verified pattern in existing captures).
- **Direct items**: the item is genuinely added. The script deletes it immediately via the row's right-click → Delete (triggers/sub-actions both expose a delete entry), then re-verifies the row is gone. For triggers, `Clear All Triggers` exists as a fallback but is NOT used automatically (it would nuke user's real triggers) — deletion is per-row.
- **Fallback**: if per-row delete fails (item added outside the visible pane / unknown), the script logs `POLLUTION` and stops, flagging for manual cleanup — never silently continues.

- **Rationale:** the app under test is live user data; leaving 764 added items would corrupt it. Per-row delete + fail-stop is the safest combination.
- **Alternative considered:** running on a disposable profile/VM — rejected: the pipeline is tied to the user's running instance and window geometry; too heavy for this change.

### D4: Evidence naming and catalog format

- Classification catalog: `creation-flows-catalog.txt` — one line per item:
  `CAT:Core > GRP:Commands > ITEM:Command Triggered | dialog | add-command-trigger-dialog-uia.txt`
  (or `| direct |` with empty dialog column). Mirrors the existing `triggers-catalog.txt` style, adds a result column.
- Dialog evidence: `<kebab-item-name>-dialog-uia.txt` + `.png` (e.g. `run-action-dialog-uia.txt`, `add-trigger-test-dialog-uia.txt`). Where the picker hierarchy disambiguates (same item name in two groups), prefix with the group: `<group>-<item>-dialog-*`.
- Screenshots only where the dialog has visible content not already in the UIA dump; UIA dump is the primary traceable source.

### D5: Verification — observer sample + validators

- After classification, @observer reviews a sample: N random `direct` items (confirm no dialog opened) and N random `dialog` items (confirm field lists match the dump). Sample covers both triggers and sub-actions, plus all 14 sub-action categories' deepest items.
- `validate-evidence.js` must pass with all new evidence cited (per-item `**Parameters:**`/`**Add behavior:**` lines carry the backtick citations).
- `validate-links.js` must pass.

## Risks / Trade-offs

- **[Probe adds real items to user's live app]** → per-row delete + fail-stop `POLLUTION` flag; user watches the run or runs it on a safe state (see Open Questions).
- **[Dialog detection misses non-modal flyout dialogs]** → observer sample of `direct` items; if a miss is found, tighten D2 (add flyout-window check) and re-probe affected category.
- **[Some dialogs need configured connections to open (MIDI devices, commands, voice commands)]** → classify those items from the dialog they open when a connection exists; note "requires configured <X>" in the doc; do not block the whole run.
- **[Time/scale: 764 items × ~3-6 s ≈ 1-1.5 h of probing]** → run per-source (Core, Twitch, ...) in separate script invocations; each invocation resumable via `creation-flows-catalog.txt` (skip already-recorded items).
- **[Cancel may not restore state for dialogs with pre-populated values]** → verified pattern shows cancel/ESC restores clean state for captured dialogs; the script re-checks window count after cancel.

## Resolved Decisions (user-confirmed)

- **App state**: the probe runs against the **live instance** with per-row delete and fail-stop `POLLUTION` flag (D3). User stays hands-off during the run.
- **Dialog depth**: **drill-down into sub-editors** — Action pickers, Arguments editors, and similar nested editors are expanded and captured as part of the dialog documentation (extends the run; per-source resumable runs keep it tractable).
- **Context menus placement**: the `## Context menus` section lives **only in `add-flows.md`**; per-pane pages are not modified for it.

## Open Questions

(none — resolved above; remaining unknowns are operational, handled by the resumable probe + observer sample)
