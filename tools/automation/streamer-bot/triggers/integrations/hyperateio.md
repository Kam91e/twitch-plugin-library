---
title: "Streamer.bot — Triggers: Integrations > HypeRate.io"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - triggers
  - integrations
source: "https://docs.streamer.bot/api/triggers/integrations/hyperateio"
last-reviewed: 2026-07-31
---

# Integrations — HypeRate.io

> Triggers for HypeRate.io heart rate pulses, Twitch clip creation, and connection state.

## Connected

**Location:** `Integrations > HypeRate.io > Connected`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** When the HypeRate.io integration has connected

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Disconnected

**Location:** `Integrations > HypeRate.io > Disconnected`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** When the HypeRate.io integration has disconnected

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Heart Rate Pulse

**Location:** `Integrations > HypeRate.io > Heart Rate Pulse`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Integrations-HypeRate-io-Heart-Rate-Pulse-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for a HypeRate Heart Rate Pulse

**Parameters:** App-verified from `trigger-Integrations-HypeRate-io-Heart-Rate-Pulse-dialog-uia.txt`, `trigger-Integrations-HypeRate-io-Heart-Rate-Pulse-dialog.png` (Add Trigger - Integrations > HypeRate.io > Heart Rate Pulse, ~600×157): `Min` (text), `Max` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

**Note:** When HypeRate.io is broadcasting your heart rate, this event can fire once every second, so be sure whatever action you use runs fast enough so it won't cause a backlog in the action queue. It is also recommended that whatever action you are running be placed in a blocking queue.

## Twitch Clip Created

**Location:** `Integrations > HypeRate.io > Twitch Clip Created`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for a HypeRate creating a Twitch Clip

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs
