---
title: "Streamer.bot — Sub-Actions: Elgato > Wave Link"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - elgato
source: "https://docs.streamer.bot/api/sub-actions/elgato/wave-link"
last-reviewed: 2026-07-31
---

# Elgato — Wave Link

> Sub-actions to control Elgato Wave Link audio from Streamer.bot: inputs, microphones, filters, outputs and volume levels.

## Get Filter State

**Location:** `Elgato > Wave Link > Get Filter State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Wave-Link-Get-Filter-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Dependency:** requires a configured Elgato WaveLink connection
**Description:** Get the current state of a specific filter of an input

**Parameters:** App-verified from `subaction-Elgato-Wave-Link-Get-Filter-State-dialog-uia.txt`, `subaction-Elgato-Wave-Link-Get-Filter-State-dialog.png` (Add SubAction - Elgato > Wave Link > Get Filter State, ~600×180): `Filter` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Get Input Information

**Location:** `Elgato > Wave Link > Get Input Information`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Wave-Link-Get-Input-Information-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Dependency:** requires a configured Elgato WaveLink connection
**Description:** Get information of a select audio input

**Parameters:** App-verified from `subaction-Elgato-Wave-Link-Get-Input-Information-dialog-uia.txt`, `subaction-Elgato-Wave-Link-Get-Input-Information-dialog.png` (Add SubAction - Elgato > Wave Link > Get Input Information, ~600×124): `Elgato WaveLink is Not Connected!` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Get Microphone Information

**Location:** `Elgato > Wave Link > Get Microphone Information`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Wave-Link-Get-Microphone-Information-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Dependency:** requires a configured Elgato WaveLink connection
**Description:** Get information of a specific microphone

**Parameters:** App-verified from `subaction-Elgato-Wave-Link-Get-Microphone-Information-dialog-uia.txt`, `subaction-Elgato-Wave-Link-Get-Microphone-Information-dialog.png` (Add SubAction - Elgato > Wave Link > Get Microphone Information, ~600×124): `Elgato WaveLink is Not Connected!` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Get Output Volumes

**Location:** `Elgato > Wave Link > Get Output Volumes`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Get output volumes of your monitor and stream mix

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Get Selected Output

**Location:** `Elgato > Wave Link > Get Selected Output`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Get information about your current selected monitor output device

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Mute Input

**Location:** `Elgato > Wave Link > Mute Input`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Wave-Link-Mute-Input-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Dependency:** requires a configured Elgato WaveLink connection
**Description:** Mute a specific audio input

**Parameters:** App-verified from `subaction-Elgato-Wave-Link-Mute-Input-dialog-uia.txt`, `subaction-Elgato-Wave-Link-Mute-Input-dialog.png` (Add SubAction - Elgato > Wave Link > Mute Input, ~600×209): `Elgato WaveLink is Not Connected!` (select), `Mixer` (select), `State` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Mute Microphone

**Location:** `Elgato > Wave Link > Mute Microphone`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Wave-Link-Mute-Microphone-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Dependency:** requires a configured Elgato WaveLink connection
**Description:** Mute a specific microphone

**Parameters:** App-verified from `subaction-Elgato-Wave-Link-Mute-Microphone-dialog-uia.txt`, `subaction-Elgato-Wave-Link-Mute-Microphone-dialog.png` (Add SubAction - Elgato > Wave Link > Mute Microphone, ~600×167): `Elgato WaveLink is Not Connected!` (select), `State` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Mute Output

**Location:** `Elgato > Wave Link > Mute Output`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Wave-Link-Mute-Output-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Mute a specific audio output

**Parameters:** App-verified from `subaction-Elgato-Wave-Link-Mute-Output-dialog-uia.txt`, `subaction-Elgato-Wave-Link-Mute-Output-dialog.png` (Add SubAction - Elgato > Wave Link > Mute Output, ~600×183): `Output` (select), `State` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Filter Bypass State

**Location:** `Elgato > Wave Link > Set Filter Bypass State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Wave-Link-Set-Filter-Bypass-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Dependency:** requires a configured Elgato WaveLink connection
**Description:** Enable or bypass a filter of an audio input

**Parameters:** App-verified from `subaction-Elgato-Wave-Link-Set-Filter-Bypass-State-dialog-uia.txt`, `subaction-Elgato-Wave-Link-Set-Filter-Bypass-State-dialog.png` (Add SubAction - Elgato > Wave Link > Set Filter Bypass State, ~600×209): `Elgato WaveLink is Not Connected!` (select), `Mixer` (select), `State` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Filter State

