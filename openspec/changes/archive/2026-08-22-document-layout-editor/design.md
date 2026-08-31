## Context

The Streamlabs Desktop docs in `tools/streaming-software/streamlabs-desktop/` now cover v1.21.9 scenes vs sources as stream-visible containers (`scenes-and-transitions.md` / `sources.md`, sidebar, mixer, settings backed by `/mnt/d/Twitch/shots/` evidence). What remains unverified is `Editor → Layout Editor`: `sidebar-reference.md` lists `Editor / Layout Editor / Studio Mode` as sub-items but explicitly marks “what Editor, Layout Editor, Studio Mode … open in-app was not individually captured” as a gap. The user clarified the mental model: **Scenes are shown on stream, layouts are seen only in the app** under `Editor → Layout Editor`. Two live layouts `Test Elements` and `Test Elements 2` now exist under Editor as evidence harnesses. The previous evidence pipeline (Electron = empty accessibility tree, so UIA dump fails; screenshot + observer verification with `slobs-*` PNGs in `/mnt/d/Twitch/shots/`, coordinate calibration via `calibrate.ps1` / `calib-win.ps1`, non-destructive open→capture→cancel via `ESC` + fresh verify) already proved workable for scenes/sources and can be reused verbatim for layouts. The follow-up must stay minimal: one page for the Layout Editor chrome + palette stub, leaving the full per-group / per-element catalog for a later change.

## Goals / Non-Goals

**Goals:**
- Document the real Layout Editor v1.21.9 UI as app-only (not stream): how to open, layouts list, layouts vs scenes distinction, creating a layout (+ → name dialog → appears), switching layouts (click → canvas swaps), opening the Add Element palette (+ → palette → `ESC`), and canvas basics (selection bounds/handles if observed) — all screenshot + observer verified, `v1.21.9` pinned, gaps marked.
- Use `Test Elements` / `Test Elements 2` as living canvases showing placed elements (no need to enumerate every element type yet — single palette shot suffices).
- Keep evidence outside the repo (`slobs-layout-*` under `/mnt/d/Twitch/shots/`), validate via `validate-evidence.js` / `validate-links.js` / `rebuild-index.js`, and never modify the user’s real layouts except temp create→cancel.

**Non-Goals:**
- Not the full elements catalog (per-group Essentia/Capture/Media/Widgets enumeration, per-element properties like position/size/rotation/layers/filters) — deferred and explicitly marked as `## Evidence gaps`.
- Not scene / scene-collection depth (already covered), not Streamer.bot Streamlabs connection, not web dashboard / mobile.
- Not a general UI automation framework — only the 5–6 `slobs-layout-*` captures and the two canvas captures needed for minimal closure.
- Not a duplicate of `sources.md` catalog — cross-link to it instead of forking.

## Decisions

### D1: One minimal page `layout-editor.md` + small cross-links (Option 1 from explore)

Add `tools/streaming-software/streamlabs-desktop/layout-editor.md` (D5 reference pattern: panel content top-to-bottom, control types, click behaviors, Evidence line + `## Evidence gaps`, `v1.21.9` pin) and only touch `sidebar-reference.md` (add teal-highlight + destination line for `Layout Editor`), `overview.md` (add `UI Reference (v1.21.9)` entry for Layout Editor), and a contrast note in `sources.md` / `scenes-and-transitions.md` (`layout vs scene`). No second page yet.

**Alternatives considered:** single combined `layouts-and-elements.md` (one heavy page enumerating groups) — rejected as it forces 8–12 captures and duplicates `sources.md`; two pages `layout-editor.md` + `elements.md` — rejected as over-scoped for “minimal then expand,” creates sync burden between two catalogs. Minimal first keeps observer cost low and leaves a clean deferral.

### D2: Reuse screenshot + observer + `ESC` restore pipeline from `document-streamlabs-desktop-ui`

Same as the last change’s D1–D4: `capwin.ps1` / `slobs-click.ps1` (window-relative + screen conversion via `rect (-8,-8,1936x1056)`), `click.ps1` at absolute screen, `calib-win.ps1` marker calibration before any click batch (sidebar scroll showed we need re-calibrate after layout changes), open→capture→cancel with `ESC` + fresh `capwin.ps1` verify that `Test Elements` / `Test Elements 2` count and names are unchanged. Evidence cited as backtick `slobs-layout-*` files under `/mnt/d/Twitch/shots/`.

**Alternatives considered:** `--force-renderer-accessibility` (needs app restart, user rejected), Streamlabs local API (no listener), UIA InvokePattern (empty tree) — all rejected for same Electron reason as before.

### D3: Evidence and tooling stay outside the repo

All new captures `slobs-layout-*` (open, create-dialog, palette, two canvases) and any temporary `slobs-layout-*.ps1` markers live in `/mnt/d/Twitch/shots/`, cited by backtick filename so `validate-evidence.js` can verify existence without committing PNGs. Keeps GitHub history clean, matches the existing `sb-*` / `slobs-*` convention.

### D4: Non-destructive layout creation for the “new layout” flow

Create a temporary layout `Temp Layout` (or similar) via the `+` at the layouts header (`⊕` pattern like Scenes `+` at `(296,578)` window-relative) → capture dialog → `ESC` → fresh capture verifying the list is back to exactly `Test Elements` / `Test Elements 2`. Never confirm a real Remove/Delete. This proves the flow without touching the user’s harnesses.

### D5: Explicit layouts-vs-scenes framing and deferred catalog

The page’s Overview must state in one paragraph that layouts are app-only vs scenes are stream-visible, so readers don’t conflate the two `+` flows. The palette stub says “an Add Element palette exists” with one capture (`slobs-layout-add-element-dialog.png`) and cross-links to `sources.md` for the type taxonomy, rather than re-listing Game Capture / Screen Capture / Spout2 / Widgets groups now. Full per-group enumeration, per-element gear/position/size/rotation/layer, and layout duplicate/rename/remove are all listed as `## Evidence gaps` with `I couldn't verify this` zero-hallucination markers.

### D6: Cross-link placement follows the existing hub pattern

`overview.md` already has a `## UI Reference (v1.21.9)` section listing sidebar/mixer/settings/scenes/sources (added in the last change). Adding `Layout Editor` there keeps the hub as the single entry point, and `sidebar-reference.md` / `sources.md` / `scenes-and-transitions.md` each get a one-line contrast note, so no new navigation system is needed.

## Risks / Trade-offs

- [Layouts `+` coordinate may not be at Scenes `(296,578)`] → Run `calib-win.ps1` variant for layouts header before any click batch; probe with marker overlay and observer confirmation, retry with absolute `click.ps1 (screen)` if window-relative `slobs-click.ps1` misses.
- [Layout Editor palette may equal the sources Add Source list (`slobs-addsource-dialog.png` 712KB)] → If observer says lists are identical, keep the page minimal and cross-link to `sources.md` instead of duplicating — still covers the stub requirement.
- [Test Elements canvases may show many different element types at once] → Observer will see bounds/handles even if we don’t enumerate each type; we document “canvas shows placed elements” and defer per-type property docs to gaps, avoiding hallucination.
- [Layout list growth may cause scrolling like sidebar did] → If `Test Elements` + `Test Elements 2` + temp layout overflow, the list may scroll and clip the header; re-calibrate and note scroll behavior as a gap if needed.
- [App-only vs stream-visible boundary may be blurry (is there a “Send to Stream” toggle hidden?)] → If not observed in any capture, explicitly mark “whether layouts can be made stream-visible is unverified.”
- [Observer coordinate imprecision (20–120px) seen in last change] → Always use marker calibration + `SetCursorPos` + `mouse_event` (`click.ps1`) pattern; avoid `SendInput` (blocked) and UIA click.
- [Accidental destructive click during layout palette exploration] → Same non-destructive protocol as last change: never confirm Delete/Remove, always `ESC` + fresh verify.
- [Two canvases look similar and may confuse evidence] → Name evidence deterministically: `slobs-layout-canvas-test-elements.png` and `slobs-layout-canvas-test-elements-2.png`, each captured after explicit click on that layout entry, so future `validate-evidence` and readers can tell them apart.

## Migration Plan

No application code changes. One new markdown file `layout-editor.md` plus ≤3 small cross-link edits (`sidebar-reference.md`, `overview.md`, plus a one-line contrast note in `sources.md` / `scenes-and-transitions.md`). Evidence lives only in `/mnt/d/Twitch/shots/` (`slobs-layout-*`). `rebuild-index.js` / `validate-links.js` / `validate-evidence.js` run after the page lands; rollback is deleting the markdown file(s) and ignoring the outside-repo PNGs. The deferred element catalog can be added later without touching the minimal page except to shrink its gaps.

## Open Questions

- Are there more than the two `Test Elements` layouts after today’s captures (did the user create a third harness, or should the spec pin exactly “2 layouts” as the evidence set)?
- Does the Layout Editor palette really equal the sources dialog `slobs-addsource-dialog.png` groups (Essentials/Capture/Media/Widgets) or is it a distinct set (e.g., “Elements” with different grouping)? One palette capture will answer.
- Is there a layout duplicate/rename/remove right-click or gear, or only a top-row `⊕`/`⋯` control? That determines whether those lifecycle gaps stay unverified for minimal or become capturable for the next increment.
