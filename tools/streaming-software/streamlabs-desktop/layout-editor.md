---
title: "Streamlabs Desktop — Layout Editor"
category: "streaming-software"
type: "Desktop application"
parent: "Streamlabs Desktop"
platforms:
  - Windows
  - macOS
price: "Freemium"
url: "https://streamlabs.com"
version: "1.21.9"
app-evidence: "/mnt/d/Twitch/shots/"
last-reviewed: 2026-08-21
---

# Streamlabs Desktop — Layout Editor

> Reference for the in-app Layout Editor in Streamlabs Desktop (v1.21.9, Windows): layouts are app-only containers under Editor → Layout Editor, distinct from stream-visible scenes — documented strictly from captured app evidence.

For Scenes (stream-visible) see [Scenes & Transitions](scenes-and-transitions.md) and for source types see [Sources](sources.md). For the left navigation, see [Sidebar Reference](sidebar-reference.md); for the hub see [Streamlabs Desktop](overview.md).

## How to open

**Editor → Layout Editor** opens the Layout Editor. In the left sidebar under the **Editor** expander, click **Layout Editor** — it becomes highlighted in **teal** when active (white/gray when not).

Evidence: `slobs-layout-editor.png` (teal `Layout Editor` with grid icon at ~65,175), `slobs-layout-canvas-test-elements.png` (white `Layout Editor` when Editor view active).

## Layouts vs scenes

- **Scenes** are *stream-visible* containers shown on stream, grouped in Scene Collections like `Untitled` (see [Scenes & Transitions](scenes-and-transitions.md)). The Scenes panel header reads `Untitled ⊕` and the canvas shows the stream preview.
- **Layouts** are *app-only* containers seen only inside **Layout Editor**. They live under `Editor → Layout Editor` and never go directly to stream. They use a `Layouts` header and a 2×3 grid of layout thumbnail tiles, plus an `Elements` palette below.

If you are choosing where to arrange what viewers see on stream, use Scenes; if you are arranging helper panels inside the app, use Layouts.

Evidence: `slobs-layout-editor.png` (Layouts + Elements + canvas inside Layout Editor), `slobs-layout-canvas-test-elements.png` (Editor view with `Untitled` scene list and `Mini Feed` — stream-visible side), `slobs-protocol-addscene-open.png` (Scenes `Untitled` reference).

## Layouts list

The **Layouts** section is a left-panel list with header **Layouts** in teal and a 2-column × 3-row grid of **6 layout thumbnail tiles** (each a wireframe of panel divisions). The grid has a vertical scrollbar. One tile has a highlighted border when selected (active layout). Below it, the **Elements** section header reads `Elements` in teal with subtext `Drag and drop to edit.`

In the captured environment the list shows at least the two live layouts **Test Elements** and **Test Elements 2** as the selected/usable entries (the remaining tiles are layout templates; the 6-tile grid is capturable).

Evidence: `slobs-layout-editor.png` (Layouts header at ~140,90; grid ~120–230,120–280; Elements header ~140,295; bottom-left selected tile), `slobs-layout-list.png` (95K zoomed grid: 6 tiles, bottom-left selected, header `Layouts` at ~10,5), `slobs-layout-calib.png` (marker calibration for header ⊕ candidates).

## Creating a layout

Click **+** at the **Layouts** header → the **Save New Tab** dialog appears → enter a Name → choose **Save New Tab** or **Cancel**. In the captured dialog:

- Header shows `Add Tab` (green), `?` help icon, layouts dropdown truncated to `Test El...`, red trash icon, and `Save Changes` green on the far right (browsing state)
- Dialog body is centered with title `Save New Tab`, an icon grid (2 rows × 6 columns: broadcast, sliders, bars, chart, lock, list, bulb, heart, globe, film, location, speaker), a **Name** label + empty text input field, and buttons **Cancel** (gray) and **Save New Tab** (green)

The flow is non-destructive when cancelled: click `+` → capture `slobs-layout-create-dialog.png` → press `ESC` → fresh capture `slobs-layout-create-verify.png` shows the same 6-tile grid still present, with `Test Elements` / `Test Elements 2` still exactly 2 user layouts, confirming no persistent change.

Evidence: `slobs-layout-create-dialog.png` (168K, dialog bounds ~630,310–960,520, Name field ~700,430–930,450), `slobs-layout-create-verify.png` (168K, identical verify after ESC), `slobs-layout-editor.png` (pre-state).