**Location:** `Elgato > Wave Link > Set Filter State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Wave-Link-Set-Filter-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Dependency:** requires a configured Elgato WaveLink connection
**Description:** Change the state of a specific filter of an audio input

**Parameters:** App-verified from `subaction-Elgato-Wave-Link-Set-Filter-State-dialog-uia.txt`, `subaction-Elgato-Wave-Link-Set-Filter-State-dialog.png` (Add SubAction - Elgato > Wave Link > Set Filter State, ~600×223): `Filter` (select), `State` (select), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Input Volume

**Location:** `Elgato > Wave Link > Set Input Volume`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Wave-Link-Set-Input-Volume-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Dependency:** requires a configured Elgato WaveLink connection
**Description:** Set the volume of an audio input

**Parameters:** App-verified from `subaction-Elgato-Wave-Link-Set-Input-Volume-dialog-uia.txt`, `subaction-Elgato-Wave-Link-Set-Input-Volume-dialog.png` (Add SubAction - Elgato > Wave Link > Set Input Volume, ~600×233): `Elgato WaveLink is Not Connected!` (select), `Mixer` (select), `Volume` (text), `Adjustment` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Microphone Balance

**Location:** `Elgato > Wave Link > Set Microphone Balance`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Wave-Link-Set-Microphone-Balance-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Dependency:** requires a configured Elgato WaveLink connection
**Description:** Set the volume balance of a specific microphone

**Parameters:** App-verified from `subaction-Elgato-Wave-Link-Set-Microphone-Balance-dialog-uia.txt`, `subaction-Elgato-Wave-Link-Set-Microphone-Balance-dialog.png` (Add SubAction - Elgato > Wave Link > Set Microphone Balance, ~600×208): `Elgato WaveLink is Not Connected!` (text), `Balance` (text), `Allowed values for balance are %variables%, or a number value between 0 and 100 inclusive.` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Microphone Gain

**Location:** `Elgato > Wave Link > Set Microphone Gain`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Wave-Link-Set-Microphone-Gain-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Dependency:** requires a configured Elgato WaveLink connection
**Description:** Set the gain of a specific microphone

**Parameters:** App-verified from `subaction-Elgato-Wave-Link-Set-Microphone-Gain-dialog-uia.txt`, `subaction-Elgato-Wave-Link-Set-Microphone-Gain-dialog.png` (Add SubAction - Elgato > Wave Link > Set Microphone Gain, ~600×189): `Elgato WaveLink is Not Connected!` (text), `Gain` (text), `Allowed values for gain are %variables%, or a decimal value between 0.0 and 1.0 inclusive.` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Microphone Output Volume

**Location:** `Elgato > Wave Link > Set Microphone Output Volume`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Wave-Link-Set-Microphone-Output-Volume-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Dependency:** requires a configured Elgato WaveLink connection
**Description:** Set the output volume of a specific microphone

**Parameters:** App-verified from `subaction-Elgato-Wave-Link-Set-Microphone-Output-Volume-dialog-uia.txt`, `subaction-Elgato-Wave-Link-Set-Microphone-Output-Volume-dialog.png` (Add SubAction - Elgato > Wave Link > Set Microphone Output Volume, ~600×233): `Elgato WaveLink is Not Connected!` (text), `Volume` (text), `Adjustment` (button), `Allowed values for volume are %variables%, or a decimal value between 0.0 and 1.0 inclusive.` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Output Monitor Device

**Location:** `Elgato > Wave Link > Set Output Monitor Device`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Wave-Link-Set-Output-Monitor-Device-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Dependency:** requires a configured Elgato WaveLink connection
**Description:** Set the output device of the monitor mix

**Parameters:** App-verified from `subaction-Elgato-Wave-Link-Set-Output-Monitor-Device-dialog-uia.txt`, `subaction-Elgato-Wave-Link-Set-Output-Monitor-Device-dialog.png` (Add SubAction - Elgato > Wave Link > Set Output Monitor Device, ~600×124): `Elgato WaveLink is Not Connected!` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Output Volume

**Location:** `Elgato > Wave Link > Set Output Volume`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Wave-Link-Set-Output-Volume-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Set the output volume of an audio output

**Parameters:** App-verified from `subaction-Elgato-Wave-Link-Set-Output-Volume-dialog-uia.txt`, `subaction-Elgato-Wave-Link-Set-Output-Volume-dialog.png` (Add SubAction - Elgato > Wave Link > Set Output Volume, ~600×205): `Output` (select), `Volume` (text), `Adjustment` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs
