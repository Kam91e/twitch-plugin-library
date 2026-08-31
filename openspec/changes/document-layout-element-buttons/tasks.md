## 1. Capture Every Button (header close-ups at 2× native)

- [ ] 1.1 Capture Mini Feed every button (select Mini Feed tile in Test Elements → header close-up at 2× native HighQualityBicubic `slobs-layout-minifeed-header.png` → click each header button individually: ⋮ drag handle, ⚙ settings, ✕ remove, filter/pause/clear → capture each dialog `slobs-layout-minifeed-{gear,filter}.png` → ESC → fresh verify `slobs-layout-minifeed-verify.png`)
- [ ] 1.2 Capture Legacy Events every button distinct (select Legacy Events tile → header close-up at 2× native `slobs-layout-legacy-header.png` → click each header button/⚙/filter → capture `slobs-layout-legacy-{gear,filter}.png` → ESC → verify — explicitly not copying Mini Feed)
- [ ] 1.3 Capture Audio Mixer every header button (select Audio Mixer tile → header close-up at 2× native `slobs-layout-audiomixer-header.png` → click ⋮/⚙/✕ → capture `slobs-layout-audiomixer-gear.png` → ESC → verify; rows identical to Mixer dock remain cross-linked to `mixer.md` via existing `slobs-protocol-addscene-open.png`)
- [ ] 1.4 Capture Scene Selector every button (select Scene Selector tile → header close-up at 2× native with `+` and eye controls `slobs-layout-sceneselector-header.png` → click `+` → capture dialog → ESC → verify; reuse existing Scenes panel evidence `slobs-addscene-dialog.png` 411K for dialog semantics)
- [ ] 1.5 Capture Source Selector every button (select Source Selector tile → header close-up at 2× native `slobs-layout-sourceselector-header.png` → click `+` → capture dialog → ESC → verify; reuse existing Sources panel evidence `slobs-addsource-dialog.png` 712K)

## 2. Writing

- [ ] 2.1 Deepen `layout-editor.md` to replace 5 × “I couldn't verify this at the captured resolution” with verified per-button paragraphs (each element's ⋮/⚙/✕ plus element-specific controls at 2× native header close-up, backed by `slobs-layout-{element}-{header,gear,filter}.png` captures or marked where header/dialog still not legible; Audio Mixer cross-link identical to `mixer.md`, Scene/Source Selector cross-link same as `scenes-and-transitions.md`/`sources.md`, Legacy Events distinct from Mini Feed; keep layout-vs-collection and Send to Stream gaps untouched)
- [ ] 2.2 Update `## Evidence gaps` to reflect that 5 tiles’ header chrome is now verified at 2× native (shrink bullet to “other elements (Editor Display, Stream Preview, Recording Preview, Website) still deferred” while keeping other gaps for layout duplicate/rename/remove, precise ⊕ coordinate)

## 3. Integration and Validation

- [ ] 3.1 Run `node .opencode/scripts/validate-evidence.js` to confirm all cited `slobs-layout-{element}-*.png` at 2× native exist in `/mnt/d/Twitch/shots/` and fix missing citations
- [ ] 3.2 Run `node .opencode/scripts/validate-links.js` and fix any broken cross-links
- [ ] 3.3 Final review: deepened `layout-editor.md` pins v1.21.9, marks every unverified header/button/dialog explicitly, contains no hallucinated details — verify via observer re-read of each `slobs-layout-{element}-{header,gear,filter}.png` capture vs doc claims at 2× native
