---
title: "Streamer.bot — Sub-Actions: Twitch > Moderation"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - twitch
source: "https://docs.streamer.bot/api/sub-actions/twitch/moderation"
last-reviewed: 2026-07-31
---

# Twitch — Moderation

> Sub-actions to moderate your Twitch channel: add or remove moderators and VIPs, ban, timeout, unban and untimeout users, send shoutouts, issue warnings, and control shield mode.

> **Version note (v1.0.5+):** Add Suspicious Status and Remove Suspicious Status are not present in v1.0.4; added in v1.0.5.

## Groups

- [Chat Modes](chat-modes.md) — Emote-only, follow, slow and subscriber-only chat modes.

## Add Moderator

**Location:** `Twitch > Moderation > Add Moderator`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Moderation-Add-Moderator-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Add a moderator to your Twitch channel.

**Parameters:** `Source Type` — User (user that invoked the action e.g. a raid leader, subscriber, point redeemer etc.), From Input (takes the next word proceeding the trigger as the username to lookup; this user does not have to be present in the channel), Variable (use the content of an existing variable as the target). `Variable` — If you selected `Variable` as your `Source Type`, enter the name of the variable you would like to read in.

**Variables:** Not documented in official docs

## Add Suspicious Status

**Location:** `Twitch > Moderation > Add Suspicious Status`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Moderation-Add-Suspicious-Status-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Add a suspicious status to a Twitch user

**Parameters:** App-verified from `subaction-Twitch-Moderation-Add-Suspicious-Status-dialog-uia.txt`, `subaction-Twitch-Moderation-Add-Suspicious-Status-dialog.png` (Add SubAction - Twitch > Moderation > Add Suspicious Status, ~600×224): `User Login` (text), `Status` (select), `The user login can contain either a specific user` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Add VIP

**Location:** `Twitch > Moderation > Add VIP`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Moderation-Add-VIP-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Add a VIP to your Twitch channel.

**Parameters:** `Source Type` — User (user that invoked the action e.g. a raid leader, subscriber, point redeemer etc.), From Input (takes the next word proceeding the trigger as the username to lookup; this user does not have to be present in the channel), Variable (use the content of an existing variable as the target). `Variable` — If you selected `Variable` as your `Source Type`, enter the name of the variable you would like to read in.

**Variables:** Not documented in official docs

## Ban User

**Location:** `Twitch > Moderation > Ban User`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Moderation-Ban-User-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Ban a Twitch user

**Parameters:** App-verified from `subaction-Twitch-Moderation-Ban-User-dialog-uia.txt`, `subaction-Twitch-Moderation-Ban-User-dialog.png` (Add SubAction - Twitch > Moderation > Ban User, ~600×204): `User Login` (text), `Reason` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Remove Moderator

**Location:** `Twitch > Moderation > Remove Moderator`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Moderation-Remove-Moderator-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Remove a moderator from your Twitch channel.

**Parameters:** `Source Type` — User (user that invoked the action e.g. a raid leader, subscriber, point redeemer etc.), From Input (takes the next word proceeding the trigger as the username to lookup; this user does not have to be present in the channel), Variable (use the content of an existing variable as the target). `Variable` — If you selected `Variable` as your `Source Type`, enter the name of the variable you would like to read in.

**Variables:** Not documented in official docs

## Remove Suspicious Status

**Location:** `Twitch > Moderation > Remove Suspicious Status`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Moderation-Remove-Suspicious-Status-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Remove a suspicious status from a Twitch user

**Parameters:** App-verified from `subaction-Twitch-Moderation-Remove-Suspicious-Status-dialog-uia.txt`, `subaction-Twitch-Moderation-Remove-Suspicious-Status-dialog.png` (Add SubAction - Twitch > Moderation > Remove Suspicious Status, ~600×181): `User Login` (text), `The user login can contain either a specific user` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Remove VIP

**Location:** `Twitch > Moderation > Remove VIP`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Moderation-Remove-VIP-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Remove a VIP from your Twitch channel.

**Parameters:** `Source Type` — User (user that invoked the action e.g. a raid leader, subscriber, point redeemer etc.), From Input (takes the next word proceeding the trigger as the username to lookup; this user does not have to be present in the channel), Variable (use the content of an existing variable as the target). `Variable` — If you selected `Variable` as your `Source Type`, enter the name of the variable you would like to read in.

**Variables:** Not documented in official docs

## Send Shoutout

**Location:** `Twitch > Moderation > Send Shoutout`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Moderation-Send-Shoutout-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Send a shoutout to a user on Twitch

**Parameters:** App-verified from `subaction-Twitch-Moderation-Send-Shoutout-dialog-uia.txt`, `subaction-Twitch-Moderation-Send-Shoutout-dialog.png` (Add SubAction - Twitch > Moderation > Send Shoutout, ~600×181): `User Login` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Timeout User

**Location:** `Twitch > Moderation > Timeout User`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Moderation-Timeout-User-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Timeout a user. Timing out a moderator will automatically reassign their moderator status once the timeout period ends; editors will not receive their editor rights back. This only applies to the sub-action — the C# method does not reassign their moderator status.

**Parameters:** App-verified from `subaction-Twitch-Moderation-Timeout-User-dialog-uia.txt`, `subaction-Twitch-Moderation-Timeout-User-dialog.png` (Add SubAction - Twitch > Moderation > Timeout User, ~600×245): `User Login` (text), `Duration` (text), `seconds` (text), `Reason` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Unban User

**Location:** `Twitch > Moderation > Unban User`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Moderation-Unban-User-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Unban a Twitch user

**Parameters:** App-verified from `subaction-Twitch-Moderation-Unban-User-dialog-uia.txt`, `subaction-Twitch-Moderation-Unban-User-dialog.png` (Add SubAction - Twitch > Moderation > Unban User, ~600×181): `User Login` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## UnTimeout User

**Location:** `Twitch > Moderation > UnTimeout User`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Moderation-UnTimeout-User-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Untimeout a Twitch user

**Parameters:** App-verified from `subaction-Twitch-Moderation-UnTimeout-User-dialog-uia.txt`, `subaction-Twitch-Moderation-UnTimeout-User-dialog.png` (Add SubAction - Twitch > Moderation > UnTimeout User, ~600×181): `User Login` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Warn User

**Location:** `Twitch > Moderation > Warn User`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Moderation-Warn-User-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Warn a Twitch user

**Parameters:** App-verified from `subaction-Twitch-Moderation-Warn-User-dialog-uia.txt`, `subaction-Twitch-Moderation-Warn-User-dialog.png` (Add SubAction - Twitch > Moderation > Warn User, ~600×204): `User Login` (text), `Reason` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Shield

### Get Shield Mode Status

**Location:** `Twitch > Moderation > Shield > Get Shield Mode Status`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Get your shield mode status

**Parameters:** Not documented in official docs

**Variables:** `is_active` — If shield mode is active or not. `lastActivatedAt` — When this was last activated e.g. 12/31/2000 0:00:00 AM. `moderatorId` — The moderator's user id. `moderatorName` — The moderator's display name. `moderatorLogin` — The moderator's login name.

### Update Shield Mode Status

**Location:** `Twitch > Moderation > Shield > Update Shield Mode Status`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Moderation-Shield-Update-Shield-Mode-Status-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Update the shield mode status on your channel.

**Parameters:** State — Yes (set shield mode to enabled), No (set shield mode to disabled), Toggle (toggle shield mode between enabled & disabled).

**Variables:** Not documented in official docs
