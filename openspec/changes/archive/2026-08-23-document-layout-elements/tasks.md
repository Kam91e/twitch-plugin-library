## 1. Capture Element Buttons (header chrome for 5 tiles)

- [x] 1.1 Capture Mini Feed tile header buttons (select Mini Feed in Test Elements → header close-up `slobs-layout-minifeed-header.png` → click ⚙/filter if present → capture gear dialog `slobs-layout-minifeed-gear.png` → ESC → fresh verify `slobs-layout-minifeed-verify.png`)
- [x] 1.2 Capture Legacy Events distinct chrome (select Legacy Events tile → header close-up `slobs-layout-legacy-header.png` → click header buttons/⚙ → capture `slobs-layout-legacy-gear.png` → ESC → verify `slobs-layout-legacy-verify.png` — explicitly not copying Mini Feed description)
- [x] 1.3 Capture Audio Mixer tile header and verify identical to Mixer dock (select Audio Mixer tile → header close-up `slobs-layout-audiomixer-header.png`; cite existing Mixer rows evidence `slobs-protocol-addscene-open.png` for volume/mute/gear/lock rather than re-capturing rows)
- [x] 1.4 Capture Scene Selector tile header same as Scenes panel (select Scene Selector tile → header close-up with `+` and eye controls `slobs-layout-sceneselector-header.png`; reuse existing Scenes evidence `slobs-addscene-dialog.png` 411K for `+` dialog semantics)
- [x] 1.5 Capture Source Selector tile header same as Sources panel (select Source Selector tile → header close-up `slobs-layout-sourceselector-header.png`; reuse existing Sources evidence `slobs-addsource-dialog.png` 712K)

## 2. Writing

- [x] 2.1 Deepen `layout-editor.md` with 5 per-element subsections (Mini Feed, Legacy Events, Audio Mixer identical → cross-link `mixer.md`, Scene Selector same → cross-link `scenes-and-transitions.md`, Source Selector same → cross-link `sources.md` — each with Evidence: `slobs-layout-{element}-*.png` backtick citations and explicit “I couldn't verify this” where header/button/dialog not observed; keep `layout-vs-collection` and `Send to Stream` gaps untouched)
- [x] 2.2 Shrink `layout-editor.md` `## Evidence gaps` for per-element properties: replace generic “per-element properties — beyond selected-state bounds/handles” bullet with “other elements (Editor Display, Stream Preview, Recording Preview, Website) still deferred” while keeping other gaps for layout lifecycle

## 3. Integration and Validation

- [x] 3.1 Run `node .opencode/scripts/validate-evidence.js` to confirm all cited `slobs-layout-*` files exist in `/mnt/d/Twitch/shots/` and fix missing citations
- [x] 3.2 Run `node .opencode/scripts/validate-links.js` and fix any broken cross-links (`mixer.md`, `sources.md`, `scenes-and-transitions.md`)
- [x] 3.3 Final review: deepened `layout-editor.md` pins v1.21.9, marks every unverified header/button/dialog explicitly, contains no hallucinated details — verify via observer re-read of each `slobs-layout-{element}-*.png` capture vs doc claims
