---
title: "Streamer.bot — Sub-Actions: Kick > Moderation"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - kick
source: "https://docs.streamer.bot/api/sub-actions/kick/moderation"
last-reviewed: 2026-07-31
---

# Kick — Moderation

> Sub-actions for moderating Kick chat from Streamer.bot: banning and timing out users.

## Ban User

**Location:** `Kick > Moderation > Ban User`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Kick-Moderation-Ban-User-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Ban a Kick user

**Parameters:** App-verified from `subaction-Kick-Moderation-Ban-User-dialog-uia.txt`, `subaction-Kick-Moderation-Ban-User-dialog.png` (Add SubAction - Kick > Moderation > Ban User, ~600×204): `User Login` (text), `Reason` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Timeout User

**Location:** `Kick > Moderation > Timeout User`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Kick-Moderation-Timeout-User-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Timeout a Kick user

**Parameters:** App-verified from `subaction-Kick-Moderation-Timeout-User-dialog-uia.txt`, `subaction-Kick-Moderation-Timeout-User-dialog.png` (Add SubAction - Kick > Moderation > Timeout User, ~600×204): `User Login` (text), `Duration` (text), `minutes` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Unban User

**Location:** `Kick > Moderation > Unban User`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Kick-Moderation-Unban-User-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Unban a Kick user

**Parameters:** App-verified from `subaction-Kick-Moderation-Unban-User-dialog-uia.txt`, `subaction-Kick-Moderation-Unban-User-dialog.png` (Add SubAction - Kick > Moderation > Unban User, ~600×163): `User Login` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## UnTimeout User

**Location:** `Kick > Moderation > UnTimeout User`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Kick-Moderation-UnTimeout-User-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Untimeout a Kick user

**Parameters:** App-verified from `subaction-Kick-Moderation-UnTimeout-User-dialog-uia.txt`, `subaction-Kick-Moderation-UnTimeout-User-dialog.png` (Add SubAction - Kick > Moderation > UnTimeout User, ~600×163): `User Login` (text); Ok/Cancel present.

**Variables:** Not documented in official docs
