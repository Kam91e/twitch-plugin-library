---
title: "Streamer.bot — Triggers: Twitch"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - triggers
  - twitch
source: "https://docs.streamer.bot/api/triggers/twitch"
last-reviewed: 2026-07-31
---

# Twitch

> Triggers for Twitch platform events: chat and moderation, subscriptions, raids, polls, predictions, Hype Trains, charity campaigns, and connection lifecycle.

Reference documentation for the Twitch triggers. Each entry lists the trigger's location in the Streamer.bot UI, a description, its parameters, and the variables it exposes. Official documentation: <https://docs.streamer.bot/api/triggers/twitch>.

## Groups

- [Channel](channel.md) — Follows, stream online/offline, and viewer count updates.
- [Charity](charity.md) — Charity campaign lifecycle: started, donation, progress, completed.
- [Chat](chat/index.md) — Messages, cheers, whispers, first words, watch streaks, and chat modes.
- [Connections](connections.md) — Bot and broadcaster chat/EventSub/PubSub connection status and broadcaster authentication.
- [Emotes](emotes.md) — BetterTTV and SevenTV emote add/remove events.
- [General](general.md) — Announcements, present viewers, shoutouts received, and stream updates.
- [Guest Star](guest-star.md) — Guest Star sessions, guest updates, and settings changes.
- [Hype Train](hype-train.md) — Hype Train start, level up, update, and end events.
- [Moderation](moderation.md) — AutoMod, bans, timeouts, VIPs, moderators, warnings, and unban requests.
- [Polls](polls.md) — Twitch Poll lifecycle events.
- [Predictions](predictions.md) — Twitch Prediction lifecycle events.
- [Raid](raid.md) — Incoming raids and outgoing raids sent to another channel.
- [Shared Chat](shared-chat.md) — Shared Chat announcements, subscriptions, and moderation events.
- [Subscriptions](subscriptions.md) — Subs, resubs, gift subs and gift bombs, and tier upgrades.

## Ads

### Ad Mid-Roll

**Location:** `Twitch > Ads > Ad Mid-Roll`
**Description:** Trigger for a Twitch Ad Mid-Roll. This event triggers 5 seconds prior to the start of an ad. See the [Ad Run](index.md#ad-run) trigger for the ad start event. Not recommended to rely on — it utilizes an undocumented and unsupported Twitch PubSub event. Removed in Streamer.bot v1.0.0 — Twitch has deprecated the PubSub API and all triggers relying on it have been removed.

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

### Ad Run

**Location:** `Twitch > Ads > Ad Run`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Twitch Ad Run. This event triggers at the start of an ad break.

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

### Upcoming Ad

**Location:** `Twitch > Ads > Upcoming Ad`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Twitch-Ads-Upcoming-Ad-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for an upcoming Twitch Ad Run. This trigger runs at 1 minute intervals starting at 5 minutes until the upcoming ad.

**Parameters:** App-verified from `trigger-Twitch-Ads-Upcoming-Ad-dialog-uia.txt`, `trigger-Twitch-Ads-Upcoming-Ad-dialog.png` (Add Trigger - Twitch > Ads > Upcoming Ad, ~600×123): `Minutes` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Channel Goal

### Goal Begin

**Location:** `Twitch > Channel Goal > Goal Begin`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for the begin of a Twitch goal

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

### Goal End

**Location:** `Twitch > Channel Goal > Goal End`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for the end of a Twitch goal

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

### Goal Progress

**Location:** `Twitch > Channel Goal > Goal Progress`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for the progression of a Twitch goal

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Channel Power Ups

### Custom Power Up Redemption

**Location:** `Twitch > Channel Power Ups > Custom Power Up Redemption`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Twitch-Channel-Power-Ups-Custom-Power-Up-Redemption-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a custom power-up has been used

**Parameters:** App-verified from `trigger-Twitch-Channel-Power-Ups-Custom-Power-Up-Redemption-dialog-uia.txt`, `trigger-Twitch-Channel-Power-Ups-Custom-Power-Up-Redemption-dialog.png` (Add Trigger - Twitch > Channel Power-Ups > Custom Power-Up Redemption, ~600×140): `Reward` (select); Ok/Cancel present.

**Variables:** Not documented in official docs

## Channel Reward

### Automatic Reward Redemption

**Location:** `Twitch > Channel Reward > Automatic Reward Redemption`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Twitch-Channel-Reward-Automatic-Reward-Redemption-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for when default channel point rewards or Power-ups have been used. Works for both default rewards (those made by Twitch like "Highlight My Message") and Power-ups (added to Twitch on June 12, 2024, which allow viewers to do specific interactions with bits).

**Parameters:** App-verified from `trigger-Twitch-Channel-Reward-Automatic-Reward-Redemption-dialog-uia.txt`, `trigger-Twitch-Channel-Reward-Automatic-Reward-Redemption-dialog.png` (Add Trigger - Twitch > Channel Reward > Automatic Reward Redemption, ~600×140): `Reward` (select); Ok/Cancel present.

**Variables:** Not documented in official docs

### Reward Redemption Updated

**Location:** `Twitch > Channel Reward > Reward Redemption Updated`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Twitch-Channel-Reward-Reward-Redemption-Updated-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Twitch Reward Redemption when it's marked as complete or rejected in Twitch Reward Queue.

**Parameters:** App-verified from `trigger-Twitch-Channel-Reward-Reward-Redemption-Updated-dialog-uia.txt`, `trigger-Twitch-Channel-Reward-Reward-Redemption-Updated-dialog.png` (Add Trigger - Twitch > Channel Reward > Reward Redemption Updated, ~600×140): `Reward` (select), `Create Reward` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

### Reward Redemption

**Location:** `Twitch > Channel Reward > Reward Redemption`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Twitch-Channel-Reward-Reward-Redemption-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Twitch Reward Redemption

**Parameters:** App-verified from `trigger-Twitch-Channel-Reward-Reward-Redemption-dialog-uia.txt`, `trigger-Twitch-Channel-Reward-Reward-Redemption-dialog.png` (Add Trigger - Twitch > Channel Reward > Reward Redemption, ~600×140): `Reward` (select), `Create Reward` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Community Goal

### Contribution

**Location:** `Twitch > Community Goal > Contribution`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Twitch Community Goal Contribution. Removed in Streamer.bot v1.0.0 — Twitch has deprecated the PubSub API; these triggers will no longer function until Twitch re-implements them in the EventSub API.

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

### Ended

**Location:** `Twitch > Community Goal > Ended`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Twitch Community Goal Ends. Removed in Streamer.bot v1.0.0 — Twitch has deprecated the PubSub API; these triggers will no longer function until Twitch re-implements them in the EventSub API.

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Pyramid

### Broken

**Location:** `Twitch > Pyramid > Broken`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Twitch Pyramid is Broken

**Parameters:** Not documented in official docs

**Variables:** The user variables are for the person who destroyed the pyramid

### Success

**Location:** `Twitch > Pyramid > Success`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Twitch Pyramid is Succesfully created

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs
