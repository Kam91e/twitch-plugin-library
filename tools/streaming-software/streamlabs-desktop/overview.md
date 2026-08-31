---
title: "Streamlabs Desktop"
category: "streaming-software"
type: "Desktop application"
platforms:
  - Windows
  - macOS
price: "Freemium"
url: "https://streamlabs.com"
last-reviewed: 2026-08-21
---

# Streamlabs Desktop

> A free, OBS-based streaming application with built-in overlays, alerts, chatbot, and monetisation tools — designed for beginner and intermediate streamers who want everything in one package.

## Overview

Streamlabs Desktop is built on top of the OBS Studio engine and extends it with a user-friendly interface, built-in alerts, overlay themes, a chatbot (Cloudbot), multi-streaming, and monetisation features (tipping, merch store). It is maintained by Streamlabs, the company behind the popular Streamlabs platform. Streamlabs Desktop is available for Windows and macOS, with a free tier that includes most features and an Ultra subscription ($27/mo or $179/yr) that unlocks multi-streaming to more platforms, expanded Cloudbot features, Collab Cam, and all premium overlay themes.

Because it is built on OBS, it supports OBS plugins and familiar concepts like scenes, sources, and transitions, but wraps them in a more guided setup experience.

## Key Features

- **OBS-based engine** — compatible with OBS plugins and community resources
- **Built-in overlays** — hundreds of free and premium themes, fully customisable
- **Alert system** — notifications for followers, subscribers, tips, cheers, hosts, and raids
- **Cloudbot** — integrated chatbot with moderation, custom commands, giveaways, and mini-games
- **Multi-streaming** — broadcast to Twitch, YouTube, TikTok, and more simultaneously (Ultra)
- **Dual Output** — stream in horizontal and vertical layouts at the same time (Ultra)
- **Collab Cam** — invite guests to appear on stream via a shareable link (Ultra)
- **Tipping & merch** — built-in Streamlabs tip page and merch storefront
- **Desktop App Store** — 60+ plugin-style apps for additional functionality (Ultra)
- **Console support** — stream directly from PlayStation and Xbox via Streamlabs Console

## Installation / Setup

