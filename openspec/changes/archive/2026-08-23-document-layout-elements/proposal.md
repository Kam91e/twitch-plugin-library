## Why

`layout-editor.md` (v1.21.9 minimal, 96 lines) deliberately left per-element chrome as gaps: the Elements palette 9-item list and canvas bounds were cited, but what the header buttons do on each placed tile was not documented — palette stub cross-linked to `sources.md` and `mixer.md` without proving equivalence. The user clarified the ground truth that unblocks the next increment: **Audio Mixer is identical to the Mixer dock** we already documented (so we can reuse `mixer.md` rows/lock/gear evidence), **Legacy Events is something different** (not the same as Mini Feed, needs its own chrome description), and **Scene Selector / Source Selector should have the same chrome as Scenes/Sources panels** (i.e., `+` at Scenes `296,578` and Sources `676,578`, eye toggles, etc. already proven). Mini Feed itself remains to be described. Capturing those 5 tiles' buttons closes the most visible gaps without yet building the full palette-groups catalog.

## What Changes

- **Deepen `layout-editor.md` with 5 per-element button subsections** (each with header-button map: ⋮ drag handle, ⚙ settings, ✕ remove, plus element-specific controls like filter/pause for Mini Feed, volume/mute/gear/lock rows for Audio Mixer, `+`/eye for Scene/Source Selector, and Legacy Events' distinct chrome) — all screenshot + observer verified via `slobs-layout-*` captures already taken (`slobs-layout-editor.png`, `slobs-layout-element-selected.png`, canvases `slobs-layout-canvas-test-elements*.png`), plus 5 new focused `slobs-layout-{minifeed,legacy,audiomixer,sceneselector,sourceselector}-*.png` shots (select → header close-up → gear dialog → ESC verify) only where needed; reuse existing `slobs-layout-add-element-dialog.png` for palette context.
- **Cross-link instead of duplicate where identical:** Audio Mixer section states identical to `mixer.md` dock (cite `slobs-protocol-addscene-open.png` mixer rows and `mixer.md` evidence) and cross-links to `mixer.md`; Scene Selector/Source Selector sections state identical to `scenes-and-transitions.md` / `sources.md` panels (cite `slobs-addscene-dialog.png` 411K, `slobs-addsource-dialog.png` 712K) and cross-link to those pages.
- **Differentiate Legacy Events:** call out that its header buttons/filter set is *not* Mini Feed’s, describe what is observed in its selected tile and note any dialogs, explicitly not copying Mini Feed description.
- **Keep non-destructive, outside-repo evidence hygiene** (`/mnt/d/Twitch/shots/slobs-layout-*`, `ESC` + fresh `capwin.ps1` verify, version pin `v1.21.9`, `validate-evidence.js` / `validate-links.js` / `rebuild-index.js` gates) and replace the corresponding `## Evidence gaps` bullet(s) for per-element properties with verified paragraphs, leaving unrelated gaps (duplicate/rename/remove for layouts, `Send to Stream` toggle, precise `+` coordinate) untouched for future.
- **No new top-level pages** — still the single `layout-editor.md` (deepened), no second `elements.md` yet.

## Capabilities

### New Capabilities
- `streamlabs-layout-elements`: Requirements for what each button does on Layout Editor tiles Mini Feed, Legacy Events, Audio Mixer, Scene Selector, Source Selector — header chrome (⋮, ⚙, ✕), element-specific controls, and cross-link vs distinct handling, all evidence-backed and version-pinned

### Modified Capabilities
- `streamlabs-layout-editor`: Replace the palette-stub gap “per-element properties — beyond selected-state bounds/handles” with verified per-element sections for the 5 named tiles; shrink that gap bullet to “other elements (Editor Display, Stream Preview, etc.) still deferred” while keeping other gaps for layout lifecycle

## Impact

- **Docs (deepen, v1.21.9, evidence-backed):** `tools/streaming-software/streamlabs-desktop/layout-editor.md` +5 subsections (Mini Feed, Legacy Events, Audio Mixer, Scene Selector, Source Selector) + updated `## Evidence gaps`; no new files; small cross-link touches only if needed in `mixer.md` / `sources.md` / `scenes-and-transitions.md` for the identical statements
- **Evidence (new, outside repo):** up to 5×2 `slobs-layout-{element}-selected.png` + header close-up + gear dialog shots in `/mnt/d/Twitch/shots/` (never on GitHub), reusing prior `slobs-layout-*` canvases where sufficient
- **Index:** `rebuild-index.js` only if listing changes (none expected); `validate-links.js` and `validate-evidence.js` must pass
- **No application code changes** — documentation + evidence-hygiene only
- **Deferral stays:** full per-group palette enumeration for the remaining 4 Elements palette items (Editor Display, Stream Preview, Recording Preview, Website) and layout duplicate/rename/remove remain gaps