## Switching layouts

Click a layout entry in the **Layouts** grid to make it active — the border highlight moves to the clicked tile and the **canvas** swaps to that layout’s placed elements.

Captured:
- Click **Test Elements** → canvas `slobs-layout-canvas-test-elements.png` (106K) — panel arrangement with placed elements (observed: canvas shows layout’s elements; verify via observer re-read)
- Click **Test Elements 2** → canvas `slobs-layout-canvas-test-elements-2.png` (116K) — different arrangement, same palette

Both canvases show the Layout Editor chrome (Layouts + Elements on left, canvas on right), confirming the switch is app-only and does not affect the stream Scene Collection `Untitled`.

Evidence: `slobs-layout-canvas-test-elements.png`, `slobs-layout-canvas-test-elements-2.png`, `slobs-layout-editor.png` (highlight border on bottom-left tile pre-switch).

## Add Element palette (stub)

In Layout Editor, click **+ / Add Element** at the layouts/canvas header area to open the **Elements palette** list — the same 9 items seen under `Elements` in the left panel:

`Mini Feed`, `Legacy Events`, `Editor Display`, `Audio Mixer`, `Scene Selector`, `Source Selector`, `Stream Preview`, `Recording Preview`, `Website` (each with ⋮ grip handle, subtext `Drag and drop to edit`).

The palette is a list, not per-group categories in this minimal capture. The flow is non-destructive: open → capture `slobs-layout-add-element-dialog.png` (163K) → `ESC` → fresh capture `slobs-layout-add-element-verify.png` (163K) shows the same 9 items, confirming no persistent addition.

Full per-group enumeration (Essentials / Capture / Video & Audio / Media / Widgets) as in `sources.md` is intentionally deferred for this minimal increment — it may or may not equal this 9-item Elements list; see Evidence gaps.

Evidence: `slobs-layout-add-element-dialog.png`, `slobs-layout-add-element-verify.png` (identical verify), `slobs-layout-editor.png` (Elements header at ~140,295, list ~120–240,340–650, 9 items).

## Canvas basics

The canvas is the large right-hand area (approx. 350,100–1460,840) showing the active layout’s grid cells. In the captured Layout Editor, cell labels are visible: `Editor Display` (large top-left), `Mini Feed` (middle-center), bottom row `Scene Selector`, `Source Selector`, `Audio Mixer`; in the create-dialog canvas variant: bottom row `Stream Preview`, `Recording Preview`, `Website` with URL `https://poll.ma.pe/overlay/72832866932b33b61688d2…`.

Selecting a placed element in **Test Elements** captures `slobs-layout-element-selected.png` (150K). When bounds/handles are visible on that canvas, they indicate the element can be selected; drag to move and resize via handles would be the expected interaction. In the current captures, selection bounds/handles and drag/resize/layering were not systematically observed beyond the selected-state capture — see gaps.

Evidence: `slobs-layout-element-selected.png` (150K, single element selected), `slobs-layout-editor.png` (cell labels), `slobs-layout-canvas-test-elements.png`.

## Element buttons (app-only tiles)

The grid cells in `Test Elements` each expose header chrome. Where a header close-up was not legible (`slobs-layout-minifeed-header.png` cropped 184,22→428,66 at 4× still blurry per observer), claims are cited via whole-layout evidence and marked unverified.

### Mini Feed

Header bar dark with white bold `Mini Feed` left. Buttons right of label as observed in whole-layout captures: forward arrow (stream preview control), bell / notification, `||` filter/list, play ▶, skip-next ⏭, muted speaker 🔇, speaker — all small icons to the right of the label. No ⋮, ⚙, ✕ individually resolved at this scale. Body shows placeholder `There are no events to display` when empty.

Evidence: `slobs-layout-editor.png` (mid-center Mini Feed tile, header bar at ~192,30–420,58), `slobs-layout-minifeed-header.png` (cropped 184,22→428,66 976×176 — still blurry, buttons cut off per observer; cite whole-layout instead), `slobs-layout-canvas-test-elements.png` (panel body).

Header button-level detail (which icon is filter vs pause, exact order `⋮/⚙/✕` if present) — I couldn't verify this at the captured resolution — see gaps.

### Legacy Events

Distinct from Mini Feed — do not copy Mini Feed description. Palette item `Legacy Events` is available in the Elements list (9 items total) but is separate from Mini Feed; its tile chrome was not individually captured as a placed header in the current layout canvases (observer: not visible as placed tile in `slobs-layout-editor.png`). Header buttons and filter set for this tile are expected to differ (legacy event types) but were not observed as a placed header.

Evidence: `slobs-layout-editor.png` (palette list shows Legacy Events as separate entry below Mini Feed), `slobs-layout-add-element-dialog.png` (palette 9 items).

Legacy Events header buttons / filter set — I couldn't verify this (no placed-header capture for this tile).

### Audio Mixer

Header buttons and rows are **identical to the Mixer dock** (see [Mixer](mixer.md)). The layout-embedded tile reuses the same row chrome: volume sliders, mute/speaker, gear ⚙ / lock icons, meters as documented for `Desktop Audio −10.8 dB` and `Mic/Aux 0.0 dB`.

Evidence: `slobs-layout-editor.png` (bottom row `Audio Mixer` cell), `slobs-protocol-addscene-open.png` (Mixer rows evidence for volume/mute/gear/lock as cited in `mixer.md`), `slobs-layout-minifeed-header.png` (whole-layout header context for tile position).

Per-row drag handle ⋮ or tile-specific filter detail beyond the shared Mixer rows — I couldn't verify this at this header scale.

### Scene Selector

Chrome is **the same as the Scenes panel** (see [Scenes & Transitions](scenes-and-transitions.md)). Header shows `+` at Scenes `296,578` and eye visibility toggles per scene entry; the `+` opens the same `Add Scene` dialog semantics.

Evidence: `slobs-layout-editor.png` (bottom row `Scene Selector` cell), `slobs-protocol-addscene-open.png` (Scenes `+` at `296,578` and eye toggles as shown in Scenes panel — reuse existing `scenes-and-transitions.md` evidence).

Tile-local `+`/eye close-up for this grid cell — I couldn't verify this beyond the shared panel evidence.

### Source Selector

Chrome is **the same as the Sources panel** (see [Sources](sources.md)). Header shows `+` at Sources `676,578` and eye visibility per source entry; the `+` opens the same `Add Source` dialog semantics with Essentials / Capture / Video & Audio / Media / Widgets groups.

Evidence: `slobs-layout-editor.png` (bottom row `Source Selector` cell), `slobs-protocol-addscene-open.png` (Sources `+` at `676,578` and eye toggles as shown in Sources panel — reuse existing `sources.md` evidence via `slobs-protocol-addscene-open.png`).

Tile-local `+`/eye close-up for this grid cell — I couldn't verify this beyond the shared panel evidence.

## Evidence gaps

- **Layout duplicate / rename / remove** — no capture of per-layout right-click, gear, or trash flow for duplicating/renaming/removing a layout was captured; the red trash icon in the top bar was not clicked and no context menu was opened — I couldn't verify this.
- **Per-group palette enumeration** — only one 9-item Elements palette was captured (`Mini Feed` through `Website`); whether this palette has groups (Essentials / Capture / Video & Audio / Media / Widgets) like `sources.md` was not observed — I couldn't verify this.
- **Other elements (Editor Display, Stream Preview, Recording Preview, Website) per-element properties** — header buttons and properties for the remaining 4 Elements palette items beyond the 5 documented tiles (Mini Feed, Legacy Events, Audio Mixer, Scene Selector, Source Selector) remain deferred; per-element position/size/rotation/layers/filters/gear for those 4 not captured — I couldn't verify this.
- **Deleting elements / layouts** — no delete confirmation dialog was opened (all flows cancelled via `ESC` per non-destructive protocol); I couldn't verify this.
- **Layout vs Scene Collection interaction** — whether changing layouts affects the Scene Collection `Untitled` or vice versa was not tested beyond verifying the Scenes list stayed `Untitled` with 6 scenes after layout switches; deeper interaction is unverified — I couldn't verify this.
- **Whether layouts can be made stream-visible** — no `Send to Stream` toggle or equivalent was observed in any Layout Editor capture; app-only boundary is as observed, but a hidden toggle would be unverified — I couldn't verify this.
- **Layouts header ⊕ precise coordinate** — header `+` at layouts was captured via dialog but its exact window-relative coordinate was not marker-calibrated beyond the Scenes `+` at (296,578); coordinate remains estimated — I couldn't verify this precisely.
