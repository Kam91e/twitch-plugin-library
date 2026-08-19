---
title: "Streamer.bot — Triggers: Twitch > Subscriptions"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - triggers
  - twitch
source: "https://docs.streamer.bot/api/triggers/twitch/subscriptions"
last-reviewed: 2026-07-31
---

# Twitch — Subscriptions

> Triggers for Twitch subscription activity: new subs, resubs, gift subs and gift bombs, pay-it-forwards, and tier upgrades.

## Gift Bomb

**Location:** `Twitch > Subscriptions > Gift Bomb`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Twitch-Subscriptions-Gift-Bomb-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for a Twitch Gift Bomb

**Parameters:** App-verified from `trigger-Twitch-Subscriptions-Gift-Bomb-dialog-uia.txt`, `trigger-Twitch-Subscriptions-Gift-Bomb-dialog.png` (Add Trigger - Twitch > Subscriptions > Gift Bomb, ~600×237): `Tier` (button), `Tier 1` (button), `Tier 2` (button), `Tier 3` (button), `Sub Type` (button), `Anonymous` (button), `Min` (text), `Max` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Gift Paid Upgrade

**Location:** `Twitch > Subscriptions > Gift Paid Upgrade`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Triggered when a user upgrades their gifted subscription

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Gift Subscription

**Location:** `Twitch > Subscriptions > Gift Subscription`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Twitch-Subscriptions-Gift-Subscription-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for a Single Twitch Gift Subscription

**Parameters:** App-verified from `trigger-Twitch-Subscriptions-Gift-Subscription-dialog-uia.txt`, `trigger-Twitch-Subscriptions-Gift-Subscription-dialog.png` (Add Trigger - Twitch > Subscriptions > Gift Subscription, ~600×281): `Tier` (button), `Tier 1` (button), `Tier 2` (button), `Tier 3` (button), `Sub Type` (button), `Anonymous` (button), `Public` (button), `Months Gifted` (button), `Min` (text), `Max` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Pay It Forward

**Location:** `Twitch > Subscriptions > Pay It Forward`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Triggered when a user pays forward their gifted subscription

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Prime Paid Upgrade

**Location:** `Twitch > Subscriptions > Prime Paid Upgrade`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Triggered when a user upgrades their Prime subscription to a Tier 1, 2, or 3

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Resubscription

**Location:** `Twitch > Subscriptions > Resubscription`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Twitch-Subscriptions-Resubscription-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for a Twitch Resubscription

**Parameters:** App-verified from `trigger-Twitch-Subscriptions-Resubscription-dialog-uia.txt`, `trigger-Twitch-Subscriptions-Resubscription-dialog.png` (Add Trigger - Twitch > Subscriptions > Resubscription, ~600×212): `Tier` (button), `Prime` (button), `Tier 1` (button), `Tier 2` (button), `Min` (text), `Max` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Sub Counter Rollover

**Location:** `Twitch > Subscriptions > Sub Counter Rollover`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Twitch Sub Counter Rollover

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Subscription

**Location:** `Twitch > Subscriptions > Subscription`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Twitch-Subscriptions-Subscription-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for a Twitch Subscription

**Parameters:** App-verified from `trigger-Twitch-Subscriptions-Subscription-dialog-uia.txt`, `trigger-Twitch-Subscriptions-Subscription-dialog.png` (Add Trigger - Twitch > Subscriptions > Subscription, ~600×123): `Tier` (button), `Prime` (button), `Tier 1` (button), `Tier 2` (button), `Tier 3` (button); Ok/Cancel present.

**Variables:** Not documented in official docs
