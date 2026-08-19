---
title: "VTube Studio — Plugin API & Twitch Integration"
category: "vtubing"
type: "Desktop application"
parent: "VTube Studio"
url: "https://denchisoft.com"
last-reviewed: 2026-07-30
---

# VTube Studio — Plugin API & Twitch Integration

> VTube Studio's Plugin API enables developers to extend its functionality, with deep Twitch integration through both built-in features and community plugins.

## Plugin API Overview

VTube Studio provides a documented API that allows developers to create plugins connecting external inputs to model behaviour. Plugins are distributed as standalone executables or scripts that communicate with VTube Studio through its API.

### What Plugins Can Do

- **Trigger animations**: activate model expressions and animations from external events
- **Control items**: show/hide/toggle items based on triggers
- **Change parameters**: modify any Live2D parameter from external inputs
- **Handle hotkeys**: programmatically press any configured hotkey
- **Send tracking data**: provide custom tracking input sources
- **Receive model state**: read current model parameters and tracking data

### Supported Input Sources

- **Twitch events**: donations, subscriptions, bits, channel points, chat commands
- **Game controllers**: joystick, button, trigger inputs mapped to model parameters
- **MIDI devices**: musical instrument input for musical VTubers
- **Keyboard/Mouse**: system-wide input capture
- **Custom hardware**: any input device with SDK support

### SDK and Documentation

- Official API documentation is maintained on the [VTube Studio GitHub Wiki](https://github.com/DenchiSoft/VTubeStudio/wiki)
- The API uses WebSocket communication (port 8001 by default)
- Community plugins are available on the VTube Studio Discord and GitHub

## Community Plugins

Some notable community-built plugins:

| Plugin | What It Does |
|---|---|
| **VTS Twitch Integration** | Triggers model expressions on Twitch events (subs, bits, follows) |
| **VTS Streamer.bot Bridge** | Connects VTube Studio to Streamer.bot for unlimited automation |
| **VTS Lumia Stream** | Triggers model reactions from Lumia Stream smart lighting events |
| **VTS Face Tracking Override** | Provides alternative face tracking data sources |
| **VTS OSC Bridge** | Accepts OSC (Open Sound Control) messages for music-reactive tracking |

## Built-in Twitch Integration

VTube Studio includes native Twitch integration without requiring external plugins:

### Emote Throwing

Viewers can throw Twitch emotes at your model — emotes bounce off the model or become attached as temporary items. Configured through channel point rewards or sub perks.

1. In VTube Studio, open **Settings** → **Twitch Integration**
2. Enable **Emote Throwing** and configure which emotes are allowed
3. Create a channel point reward in Twitch that triggers an emote throw
4. When a viewer redeems it, the emote flies onto your model on screen

### Channel Point Redemptions

Any VTube Studio hotkey can be triggered by Twitch channel point redemptions:

1. Create a channel point reward in your Twitch dashboard
2. In VTube Studio, open **Settings** → **Twitch Integration** → **Hotkey Triggers**
3. Select the hotkey you want to trigger (e.g., "Toggle Sunglasses item")
4. Enter the channel point reward name
5. When a viewer redeems the reward, the hotkey fires in VTube Studio

### Sub and Cheer Notifications

- New subscribers can trigger model expressions or animations
- Cheers at configurable bit thresholds trigger escalating reactions
- Follow alerts can activate short model animations

## Collab Mode

VTube Studio's collab mode allows multiple streamers to appear with their models in the same scene.

### How It Works

1. In VTube Studio, open **Collab Mode** from the toolbar
2. Invite Steam friends from your friends list
3. Friends receive a notification — they can accept and their model appears in your scene
4. Each participant's model tracks independently
5. All models are visible in your OBS scene

### Use Cases

- Duo streams: both hosts have their VTuber models in the same scene
- Guest interviews: bring guest VTubers on screen
- Community events: host VTuber panels with multiple participants

## Tips & Tricks

- The Streamer.bot bridge plugin is the most versatile — it unlocks the full power of Streamer.bot's automation with your VTube Studio model
- Start with built-in Twitch integration before adding plugins — it covers most common use cases
- Test Twitch integrations with the alert simulator before going live
- Collab mode works best with low-latency network connections between participants
- Check the VTube Studio Discord regularly for new community plugins and updates to existing ones
- For developers: the WebSocket API is well-documented on GitHub — the most common use case is connecting Streamer.bot actions to VTube Studio hotkeys
