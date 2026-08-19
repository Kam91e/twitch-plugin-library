---
title: "OBS Studio — Scenes and Transitions"
category: "streaming-software"
type: "Desktop application"
platforms:
  - Windows
  - macOS
  - Linux
price: "Free"
url: "https://obsproject.com"
repo: "https://github.com/obsproject/obs-studio"
last-reviewed: 2026-07-30
---

# Scenes and Transitions

> The organisational backbone of your stream — scenes contain your sources and transitions connect them smoothly.

## Overview

Scenes are containers for your sources. Each scene represents one visual state of your stream: a "Starting Soon" screen, a "Gaming" view with game capture and webcam, a "Just Chatting" view with camera only, a "BRB" screen, and so on. Transitions control how the stream visually moves from one scene to another. Studio Mode adds a professional preview/edit workflow that keeps your stream clean while you prepare the next scene.

## Configuration

### Creating and Managing Scenes

1. In the **Scenes** panel (bottom-left), click the **+** button or right-click → **Add**
2. Name the scene (e.g., "Starting Soon", "Gameplay", "Camera", "BRB", "Ending")
3. Add sources to the scene by clicking **+** in the Sources panel
4. Rearrange scene order by dragging — scenes can be reordered for logical grouping
5. Right-click a scene for options: **Duplicate** (clone a scene and its sources), **Rename**, **Remove**

### Scene Collections

Scene Collections are groups of scenes for different streaming contexts:

- Create a new collection: **Scene Collections → New**
- Switch between collections without losing configuration
- Useful for: different games with different layouts, IRL vs desktop streaming, event-specific setups
- Each collection remembers its own sources, settings, and hotkeys

### Studio Mode

Studio Mode separates your stream into two views:

| Side | Purpose |
|------|---------|
| **Preview** (left) | Edit and arrange sources without affecting the live stream |
| **Program** (right) | What viewers are currently seeing |

Workflow:
1. Enable Studio Mode: **Controls → Studio Mode** (or **View → Studio Mode**)
2. Edit the Preview scene freely — add, move, resize sources
3. When ready, click **Transition** (or press the configured hotkey) — the Preview scene replaces Program
4. The former Program scene moves to Preview, ready for the next edit

This is the standard workflow for professional streams — no one ever sees you fumbling with source positions.

### Transitions

Transitions smooth the visual change between scenes. Set a **Global Transition** (used by default) or override per scene.

**Transition types:**

| Type | Description |
|------|-------------|
| **Cut** | Instant switch — no animation. Use for fast-paced cuts or when you want immediate change |
| **Fade** | Current scene fades out as the new scene fades in. The standard "smooth" transition |
| **Stinger** | Video file with alpha channel plays over the transition. Professional look — requires a video with transparent sections (e.g., an animation that wipes across the screen) |
| **Swipe** | Directional wipe effect — slides the new scene in from a direction |
| **Slide** | Current scene slides off screen as new scene slides on |
| **Luma Wipe** | Uses a grayscale image to determine wipe pattern — creative transitions using custom gradient images |

**Configuring transitions:**
1. Click **Scene Transitions** in the **Controls** panel (or **Tools → Scene Transitions**)
2. Click **+** to add a new transition
3. Choose the type and name it
4. Configure duration (typically 300-500ms for fades, variable for stingers)
5. Set as **Global Transition** (applies to all scene switches) or assign it to specific scene pairs

### Multiview

Multiview shows up to 8 scenes in a grid, with visual indicators for:
- **Red border** — the scene currently live (Program)
- **Green border** — the scene in Preview (Studio Mode)
- **No border** — scenes not currently active

Click any scene thumbnail to switch to it. Right-click to send to Preview instead. Access Multiview from **View → Multiview** or via **Projector → Multiview** for a separate window.

## Tips

- Use distinct scene naming conventions (e.g., "Game - Valorant", "Game - Variety", "IRL - Desk") so you always find the right scene quickly
- Keep a master scene called "Emergency" with just your facecam and a simple background — useful if something goes wrong
- Set a hotkey for each scene you use frequently (Ctrl+1, Ctrl+2, etc.) for keyboard-driven scene switching
- Use Studio Mode from the start — it takes an hour to get comfortable and dramatically improves stream quality
- A stinger transition video is the most professional look; free stinger packs are available from the OBS community
- Test transitions before going live — verify timing and visual effect in Studio Mode's Preview
