## Context

`tools/streaming-software/streamlabs-desktop/layout-editor.md` (v1.21.9 minimal, 96 lines, archived in `2026-08-22-document-layout-editor`) closes the Layout Editor chrome gap (how to open, Layouts grid 6 tiles, Elements palette stub 9 items, canvases `Test Elements`/`Test Elements 2`, Save New Tab dialog) but explicitly leaves per-element chrome as gaps: `per-element properties — beyond selected-state bounds/handles` and `per-group palette enumeration`. The palette lists the 5 user-requested elements `Mini Feed`, `Legacy Events`, `Audio Mixer`, `Scene Selector`, `Source Selector` among the 9, and the canvases already show them placed (e.g., `Audio Mixer` row in `slobs-layout-editor.png` bottom row, `Mini Feed` middle-center, `Scene/Source Selector` bottom row). The user clarified ground truth: **Audio Mixer is identical to the Mixer dock** (documented in `mixer.md` with rows, sliders, lock/gear, evidence `slobs-protocol-addscene-open.png`), **Legacy Events is something different** (distinct from Mini Feed, not the same list), and **Scene Selector / Source Selector should have the same chrome as Scenes/Sources panels** (Scenes `+` at `296,578` → `slobs-addscene-dialog.png` 411K, Sources `+` at `676,578` → `slobs-addsource-dialog.png` 712K, eye visibility, etc.). No per-element header button (⋮, ⚙, ✕, +, filter) has been clicked yet; only the palette existence and one selected-state bounds shot were captured.

## Goals / Non-Goals

**Goals:**
- Document what each header button does on the 5 placed tiles (Mini Feed, Legacy Events, Audio Mixer, Scene Selector, Source Selector) as seen in Layout Editor grid cells — header chrome (⋮ drag handle, ⚙ settings, ✕ remove, plus element-specific: filter/pause/clear for Mini Feed, volume/mute/gear/lock rows for Audio Mixer, `+`/eye for Scene/Source Selector, distinct filter set for Legacy Events) — all screenshot + observer verified, `v1.21.9` pinned, gaps marked.
- Reuse where identical: state explicitly that Audio Mixer tile reuses `mixer.md` dock evidence and cross-link to it; Scene/Source Selector tiles reuse `scenes-and-transitions.md` / `sources.md` panel evidence and cross-link to them, rather than re-describing sliders or `+` dialogs.
- Keep evidence outside the repo (`slobs-layout-{element}-*.png` in `/mnt/d/Twitch/shots/`, `ESC` + fresh `capwin.ps1` verify, never committed) and keep the change to the single `layout-editor.md` (deepened) with minimal cross-link touches.

**Non-Goals:**
- Not the remaining 4 Elements palette items (Editor Display, Stream Preview, Recording Preview, Website) — remain as gaps for future.
- Not full per-group palette enumeration for Elements (Essentials/Capture/… as in `sources.md`) — still deferred.
- Not layout duplicate/rename/remove or `Send to Stream` toggle — remain gaps.
- Not a second `elements.md` page — still the single `layout-editor.md` (deepened).

## Decisions

### D1: Deepen the existing `layout-editor.md` with a `## Element buttons` section containing 5 subsections (Option A from explore)

Add per-element subsections under `layout-editor.md` (D5 pattern: panel top-to-bottom, control types, click behaviors, Evidence line + updated `## Evidence gaps`). No new top-level page; the single page already has `How to open` / `Layouts vs scenes` / `Layouts list` / `Creating` / `Switching` / `Palette stub` / `Canvas basics`. The new subsections slot after Canvas basics.

**Alternatives considered:** new page `elements.md` mirroring `sources.md` group structure — rejected as over-scoped for 5 elements when one stub table is already deferred; combined `layouts-and-elements.md` heavy page — rejected as it duplicates `sources.md`/`mixer.md` rows.

### D2: Cross-link where identical, describe where distinct (implements user's three clarifications)

