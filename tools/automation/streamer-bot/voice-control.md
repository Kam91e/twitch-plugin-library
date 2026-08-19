---
title: "Streamer.bot — Voice Control"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - voice-control
  - speech-to-text
source: "https://docs.streamer.bot/"
app-evidence: "/mnt/d/Twitch/shots/voice-control-panel-uia.txt"
last-reviewed: 2026-08-04
---

# Voice Control

> Reference for the Streamer.bot **Voice Control** tab (v1.0.4, Windows 10): the landing hub and the three panels — Settings, Commands, and Log — with panel content, right-click menus, and dialogs.

## Voice Control Overview

Open **Voice Control** from the left navigation. The landing page shows **three cards** (the sidebar sub-nav items mirror the same three entries):

1. **Settings** — speech recognition configuration
2. **Commands** — voice commands that trigger actions
3. **Log** — speech-to-text activity log

The official docs (v1.0.5) cover Voice Control only via sub-action and trigger API pages; panel details below are app-evidence only.

## Settings

Opens **Settings** in the breadcrumb. Panel content, top to bottom:

- **Auto Start Listen** — toggle (shown **Off**); starts listening when Streamer.bot starts
- **Listening Status** — "Stopped" + **Start Listening** button
- **Log Speech to Text Dictation** — toggle (shown **Disabled**)
- **Locale** — dropdown; expands to **en-GB, en-US**
- **Confidence Threshold** — numeric spinner + "percent" label
- **Audio Input Device** — dropdown; expands to **Default + 12 system audio devices** (Steam Streaming Microphone, Microphone Array (Realtek Audio), + 10 others, most marked "(Disconnected)")
- **Related Support** — group with **Configuring Voice Control**, **Available Sub-Actions**, **Available Triggers** documentation links

**Right-click**: no context menu (UIA + observer verified).

Evidence: `voice-control-panel`, `voice-settings-panel`, `voice-settings-ctx`.

## Commands

Opens **Commands** in the breadcrumb. Panel content:

- Grid columns: **Name, Command, Location, Enabled, Stop After** (empty grid at capture time)

**Right-click** on the grid body → **Add** only.

### Add Voice Control Command dialog

Dialog 600×304, opened from the right-click menu:

1. **Name** — text input
2. **Enabled** — toggle
3. **Command** — text input
4. **Location** — combo selector
5. **Stop After** — toggle
6. **Override Global** — toggle
7. **Confidence Threshold** — text input + "percent" label
8. **Ok / Cancel** buttons

Evidence: `voice-commands-panel`, `voice-commands-ctx`, `voice-commands-add-dialog`.

## Log

Opens **Log** in the breadcrumb. Panel content:

- Heading "Log" + an empty output panel (no entries — the voice service was never started), no controls

**Right-click** on the panel body → **Clear** (no dialog).

Evidence: `voice-log-panel`, `voice-log-ctx`.

## Evidence gaps

- All grids were **empty** at capture time (no voice commands created, service never started) — no Edit/Delete right-click items or row behaviors could be verified.
- The **Confidence Threshold** spinner's step behavior and the effect of the **Location** combo options in the Add dialog were not exercised.
- The **Log** panel's content format was not observed (nothing was logged during capture).
- Docs coverage for Voice Control configuration is absent (v1.0.5 sidebar has no Voice Control config page); panel details are app-evidence only.
