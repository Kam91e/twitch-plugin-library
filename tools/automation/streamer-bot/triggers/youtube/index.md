---
title: "Streamer.bot — Triggers: YouTube"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - triggers
  - youtube
source: "https://docs.streamer.bot/api/triggers/youtube"
last-reviewed: 2026-07-31
---

# YouTube

> Triggers for YouTube events: broadcast lifecycle, chat, membership, and general channel events.

Reference documentation for the YouTube triggers. Each entry lists the trigger's location in the Streamer.bot UI, a description, its parameters, and the variables it exposes. Official documentation: <https://docs.streamer.bot/api/triggers/youtube>.

## Groups

- [Broadcast](broadcast.md) — Broadcast lifecycle: added, started, ended, removed, monitoring, and statistics.
- [Chat](chat.md) — Chat events: messages, first words, Super Chat, and Super Stickers.
- [General](general.md) — General channel events: subscribers, sponsors, moderation, and present viewers.

## Membership

### Gift Membership Received

**Location:** `YouTube > Membership > Gift Membership Received`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for new YouTube gift memberships

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

### Membership Gift

**Location:** `YouTube > Membership > Membership Gift`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for YouTube gift memberships

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

### Member Milestone

**Location:** `YouTube > Membership > Member Milestone`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for YouTube member milestone events

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Polls

### Poll Closed

**Location:** `YouTube > Polls > Poll Closed`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger that occurs when a poll is closed. If you have more than two options they will appear as `poll.option2.text`, `poll.option2.votes`, `poll.option3.text`, `poll.option3.votes`, and so on.

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

### Poll Started

**Location:** `YouTube > Polls > Poll Started`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger that occurs when a poll is started

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

### Poll Updated

**Location:** `YouTube > Polls > Poll Updated`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger that occurs when a poll is updated

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs
