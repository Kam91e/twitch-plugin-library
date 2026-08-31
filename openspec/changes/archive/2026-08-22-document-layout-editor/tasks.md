## 1. Capture Infrastructure

- [x] 1.1 Verify capture helpers in `/mnt/d/Twitch/shots/` (capwin.ps1, slobs-click.ps1/click.ps1, calibrate.ps1, hover.ps1, Win32Helper.dll) still work against Streamlabs Desktop 1.21.9
- [x] 1.2 Re-calibrate Layout Editor coordinates with marker calibration (`calib-win.ps1` variant for layouts header ⊕) — re-calibrate before any click batch because observer estimates are imprecise and layout list may scroll

## 2. Layout Editor Chrome (app-only vs scenes)

- [x] 2.1 Capture Layout Editor in steady state via `Editor → Layout Editor` (teal highlight) — header, layouts list showing `Test Elements` and `Test Elements 2`, canvas empty state
- [x] 2.2 Capture the layouts list detail (header control `Layouts ⊕` or equivalent) and verify it shows exactly `Test Elements` and `Test Elements 2`
- [x] 2.3 Capture creating a layout (click `+` at layouts header → capture name dialog → `ESC` → fresh capture verifies list still exactly `Test Elements` / `Test Elements 2`)
- [x] 2.4 Capture switching layouts (click `Test Elements` → capture canvas → click `Test Elements 2` → capture canvas) — two canvases with placed elements

## 3. Elements Palette and Canvas Basics

- [x] 3.1 Capture the Add Element palette (click `+` / `Add Element` at layouts/canvas header → capture palette list → `ESC` → fresh verify) — one palette shot sufficient for minimal
- [x] 3.2 Capture canvas basics for at least one placed element in `Test Elements` (select element → capture bounds/handles if visible) — mark drag/resize/layering as unverified if not observed

## 4. Writing

- [x] 4.1 Write `layout-editor.md` under `tools/streaming-software/streamlabs-desktop/` (minimal, v1.21.9 pinned, Panel top-to-bottom: open, layouts vs scenes, list, create, switch, palette stub, canvas basics — each with Evidence: `slobs-layout-*` backtick citations and `## Evidence gaps` with “I couldn't verify this” for duplicate/rename/remove, per-group palette enumeration, per-element properties, delete, layout-vs-collection interaction, and whether layouts can be made stream-visible)
- [x] 4.2 Deepen `sidebar-reference.md` destination line for `Layout Editor` (replace unverified gap with one verified paragraph + Evidence: `slobs-layout-editor.png`)
- [x] 4.3 Cross-link `overview.md` UI Reference (v1.21.9) entry for Layout Editor and add contrast note in `sources.md` / `scenes-and-transitions.md` (layout app-only vs scene stream-visible)

## 5. Integration and Validation

- [x] 5.1 Run `node .opencode/scripts/rebuild-index.js` and verify `INDEX.md` if changed
- [x] 5.2 Run `node .opencode/scripts/validate-links.js` and fix any broken links
- [x] 5.3 Run `node .opencode/scripts/validate-evidence.js` to confirm all cited `slobs-layout-*` files exist in `/mnt/d/Twitch/shots/`
- [x] 5.4 Final review: `layout-editor.md` (and touched pages) pin v1.21.9, mark every unverified item explicitly, and contain no hallucinated details — verify via observer re-read of each `slobs-layout-*` capture
