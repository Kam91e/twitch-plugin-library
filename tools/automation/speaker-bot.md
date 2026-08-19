---
title: "Speaker.bot"
category: "automation"
type: "Desktop application"
platforms:
  - Windows
price: "Free"
url: "https://speaker.bot"
reop: "https://github.com/Speakerbot/speaker.bot"
last-reviewed: 2026-07-30
---

# Speaker.bot

> A free desktop text-to-speech companion for Streamer.bot that voices chat messages, alerts, and stream events using ten different speech engines.

## Overview

Speaker.bot is a Windows-only desktop application developed alongside Streamer.bot by Lyfesaver74. It listens for events from Streamer.bot and converts them into spoken audio using a choice of TTS engines, from free local options to premium cloud-based neural voices. It can also trigger voice commands based on chat messages or channel point redemptions, and includes moderation controls to keep TTS usable during streams.

## Key Features

- **10+ TTS engines** — Google Cloud, Azure, Amazon Polly, IBM Watson, SAPI5, UberDuck, TTS Monster, Acapela, CereProc, ElevenLabs
- **Streamer.bot integration** — seamless connection as a companion application
- **Voice commands** — trigger TTS from chat messages, channel points, subscriptions, bits
- **Event-driven speech** — speak on follow, sub, raid, cheer, or any Streamer.bot event
- **Moderation controls** — cooldown timers, message length limits, blacklisted words and users
- **Multi-voice** — assign different voices to different events or users
- **Queue system** — messages queue and play in order, configurable concurrency
- **Open source** — fully open source (MIT), community-driven development

## Installation / Setup

1. Download the latest version from [speaker.bot](https://speaker.bot) or the [GitHub releases page](https://github.com/Speakerbot/speaker.bot/releases)
2. Run the installer — Speaker.bot installs as a standard Windows application
3. Launch Speaker.bot — the main window shows connection status and event log
4. In Streamer.bot, go to **Servers/Clients** → **Speaker.bot** and enable the connection (default port)
5. Speaker.bot will automatically connect — you'll see the status indicator turn green
6. Configure a TTS engine under **Settings** → **Text to Speech** and select your preferred provider
7. In Streamer.bot, create an action with the **Speak** sub-action to start using TTS

## Supported TTS Engines

| Engine | Type | Cost | Quality |
|---|---|---|---|
| **SAPI5** | Local (Windows built-in) | Free | Basic |
| **UberDuck** | Cloud (open-source AI) | Free | Good |
| **TTS Monster** | Cloud | Free tier | Good |
| **Google Cloud** | Cloud | Paid (free tier) | Excellent |
| **Azure** | Cloud | Paid (free tier) | Excellent — 400+ neural voices |
| **Amazon Polly** | Cloud | Paid (free tier) | Excellent |
| **IBM Watson** | Cloud | Paid (free tier) | Very good |
| **ElevenLabs** | Cloud | Paid (free tier) | Best-in-class — most natural |
| **Acapela** | Cloud | Paid | Very good |
| **CereProc** | Cloud | Paid | Good — character voices |

## Twitch Integration

Speaker.bot integrates with Twitch entirely through Streamer.bot. Streamer.bot listens to Twitch events (IRC, PubSub, EventSub) and triggers Speak actions in Speaker.bot. There is no direct Twitch connection in Speaker.bot — it relies on Streamer.bot for all Twitch event handling.

## Configuration

- **TTS Engine selection**: choose and configure your preferred speech engine (API keys for cloud services)
- **Speaker settings**: voice selection, speaking rate, pitch, volume per engine
- **Queue settings**: concurrent speech limit, queue timeout, message prioritisation
- **Moderation**: blacklisted words/phrases, cooldown per user, max character length, permission levels
- **Voice triggers**: assign specific voices to specific events or user groups
- **Streamer.bot connection**: host/port settings, auto-reconnect

## Tips & Tricks

- Use SAPI5 for free basic TTS, upgrade to ElevenLabs or Azure for natural-sounding voices once your stream grows
- Set a cooldown on TTS to prevent spam — 5–10 seconds between messages is a good starting point
- Combine with Streamer.bot's action system: have different voices for subs, cheers, and followers
- Use the moderation system to block offensive words automatically
- Create a channel point redemption that lets viewers trigger TTS messages for a personal connection
- Pair with Streamer.bot's C# sub-action for complex TTS logic (e.g., different voices based on message sentiment)

## Alternatives

- **Streamlabs Cloudbot**: Built-in TTS with Streamlabs ecosystem; easier setup but fewer engine choices
- **Mix It Up**: Integrated TTS with chatbot; Windows only, open-source
- **Foobar**: Lightweight chat bot with basic TTS; fewer features but simpler
