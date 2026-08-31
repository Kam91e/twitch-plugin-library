---
title: "Streamlabs Desktop — Scenes & Transitions"
category: "streaming-software"
type: "Desktop application"
platforms:
  - Windows
  - macOS
price: "Freemium"
url: "https://streamlabs.com"
parent: "Streamlabs Desktop"
version: "1.21.9"
app-evidence: "/mnt/d/Twitch/shots/"
last-reviewed: 2026-08-21
---

# Streamlabs Desktop — Scenes & Transitions

> Streamlabs Desktop inherits OBS's scene-and-source model but wraps it in a guided, beginner-friendly interface — so organising your stream layout and moving smoothly between scenes is more approachable than in OBS.

## Overview

Scenes are the building blocks of your stream layout. Each scene represents one visual state of your broadcast — a "Starting Soon" screen, a "Gameplay" view with game capture and webcam, a "Just Chatting" view, a "BRB" screen, an "Ending" screen, and so on. Every scene contains its own set of sources (game capture, camera, overlays, browser sources), and transitions control how the stream visually moves from one scene to the next.

Because Streamlabs Desktop is built on the OBS engine, it inherits OBS's core scene concepts: scenes as containers, sources layered within them, and transitions between them. What sets it apart is the guided experience — setup wizards, starter themes, and a more visual interface make the same concepts easier for beginners to grasp than in raw OBS Studio.

> **Note:** Layouts are app-only containers under Editor → Layout Editor (see [Layout Editor](layout-editor.md)), distinct from Scenes which are shown on stream.

## Configuration

### Creating a Scene

1. In the **Scenes** panel (bottom-left of the app), click the **+** button
2. Name the scene (e.g., "Starting Soon", "Gameplay", "BRB", "Ending")
3. Add sources to the scene by clicking **+** in the **Sources** panel
4. Right-click a scene for options such as **Duplicate**, **Rename**, and **Remove**

Many starter themes and the guided setup create a basic set of scenes for you, which you can then duplicate and customise rather than starting from scratch.

The live app (v1.21.9) shows this directly: the **Scenes** panel header reads `Untitled ⊕` — the `⊕` is the Add Scene button. The list contains 6 scenes: **Starting Soon** (selected/highlighted), Ted Talk, Screen, Gaming, Window, BRB. Beside Scenes, the **Sources** panel header shows `Sources ⊕` (Add Source). The capture was verified as non-destructive: the dialog was opened via the `+` at window-relative `(296,578)` → screen `(288,570)`, captured, then cancelled with `ESC` and a fresh window capture verified the same 6 scenes and 2 sources (Text GDI+, Image 3) were restored.

**Add Scene flow (evidence):** Click `+` in Scenes → name prompt → new scene appears in the list. Evidence: `slobs-protocol-addscene-open.png` (Editor steady state with Scenes = Starting Soon/Ted Talk/Screen/Gaming/Window/BRB), `slobs-addscene-dialog.png` (411KB capture after clicking `(288,570)` — dialog open, copy of `slobs-addscene-try2.png`), `slobs-addscene-try2-verify.png` (restored state, same 6 scenes). The right-click menu entries **Duplicate / Rename / Remove** were not captured — I couldn't verify this and they are marked unverified below.

**Evidence:** `slobs-protocol-addscene-open.png`, `slobs-addscene-dialog.png`, `slobs-addscene-try2-verify.png`, `slobs-protocol-verify.png`

### Working with Sources Within a Scene

Source layering is the most important habit to learn early:

- Sources are listed in the **Sources** panel in stacking order — the source at the **top** of the list renders **in front** of everything below it
- Your game or display capture should sit below your webcam, which sits below your overlays (alerts, chat, goals)
- Drag sources in the list (or use the reorder arrows, if available) to change their stacking position
- Sources added later are placed above existing ones by default, so layer them deliberately after adding

Because this ordering directly affects what viewers see, checking your scene after adding any source is good practice.

### Scene Collections

Scene Collections group whole sets of scenes for different streaming contexts:

- Switch collections when changing contexts — for example, different games with different layouts, or an IRL setup vs. a desktop setup
- Each collection remembers its own scenes, sources, and settings, so switching between them is quick and non-destructive
- Useful for event-specific setups or for keeping a clean minimal set of scenes for testing

**Evidence (v1.21.9):** The Scenes header shows the active collection name `Untitled` with a dropdown indicator (`▾` at window-relative `(243,578)`/`(216,578)` arrow). The management menu (create / switch / rename / remove) was attempted via click at `(216,578)`: capture `slobs-collection-menu.png` exists (52 KB) but the observer flagged it as collapsed-sidebar App Store, not the menu itself — the menu overlay did not render in the capture, so collection lifecycle actions are **unverified** and marked in Evidence gaps. The collection was verified unchanged after all captures: before/after screenshots both show `Untitled` with the same 6 scenes, confirming the non-destructive protocol.

