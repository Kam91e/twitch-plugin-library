---
title: "Streamer.bot — Triggers: YouTube > General"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - triggers
  - youtube
source: "https://docs.streamer.bot/api/triggers/youtube/general"
last-reviewed: 2026-07-31
---

# YouTube — General

> Triggers for general YouTube channel events: subscribers, sponsors, sponsor-only mode, viewer presence, and moderation.

## New Sponsor

**Location:** `YouTube > General > New Sponsor`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for YouTube sponsor events

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## New Subscriber

**Location:** `YouTube > General > New Subscriber`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-YouTube-General-New-Subscriber-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for new YouTube subscriptions. This trigger relies on event data from StreamElements — for this trigger to work you must configure the StreamElements integration in Streamer.bot.

**Parameters:** App-verified from `trigger-YouTube-General-New-Subscriber-dialog-uia.txt`, `trigger-YouTube-General-New-Subscriber-dialog.png` (Add Trigger, ~460×163): no labeled fields captured; Ok/Cancel present.

**Variables:** Not documented in official docs

## Present Viewers

**Location:** `YouTube > General > Present Viewers`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for YouTube viewer changes. The YouTube present viewer acts more like a chat activity tracker. There is no "Live-Update" option for YouTube as the API does not provide the viewer list. Under `Platforms > YouTube > Settings` you will find the options for the Present Viewers Trigger. The slider behaves as a threshold: the timer runs every minute and checks the current time minus the user's last active time; if this is less than the threshold they are marked as present, otherwise as not present. The trigger executes every minute. The default setting is the slider set to `5` minutes.

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Sponsor Only Ended

**Location:** `YouTube > General > Sponsor Only Ended`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for sponsor only mode ending

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Sponsor Only Started

**Location:** `YouTube > General > Sponsor Only Started`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for sponsor only mode starting

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## User Banned

**Location:** `YouTube > General > User Banned`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for YouTube user banned events

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## User Timed Out

**Location:** `YouTube > General > User Timed Out`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-YouTube-General-User-Timed-Out-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for YouTube user timedout events

**Parameters:** App-verified from `trigger-YouTube-General-User-Timed-Out-dialog-uia.txt`, `trigger-YouTube-General-User-Timed-Out-dialog.png` (Add Trigger - YouTube > General > User Timed Out, ~600×157): `Min` (text), `Max` (text); Ok/Cancel present.

**Variables:** Not documented in official docs
