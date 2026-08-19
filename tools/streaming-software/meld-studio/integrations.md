---
title: "Meld Studio — Integrations"
category: "streaming-software"
type: "Desktop application"
parent: "Meld Studio"
url: "https://meldstudio.co"
last-reviewed: 2026-07-30
---

# Meld Studio — Integrations

> Meld Studio integrates with popular streaming tools — VTube Studio, Streamer.bot, Stream Deck, Lumia Stream, and Mix It Up — for a connected streaming workflow.

## VTube Studio

Meld Studio supports VTube Studio models as a direct source via Spout2.

### How to Connect

1. Open VTube Studio and load your Live2D model
2. In VTube Studio, enable **Spout2 output** in the settings
3. In Meld Studio, add a new **Spout2** source
4. Select the VTube Studio output from the source dropdown
5. Your VTuber model now appears as a source in Meld Studio — position, scale, and apply effects like any other source

This integration requires both applications running on the same computer with Windows (Spout2 is Windows-only).

## Streamer.bot

Meld Studio connects to Streamer.bot for action-based automation.

### How to Connect

1. Open Streamer.bot and note the WebSocket server settings (default port)
2. In Meld Studio, go to **Settings** → **Integrations** → **Streamer.bot**
3. Enter the Streamer.bot IP address and port
4. Test the connection — Meld Studio will confirm pairing

### What You Can Automate

- Switch scenes on Twitch events
- Toggle source visibility
- Control audio volume and muting
- Trigger alerts and celebrations
- Play sound effects on command
- Full list of sub-actions available in Streamer.bot

## Stream Deck

Meld Studio has native Stream Deck integration for hardware control.

### How to Connect

1. Install the Meld Studio plugin from the Stream Deck store
2. Open Meld Studio — the plugin auto-detects the application
3. Assign Meld Studio actions to Stream Deck buttons:
   - Switch scenes
   - Toggle source visibility
   - Start/stop streaming and recording
   - Set audio levels
   - Trigger Spark overlay changes

## Lumia Stream

Lumia Stream connects smart lighting to your stream events, and Meld Studio supports it natively.

### How to Connect

1. Open Lumia Stream and start the server
2. In Meld Studio, go to **Settings** → **Integrations** → **Lumia Stream**
3. Enter the Lumia Stream connection details
4. Smart lights now react to stream events — colour changes on follows, strobes on raids, etc.

## Mix It Up

Mix It Up is a chatbot and automation tool that integrates with Meld Studio.

### How to Connect

1. Open Mix It Up and enable the WebSocket server
2. In Meld Studio, connect via **Settings** → **Integrations** → **Mix It Up**
3. Use Mix It Up's custom commands to control Meld Studio scene switching, source visibility, and more

## Tips & Tricks

- The VTube Studio + Meld Studio combo is excellent for VTubers: use Meld's built-in alerts and multi-chat alongside your VTube Studio model
- Combine Streamer.bot with Meld Spark: have Streamer.bot trigger Spark-generated overlays based on Twitch events
- Use Stream Deck for tactile control of scenes and audio — especially useful during intense gameplay moments
- Lumia Stream integration is surprisingly impactful — viewers notice and react to lighting changes