1. Download Streamlabs Desktop from [streamlabs.com](https://streamlabs.com) (~500 MB)
2. Run the installer — Windows 10+ or macOS 12+ required
3. Launch Streamlabs Desktop and sign in with your Streamlabs account (or create one)
4. Connect your Twitch account when prompted — Streamlabs will guide you through authorisation
5. Choose a starter theme from the overlay gallery, or skip to set up manually
6. The setup wizard will help you configure your microphone, webcam, and game capture
7. You are now ready to go live — click the **Go Live** button in the top-right corner

## Twitch Integration

Streamlabs Desktop integrates with Twitch natively through the Streamlabs platform. Alert events (follows, subs, bits, raids) flow through Streamlabs' own event system. Cloudbot connects to Twitch chat for moderation and commands. The tipping system uses Streamlabs' own payment processing. All of this works without additional configuration once your Twitch account is connected.

## Console & Mobile

- **Streamlabs Console** — an app on PlayStation and Xbox that lets you stream directly from the console, without a capture card
- **Streamlabs Mobile** — a companion mobile app for monitoring and managing your stream on the go

## UI Reference (v1.21.9)

The following reference pages document the Streamlabs Desktop 1.21.9 UI as captured live (screenshots in `/mnt/d/Twitch/shots/`, non-destructive protocol):

- [Sidebar Reference](sidebar-reference.md) — all sidebar sections top-to-bottom: Editor (Editor, Layout Editor, Studio Mode), Overlays (Scene, Alerts and Widgets), App Store (App Store Home, App Manager), Highlighter [beta], Recordings, Get Ultra, Dashboard (Dashboard Home, Cloudbot, Alert Box Settings, Widgets, Tip Settings, Multistream), Get Help, Settings, account `kameo_s` — expandable vs. navigation, caret ^/v, multi-expand, teal active highlight, vertical scroll.
- [Mixer](mixer.md) — audio Mixer dock: Desktop Audio −10.8 dB / Mic/Aux 0.0 dB rows, slider + meter + lock/gear icons, volume drag and mute (unverified), advanced properties (unverified), scroll with many sources (unverified, see Evidence gaps).
- [Settings](settings.md) — how to open via sidebar gear icon; expected sections General/Stream/Output/Audio/Video/Hotkeys/Scene Collections/Appearance/Notifications/Advanced — window not captured successfully, all sections marked unverified per zero-hallucination policy.
- [Scenes & Transitions](scenes-and-transitions.md) — deepened with evidence: Scenes panel `Untitled ⊕` (6 scenes: Starting Soon/Ted Talk/Screen/Gaming/Window/BRB), Add Scene via `+` at `(296,578)` → `slobs-addscene-dialog.png`, Add Source via `+` at `(676,578)` → `slobs-addsource-dialog.png`, Scene Collections `Untitled` dropdown, per-source config and Transitions/Studio Mode/Hotkeys/Instant Replay gaps.
- [Sources](sources.md) — deepened with Add Source flow evidence (`slobs-addsource-dialog.png` 712 KB) and per-source config gaps.
- [Layout Editor](layout-editor.md) — **app-only** layouts (Test Elements / Test Elements 2) vs stream-visible scenes; Layouts grid (6 tiles), Elements palette (9 items), canvas basics, Save New Tab dialog — v1.21.9.

Also see: [Audio & Hotkeys](audio-and-hotkeys.md) (topic-level audio pipeline, filters, monitoring) and [Alerts & Cloudbot](alerts-and-cloudbot.md).

## Configuration

- **Scene management**: similar to OBS — add sources, arrange layers, set transitions — see [Scenes & Transitions](scenes-and-transitions.md) and [Sources](sources.md) for the v1.21.9 UI.
- **Alert settings**: configure which events trigger alerts, customise appearance and sound per event — see [Alerts & Cloudbot](alerts-and-cloudbot.md)
- **Cloudbot**: enable/disable, configure moderation rules, set up custom commands, schedule giveaways
- **Theme editor**: customise colours, fonts, animations, and layout of overlay widgets
- **Output settings**: resolution, bitrate, encoder selection (NVENC, AMD, x264), recording path
- **Audio**: per-source volume, noise gate, compression, monitor settings — see [Mixer](mixer.md) and [Audio & Hotkeys](audio-and-hotkeys.md)
- **Hotkeys**: assign keyboard shortcuts for scene switching, muting sources, start/stop stream — see [Audio & Hotkeys](audio-and-hotkeys.md); Hotkeys section in Settings remains unverified (see `settings.md` gaps)
- **Ultra features**: enable multi-stream destinations, Dual Output, Collab Cam

## Tips & Tricks

- Start with a free overlay theme and customise it to match your brand colours — no design skills needed
- Use Cloudbot's auto-moderation to filter spam, links, and offensive language without manual effort
- Enable Dual Output to send a vertical (mobile-friendly) stream to TikTok or YouTube Shorts alongside your main stream
- Collab Cam works great for interviews, co-op games, or just having a friend on screen — just share the link
- The Desktop App Store has plugins for everything from soundboards to face tracking — explore them gradually
- If you find Streamlabs too resource-heavy, try OBS Studio instead — it uses fewer system resources

## Alternatives

- **OBS Studio**: The original — more lightweight, more customisable, more plugins. Choose if you prefer fine control over ease of use
- **Meld Studio**: Native (not OBS) streaming app with cloud multi-streaming and AI overlay builder. Better on macOS
- **StreamElements**: Browser-based overlay platform with similar features; works with any streaming software
- **PolyPop**: Game-engine-powered streaming with 3D interactive overlays — a very different approach
