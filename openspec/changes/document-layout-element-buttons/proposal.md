## Why

The just-archived minimal `document-layout-elements` deepened `layout-editor.md` with 5 per-element subsections (Mini Feed, Legacy Events, Audio Mixer identical → `mixer.md`, Scene/Source Selector same → `scenes…`/`sources.md`) but left header button-level detail as “I couldn't verify this” — fallback whole-layout citations (`slobs-layout-editor.png` 142K, cropped header 976×176 still blurry per obs-6). The user clarified: **I wanted to have documented what every button does** — i.e., not a palette stub but the chrome on each tile (⋮ drag handle, ⚙ settings, ✕ remove, `+`/eye for Scene/Source Selector, filter/pause for Mini Feed, distinct filters for Legacy Events, volume/mute/gear/lock rows for Audio Mixer). To satisfy that, every header icon must be pressed and named, not just the palette existence. That requires true header-region close-ups at higher native resolution, not whole-layout citations.

## What Changes

- **Deepen `layout-editor.md` again: close the 5 × “I couldn't verify this” header-button gaps** by adding per-button maps for each of the 5 tiles **as seen only when the `Test Elements` layout is selected** (headers are inside the `Test Elements` canvas grid, not in the `Layout Editor` picker), capturing **hover for every button that has it, then pressing it**:
  - Mini Feed header (in `Test Elements`): ⋮/⚙/✕ + element-specific filter/pause/clear controls as actually observed via **hover tooltip that names each button** then press → dialog/palette in header close-ups at 2× native resolution inside the `Test Elements` canvas — hover shows what the button does, press documents the dialog that opens
  - Legacy Events header (in `Test Elements`, distinct from Mini Feed): its header has no name label, only button icons — distinct chrome explicitly not copying Mini Feed — each button hovered to capture its tooltip then pressed, as observed in `Test Elements`
  - Audio Mixer header (in `Test Elements`): still state identical to `mixer.md` dock but now with **every header button hovered** (⋮/⚙/✕ plus filter) then pressed, header close-up evidence inside `Test Elements` + row semantics via existing `slobs-protocol-addscene-open.png`
  - Scene Selector / Source Selector headers (in `Test Elements`): `+` at `296,578` / `676,578` + eye visibility as observed via **hover tooltip then press** in header close-ups inside `Test Elements`, still cross-linking to `scenes-and-transitions.md`/`sources.md` for dialog semantics
- **Evidence hygiene unchanged:** all new captures `slobs-layout-{minifeed,legacy,audiomixer,sceneselector,sourceselector}-{header,hover,gear,filter}.png` in `/mnt/d/Twitch/shots/` outside repo, captured only after selecting `Test Elements` (so headers are inside its canvas): **hover at header button center with `hover.ps1` 1.5s dwell → capture tooltip → then click → capture dialog/palette → `ESC`+fresh `capwin.ps1` verify** that the `Test Elements`/`Test Elements 2` list is still intact, version pin `v1.21.9`, `validate-evidence.js`/`validate-links.js` gates; no layout delete commit. The `Layout Editor` picker itself holds no element headers — it only lists layout templates.
- **No new top-level page** — still the single `layout-editor.md` (further deepened); other elements (Editor Display, Stream Preview, Recording Preview, Website) remain deferred.

## Capabilities

### New Capabilities
- `streamlabs-layout-element-buttons`: Requirements for documenting what every header button does on the 5 Layout Editor tiles — per-element header close-ups at higher native resolution, per-button gear/filter dialog presses, cross-link vs distinct handling, all evidence-backed

### Modified Capabilities
- `streamlabs-layout-elements`: Replace the 5 “header button-level detail — I couldn't verify this at the captured resolution” gaps with verified per-button paragraphs backed by `slobs-layout-{element}-header.png` (and gear/filter dialog) captures
- `streamlabs-layout-editor`: Shrink the remaining-gap bullet to reflect that the 5 tiles’ header chrome is now verified (keep other gaps: layout duplicate/rename/remove, Send to Stream toggle, precise ⊕ coordinate)

## Impact

- **Docs (deepen, v1.21.9, evidence-backed):** `tools/streaming-software/streamlabs-desktop/layout-editor.md` + per-button detail for 5 tiles + updated `## Evidence gaps`; cross-links to `mixer.md`/`sources.md`/`scenes-and-transitions.md` unchanged
- **Evidence (new, outside repo):** ~5×3 header-region close-ups at 2× native + gear/filter dialogs in `/mnt/d/Twitch/shots/` (never on GitHub), reusing prior whole-layout verifies where sufficient
- **Index:** `rebuild-index.js` only if listing changes (none expected); `validate-links.js` and `validate-evidence.js` must pass
- **No application code changes** — documentation + evidence-hygiene only
- **Deferral stays:** other 4 palette items’ chrome and layout lifecycle remain gaps
