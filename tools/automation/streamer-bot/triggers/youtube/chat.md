---
title: "Streamer.bot — Triggers: YouTube > Chat"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - triggers
  - youtube
source: "https://docs.streamer.bot/api/triggers/youtube/chat"
last-reviewed: 2026-07-31
---

# YouTube — Chat

> Triggers for YouTube chat events: messages, first words, Super Chat, and Super Stickers.

## First Words

**Location:** `YouTube > Chat > First Words`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-YouTube-Chat-First-Words-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for a YouTube chatter's first message

**Parameters:** App-verified from `trigger-YouTube-Chat-First-Words-dialog-uia.txt`, `trigger-YouTube-Chat-First-Words-dialog.png` (Add Trigger - YouTube > Chat > First Words, ~600×188): `User Name` (text), `Is UserId` (button), `Leaving user name empty is considered a catch-all and will trigger on any first words event.` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Jewels Gifted

**Location:** `YouTube > Chat > Jewels Gifted`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-YouTube-Chat-Jewels-Gifted-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for YouTube Jewels Gifted events
**Parameters:** App-verified from `trigger-YouTube-Chat-Jewels-Gifted-dialog-uia.txt`, `trigger-YouTube-Chat-Jewels-Gifted-dialog.png` (Add Trigger - YouTube > Chat > Jewels Gifted, ~600×157): `Min` (text), `Max` (text), `Will trigger on any value` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Message

**Location:** `YouTube > Chat > Message`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for incoming YouTube chat messages

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Super Chat

**Location:** `YouTube > Chat > Super Chat`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-YouTube-Chat-Super-Chat-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for YouTube Super Chat events

**Parameters:** App-verified from `trigger-YouTube-Chat-Super-Chat-dialog-uia.txt`, `trigger-YouTube-Chat-Super-Chat-dialog.png` (Add Trigger - YouTube > Chat > Super Chat, ~600×157): `Min` (text), `Max` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Super Sticker

**Location:** `YouTube > Chat > Super Sticker`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-YouTube-Chat-Super-Sticker-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for YouTube Super Sticker events

**Parameters:** App-verified from `trigger-YouTube-Chat-Super-Sticker-dialog-uia.txt`, `trigger-YouTube-Chat-Super-Sticker-dialog.png` (Add Trigger - YouTube > Chat > Super Sticker, ~600×157): `Min` (text), `Max` (text); Ok/Cancel present.

**Variables:** Not documented in official docs
