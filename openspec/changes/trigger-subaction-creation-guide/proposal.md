## Why

The library documents every trigger and sub-action's **menu location**, description, and parameters — but it never answers the question a user actually has when creating one: *"when I click this item in the picker, do I get a config dialog, or is it added immediately?"* The current docs are unusable for that: **676 of 764 items** say `Parameters: Not documented in official docs`, which conflates "has no parameters (adds directly)" with "has parameters the docs don't cover" — two very different UX behaviors. Official docs can't resolve this; only the live app can.

## What Changes

- **Classify every trigger and sub-action** (413 triggers + 351 sub-actions = 764 items) as either:
  - **Dialog** — clicking the item in the Add picker opens a config modal (e.g. `Add Trigger - Test` with an Arguments grid, `Add SubAction - Run Action` with an Action picker)
  - **Direct** — the item is added immediately with no dialog (e.g. `Twitch > Raid > Raid`)
  - Classification is captured live in the app (v1.0.4) via the existing WSL + UIA pipeline: open picker → hover to item → click → detect new modal window → cancel if one opens.
- **Document the config dialog for every item that has one**: dialog title, size, field list with control types (text/combo/checkbox/toggle/grid), required/optional where the UI exposes it, and Ok/Cancel behavior — traced to UIA dumps + screenshots, replacing `Not documented in official docs` with app-verified field data.
- **Add a `## Context menus` section to `add-flows.md`** mapping every right-click context in the app: Triggers pane (Add → picker), Sub-Actions pane (Add → picker), Commands grid (Add → own dialog), Action rows (Copy/Cut/Paste), per-service rows (FFW/Timers/File Tails/Quotes → own dialogs), Voice Control / MIDI / WebSocket panes (own forms), Settings sections — each with its entry point, menu items in order, and resulting flow.
- **New evidence**: one probe capture per picker navigation (`*-ctx-uia.txt` where missing) + one `*-dialog-uia.txt`/`.png` per dialog; classification recorded in a machine-readable catalog (extended `triggers-catalog.txt`-style dump or new `creation-flows-catalog.txt`).
- **Update per-item docs**: each trigger/sub-action entry gains a `**Add behavior:** dialog|direct` line; dialog items gain a field list in `**Parameters:**` backed by app evidence.

## Capabilities

### New Capabilities
- `creation-flow-classification`: Every trigger and sub-action SHALL be classified as **dialog** or **direct** based on live-app probing, with the classification traceable to evidence and recorded per-item in the library docs.
- `context-menu-map`: The library SHALL document every right-click context menu in Streamer.bot (entry point, menu items in captured order, resulting flow) as a `## Context menus` section in `add-flows.md`.

### Modified Capabilities
<!-- None — openspec/specs/ is empty; both capabilities are new. -->

## Impact

- **Docs**: per-item `**Add behavior:**` lines across ~90 trigger/sub-action pages; `**Parameters:**` upgraded from "Not documented" to app-verified fields for all dialog items; new `## Context menus` section in `add-flows.md`
- **Evidence (new, in `/mnt/d/Twitch/shots/`)**: picker-context captures where missing, one `*-dialog-uia.txt` + `.png` per dialog (~100-250 dialogs), `creation-flows-catalog.txt` machine-readable classification
- **Tooling (new)**: probe script extending the existing catalog walker — hover to item, click, detect modal, cancel, record dialog/direct
- **Index**: no `INDEX.md` change expected (tool pages are referenced via `overview.md` only); `validate-links.js` must pass; `validate-evidence.js` must pass with all new evidence cited
- **No application code changes** — documentation and evidence change only
