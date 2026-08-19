---
title: "Streamer.bot — Triggers: Twitch > Shared Chat"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - triggers
  - twitch
source: "https://docs.streamer.bot/api/triggers/twitch/shared-chat"
last-reviewed: 2026-07-31
---

# Twitch — Shared Chat

> Triggers for activity in a Twitch Shared Chat: announcements, subscriptions and gifts, message deletions, bans, and session lifecycle events.

## Shared Announcement

**Location:** `Twitch > Shared Chat > Shared Announcement`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Triggered When an Announcement Is Made in a Shared Chat

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Shared Community Sub Gift

**Location:** `Twitch > Shared Chat > Shared Community Sub Gift`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Twitch-Shared-Chat-Shared-Chat-Community-Sub-Gift-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Triggered When a User Gifts Community Subscriptions in the Shared Chat

**Parameters:** App-verified from `trigger-Twitch-Shared-Chat-Shared-Chat-Community-Sub-Gift-dialog-uia.txt`, `trigger-Twitch-Shared-Chat-Shared-Chat-Community-Sub-Gift-dialog.png` (Add Trigger - Twitch > Shared Chat > Shared Chat Community Sub Gift, ~600×237): `Tier` (button), `Prime` (button), `Tier 1` (button), `Tier 2` (button), `Tier 3` (button), `Sub Type` (button), `Anonymous` (button), `Min` (text), `Max` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Shared Gift Paid Upgrade

**Location:** `Twitch > Shared Chat > Shared Gift Paid Upgrade`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Triggered When a User Upgrades Their Gifted Subscription in the Shared Chat

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Shared Chat Message Deleted

**Location:** `Twitch > Shared Chat > Shared Chat Message Deleted`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for When a Twitch Chat Message Is Deleted in a Shared Chat

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Shared Chat Raid

**Location:** `Twitch > Shared Chat > Shared Chat Raid`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Twitch-Shared-Chat-Shared-Chat-Raid-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for a Shared Chat Raid
**Parameters:** App-verified from `trigger-Twitch-Shared-Chat-Shared-Chat-Raid-dialog-uia.txt`, `trigger-Twitch-Shared-Chat-Shared-Chat-Raid-dialog.png` (Add Trigger - Twitch > Shared Chat > Shared Chat Raid, ~600×157): `Min` (text), `Max` (text), `Will trigger on any value` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Shared Modiversary

**Location:** `Twitch > Shared Chat > Shared Modiversary`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Twitch-Shared-Chat-Shared-Modiversary-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for a Shared Modiversary
**Parameters:** App-verified from `trigger-Twitch-Shared-Chat-Shared-Modiversary-dialog-uia.txt`, `trigger-Twitch-Shared-Chat-Shared-Modiversary-dialog.png` (Add Trigger - Twitch > Shared Chat > Shared Modiversary, ~600×157): `Min` (text), `Max` (text), `Will trigger on any value` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Shared Pay It Forward

**Location:** `Twitch > Shared Chat > Shared Pay It Forward`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Triggered When a User Pays Forward Their Gifted Subscription in the Shared Chat

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Shared Prime Paid Upgrade

**Location:** `Twitch > Shared Chat > Shared Prime Paid Upgrade`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Triggered When a User Upgrades Their Prime Subscription to a Tier 1, 2, or 3 in the Shared Chat

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Shared Resub

**Location:** `Twitch > Shared Chat > Shared Resub`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Twitch-Shared-Chat-Shared-Chat-Resub-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Triggered When a User Resubscribes in the Shared Chat

**Parameters:** App-verified from `trigger-Twitch-Shared-Chat-Shared-Chat-Resub-dialog-uia.txt`, `trigger-Twitch-Shared-Chat-Shared-Chat-Resub-dialog.png` (Add Trigger - Twitch > Shared Chat > Shared Chat Resub, ~600×212): `Tier` (button), `Prime` (button), `Tier 1` (button), `Tier 2` (button), `Min` (text), `Max` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Twitch Shared Chat Session Begin

**Location:** `Twitch > Shared Chat > Twitch Shared Chat Session Begin`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for When a Twitch Shared Chat Session Begins

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Twitch Shared Chat Session End

**Location:** `Twitch > Shared Chat > Twitch Shared Chat Session End`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for When a Twitch Shared Chat Session Ends

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Twitch Shared Chat Session Update

**Location:** `Twitch > Shared Chat > Twitch Shared Chat Session Update`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for When a Twitch Shared Chat Session Updates

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Shared Sub Gift

**Location:** `Twitch > Shared Chat > Shared Sub Gift`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Twitch-Shared-Chat-Shared-Chat-Sub-Gift-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Triggered When a User Gifts a Subscription in a Shared Chat

**Parameters:** App-verified from `trigger-Twitch-Shared-Chat-Shared-Chat-Sub-Gift-dialog-uia.txt`, `trigger-Twitch-Shared-Chat-Shared-Chat-Sub-Gift-dialog.png` (Add Trigger - Twitch > Shared Chat > Shared Chat Sub Gift, ~600×281): `Tier` (button), `Prime` (button), `Tier 1` (button), `Tier 2` (button), `Tier 3` (button), `Sub Type` (button), `Anonymous` (button), `Public` (button), `Months Gifted` (button), `Min` (text), `Max` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Shared Sub

**Location:** `Twitch > Shared Chat > Shared Sub`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Twitch-Shared-Chat-Shared-Chat-Sub-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Triggered When a User Subscribes in a Shared Chat

**Parameters:** App-verified from `trigger-Twitch-Shared-Chat-Shared-Chat-Sub-dialog-uia.txt`, `trigger-Twitch-Shared-Chat-Shared-Chat-Sub-dialog.png` (Add Trigger - Twitch > Shared Chat > Shared Chat Sub, ~600×123): `Tier` (button), `Prime` (button), `Tier 1` (button), `Tier 2` (button), `Tier 3` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Shared Chat User Banned

**Location:** `Twitch > Shared Chat > Shared Chat User Banned`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for When a Twitch User Is Banned in a Shared Chat

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Shared Chat User Timed Out

**Location:** `Twitch > Shared Chat > Shared Chat User Timed Out`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Twitch-Shared-Chat-Shared-Chat-User-Timed-Out-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for When a Twitch User Is Timed Out in a Shared Chat

**Parameters:** App-verified from `trigger-Twitch-Shared-Chat-Shared-Chat-User-Timed-Out-dialog-uia.txt`, `trigger-Twitch-Shared-Chat-Shared-Chat-User-Timed-Out-dialog.png` (Add Trigger - Twitch > Shared Chat > Shared Chat User Timed Out, ~600×157): `Min` (text), `Max` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Shared Chat User Unbanned

**Location:** `Twitch > Shared Chat > Shared Chat User Unbanned`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for When a Twitch User Is Unbanned in a Shared Chat

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Shared Chat User Untimed Out

**Location:** `Twitch > Shared Chat > Shared Chat User Untimed Out`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for When a Twitch User Is Untimed Out in a Shared Chat

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs
