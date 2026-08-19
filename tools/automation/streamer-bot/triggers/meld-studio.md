---
title: "Streamer.bot — Triggers: Meld Studio"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - triggers
  - meld-studio
source: "https://docs.streamer.bot/api/triggers/meld-studio"
last-reviewed: 2026-07-31
---

# Meld Studio

> Triggers for Meld Studio events: connection, streaming, recording, scene changes, and raw events.

## Connected

**Location:** `Meld Studio > Connected`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Meld-Studio-Connected-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for when Meld Studio is Connected

**Parameters:** App-verified from `trigger-Meld-Studio-Connected-dialog-uia.txt`, `trigger-Meld-Studio-Connected-dialog.png` (Add Trigger - Meld Studio > Connected, ~600×140): `Connection` (select), `Add Connection` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Disconnected

**Location:** `Meld Studio > Disconnected`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Meld-Studio-Disconnected-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for when Meld is Disconnected

**Parameters:** App-verified from `trigger-Meld-Studio-Disconnected-dialog-uia.txt`, `trigger-Meld-Studio-Disconnected-dialog.png` (Add Trigger - Meld Studio > Disconnected, ~600×140): `Connection` (select), `Add Connection` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Event

**Location:** `Meld Studio > Event`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Meld-Studio-Event-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for various events in Meld Studio

**Parameters:** App-verified from `trigger-Meld-Studio-Event-dialog-uia.txt`, `trigger-Meld-Studio-Event-dialog.png` (Add Trigger - Meld Studio > Event, ~600×183): `Connection` (select), `Event` (select), `Add Connection` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Recording Started

**Location:** `Meld Studio > Recording Started`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Meld-Studio-Recording-Started-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for when Meld begins recording

**Parameters:** App-verified from `trigger-Meld-Studio-Recording-Started-dialog-uia.txt`, `trigger-Meld-Studio-Recording-Started-dialog.png` (Add Trigger - Meld Studio > Recording Started, ~600×140): `Connection` (select), `Add Connection` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Recording Stopped

**Location:** `Meld Studio > Recording Stopped`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Meld-Studio-Recording-Stopped-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for when Meld stops recording

**Parameters:** App-verified from `trigger-Meld-Studio-Recording-Stopped-dialog-uia.txt`, `trigger-Meld-Studio-Recording-Stopped-dialog.png` (Add Trigger - Meld Studio > Recording Stopped, ~600×140): `Connection` (select), `Add Connection` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Scene Changed

**Location:** `Meld Studio > Scene Changed`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Meld-Studio-Scene-Changed-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for when the Scene is changed in Meld Studio

**Parameters:** App-verified from `trigger-Meld-Studio-Scene-Changed-dialog-uia.txt`, `trigger-Meld-Studio-Scene-Changed-dialog.png` (Add Trigger - Meld Studio > Scene Changed, ~600×181): `Connection` (select), `Scene Name` (text), `Add Connection` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Streaming Started

**Location:** `Meld Studio > Streaming Started`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Meld-Studio-Streaming-Started-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for when Meld begins streaming

**Parameters:** App-verified from `trigger-Meld-Studio-Streaming-Started-dialog-uia.txt`, `trigger-Meld-Studio-Streaming-Started-dialog.png` (Add Trigger - Meld Studio > Streaming Started, ~600×140): `Connection` (select), `Add Connection` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Streaming Stopped

**Location:** `Meld Studio > Streaming Stopped`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Meld-Studio-Streaming-Stopped-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for when Meld stops streaming

**Parameters:** App-verified from `trigger-Meld-Studio-Streaming-Stopped-dialog-uia.txt`, `trigger-Meld-Studio-Streaming-Stopped-dialog.png` (Add Trigger - Meld Studio > Streaming Stopped, ~600×140): `Connection` (select), `Add Connection` (button); Ok/Cancel present.

**Variables:** Not documented in official docs
