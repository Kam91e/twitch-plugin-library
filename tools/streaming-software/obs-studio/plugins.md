---
title: "OBS Studio — Plugins"
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

# Plugins

> The OBS Studio plugin ecosystem — extending functionality through community-developed plugins and scripts.

## Overview

OBS Studio's capabilities can be extended through plugins (compiled C/C++ libraries) and scripts (Lua or Python). The community has developed hundreds of plugins for specialised use cases: network video streaming via NDI, physical control via Stream Deck, automatic scene switching, smooth source transitions, and more. Plugins integrate seamlessly into OBS — they appear as new source types, filters, outputs, tools, or docks as if they were built-in.

## Configuration

### Installing Plugins

**Windows:**
- Most plugins come with an installer — run it and OBS detects the new plugin on next launch
- Manual installation: copy `.dll` and `.pdb` files to `obs-studio/obs-plugins/64bit/`
- Data files (locales, styles) go in `obs-studio/data/obs-plugins/<plugin-name>/`

**macOS:**
- Copy `.plugin` bundle to `/Library/Application Support/obs-studio/plugins/`
- Or use the plugin's installer if provided

**Linux:**
- Copy `.so` files to `/usr/lib/obs-studio/plugins/` (system-wide) or `~/.config/obs-studio/plugins/` (user-specific)
- Many plugins are available via package managers (APT, Pacman, etc.)

### Installing Scripts

1. Place `.lua` or `.py` files in the OBS scripts directory:
   - Windows: `%appdata%\obs-studio\scripts\`
   - macOS: `~/Library/Application Support/obs-studio/scripts/`
   - Linux: `~/.config/obs-studio/scripts/`
2. In OBS, go to **Tools → Scripts**
3. Click **+** and select your script file
4. Scripts appear as dockable panels with their own UI

### Finding Plugins

The primary source for OBS plugins is the **OBS Forums Resources section** ([obsproject.com/forum/resources](https://obsproject.com/forum/resources)). Plugins are also distributed through GitHub releases and occasionally through the plugin author's own website.

### Essential Plugins by Category

#### Network Video

| Plugin | Description |
|--------|-------------|
| **NDI** | Send and receive video/audio over your local network via NDI protocol. Essential for multi-PC setups — capture game feed from a gaming PC to a streaming PC without capture cards |
| **OBS WebSocket** | Built into OBS 28+. Enables remote control of OBS over WebSocket protocol — used by Streamer.bot, Stream Deck, phone apps, and automation tools |

#### Physical Control

| Plugin | Description |
|--------|-------------|
| **Stream Deck** | Official Elgato plugin, lets Stream Deck buttons trigger any OBS action (scene switch, source toggle, audio mute, stream start/stop) |
| **Loupedeck** | Control surface plugin for Loupedeck devices (similar to Stream Deck but with physical dials and buttons) |

#### Scene and Source Automation

| Plugin | Description |
|--------|-------------|
| **Advanced Scene Switcher** | Automatically switch scenes based on conditions: which window is focused, time of day, mouse position, audio volume, and many more. Extremely powerful for hands-free scene management |
| **Move Transition** | Smoothly animate sources between positions, scales, and rotations during scene transitions. Creates professional-looking movement without video editing |
| **Source Record** | Record individual sources independently from the main stream recording. Useful for saving facecam footage separately |

#### Visual Effects

| Plugin | Description |
|--------|-------------|
| **Downstream Keyer** | Add a separate chroma/luma key layer that works across all scenes |
| **Shader Filter** | Apply GLSL shader effects to any source — glow, ripple, pixelation, colour grading, custom effects |
| **StreamFX** | Major plugin pack with blur, chroma key improvements, 3D transformations, and many visual effects (development status varies) |

#### Audio

| Plugin | Description |
|--------|-------------|
| **reaper_jsfx** | JSFX audio effects from Reaper DAW usable as OBS filters — including high-quality EQs, compressors, and limiters |

#### Output and Recording

| Plugin | Description |
|--------|-------------|
| **Multi Output** | Stream to multiple platforms simultaneously (or use other methods for multi-platform streaming) |

### Scripting

Lua and Python scripts provide lightweight OBS extensions without requiring compiled code. Scripts are typically used for:

- **Automation**: automated scene switching at set intervals, timed source visibility
- **Utilities**: source management tools, batch operations
- **Overlays**: in-OSC-based overlay text displays
- **Integrations**: data feed from external services into OBS sources

## Tips

- Always check the OBS version compatibility of a plugin before installing — plugins for OBS 27 may not work with OBS 28+
- Back up your `obs-studio` configuration folder before installing major plugin packs
- Remove plugins by deleting their files from `obs-plugins/` — no uninstaller needed for manual installations
- Scripts are safer and easier to manage than compiled plugins — start with scripts for custom automation needs
- The OBS community on Discord is the best place for plugin recommendations and troubleshooting
- Some plugins add start-up time — only install what you actually need
- After installing any plugin, test it in a private stream or recording before going live
