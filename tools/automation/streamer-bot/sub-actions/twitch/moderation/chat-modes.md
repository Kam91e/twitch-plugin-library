---
title: "Streamer.bot — Sub-Actions: Twitch > Moderation > Chat Modes"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - twitch
source: "https://docs.streamer.bot/api/sub-actions/twitch/moderation/chat-modes"
last-reviewed: 2026-07-31
---

# Twitch — Moderation > Chat Modes

> Sub-actions to toggle Twitch chat modes: emote-only, follow, slow and subscriber-only.

## Emote Only

**Location:** `Twitch > Moderation > Chat Modes > Emote Only`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Moderation-Chat-Modes-Emote-Only-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Turn emote only on or off

**Parameters:** `State` — Yes (enable follow mode), No (disable follow mode).
**Parameters (app-verified):** App-verified from `subaction-Twitch-Moderation-Chat-Modes-Emote-Only-dialog-uia.txt`, `subaction-Twitch-Moderation-Chat-Modes-Emote-Only-dialog.png` (Add SubAction - Twitch > Moderation > Chat Modes > Emote Only, ~600×140): `State` (select); Ok/Cancel present.

**Variables:** Not documented in official docs

## Follow Mode

**Location:** `Twitch > Moderation > Chat Modes > Follow Mode`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Moderation-Chat-Modes-Follow-Mode-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Turn follow mode on or off

**Parameters:** `State` — On (enable follow mode), Off (disable follow mode). `Duration` — Integer, optional; the duration of the follow mode.
**Parameters (app-verified):** App-verified from `subaction-Twitch-Moderation-Chat-Modes-Follow-Mode-dialog-uia.txt`, `subaction-Twitch-Moderation-Chat-Modes-Follow-Mode-dialog.png` (Add SubAction - Twitch > Moderation > Chat Modes > Follow Mode, ~600×224): `State` (select), `Duration` (text), `Duration can either be a number (in minutes between 0 and 129,600), or a %variable% that will be parsed.` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Slow Mode

**Location:** `Twitch > Moderation > Chat Modes > Slow Mode`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Moderation-Chat-Modes-Slow-Mode-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Turn slow mode on or off

**Parameters:** `State` — On (enable slow mode), Off (disable slow mode). `Duration` — Integer, optional; the duration of the slow mode.
**Parameters (app-verified):** App-verified from `subaction-Twitch-Moderation-Chat-Modes-Slow-Mode-dialog-uia.txt`, `subaction-Twitch-Moderation-Chat-Modes-Slow-Mode-dialog.png` (Add SubAction - Twitch > Moderation > Chat Modes > Slow Mode, ~600×205): `State` (select), `Duration` (text), `Duration can either be a number (in seconds), or a %variable% that will be parsed.` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Subscriber Only

**Location:** `Twitch > Moderation > Chat Modes > Subscriber Only`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Moderation-Chat-Modes-Subscriber-Only-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Turn subscriber only on or off

**Parameters:** `State` — Yes (enable subscriber only), No (disable subscriber only).
**Parameters (app-verified):** App-verified from `subaction-Twitch-Moderation-Chat-Modes-Subscriber-Only-dialog-uia.txt`, `subaction-Twitch-Moderation-Chat-Modes-Subscriber-Only-dialog.png` (Add SubAction - Twitch > Moderation > Chat Modes > Subscriber Only, ~600×140): `State` (select); Ok/Cancel present.

**Variables:** Not documented in official docs
