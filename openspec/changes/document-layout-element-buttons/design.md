## Context

After `document-layout-elements` (archived 2026-08-23), `layout-editor.md` (140 lines) contains 5 per-element subsections but was вынужден to use fallback whole-layout citations (`slobs-layout-editor.png` 142K) with explicit “I couldn't verify this at the captured resolution” for header button-level detail — Mini Feed’s 6–7 icon buttons (forward arrow, bell, `||` filter, play, skip-next, mute, speaker), Legacy Events distinct chrome, Audio Mixer rows (identical to `mixer.md`), Scene/Source Selector `+`/eye — because header crops at 44px tall → 4× nearest-neighbor (976×176) remained blurry and live header-region zoom captures via fixer produced no `slobs-layout-{element}-header.png` files (0/10 → 5/10 after fallback). The user clarified: **I wanted to have documented what every button does** — i.e., every ⋮/⚙/✕, filter/pause, volume/mute/gear/lock, `+`/eye pressed and named, not just palette existence — and that **these buttons are only seen in `Test Elements`, not in `Layout Editor`** (the Layout Editor picker only lists 6 layout templates). Observer obs-6 recommended capturing at *higher native resolution* (header rows 50–60px tall before crop, i.e., Windows display scaling 150–200% or capwin2/region-ocr HighQualityBicubic on a wider box with padding) rather than 44px → 4×, and all header captures must be done **inside the `Test Elements` canvas** after selecting it from the Layouts grid.

## Goals / Non-Goals

**Goals:**
- Re-capture header close-ups for the 5 tiles (Mini Feed, Legacy Events, Audio Mixer, Scene Selector, Source Selector) **inside the `Test Elements` canvas** (headers are only there when `Test Elements` layout is selected — not in the `Layout Editor` picker) at higher native resolution so header buttons (⋮ drag handle, ⚙ settings, ✕ remove, plus element-specific filter/pause, volume/mute/gear/lock, `+`/eye) are individually legible and named, all **hover tooltip then press** screenshot + observer verified, `v1.21.9` pinned, gaps marked. First step of every tile is `select Test Elements from Layouts grid → canvas shows 5 tiles` → **hover over every button that has a tooltip to capture what it does, document tooltip text, then press it**.
- Capture **hover for every button that has it** inside `Test Elements`, then press: ⋮, ⚙, ✕, `+`/eye, filter/pause — each hover → tooltip capture `slobs-layout-{element}-{button}-hover.png` (tooltip names the button) → click → capture dialog/palette → `ESC` → fresh verify that `Test Elements`/`Test Elements 2` list is still intact, documenting what each does (cross-link where identical: Audio Mixer → `mixer.md`, Scene/Source Selector → `scenes-and-transitions.md`/`sources.md` already proven at `296,578`/`676,578`; describe where distinct: Legacy Events vs Mini Feed).
- Keep evidence outside repo (`slobs-layout-{element}-{header,hover,gear,filter}.png` at 2× native HighQualityBicubic, never committed) and keep change to single `layout-editor.md` (further deepened).

**Non-Goals:**
- Not the remaining 4 palette items (Editor Display, Stream Preview, Recording Preview, Website) — still deferred.
- Not layout duplicate/rename/remove or `Send to Stream` toggle — still deferred.
- Not a second `elements.md` page — still single `layout-editor.md`.

## Decisions

### D1: Header-region captures at 2× native inside `Test Elements` with hover for every button, not whole-window upscale
Use `capwin2.ps1` / `region-ocr.ps1` + `hover.ps1` flow **after selecting the `Test Elements` layout** (headers are only there, not in the `Layout Editor` picker): select `Test Elements` from the Layouts grid first so its canvas shows the 5 tiles, then select tile header at marker-calibrated center (TileTL 275,167 etc. per `calib-layout.ps1` now inside `Test Elements` canvas), then capture header region only (e.g., Mini Feed header inside `Test Elements` 340×24) at native 50–60px tall, upscale 2–3× HighQualityBicubic (not 44px → 4× nearest-neighbor). Widen X to include full button row with 10px padding. For **every button that has a tooltip**, first **hover** at button center with `hover.ps1` 1.5s dwell → tooltip appears → `capwin.ps1` immediately → `slobs-layout-{element}-{button}-hover.png` to document what hover says, then press. This fixes obs-6’s “too small logical area” root cause and captures hover naming directly.

*Alternatives:* re-crop existing whole-layout captures with wider box (tried 184→428, still 244×44 → 976×176, still blurry) — rejected; accept whole-layout citations (option 2 fallback) — rejected per user’s “every button” requirement; header close-up without hover — rejected per user’s “hover for every button, that has it” requirement.

### D2: Hover for every button then press, per-tile inside `Test Elements` (not single header shot)
For each tile **inside `Test Elements`**: select `Test Elements` layout first so its 5 tiles are visible in the canvas, then select tile → header close-up (`slobs-layout-{element}-header.png`) → **for every header button that has a tooltip**: hover at button center → capture tooltip `slobs-layout-{element}-{button}-hover.png` → document tooltip text (“what hover shows”) → then **click same button** → capture dialog/palette `slobs-layout-{element}-{button}-click.png` (`slobs-layout-{element}-{gear,filter,cross}.png`) → `ESC` → fresh whole-layout verify that `Test Elements`/`Test Elements 2` list is still intact (`slobs-layout-{element}-verify.png`). Never confirm destructive Save/Remove. This proves each button’s hover name and press outcome vs just palette existence.

### D3: Reuse where identical, describe where distinct
Audio Mixer rows remain cross-linked to `mixer.md` (cite `slobs-protocol-addscene-open.png` for rows), Scene/Source Selector `+` still cross-linked to `slobs-addscene-dialog.png` 411K / `slobs-addsource-dialog.png` 712K plus new tile-local header close-up. Legacy Events explicitly contrasted with Mini Feed after capture.

## Risks / Trade-offs

- [Higher DPI capture may still be blurry if source window not scaled] → Mitigate by setting Windows display scaling to 150% before capture batch, then HighQualityBicubic 2×; observer verifies legibility before marking task done.
- [Legacy Events not currently placed] → Must drag from Elements palette (9 items) onto canvas before header exists; if drag fails, capture palette entry header instead and mark placed-header gap.
- [Observer 20–120px imprecision] → Re-calibrate with `calib-layout.ps1` marker overlay before each batch; fallback to absolute `click.ps1` screen coords.
- [Accidental delete of Test Elements] → Never confirm, always `ESC`, fresh verify that layouts list still exactly `Test Elements`/`Test Elements 2` after each batch.

## Migration Plan

No app code changes. Deepen `layout-editor.md` 5 subsections to replace “I couldn't verify this at captured resolution” with verified per-button paragraphs backed by new header-region close-ups at 2× native. Evidence stays in `/mnt/d/Twitch/shots/` (`slobs-layout-{element}-*.png`). `validate-evidence.js`/`validate-links.js` gates; `rebuild-index.js` only if listing changes. Rollback is deleting added button detail paragraphs.

## Open Questions

- Is 150% scaling sufficient for 50–60px native header rows, or is 200% needed for icon detail?
- Are header controls ⋮/⚙/✕ consistent across all 5 tiles, or does Audio Mixer omit ✕?
