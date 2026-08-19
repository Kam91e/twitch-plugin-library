---
title: "Streamer.bot — Integrations"
category: "automation"
type: "Desktop application"
platforms:
  - Windows
price: "Free"
url: "https://streamer.bot"
repo: "https://github.com/Streamerbot/streamer.bot"
last-reviewed: 2026-07-30
---

# Integrations

> Streamer.bot connects to a wide range of platforms and services, acting as the central hub that ties your streaming ecosystem together.

## Overview

Streamer.bot's power comes from its extensive integration support. It can simultaneously connect to Twitch (through three different protocols), control OBS Studio via WebSocket, send notifications to Discord, process input from Stream Deck devices, call external APIs, and more. These connections run concurrently and can be combined within a single action — for example, a Twitch subscription event could trigger an OBS scene change, send a Discord notification, and post a thank-you message in chat.

## Configuration

### Twitch

Streamer.bot uses three Twitch connections simultaneously:

| Connection | Purpose |
|------------|---------|
| **IRC** | Send and receive chat messages; the foundation for chat commands and chat-based triggers |
| **PubSub** | Receive real-time events: subscriptions, bits, channel points redemptions, hype trains, polls, predictions, raids |
| **EventSub** | Modern webhook-based event system covering subscriptions, channel updates, and more |

To connect: go to the **Twitch** tab, select your broadcaster account, and authorize via browser. A bot account can also be connected separately for sending messages without exposing the broadcaster's token.

### OBS WebSocket

Streamer.bot can connect to OBS Studio via the obs-websocket plugin (included with OBS 28+). This enables:

- Switch scenes and preview scenes
- Toggle source visibility
- Set text source values
- Start/stop streaming and recording
- Control audio sources (mute, volume)
- Capture screenshots
- Execute studio mode transitions

Configuration: in the **OBS** tab, enter the WebSocket host (usually `localhost`), port (typically `4455`), and password set in OBS.

### Discord

Streamer.bot can send messages to Discord channels via webhooks. Configure webhook URLs in the **Discord** tab. Each webhook can be configured with a custom name and avatar. Use this to:
- Notify moderators when a large bit donation comes in
- Log all channel point redemptions for review
- Announce stream events in a private staff server

### Stream Deck

Streamer.bot can receive input from Elgato Stream Deck devices via the **Stream Deck** integration. This allows physical buttons to trigger any action, providing tactile control over stream automation without alt-tabbing.

### Speaker.bot

Speaker.bot is a companion application that provides text-to-speech and voice command capabilities. Streamer.bot sends text to Speaker.bot for TTS output and can receive triggers from voice commands.

### Built-in Web Server

Streamer.bot includes a built-in HTTP server that can receive webhooks and API calls from external services. This allows:

- Triggering actions from third-party services
- Receiving webhooks from services like Patreon, Ko-fi, or PayPal
- Creating custom REST endpoints for mobile control

### Challonge API

Streamer.bot can interact with Challonge tournament brackets via HTTP requests. This enables automation for tournament streams — announcing match results, looking up brackets, and updating bracket progress through chat commands.

### Other Integrations

| Service | Type | Typical Use |
|---------|------|-------------|
| **Google Sheets** | API | Log stream events to a spreadsheet |
| **Spotify** | API | Currently playing song, skip, pause |
| **YouTube** | API | YouTube Live chat messages |
| **PayPal / Ko-fi** | Webhook | Donation alerts (via web server) |
| **HypeRate.io** | WebSocket | Heart rate data for IRL streams |
| **Valorant / Fortnite / other game APIs** | HTTP | In-game stats and events |

## Tips

- Start with Twitch + OBS integration — that covers 90% of common automation needs
- Use Discord webhooks for a private moderation log without cluttering your stream
- The built-in web server is the most flexible integration point; any service that can send HTTP requests can trigger Streamer.bot actions
- Test OBS WebSocket connections from the Streamer.bot OBS tab before building actions that depend on it
- Community-shared integration examples on the Streamer.bot Discord are an excellent resource for learning how to connect less common services
