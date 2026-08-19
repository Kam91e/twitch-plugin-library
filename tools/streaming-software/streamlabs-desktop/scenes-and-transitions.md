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
last-reviewed: 2026-08-01
---

# Streamlabs Desktop — Scenes & Transitions

> Streamlabs Desktop inherits OBS's scene-and-source model but wraps it in a guided, beginner-friendly interface — so organising your stream layout and moving smoothly between scenes is more approachable than in OBS.

## Overview

Scenes are the building blocks of your stream layout. Each scene represents one visual state of your broadcast — a "Starting Soon" screen, a "Gameplay" view with game capture and webcam, a "Just Chatting" view, a "BRB" screen, an "Ending" screen, and so on. Every scene contains its own set of sources (game capture, camera, overlays, browser sources), and transitions control how the stream visually moves from one scene to the next.

Because Streamlabs Desktop is built on the OBS engine, it inherits OBS's core scene concepts: scenes as containers, sources layered within them, and transitions between them. What sets it apart is the guided experience — setup wizards, starter themes, and a more visual interface make the same concepts easier for beginners to grasp than in raw OBS Studio.

## Configuration

### Creating a Scene

1. In the **Scenes** panel (bottom-left of the app), click the **+** button
2. Name the scene (e.g., "Starting Soon", "Gameplay", "BRB", "Ending")
3. Add sources to the scene by clicking **+** in the **Sources** panel
4. Right-click a scene for options such as **Duplicate**, **Rename**, and **Remove**

Many starter themes and the guided setup create a basic set of scenes for you, which you can then duplicate and customise rather than starting from scratch.

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

## Tips

- Let the guided setup or a starter theme generate an initial set of scenes, then duplicate and modify them — far easier than building every scene by hand
- Use consistent scene naming conventions (e.g., "Game - Valorant", "Game - Variety", "IRL - Desk") so you always find the right scene mid-stream
- Keep a simple "BRB" or "Emergency" scene with just your facecam and a plain background for when something goes wrong
- Be disciplined about source order: overlays on top, game capture below, webcam in the middle — check each scene after adding a source
- Set a hotkey for every scene you use regularly so you can switch without touching the mouse
- For a professional touch, pair your scene workflow with Instant Replay — see the dedicated replay scene setup in [Streamlabs Desktop — Audio & Hotkeys](audio-and-hotkeys.md)