- **Audio Mixer identical:** Section states “Header buttons and rows are identical to the Mixer dock (see `mixer.md`)” and cites both the new tile header close-up (`slobs-layout-audiomixer-header.png`) and the existing Mixer rows evidence (`slobs-protocol-addscene-open.png` Desktop Audio −10.8dB, Mic/Aux 0.0dB). No re-explanation of slider/mute.
- **Scene/Source Selector same as Scenes/Sources panels:** Each section states “`+` at Scenes `296,578` / Sources `676,578`, eye visibility, etc., as documented in `scenes-and-transitions.md` / `sources.md`” and cites both the tile header `+` close-up and the existing dialog evidence (`slobs-addscene-dialog.png` 411K, `slobs-addsource-dialog.png` 712K). Cross-link to those pages.
- **Legacy Events distinct:** Section explicitly contrasts with Mini Feed (“Mini Feed shows …; Legacy Events shows …; filter sets differ”) and describes what is observed in its tile header + any settings dialog, not copying Mini Feed description.

**Alternative:** re-describe from scratch — rejected as violates DRY and risks diverging from already-verified Mixer/Scenes/Sources docs.

### D3: Focused per-element header captures, not full canvas re-captures

For each of the 5 elements: select the tile in `Test Elements` or `Test Elements 2` (whichever shows it) → `capwin.ps1` header close-up → click header button (⋮ / ⚙ / ✕ / + / filter) → capture dialog/palette → `ESC` → fresh verify (list still `Test Elements`/`Test Elements 2` + palette 9 items). Reuse prior canvases `slobs-layout-canvas-test-elements*.png` and palette `slobs-layout-add-element-dialog.png` where sufficient; only add new focused shots `slobs-layout-{minifeed,legacy,audiomixer,sceneselector,sourceselector}-{header,gear,filter}.png` as needed (≤10 new files).

**Alternative:** re-capture entire Layout Editor steady state — rejected as redundant with `slobs-layout-editor.png` 142K.

### D4: Keep palette stub suspension

The Elements palette stub remains “an Add Element palette exists (9 items)” with one capture; per-group enumeration (Essentials/Capture/…) stays deferred as before. The 5 element sections each cross-link to palette context but do not re-list groups.

## Risks / Trade-offs

- [Legacy Events distinctness unclear until captured] → If its header buttons look identical to Mini Feed after capture, adjust wording to “shares chrome with Mini Feed except …” rather than claiming full distinctness; observer will confirm.
- [Audio Mixer compact vs full dock] → If layout-embedded Mixer shows a compact row (fewer icons) vs Mixer dock's lock/gear rows, note “compact variant of `mixer.md`” and mark any missing mute/speaker as gap; still cross-link to `mixer.md` for row semantics.
- [Scene/Source Selector `+` may be palette `+` vs panel `+`] → If tile header `+` opens the same `Add Element` palette (9 items) rather than the Scenes/Sources `+` dialogs (411K/712K), document that and cite palette evidence instead; cross-link still holds for eye/visibility semantics.
- [Observer coordinate imprecision (20–120px)] → Reuse marker calibration `calib-win.ps1` variant before any header-button click batch, as in prior layouts captures; fallback to absolute `click.ps1` screen coords if window-relative misses.
- [Accidental delete of test layouts/elements] → All flows cancelled via `ESC` per non-destructive protocol; never confirm Save/Remove, fresh verify after each batch.

## Migration Plan

No application code changes. Deepen `tools/streaming-software/streamlabs-desktop/layout-editor.md` with 5 subsections and update its `## Evidence gaps` to shrink `per-element properties` bullet to “other elements still deferred”; no new files. Evidence stays in `/mnt/d/Twitch/shots/` (`slobs-layout-minifeed-*` etc., `slobs-layout-legacy-*` etc.). Run `validate-evidence.js` / `validate-links.js` (no `rebuild-index.js` unless listing changes). Rollback is deleting the added subsections and ignoring the outside-repo PNGs.

## Open Questions

- Does `Legacy Events` tile show a different filter set than `Mini Feed` tile (e.g., legacy event types vs Mini Feed's modern)? One header + gear capture per tile will answer.
- Does `Scene Selector` tile list mirror `Untitled` 6 scenes exactly, and does `Source Selector` tile list mirror `Text (GDI+)` / `Image 3` Sources list exactly, or a separate layout-scoped list?
- Are header controls ⋮ / ⚙ / ✕ consistent across all 5 tiles, or does Audio Mixer omit ✕ (since removing Mixer would be destructive)?
