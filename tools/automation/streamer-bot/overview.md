---
title: "Streamer.bot"
category: "automation"
type: "Desktop application"
platforms:
  - Windows
price: "Free"
url: "https://streamer.bot"
repo: "https://github.com/Streamerbot/streamer.bot"
last-reviewed: 2026-07-30
---

# Streamer.bot

> A free, open-source desktop application that automates stream interactions by connecting Twitch chat, OBS, Discord, and third-party services through a flexible action-based system.

## Overview

Streamer.bot is a Windows-only desktop application that acts as the central hub for stream automation. It listens for events from multiple sources — Twitch chat messages, subscriptions, bits, channel points, OBS state changes, and more — and responds by executing chains of configurable sub-actions. These can range from sending a chat message and switching an OBS scene to running custom C# code or calling external APIs. Created by Lyfesaver74 (Nate), it is free and open-source under the MIT license.

## Key Features

- **Action-based automation** — events trigger actions, which are sequences of sub-actions executed in order
- **Twitch integration** — connects via IRC, PubSub, and EventSub for real-time event handling
- **OBS WebSocket control** — switch scenes, toggle sources, start/stop streaming, control audio
- **C# code execution** — write custom C# directly within actions for unlimited flexibility
- **Stream Deck support** — trigger actions from physical Stream Deck buttons
- **Discord webhooks** — send notifications to Discord channels
- **Third-party API integration** — Challonge, Google Sheets, Spotify, YouTube, Patreon, Ko-fi, and more
- **Built-in web server** — create custom HTTP endpoints that trigger actions
- **Speaker.bot companion** — text-to-speech integration for voice responses
- **No recurring costs** — fully free, no subscriptions or premium tiers

## Installation / Setup

1. Download the latest version from [streamer.bot](https://streamer.bot) or the [GitHub releases page](https://github.com/Streamerbot/streamer.bot/releases)
2. Run the installer — Streamer.bot installs as a standard Windows application
3. Launch Streamer.bot — the main window shows tabs for Actions, Commands, Timers, and more
4. Click the **Twitch** tab and select your Twitch account to connect (you'll be prompted to authorize via your browser)
5. To connect OBS: click the **OBS** tab, enter your OBS WebSocket connection details (IP, port, password)
6. The application is now ready — create your first action or import an existing one from the community

## Reference

Full, structured catalogs mirroring the [official Streamer.bot documentation](https://docs.streamer.bot/):

- [**Actions System**](actions-system.md) — conceptual guide: actions, queue, conditions, branching
- [**Sub-Actions**](sub-actions/index.md) — every sub-action with menu location, parameters, and variables
- [**Triggers**](triggers/index.md) — every event that can fire an action
- [**Variables**](variables.md) — system and user variables, formatting, inline functions
- [**Commands & Timers**](commands-and-timers.md) — chat commands and timer configuration
- [**Integrations**](integrations.md) — connecting external services

### UI Flow References

Step-by-step guides captured from the running application (v1.0.4, Windows 10):

- [**Add Triggers, Actions & Sub-Actions**](add-flows.md) — right-click → Add → picker flows for triggers, actions, and sub-actions
- [**Adding Commands**](commands.md) — the "Add Command" dialog and Commands grid
- [**Platforms (Twitch)**](platforms.md) — the Platforms section and full Twitch reference: feature cards, accounts, settings, panels, and dialogs
- [**Stream Apps**](stream-apps.md) — the Stream Apps tab: landing page plus OBS Studio, Streamlabs Desktop, Meld Studio, and PolyPop panels, right-click menus, and add-connection dialogs
- [**Services**](services.md) — the Services tab: File/Folder Watcher, Timers, File Tails, Process Watcher, Credits, and Quotes
- [**Servers/Clients**](servers-clients.md) — the Servers/Clients tab: WebSocket/HTTP/UDP servers and custom WebSocket servers/clients, incl. expandable sections
- [**Settings**](settings.md) — the Settings tab: all eight sections (General Settings, User Interface, Backups, Defaults, Groups, Variables, Labs, C# Compile Settings) with panel content, right-click menus, dropdowns, and dialogs
- [**Voice Control**](voice-control.md) — the Voice Control tab: Settings, Commands, and Log
- [**MIDI**](midi.md) — the MIDI tab: MIDI In and MIDI Out device/event panels

### Version Matrix (v1.0.4 app vs v1.0.5 docs)

The reference reflects the **v1.0.4** application (verified live) cross-checked with the **v1.0.5** official docs. Differences:

| Capability | v1.0.4 (app) | v1.0.5 (docs) |
|---|---|---|
| Core Logic sub-actions | 6 (Break, Get Input, Get Random Number, If/Else, Switch, While) | 8 (adds Loop Continue, Loop Break) |
| StreamFog integration | absent | present (6 sub-actions) |
| Trovo trigger source | present in picker | absent from docs index |
| Twitch Chat: Get/Pin/Unpin Pinned Chat Message, Update Pinned Chat Message Duration | absent | present |
| Twitch Moderation: Add/Remove Suspicious Status | absent | present |
| Twitch Clips: Get Clip Download Urls | present | present |

## Twitch Integration

Streamer.bot connects to Twitch through three separate channels working together:

- **IRC** — sends and receives chat messages; used for chat commands and chat-based triggers
- **PubSub** — receives real-time events: subscriptions, bits, channel points redemptions, hype trains, polls, predictions
- **EventSub** — modern event system covering many of the same events as PubSub plus additional channel events

All three connections run simultaneously, ensuring Streamer.bot never misses an event regardless of which system Twitch delivers it through.

## Configuration

Streamer.bot is configured entirely through its desktop interface. Key configuration areas include:

- **Twitch**: connect your account, configure which events to listen for
- **OBS**: WebSocket connection settings, auto-connect options
- **Servers/Clients**: Discord webhooks, UDP/TCP listeners, HTTP server
- **Speaker.bot**: companion TTS application connection
- **Import/Export**: share actions and configurations as JSON files
- **Backup**: automatic backup of all settings and actions

## Tips & Tricks

- Import pre-built actions from the Streamer.bot community on Discord or GitHub to save time
- Use the C# sub-action for complex logic that conditionals alone cannot handle
- Combine with OBS WebSocket to auto-switch scenes when certain Twitch events fire
- Set up timed actions for automated stream reminders, shoutouts, or countdowns
- Use the built-in web server to trigger actions from external tools like Stream Deck or phone apps
- Export your configuration regularly — it's a single JSON file with everything included
- The Streamer.bot Discord community is the best source for pre-built integrations and troubleshooting

## Alternatives

- **Streamlabs Chatbot**: More beginner-friendly with built-in giveaways and minigames; Windows only, cloud-connected
- **Nightbot**: Cloud-based, simpler to set up; limited to chat commands and timers, no OBS or desktop integration
- **Mix It Up**: Similar feature set to Streamer.bot with a different UI; Windows only, open-source
- **Foobar**: Lightweight chat bot; fewer features but simpler to use
