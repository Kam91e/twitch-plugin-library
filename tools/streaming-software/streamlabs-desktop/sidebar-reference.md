---
title: "Streamlabs Desktop — Sidebar Reference"
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

# Streamlabs Desktop — Sidebar Reference

> Reference for the Streamlabs Desktop left navigation sidebar (v1.21.9, Windows): every entry top-to-bottom, its control type, expand/collapse behaviour, and what clicking it does — documented strictly from captured app evidence.

For a general introduction to the application, see [Streamlabs Desktop](overview.md).

## Sidebar Behaviour

The sidebar is a vertical navigation rail on the left edge of the main window. It mixes two control types:

- **Expander headers** — section labels (Editor, Overlays, App Store, Dashboard) that toggle a list of sub-items. A caret points **^** when the section is expanded and **v** when collapsed. Clicking the label toggles the section.
- **Standalone buttons** — single-click navigation entries with no children (Highlighter, Recordings, Get Ultra, Get Help, Settings), plus the account menu pinned at the bottom.

Verified interaction rules:

- **No accordion** — multiple expander sections can be open at the same time; expanding one does not close another.
- **Selection highlight** — the active/selected item is highlighted in teal.
- **Vertical scrolling** — the sidebar scrolls when expanded content overflows. With all four expander sections open, the list grows past the window height and the **Editor** header is clipped until you scroll (`slobs-sidebar-scrolled.png`).

Evidence: `slobs-sidebar-collapsed.png`, `slobs-sidebar-editor-expanded.png`, `slobs-sidebar-overlays-expanded.png`, `slobs-sidebar-appstore-expanded.png`, `slobs-sidebar-dashboard-expanded.png`, `slobs-sidebar-scrolled.png`, `slobs-calib-win-fresh.png`.

## Sidebar Entries (Top to Bottom)

The full order as captured in v1.21.9:

1. **Editor** (expander)
2. **Overlays** (expander)
3. **App Store** (expander)
4. **Highlighter** [beta] (standalone)
5. **Recordings** (standalone)
6. **Get Ultra** (standalone, crown icon)
7. **Dashboard** (expander)
8. **Get Help** (standalone)
9. **Settings** (standalone, gear icon)
10. **Account menu** (bottom, shows the signed-in account name)

### Editor

Expander header at the top of the sidebar. Contains three sub-items:

1. **Editor** — the default Editor view showing the stream preview canvas, `Untitled` scene list and Sources/Mixer below
2. **Layout Editor** — clicking opens the **Layout Editor** panel (app-only, not on stream) with header `Layouts` (6 tiles) and `Elements` palette (9 items: Mini Feed, Legacy Events, Editor Display, Audio Mixer, Scene Selector, Source Selector, Stream Preview, Recording Preview, Website) and a canvas showing the active layout’s grid (e.g., Editor Display / Mini Feed / Scene Selector / Source Selector / Audio Mixer). The sidebar item becomes highlighted in **teal** when active. Distinct from Scenes which are stream-visible (see [Layout Editor](layout-editor.md) vs [Scenes & Transitions](scenes-and-transitions.md)).
3. **Studio Mode** — not verified in this session

Evidence: `slobs-sidebar-collapsed.png` (collapsed), `slobs-sidebar-editor-expanded.png` (expanded, sub-items visible), `slobs-layout-editor.png` (Layout Editor teal highlight, Layouts grid 6 tiles, Elements 9 items, canvas with Editor Display / Mini Feed etc — v1.21.9).

### Overlays

Expander header. Contains two sub-items:

1. **Scene**
2. **Alerts and Widgets**

Evidence: `slobs-sidebar-overlays-expanded.png`.

### App Store

Expander header. Contains two sub-items:

1. **Apps Store Home**
2. **Apps Manager**

Evidence: `slobs-sidebar-appstore-expanded.png`.

### Highlighter

Standalone entry labelled **Highlighter [beta]** — the beta tag is part of the label. No sub-items.

Evidence: `slobs-sidebar-nav-highlighter.png`.

### Recordings

Standalone entry. No sub-items. Captured between Highlighter and Get Ultra in the fixed order above.

Evidence: `slobs-sidebar-collapsed.png`.

### Get Ultra

Standalone upsell entry with a **crown icon**, promoting the paid Ultra subscription. No sub-items.

Evidence: `slobs-sidebar-collapsed.png`.

### Dashboard

Expander header below Get Ultra. Contains six sub-items:

1. **Dashboard Home**
2. **Cloudbot**
3. **Alert Box Settings**
4. **Widgets**
5. **Tip Settings**
6. **Multistream**

**Dashboard Home** opens the Streamlabs web dashboard in an **external browser** rather than inside the app — the captured browser tab loads a blank page while the login token resolves (`slobs-calib-after-scroll.png`). Behaviour of the remaining five sub-items was not captured in this session.

Evidence: `slobs-sidebar-dashboard-expanded.png`, `slobs-calib-after-scroll.png`.

### Get Help

Standalone entry near the bottom of the rail. No sub-items.

Evidence: `slobs-sidebar-collapsed.png`.

### Settings

Standalone entry with a **gear icon**. No sub-items.

Evidence: `slobs-sidebar-nav-settings.png`.

### Account Menu

Pinned at the very bottom of the sidebar, showing the signed-in account name (**kameo_s** in the capture environment). The menu's contents and click behaviour were **not captured** — **I couldn't verify this**.

Evidence: `slobs-sidebar-collapsed.png` (entry visible only; contents unverified).

## Right-Click Menus

No right-click/context menu on any sidebar entry was captured in this session. Whether sidebar items have context menus is **unverified**.

## Dropdowns & Dialogs

None observed from sidebar interactions. The ^/v carets are expander toggles, not dropdown controls, and no dialog was triggered by any sidebar click during capture.

## Evidence gaps

- **Account menu contents** — the bottom account entry (kameo_s) was never clicked; its menu items are unknown.
- **Right-click menus** — no context-menu captures exist for any sidebar entry.
- **Sub-item destinations** — Dashboard Home's external browser and **Layout Editor's** panel (Layouts 6 tiles + Elements 9 items + canvas, teal highlight — `slobs-layout-editor.png`) were verified. What Editor, Studio Mode, Scene, Alerts and Widgets, Apps Store Home, Apps Manager, Cloudbot, Alert Box Settings, Widgets, Tip Settings, Multistream, Highlighter, Recordings, Get Help, and Settings open in-app was not individually captured.
- **Teal highlight target** — the active-item teal highlight was observed, but which entry was selected in each capture was not systematically recorded.
- **Scroll limits** — scrolling was verified qualitatively (clipped Editor header with all four expanders open); exact viewport thresholds were not measured.
