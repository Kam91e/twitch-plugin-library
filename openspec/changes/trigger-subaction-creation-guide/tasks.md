# Tasks: trigger-subaction-creation-guide

## 1. Probe infrastructure

- [x] 1.1 Write `classify-flows.ps1` (extend `triggers-catalog.ps1` walker): open picker → hover-path to item → click → enumerate windows → classify dialog|direct → cancel dialog or per-row-delete direct item → record to `creation-flows-catalog.txt`; fail-stop `POLLUTION` on failed cleanup
- [x] 1.2 Dry-run on ONE known-dialog item (e.g. `Core > Commands > Command Triggered`) and ONE known-direct item (e.g. `Twitch > Raid > Raid`): verify classification, dialog capture, and state restore (window count back to 1, row removed)
- [x] 1.3 Dry-run on one sub-action hover-chain item (`Core > Actions > Run Action`): verify picker hover-chain navigation + drill-down into the Action picker sub-editor captures correctly
- [x] 1.4 Verify `creation-flows-catalog.txt` format against spec (path | dialog|direct | dialogFile) with a 5-item sample; confirm resumability (skip already-recorded items on re-run)

## 2. Trigger classification — live probe run

- [x] 2.1 Probe Core triggers (~13 items) — full dialog captures for dialog items incl. `Add Trigger - Test` drill-down
- [x] 2.2 Probe Twitch triggers (~152 items) — resumable; dialog captures per dialog item
- [x] 2.3 Probe YouTube + Kick triggers (~57 items)
- [x] 2.4 Probe Elgato triggers (~96 items) — note connection-dependent items (Camera Hub/Stream Deck require hardware)
- [x] 2.5 Probe Integrations triggers (~114 items) — drill-down into Arguments/event editors where present
- [x] 2.6 Probe OBS/Meld/Streamlabs Desktop triggers (~27 items) + Custom + Trovo items
- [x] 2.7 Observer review of trigger probe: sample of `direct` items (confirm no dialog) + sample of `dialog` items (fields match dumps); record verdict — 5 PASS / 3 FAIL; fixed: `Kick > Chat > Message`→`Chat Message`, `OBS Studio > OBS <event>`→`OBS Studio > <event>` (8 triggers + 1 sub-action), `Command Triggered` Parameters format/field name

## 3. Sub-action classification — live probe run

- [x] 3.1 Probe Core sub-actions (~40+ items) — incl. Run Action drill-down into Action picker; logic/flyout sub-editors
- [x] 3.2 Probe Twitch sub-actions (~60+ items) — resumable; dialog captures per dialog item
- [x] 3.3 Probe YouTube + Kick + Trovo sub-actions
- [x] 3.4 Probe Elgato + Integrations sub-actions (IFTTT Arguments editor drill-down, Voicemod/VTube Studio)
- [x] 3.5 Probe OBS/Meld/Streamlabs/PolyPop/Speaker.bot/Streamer.bot sub-actions
- [x] 3.6 Probe Settings sub-actions (action queues, C# execute, etc.)
- [x] 3.7 Observer review of sub-action probe: sample of `direct` + `dialog` items; confirm hover-chain categories all covered (14/14) — 8/8 PASS; 13/13 v1.0.7 picker sources present in catalog

## 4. Per-item documentation update

- [x] 4.1 Add `**Add behavior:** dialog|direct` line to all 413 trigger entries, citing `creation-flows-catalog.txt`; upgrade `**Parameters:**` to app-verified fields for dialog items (backtick citations to `*-dialog-uia.txt`/`.png`)
- [x] 4.2 Add `**Add behavior:**` line to all 351 sub-action entries + upgrade `**Parameters:**` for dialog items
- [x] 4.3 Add connection-dependency notes for items requiring configured connections (MIDI devices, commands, voice commands, hardware)
- [x] 4.4 Re-run `validate-evidence.js` — all new dialog captures and catalog must be cited (exit 0)

## 5. Context menus section in add-flows.md

- [x] 5.1 Inventory all right-click contexts: Triggers pane, Sub-Actions pane, Commands grid, Action rows, Service rows (FFW/Timers/File Tails/Quotes/Process Watcher/Credits), Voice Control, MIDI, WebSocket, Settings sections — from existing `*-ctx-uia.txt` captures; add missing `*-ctx-uia.txt` captures where a context is undocumented
- [x] 5.2 Write `## Context menus` section in `add-flows.md`: per-context entry point, menu items in captured order, resulting flow (picker flyout / own dialog / direct action), traced to evidence
- [x] 5.3 Cross-link existing `## Add a Trigger / Sub-Action / Action` sections to the new section (no duplication)

## 6. Integration & verification

- [x] 6.1 `node .opencode/scripts/validate-links.js` — exit 0
- [x] 6.2 `node .opencode/scripts/validate-evidence.js` — exit 0, all new evidence cited
- [x] 6.3 `node .opencode/scripts/rebuild-index.js` — no unexpected INDEX changes (tool pages only via overview.md)
- [x] 6.4 Final observer spot-check on 3-4 upgraded dialog `**Parameters:**` entries against their dumps; confirm `add-flows.md` renders the context menu section correctly — ALL PASS (4/4 params verified; 4 subsections + 3 cross-links confirmed)
