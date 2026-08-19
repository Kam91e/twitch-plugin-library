---
title: "Streamer.bot — Triggers: Streamlabs Desktop"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - triggers
  - streamlabs-desktop
source: "https://docs.streamer.bot/api/triggers/streamlabs-desktop"
last-reviewed: 2026-07-31
---

# Streamlabs Desktop

> Triggers for Streamlabs Desktop events: connection, streaming, recording, and scene changes.

## Streamlabs Desktop Connected

**Location:** `Streamlabs Desktop > Streamlabs Desktop Connected`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Streamlabs-Desktop-Connected-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for when Streamlabs Desktop is Connected

**Parameters:** `Instance` — Select (required): choose a configured Streamlabs Desktop Connection. Select `Any` to trigger on any connection.
**Parameters (app-verified):** App-verified from `trigger-Streamlabs-Desktop-Connected-dialog-uia.txt`, `trigger-Streamlabs-Desktop-Connected-dialog.png` (Add Trigger - Streamlabs Desktop > Connected, ~600×140): `Connection` (select), `Add Connection` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Streamlabs Desktop Disconnected

**Location:** `Streamlabs Desktop > Streamlabs Desktop Disconnected`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Streamlabs-Desktop-Disconnected-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for when Streamlabs Desktop is Disconnected

**Parameters:** `Instance` — Select (required): choose a configured Streamlabs Desktop Connection. Select `Any` to trigger on any connection.
**Parameters (app-verified):** App-verified from `trigger-Streamlabs-Desktop-Disconnected-dialog-uia.txt`, `trigger-Streamlabs-Desktop-Disconnected-dialog.png` (Add Trigger - Streamlabs Desktop > Disconnected, ~600×140): `Connection` (select), `Add Connection` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Streamlabs Desktop Recording Started

**Location:** `Streamlabs Desktop > Streamlabs Desktop Recording Started`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Streamlabs-Desktop-Recording-Started-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Streamlabs Desktop Recording is Started

**Parameters:** `Instance` — Select (required): choose a configured Streamlabs Desktop Connection. Select `Any` to trigger on any connection.
**Parameters (app-verified):** App-verified from `trigger-Streamlabs-Desktop-Recording-Started-dialog-uia.txt`, `trigger-Streamlabs-Desktop-Recording-Started-dialog.png` (Add Trigger - Streamlabs Desktop > Recording Started, ~600×140): `Connection` (select), `Add Connection` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Streamlabs Desktop Recording Stopped

**Location:** `Streamlabs Desktop > Streamlabs Desktop Recording Stopped`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Streamlabs-Desktop-Recording-Stopped-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Streamlabs Desktop Recording is Stopped

**Parameters:** `Instance` — Select (required): choose a configured Streamlabs Desktop Connection. Select `Any` to trigger on any connection.
**Parameters (app-verified):** App-verified from `trigger-Streamlabs-Desktop-Recording-Stopped-dialog-uia.txt`, `trigger-Streamlabs-Desktop-Recording-Stopped-dialog.png` (Add Trigger - Streamlabs Desktop > Recording Stopped, ~600×140): `Connection` (select), `Add Connection` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Streamlabs Desktop Scene Changed

**Location:** `Streamlabs Desktop > Streamlabs Desktop Scene Changed`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Streamlabs-Desktop-Scene-Changed-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for when the Streamlabs Desktop Scene is Changed

**Parameters:** `Instance` — Select (required): choose a configured Streamlabs Desktop Connection. Select `Any` to trigger on any connection. `Scene Name` — Text: specify a scene name if you only want it to trigger this event when you switch to a specific scene. If you leave this field empty it will trigger on every scene.
**Parameters (app-verified):** App-verified from `trigger-Streamlabs-Desktop-Scene-Changed-dialog-uia.txt`, `trigger-Streamlabs-Desktop-Scene-Changed-dialog.png` (Add Trigger - Streamlabs Desktop > Scene Changed, ~600×181): `Connection` (select), `Scene Name` (text), `Add Connection` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Streamlabs Desktop Streaming Started

**Location:** `Streamlabs Desktop > Streamlabs Desktop Streaming Started`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Streamlabs-Desktop-Streaming-Started-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Streamlabs Desktop Streaming is Started

**Parameters:** `Instance` — Select (required): choose a configured Streamlabs Desktop Connection. Select `Any` to trigger on any connection.
**Parameters (app-verified):** App-verified from `trigger-Streamlabs-Desktop-Streaming-Started-dialog-uia.txt`, `trigger-Streamlabs-Desktop-Streaming-Started-dialog.png` (Add Trigger - Streamlabs Desktop > Streaming Started, ~600×140): `Connection` (select), `Add Connection` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Streamlabs Desktop Streaming Stopped

**Location:** `Streamlabs Desktop > Streamlabs Desktop Streaming Stopped`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Streamlabs-Desktop-Streaming-Stopped-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Streamlabs Desktop Streaming is Stopped

**Parameters:** `Instance` — Select (required): choose a configured Streamlabs Desktop Connection. Select `Any` to trigger on any connection.
**Parameters (app-verified):** App-verified from `trigger-Streamlabs-Desktop-Streaming-Stopped-dialog-uia.txt`, `trigger-Streamlabs-Desktop-Streaming-Stopped-dialog.png` (Add Trigger - Streamlabs Desktop > Streaming Stopped, ~600×140): `Connection` (select), `Add Connection` (button); Ok/Cancel present.

**Variables:** Not documented in official docs
