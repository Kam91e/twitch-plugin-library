---
title: "Streamer.bot — Triggers: OBS Studio"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - triggers
  - obs-studio
source: "https://docs.streamer.bot/api/triggers/obs-studio"
last-reviewed: 2026-07-31
---

# OBS Studio

> Triggers for OBS Studio events: connection, streaming, recording, scene changes, raw events, and vendor events.

## OBS Connected

**Location:** `OBS Studio > Connected`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-OBS-Studio-Connected-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for when OBS is Connected

**Parameters:** App-verified from `trigger-OBS-Studio-Connected-dialog-uia.txt`, `trigger-OBS-Studio-Connected-dialog.png` (Add Trigger - OBS Studio > Connected, ~600×140): `Connection` (select), `Add Connection` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## OBS Disconnected

**Location:** `OBS Studio > Disconnected`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-OBS-Studio-Disconnected-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for when OBS is Disconnected

**Parameters:** App-verified from `trigger-OBS-Studio-Disconnected-dialog-uia.txt`, `trigger-OBS-Studio-Disconnected-dialog.png` (Add Trigger - OBS Studio > Disconnected, ~600×140): `Connection` (select), `Add Connection` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## OBS Event

**Location:** `OBS Studio > Event`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-OBS-Studio-Event-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for an OBS Event. The variables populated by this trigger are different depending on the `Event` parameter. Explore all supported [OBS Studio Events](https://github.com/obsproject/obs-websocket/blob/master/docs/generated/protocol.md#events) in their WebSocket protocol documentation.

**Parameters:** App-verified from `trigger-OBS-Studio-Event-dialog-uia.txt`, `trigger-OBS-Studio-Event-dialog.png` (Add Trigger - OBS Studio > Event, ~600×183): `Connection` (select), `Event` (select), `Add Connection` (button); Ok/Cancel present.

**Variables:** Dependent on the `Event` parameter. Example — given event data `{ event: "SceneListChanged", scenes: [{ sceneIndex: 0, sceneName: "Be Right Back", sceneUuid: "1234-5678-9abcd" }] }`, the following variables are populated: `obsEvent.event` (string, value `"SceneListChanged"`), `obsEvent.scenes[0].sceneIndex` (int, value `0`), `obsEvent.scenes[0].sceneName` (string, value `"Be Right Back"`), `obsEvent.scenes[0].sceneUuid` (string, value `"1234-5678-9abcd"`).

## OBS Recording Started

**Location:** `OBS Studio > Recording Started`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-OBS-Studio-Recording-Started-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for when an OBS Recording is Started

**Parameters:** App-verified from `trigger-OBS-Studio-Recording-Started-dialog-uia.txt`, `trigger-OBS-Studio-Recording-Started-dialog.png` (Add Trigger - OBS Studio > Recording Started, ~600×140): `Connection` (select), `Add Connection` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## OBS Recording Stopped

**Location:** `OBS Studio > Recording Stopped`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-OBS-Studio-Recording-Stopped-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for when an OBS Recording is Stopped

**Parameters:** App-verified from `trigger-OBS-Studio-Recording-Stopped-dialog-uia.txt`, `trigger-OBS-Studio-Recording-Stopped-dialog.png` (Add Trigger - OBS Studio > Recording Stopped, ~600×140): `Connection` (select), `Add Connection` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## OBS Scene Changed

**Location:** `OBS Studio > Scene Changed`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-OBS-Studio-Scene-Changed-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for when an OBS Scene is Changed

**Parameters:** App-verified from `trigger-OBS-Studio-Scene-Changed-dialog-uia.txt`, `trigger-OBS-Studio-Scene-Changed-dialog.png` (Add Trigger - OBS Studio > Scene Changed, ~600×181): `Connection` (select), `Scene Name` (text), `Add Connection` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## OBS Streaming Started

**Location:** `OBS Studio > Streaming Started`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-OBS-Studio-Streaming-Started-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for when an OBS Streaming is Started

**Parameters:** App-verified from `trigger-OBS-Studio-Streaming-Started-dialog-uia.txt`, `trigger-OBS-Studio-Streaming-Started-dialog.png` (Add Trigger - OBS Studio > Streaming Started, ~600×140): `Connection` (select), `Add Connection` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## OBS Streaming Stopped

**Location:** `OBS Studio > Streaming Stopped`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-OBS-Studio-Streaming-Stopped-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for when an OBS Streaming is Stopped

**Parameters:** App-verified from `trigger-OBS-Studio-Streaming-Stopped-dialog-uia.txt`, `trigger-OBS-Studio-Streaming-Stopped-dialog.png` (Add Trigger - OBS Studio > Streaming Stopped, ~600×140): `Connection` (select), `Add Connection` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Vendor Event

**Location:** `OBS Studio > Vendor Event`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-OBS-Studio-Vendor-Event-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for a when a vendor event is sent by a 3rd party plugin in OBS

**Parameters:** App-verified from `trigger-OBS-Studio-Vendor-Event-dialog-uia.txt`, `trigger-OBS-Studio-Vendor-Event-dialog.png` (Add Trigger - OBS Studio > Vendor Event, ~600×223): `Connection` (select), `Vendor Name` (text), `Event Name` (text), `Add Connection` (button); Ok/Cancel present.

**Variables:** Not documented in official docs