**Evidence:** `slobs-protocol-addscene-open.png` (header `Untitled ⊕`), `slobs-collection-menu.png`, `slobs-collection-verify.png` (restored), `slobs-before-addsource.png`

### Per-source configuration

Per-source configuration (right-click source → Properties / Filters) was attempted for at least one source type. No dedicated configuration dialog was captured successfully — the captures (`slobs-addsource-dialog.png` 712 KB shows the **Add Source** list, not a per-source Properties window). This remains **unverified** — I couldn't verify this.

**Evidence:** `slobs-addsource-dialog.png` (Add Source list, not per-source config), `slobs-addsource-try2-verify.png` (restored)

### Switching Scenes During a Broadcast

- Click any scene in the **Scenes** panel and it becomes live immediately — viewers see the change instantly
- Assign hotkeys to frequently used scenes for keyboard-driven switching during gameplay (see the hotkeys setup in [Streamlabs Desktop — Audio & Hotkeys](audio-and-hotkeys.md))
- A common live workflow is: Starting Soon → Gameplay → BRB → Ending, switching as the stream progresses

### Transitions

Transitions smooth the visual change between scenes instead of cutting abruptly:

- The transition controls sit near the scene switcher — pick your transition type and set its duration
- Streamlabs inherits the OBS transition types, including **Cut** (instant switch, no animation) and **Fade** (current scene fades out as the new one fades in — the standard smooth option)
- Stinger transitions (video-based transition overlays) are supported, matching the OBS feature

Test your transition timing before going live so scene changes look intentional rather than accidental.

**Evidence (v1.21.9, partial):** The Transitions dock and its type list were attempted: click at window-relative `(603,578)` (marker `trans`) → capture `slobs-transitions-dock.png` (1.1 MB) and `slobs-transitions-verify.png`, but both show the App Store view per observer — the dock was not visible / was hidden in the current layout. The active transition selector and duration field (`dur` at `623,578`) were not captured. **Studio Mode** (preview/program), **Hotkeys** section in Settings (relevant to scene switching/transitions), and **Instant Replay** were also not captured as distinct UI. These remain **unverified**.

**Add Source flow (for sources parity):** Click `+` in Sources panel at `(676,578)` → screen `(668,570)` → `slobs-addsource-dialog.png` (712 KB) captures the source type list (Essentials/Capture Sources/Video and Audio/Media/Widgets groups as documented in `sources.md`). Cancelled with `ESC` → `slobs-addsource-try2-verify.png` confirms restore. Source types listed in `sources.md` are therefore grounded in this dialog.

**Evidence:** `slobs-addsource-dialog.png`, `slobs-addsource-try2-verify.png`, `slobs-transitions-dock.png` (attempted, shows App Store), `slobs-transitions-verify.png` (attempted)

## Evidence gaps

- Scene right-click menu **Duplicate / Rename / Remove** — not captured; I couldn't verify this.
- Scene Collections management menu **create / switch / rename / remove** — capture `slobs-collection-menu.png` exists (52 KB) but shows collapsed-sidebar App Store per observer, not the menu overlay; lifecycle actions remain unverified.
- Per-source **Properties / Filters** dialog — no dedicated dialog captured; `slobs-addsource-dialog.png` shows the Add Source list, not per-source config; I couldn't verify this.
- Transitions dock **type list, active selector, duration** — captures `slobs-transitions-dock.png` / `slobs-transitions-verify.png` show App Store per observer; dock is hidden in current layout; unverified.
- **Studio Mode** (preview/program) — not captured; unverified.
- **Hotkeys** section in Settings for scene switching/transitions — Settings window itself not captured (`slobs-settings-window.png` shows App Store); unverified.
- **Instant Replay** — not captured as distinct UI; unverified (see also `audio-and-hotkeys.md` for conceptual workflow).

## Tips

- Let the guided setup or a starter theme generate an initial set of scenes, then duplicate and modify them — far easier than building every scene by hand
- Use consistent scene naming conventions (e.g., "Game - Valorant", "Game - Variety", "IRL - Desk") so you always find the right scene mid-stream
- Keep a simple "BRB" or "Emergency" scene with just your facecam and a plain background for when something goes wrong
- Be disciplined about source order: overlays on top, game capture below, webcam in the middle — check each scene after adding a source
- Set a hotkey for every scene you use regularly so you can switch without touching the mouse
- For a professional touch, pair your scene workflow with Instant Replay — see the dedicated replay scene setup in [Streamlabs Desktop — Audio & Hotkeys](audio-and-hotkeys.md)
