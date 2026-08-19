---
title: "Streamer.bot — Sub-Actions: Integrations"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - integrations
source: "https://docs.streamer.bot/api/sub-actions/integrations"
last-reviewed: 2026-07-31
---

# Integrations

> Sub-actions for third-party integrations supported by Streamer.bot, covering voice changers, VTuber models, toy integrations, and notification services.

Reference documentation for the Streamer.bot Integrations sub-actions. Each entry lists the action's location in the Streamer.bot UI, a description, its parameters, and the variables it exposes. Official documentation: [Streamer.bot Sub-Actions](https://docs.streamer.bot/api/sub-actions).

## Groups

- [Tits](tits.md) — Activate triggers and throw items in T.I.T.s.
- [Voicemod](voicemod.md) — Control voices, soundboard playback, and effect states in Voicemod.
- [VTube Studio](vtube-studio.md) — Control models, expressions, hotkeys, and raw API requests in VTube Studio.

## Discord

### Basic Webhook

**Location:** `Integrations > Discord > Basic Webhook`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Integrations-Discord-Basic-Webhook-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Post messages to a Discord channel with webhooks
**Parameters:** App-verified from `subaction-Integrations-Discord-Basic-Webhook-dialog-uia.txt`, `subaction-Integrations-Discord-Basic-Webhook-dialog.png` (config dialog, size unknown): `Username` (text), `Webhook URL` (text), `Content` (text), `Avatar URL` (text), `Image` (text), `Text to Speech` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## IFTTT

### IFTTT Notification (Advanced)

**Location:** `Integrations > IFTTT > IFTTT Notification (Advanced)`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Integrations-IFTTT-IFTTT-Notification-Advanced--dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Send a notification trigger to IFTTT from Streamer.bot with additional arguments
**Parameters:** `Event Name` — enter the event name matching your configured IFTTT applet; `Arguments` — configure any number of arguments to be sent to your IFTTT applet. The first five arguments will be parsed into IFTTT ingredients available in your applet in the format `Argument1Name`, `Argument1Value`. All arguments will be made available as JSON in the `ArgumentsJson` ingredient.
**Variables:** Not documented in official docs

### IFTTT Notification (Basic)

**Location:** `Integrations > IFTTT > IFTTT Notification (Basic)`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Integrations-IFTTT-IFTTT-Notification-Basic--dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Send a basic notification trigger to IFTTT from Streamer.bot
**Parameters:** `Event Name` — enter the event name matching your configured IFTTT applet; `Text` — enter the text content to be sent to your IFTTT applet
**Variables:** Not documented in official docs

## Lumia Stream

### Send Command

**Location:** `Integrations > Lumia Stream > Send Command`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Integrations-Lumia-Stream-Send-Command-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Send a command to Lumia Stream
**Parameters:** App-verified from `subaction-Integrations-Lumia-Stream-Send-Command-dialog-uia.txt`, `subaction-Integrations-Lumia-Stream-Send-Command-dialog.png` (Add SubAction - Integrations > Lumia Stream > Send Command, ~600×139): `Command` (button), `LumiaStream is Not Connected!` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

### Set Color

**Location:** `Integrations > Lumia Stream > Set Color`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Integrations-Lumia-Stream-Set-Color-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Update the color and brightness of your lights with Lumia Stream
**Parameters:** App-verified from `subaction-Integrations-Lumia-Stream-Set-Color-dialog-uia.txt`, `subaction-Integrations-Lumia-Stream-Set-Color-dialog.png` (Add SubAction - Integrations > Lumia Stream > Set Color, ~600×405): `Color` (text), `Brightness` (text), `Duration` (text), `ms` (text), `Transition` (text), `ms` (button), `Skips Queue` (button), `Lights` (button), `LumiaStream is Not Connected!` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

### Set to Default

**Location:** `Integrations > Lumia Stream > Set to Default`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Set Lumia Stream to its default state. Navigate to `Default State -> Default Light State` in Lumia to configure your default state settings.
**Parameters:** Not documented in official docs
**Variables:** Not documented in official docs

## Mtion

### Get Active Clubhouse

**Location:** `Integrations > Mtion > Get Active Clubhouse`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Gets the active clubhouse in mtion studio
**Parameters:** Not documented in official docs
**Variables:** Not documented in official docs

### Send Trigger

**Location:** `Integrations > Mtion > Send Trigger`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Integrations-mtion-Send-Trigger-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Sends a trigger to mtion studio
**Parameters:** App-verified from `subaction-Integrations-mtion-Send-Trigger-dialog-uia.txt`, `subaction-Integrations-mtion-Send-Trigger-dialog.png` (Add SubAction - Integrations > mtion > Send Trigger, ~600×320): `Trigger Name` (text), `...` (button), `Parameters` (text), `Name` (text), `Value` (text); Ok/Cancel present.
**Variables:** Not documented in official docs

## Pronouns

### Add Pronouns for User

**Location:** `Integrations > Pronouns > Add Pronouns for User`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Integrations-Pronouns-Add-Pronouns-for-User-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Fetch the alejo.io pronouns for a given Twitch user
**Parameters:** `User Login` (Text, required) — Twitch username of the user to fetch pronouns for; `Variable Prefix` (Text, optional) — prefix to append to the resulting variables, to allow multiple uses of this sub-action within a single action. For example, if variable prefix is `user-one`, the resulting variables would consist of `user-one.pronounObject`, `user-one.pronounSubject`, and so on.
**Variables:** Not documented in official docs

## Streamlabs

### Spin Wheel

**Location:** `Integrations > Streamlabs > Spin Wheel`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Spin the Streamlabs Spin Wheel
**Parameters:** Not documented in official docs
**Variables:** Not documented in official docs
