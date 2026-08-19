---
title: "Streamer.bot — Triggers: Twitch > General"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - triggers
  - twitch
source: "https://docs.streamer.bot/api/triggers/twitch/general"
last-reviewed: 2026-07-31
---

# Twitch — General

> Triggers for general Twitch events: announcements, present viewers, shoutouts received, and stream title or game updates.

## Announcement

**Location:** `Twitch > General > Announcement`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Twitch Announcement

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Present Viewers

**Location:** `Twitch > General > Present Viewers`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for the Twitch present viewers event. This triggers every 1-10 minutes, default every 5 minutes. Configured under `Platforms > Twitch > Settings` (Present Viewers section): a `Live Update` checkbox and a slider that acts either as the update interval (1-10 minutes, when Live Update is checked) or as a presence threshold (when Live Update is not checked, the action still executes every minute).

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Shoutout Received

**Location:** `Twitch > General > Shoutout Received`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Twitch Shoutout is Received

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Stream Update

**Location:** `Twitch > General > Stream Update`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Twitch-General-Stream-Update-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for a Twitch Stream Update. This triggers when the title or the description changes on your stream.

**Parameters:** Game Only (checkbox) — only trigger when the game changes. Game (select) — only trigger when the stream changes to this game
**Parameters (app-verified):** App-verified from `trigger-Twitch-General-Stream-Update-dialog-uia.txt`, `trigger-Twitch-General-Stream-Update-dialog.png` (Add Trigger - Twitch > General > Stream Update, ~600×160): `Game Only` (button), `Game` (button), `<Click to Search for a Category>` (button); Ok/Cancel present.

**Variables:** Not documented in official docs
