---
title: "Streamer.bot — Triggers: Integrations > VTube Studio"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - triggers
  - integrations
source: "https://docs.streamer.bot/api/triggers/integrations/vtube-studio"
last-reviewed: 2026-07-31
---

# Integrations — VTube Studio

> Triggers for VTube Studio events: model load, animation, hotkey, item, background, configuration, and tracking status changes.

## Background Changed

**Location:** `Integrations > VTube Studio > Background Changed`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** This event triggers when the background is changed in VTube Studio.

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Connected

**Location:** `Integrations > VTube Studio > Connected`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Triggers when VStudio Studio connects to Streamer.bot

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Disconnected

**Location:** `Integrations > VTube Studio > Disconnected`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Triggers when VStudio Studio disconnects from Streamer.bot

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Hotkey Triggered

**Location:** `Integrations > VTube Studio > Hotkey Triggered`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Integrations-VTube-Studio-Hotkey-Triggered-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Triggers every time a hotkey is triggered manually by the user (keyboard/hand-gesture) or via the hotkey-trigger-API

**Parameters:** App-verified from `trigger-Integrations-VTube-Studio-Hotkey-Triggered-dialog-uia.txt`, `trigger-Integrations-VTube-Studio-Hotkey-Triggered-dialog.png` (Add Trigger - Integrations > VTube Studio > Hotkey Triggered, ~600×139): `Not Connected` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Item Event

**Location:** `Integrations > VTube Studio > Item Event`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Triggers every time certain actions are done with/by an item

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Model Animations

**Location:** `Integrations > VTube Studio > Model Animations`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Integrations-VTube-Studio-Model-Animation-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Triggers when a VStudio Model performs an animation

**Parameters:** App-verified from `trigger-Integrations-VTube-Studio-Model-Animation-dialog-uia.txt`, `trigger-Integrations-VTube-Studio-Model-Animation-dialog.png` (Add Trigger - Integrations > VTube Studio > Model Animation, ~600×139): `Not Connected` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Model Clicked

**Location:** `Integrations > VTube Studio > Model Clicked`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Integrations-VTube-Studio-Model-Clicked-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Triggers every time the model is clicked. Depending on the config, it also triggers when you click anywhere in the VTS window even if the click wasn't on the model.

**Parameters:** App-verified from `trigger-Integrations-VTube-Studio-Model-Clicked-dialog-uia.txt`, `trigger-Integrations-VTube-Studio-Model-Clicked-dialog.png` (Add Trigger - Integrations > VTube Studio > Model Clicked, ~600×139): `Not Connected` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Model Configuration Changed

**Location:** `Integrations > VTube Studio > Model Configuration Changed`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Integrations-VTube-Studio-Model-Configuration-Changed-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Triggers when the user manually changes the settings/config of the currently loaded VTube Studio model

**Parameters:** App-verified from `trigger-Integrations-VTube-Studio-Model-Configuration-Changed-dialog-uia.txt`, `trigger-Integrations-VTube-Studio-Model-Configuration-Changed-dialog.png` (Add Trigger - Integrations > VTube Studio > Model Configuration Changed, ~600×139): `Not Connected` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Model Loaded

**Location:** `Integrations > VTube Studio > Model Loaded`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Integrations-VTube-Studio-Model-Loaded-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** This event triggers when a model is loaded in VTube Studio.

**Parameters:** App-verified from `trigger-Integrations-VTube-Studio-Model-Loaded-dialog-uia.txt`, `trigger-Integrations-VTube-Studio-Model-Loaded-dialog.png` (Add Trigger - Integrations > VTube Studio > Model Loaded, ~600×139): `Not Connected` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Model Unloaded

**Location:** `Integrations > VTube Studio > Model Unloaded`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Integrations-VTube-Studio-Model-Unloaded-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** This event triggers when a model is unloaded in VTube Studio.

**Parameters:** App-verified from `trigger-Integrations-VTube-Studio-Model-Unloaded-dialog-uia.txt`, `trigger-Integrations-VTube-Studio-Model-Unloaded-dialog.png` (Add Trigger - Integrations > VTube Studio > Model Unloaded, ~600×139): `Not Connected` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Tracking Status Changed

**Location:** `Integrations > VTube Studio > Tracking Status Changed`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Triggers every time the face tracker finds/loses the face or hands

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs
