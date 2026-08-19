---
title: "Streamer.bot — Triggers: Kick"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - triggers
  - kick
source: "https://docs.streamer.bot/api/triggers/kick"
last-reviewed: 2026-07-31
---

# Kick

> Triggers for Kick events: channel, subscriptions, chat, channel rewards, emotes, and moderation.

Reference documentation for the Kick triggers. Each entry lists the trigger's location in the Streamer.bot UI, a description, its parameters, and the variables it exposes. Official documentation: <https://docs.streamer.bot/api/triggers/kick>.

## Groups

- [Channel](channel.md) — Channel events: follows, stream online/offline, and viewer count updates.
- [Subscriptions](subscriptions.md) — Subscription events: new subs, gift subs, mass gifts, and resubscriptions.

## Channel Reward

### Reward Redemption

**Location:** `Kick > Channel Reward > Reward Redemption`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Kick-Channel-Reward-Reward-Redemption-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Kick Channel Reward Redemption

**Parameters:** App-verified from `trigger-Kick-Channel-Reward-Reward-Redemption-dialog-uia.txt`, `trigger-Kick-Channel-Reward-Reward-Redemption-dialog.png` (Add Trigger - Kick > Channel Reward > Reward Redemption, ~600×140): `Reward` (select), `Create Reward` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Chat

### First Words

**Location:** `Kick > Chat > First Words`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Kick-Chat-First-Words-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Kick First Words. This triggers when someone sends their first message of the stream. The exact reset time is set in `Platforms -> Kick -> First Words` and is `12h` by default. That means that Streamer.bot must have been closed for 12 hours in order to reset the First Words trigger. You can reset it manually at `Platforms -> Kick -> First Words` via the `Reset` button.

**Parameters:** `User Name` — Text: enter a user name to filter on that user. `Is User Id` — Checkbox: check this field if the text in the `User Name` field is a user id.

**Variables:** Not documented in official docs

### Message

**Location:** `Kick > Chat > Chat Message`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Kick Chat Message

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Emotes

### SevenTV Emote Added

**Location:** `Kick > Emotes > SevenTV Emote Added`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a SevenTV emote has been added to the Kick channel

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

### SevenTV Emote Removed

**Location:** `Kick > Emotes > SevenTV Emote Removed`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a SevenTV emote has been removed from the Kick channel

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## General

### Channel Update

**Location:** `Kick > General > Channel Update`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Kick-General-Channel-Update-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Kick Channel Update. This triggers when the title or the description changes on your stream.

**Parameters:** `Game Only` — Checkbox: check this field if you only want this to trigger when the game changes. `Game` — Select: select a game if you only want this to trigger when the stream changes to this game.

**Variables:** Not documented in official docs

### Present Viewers

**Location:** `Kick > General > Present Viewers`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for the Kick present viewers event. The Kick present viewer acts more like a chat activity tracker. There is no "Live-Update" option for Kick as the API does not provide the viewer list. Under `Platforms > Kick > Settings` you will find the options for the Present Viewers Trigger. The slider behaves as a threshold: the timer runs every minute and checks the current time minus the user's last active time; if this is less than the threshold they are marked as present, otherwise as not present. The trigger executes every minute. The default setting is the slider set to `5` minutes.

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Kicks

### Kicks Gifted

**Location:** `Kick > Kicks > Kicks Gifted`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Kick-Kicks-Gifted-Kicks-Gifted-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Kicks Gifted event

**Parameters:** App-verified from `trigger-Kick-Kicks-Gifted-Kicks-Gifted-dialog-uia.txt`, `trigger-Kick-Kicks-Gifted-Kicks-Gifted-dialog.png` (Add Trigger - Kick > Kicks Gifted > Kicks Gifted, ~600×157): `Min` (text), `Max` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Moderation

### User Banned

**Location:** `Kick > Moderation > User Banned`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for Kick user banned events

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

### User Timed Out

**Location:** `Kick > Moderation > User Timed Out`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Kick-Moderation-User-Timed-Out-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Kick User is Timed Out

**Parameters:** App-verified from `trigger-Kick-Moderation-User-Timed-Out-dialog-uia.txt`, `trigger-Kick-Moderation-User-Timed-Out-dialog.png` (Add Trigger - Kick > Moderation > User Timed Out, ~600×157): `Min` (text), `Max` (text); Ok/Cancel present.

**Variables:** Not documented in official docs
