---
title: "Streamer.bot — Triggers: Kick > Subscriptions"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - triggers
  - kick
source: "https://docs.streamer.bot/api/triggers/kick/subscriptions"
last-reviewed: 2026-07-31
---

# Kick — Subscriptions

> Triggers for Kick subscription events: new subs, gift subs, mass gifts, and resubscriptions.

## Gift Subscription

**Location:** `Kick > Subscriptions > Gift Subscription`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Kick Gift Subscription

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Mass Gift Subscription

**Location:** `Kick > Subscriptions > Mass Gift Subscription`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Kick-Subscriptions-Mass-Gift-Subscription-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for a Kick Mass Gift Subscription

**Parameters:** App-verified from `trigger-Kick-Subscriptions-Mass-Gift-Subscription-dialog-uia.txt`, `trigger-Kick-Subscriptions-Mass-Gift-Subscription-dialog.png` (Add Trigger - Kick > Subscriptions > Mass Gift Subscription, ~600×157): `Min` (text), `Max` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Gift Resubscription

**Location:** `Kick > Subscriptions > Gift Resubscription`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Kick Resubscription

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Subscription

**Location:** `Kick > Subscriptions > Subscription`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Kick Subscription

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs
