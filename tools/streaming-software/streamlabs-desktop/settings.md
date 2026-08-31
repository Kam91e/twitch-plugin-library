---
title: "Streamlabs Desktop — Settings"
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

# Streamlabs Desktop — Settings

> Reference for the Streamlabs Desktop Settings window (v1.21.9, Windows): how to open it from the sidebar, and its expected configuration sections — documented strictly from captured app evidence. The Settings window itself was **not captured successfully**, so all section contents below are explicitly marked unverified.

For a general introduction to the application, see [Streamlabs Desktop](overview.md); for the sidebar entry this page starts from, see [Streamlabs Desktop — Sidebar Reference](sidebar-reference.md).

## Opening Settings

**Settings** is a standalone navigation item in the left sidebar — a single-click entry with a **gear icon**, no caret, and no sub-items. Clicking **Settings** in the sidebar is the documented way to open the Settings window. As with other sidebar entries, the item receives the teal active highlight when selected. The entry sits near the bottom of the rail and remains reachable when the sidebar scrolls under expanded content.

Evidence: `slobs-sidebar-nav-settings.png`, `slobs-sidebar-collapsed.png`, `slobs-sidebar-scrolled.png`.

## Panel Content

Clicking Settings is expected to open the Settings window as a separate modal. **This modal was not captured**: the screenshot intended to show it (`slobs-settings-window.png`) displays the App Store view instead, so the Settings window is **not visible** in any existing capture. Its layout, navigation arrangement, and controls are unverified — **I couldn't verify this**.

One unrelated observation from the same session: clicking **Dashboard Home** opens the Streamlabs web dashboard in an external browser, which loads a blank page while the login token resolves (`slobs-calib-after-scroll.png`). This documents Dashboard behaviour, not Settings behaviour, and is noted here only because it occurred during the same capture pass.

Evidence: `slobs-settings-window.png` (failed capture — shows App Store view, not Settings), `slobs-calib-after-scroll.png` (Dashboard Home external-browser behaviour).

## Expected Sections (Unverified)

Per the documentation spec, the Settings window is expected to contain the following sections:

- **General**
- **Stream**
- **Output**
- **Audio**
- **Video**
- **Hotkeys**
- **Scene Collections**
- **Appearance**
- **Notifications**
- **Advanced**

None of these sections were captured as distinct visible panels, so every one of them is **unverified** — **I couldn't verify this**. No individual options from any section were captured either, so no options are documented here. Key options (the settings a new streamer would need for first-time setup) were **not captured** and remain unknown pending a successful capture of the window.

Evidence: none — the only attempted capture, `slobs-settings-window.png`, shows the App Store view instead of the Settings window.

## Evidence gaps

- **Settings window appearance** — the modal was never successfully captured; `slobs-settings-window.png` shows the App Store view instead of Settings.
- **Whether Settings opens as a separate modal** — stated per spec, but not visually confirmed by any capture.
- **All ten expected sections** (General, Stream, Output, Audio, Video, Hotkeys, Scene Collections, Appearance, Notifications, Advanced) — none captured as distinct visible panels; their existence in v1.21.9 is unverified.
- **Individual options within each section** — no option, toggle, dropdown, or input field inside Settings was captured; nothing is documented at option level.
- **Key first-time-setup options** — not captured; cannot be described without inventing details.
- **Post-click behaviour** — what actually appears after clicking the sidebar Settings entry was not observed beyond the failed capture above.
