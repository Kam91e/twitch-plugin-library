---
title: "Streamer.bot — Sub-Actions: Twitch > Chat"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - twitch
source: "https://docs.streamer.bot/api/sub-actions/twitch/chat"
last-reviewed: 2026-07-31
---

# Twitch — Chat

> Sub-actions to send messages, announcements and replies to Twitch chat, and to manage pinned chat messages.

## Clear Chat Messages

**Location:** `Twitch > Chat > Clear Chat Messages`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Clear all chat messages

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Get Pinned Chat Message

**Location:** `Twitch > Chat > Get Pinned Chat Message`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Gets the current pinned chat message

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

> **Version note (v1.0.5+):** Get Pinned Chat Message is not present in v1.0.4; added in v1.0.5.

## Pin Chat Message

**Location:** `Twitch > Chat > Pin Chat Message`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Chat-Pin-Chat-Message-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Pins the provided message

**Parameters:** App-verified from `subaction-Twitch-Chat-Pin-Chat-Message-dialog-uia.txt`, `subaction-Twitch-Chat-Pin-Chat-Message-dialog.png` (Add SubAction - Twitch > Chat > Pin Chat Message, ~600×241): `Message Id` (text), `Duration` (text), `seconds` (button), `Both fields support parsing.  Duration can either be empty, which means the Pinned Message would last until the stream ends, or it must be, or parse to a value between 30 and 1800.` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

> **Version note (v1.0.5+):** Pin Chat Message is not present in v1.0.4; added in v1.0.5.

## Reply to Message

**Location:** `Twitch > Chat > Reply to Message`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Chat-Reply-To-Message-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Send a reply to a specific Twitch chat message

**Parameters:** App-verified from `subaction-Twitch-Chat-Reply-To-Message-dialog-uia.txt`, `subaction-Twitch-Chat-Reply-To-Message-dialog.png` (Add SubAction - Twitch > Chat > Reply To Message, ~600×352): `Reply Id` (text), `Message` (text), `0/500` (text), `Send using bot account` (button), `Fallback to Broadcaster` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Send Announcement to Channel

**Location:** `Twitch > Chat > Send Announcement to Channel`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Chat-Send-Announcement-to-Channel-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Send an announcement to your Twitch channel

**Parameters:** App-verified from `subaction-Twitch-Chat-Send-Announcement-to-Channel-dialog-uia.txt`, `subaction-Twitch-Chat-Send-Announcement-to-Channel-dialog.png` (Add SubAction - Twitch > Chat > Send Announcement to Channel, ~600×329): `Color` (select), `Message` (text), `0/500` (text), `Send using bot account` (button), `Fallback to Broadcaster` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Send Message

**Location:** `Twitch > Chat > Send Message`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Chat-Send-Message-to-Channel-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Send a Twitch chat message

**Parameters:** App-verified from `subaction-Twitch-Chat-Send-Message-to-Channel-dialog-uia.txt`, `subaction-Twitch-Chat-Send-Message-to-Channel-dialog.png` (Add SubAction - Twitch > Chat > Send Message to Channel, ~600×312): `Message` (text), `0/500` (text), `Send using bot account` (button), `Fallback to Broadcaster` (button), `Pin` (button), `Until stream ends` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Unpin Chat Message

**Location:** `Twitch > Chat > Unpin Chat Message`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Unpin the pinned chat message

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

> **Version note (v1.0.5+):** Unpin Chat Message is not present in v1.0.4; added in v1.0.5.

## Update Pinned Chat Message Duration

**Location:** `Twitch > Chat > Update Pinned Chat Message Duration`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Chat-Updated-Pinned-Chat-Message-Duration-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Modify the duration of the pinned message in Twitch chat

**Parameters:** App-verified from `subaction-Twitch-Chat-Updated-Pinned-Chat-Message-Duration-dialog-uia.txt`, `subaction-Twitch-Chat-Updated-Pinned-Chat-Message-Duration-dialog.png` (Add SubAction - Twitch > Chat > Updated Pinned Chat Message Duration, ~600×181): `Duration` (text), `seconds` (button), `Duration support parsing.  Duration can either be empty, which means the Pinned Message would last until the stream ends, or it must be, or parse to a value between 30 and 1800.` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

> **Version note (v1.0.5+):** Update Pinned Chat Message Duration is not present in v1.0.4; added in v1.0.5.
