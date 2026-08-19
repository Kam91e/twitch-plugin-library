---
title: "Ghost Chat"
category: "chat-and-overlays"
type: "Desktop application"
platforms:
  - Windows
  - macOS
price: "Free"
url: "https://getghostchat.com"
repo: "https://github.com/Enubia/ghost-chat"
last-reviewed: 2026-07-30
---

# Ghost Chat

> A lightweight, native desktop chat overlay that displays live chat from Twitch, YouTube, and Kick in a transparent window over your stream.

## Overview

Ghost Chat is a free and open-source desktop application built with Go and Wails v3. It provides a transparent, always-on-top chat window that can be captured by OBS as a clean overlay. Unlike browser-based chat overlays, Ghost Chat is a native application with minimal resource usage — no Electron overhead. It supports Twitch, YouTube, and Kick simultaneously, and can display channel point redemptions alongside chat.

## Key Features

- **Multi-platform chat** — connect to Twitch, YouTube, and Kick at the same time, all messages in one unified stream
- **Transparent overlay** — fully transparent background renders cleanly over game or stream content
- **Custom themes** — built-in themes (Default, Compact, Bubble) and a full visual editor to create your own
- **Emote support** — native Twitch emotes, BTTV, FFZ, 7TV, YouTube custom emoji, and Kick emotes
- **Channel point redemptions** — display Twitch channel point redemptions alongside chat messages
- **Vanish mode** — toggle transparency and click-through with a global hotkey
- **Global hotkey** — show/hide the overlay from any application with a single keypress
- **Lightweight** — built with Go and WebView; uses minimal CPU and RAM compared to Electron-based alternatives
- **Open source** — fully open source (MIT); inspect, contribute, or fork
- **System tray** — runs quietly in the system tray with quick access to vanish mode, configuration, and quit
- **Message filtering** — hide bots, commands, or specific users per platform
- **Fade messages** — auto-fade old messages with configurable timeout per platform

## Installation / Setup

1. Go to the [releases page](https://github.com/Enubia/ghost-chat/releases) and download the latest version for your OS
2. **Windows**: Run `ghost-chat.exe` — if SmartScreen warns you, click "More info" then "Run anyway" (the app isn't code-signed, which is normal for open-source projects)
3. **macOS**: Download `ghost-chat-macos.zip`, extract, and move to Applications. If macOS blocks it, run `xattr -rd com.apple.quarantine /Applications/ghost-chat.app` in terminal, or right-click → Open
4. Launch Ghost Chat and enter your Twitch channel name (no login required for basic chat)
5. To display channel point redemptions, connect the broadcaster's Twitch account in Settings → Twitch
6. In OBS, add a **Window Capture** source and select the Ghost Chat window — the transparent background is captured automatically

## Twitch Integration

Ghost Chat connects to Twitch IRC (Internet Relay Chat) for live chat messages and uses Twitch's GQL API for badge rendering and channel point redemptions. No Twitch Extension is required — it works as a standalone desktop application. The connection is anonymous for viewing chat; you only need to authenticate to receive channel point redemptions.

## Configuration

- **General settings**: choose platforms to connect, set message fade timeout
- **Twitch settings**: enter broadcaster token for channel point redemptions
- **YouTube settings**: connect YouTube Live chat
- **Kick settings**: connect Kick chat
- **Theme editor**: full visual editor with color pickers, font controls, and layout options for custom themes
- **Filtering**: per-platform option to hide bot messages, commands (messages starting with !), or specific users
- **i18n**: interface available in English and German

## Tips & Tricks

- For games in exclusive fullscreen, switch to borderless windowed mode — Ghost Chat won't appear on top of exclusive fullscreen
- Use Window Capture in OBS with the Ghost Chat window selected; the transparent background is captured automatically
- Set up a global hotkey to toggle vanish mode — useful for quickly hiding chat during cutscenes or important moments
- Create a custom theme that matches your stream's colour scheme and font choice for a cohesive look
- Combine with StreamElements or other overlay platforms — Ghost Chat handles chat while other tools handle alerts and widgets
- Run Ghost Chat alongside Streamer.bot for automated chat interactions

## Alternatives

- **Restream Chat**: Web-based multi-platform chat overlay; requires browser, more resource-heavy
- **Twitch popout chat + Browser Source**: Free, built-in method; add popout chat URL as Browser Source in OBS. Less customisable, single-platform only
- **StreamElements chat overlay**: Part of StreamElements platform; styled overlay in Browser Source
