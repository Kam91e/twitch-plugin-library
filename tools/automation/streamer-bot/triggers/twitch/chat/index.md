---
title: "Streamer.bot — Triggers: Twitch > Chat"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - triggers
  - twitch
source: "https://docs.streamer.bot/api/triggers/twitch/chat"
last-reviewed: 2026-07-31
---

# Twitch — Chat

> Triggers for Twitch chat activity: messages, cheers, whispers, first words, watch streaks, and bits badge upgrades.

## Groups

- [Mode](mode.md) — Chat mode toggles and changes: emote, follower, slow, subscriber, and unique modes.

## Bits Badge Tier

**Location:** `Twitch > Chat > Bits Badge Tier`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Triggered when a user's bit badge tier is upgraded

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Bot Whispers

**Location:** `Twitch > Chat > Bot Whispers`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Twitch Bot Whisper. The user sending the whisper must have a verified phone number (Security and Privacy settings). Rate limits: max 40 unique recipients per day, 3 whispers per second, 100 whispers per minute. Max message length: 500 characters (10,000 if the recipient has whispered you before); longer messages are truncated.

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Cheer

**Location:** `Twitch > Chat > Cheer`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Twitch-Chat-Cheer-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Twitch Cheer

**Parameters:** App-verified from `trigger-Twitch-Chat-Cheer-dialog-uia.txt`, `trigger-Twitch-Chat-Cheer-dialog.png` (Add Trigger - Twitch > Chat > Cheer, ~600×157): `Min` (text), `Max` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## First Words

**Location:** `Twitch > Chat > First Words`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Twitch-Chat-First-Words-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Twitch First Words. This triggers when someone sends their first message of the stream. The exact reset time is set in `Platforms -> Twitch -> Settings` and is `12h` by default. Tip: create a `Settings -> Reset First Words` subaction with a `Twitch -> Channel -> Stream Online` trigger to reset it automatically when you go live.

**Parameters:** App-verified from `trigger-Twitch-Chat-First-Words-dialog-uia.txt`, `trigger-Twitch-Chat-First-Words-dialog.png` (Add Trigger - Twitch > Chat > First Words, ~600×188): `User Name` (text), `Is UserId` (button), `Leaving user name empty is considered a catch-all and will trigger on any first words event.` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Chat Message

**Location:** `Twitch > Chat > Chat Message`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Twitch Chat Message

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Modiversary

**Location:** `Twitch > Chat > Modiversary`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Twitch-Chat-Modiversary-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Twitch Modiversary
**Parameters:** App-verified from `trigger-Twitch-Chat-Modiversary-dialog-uia.txt`, `trigger-Twitch-Chat-Modiversary-dialog.png` (Add Trigger - Twitch > Chat > Modiversary, ~600×157): `Min` (text), `Max` (text), `Will trigger on any value` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Watch Streak

**Location:** `Twitch > Chat > Watch Streak`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Twitch-Chat-Watch-Streak-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Triggers when a user shares their watch streak

**Parameters:** App-verified from `trigger-Twitch-Chat-Watch-Streak-dialog-uia.txt`, `trigger-Twitch-Chat-Watch-Streak-dialog.png` (Add Trigger - Twitch > Chat > Watch Streak, ~600×157): `Min` (text), `Max` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Whispers

**Location:** `Twitch > Chat > Whispers`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Twitch Whisper. The user sending the whisper must have a verified phone number (Security and Privacy settings). Rate limits: max 40 unique recipients per day, 3 whispers per second, 100 whispers per minute. Max message length: 500 characters (10,000 if the recipient has whispered you before); longer messages are truncated.

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs
