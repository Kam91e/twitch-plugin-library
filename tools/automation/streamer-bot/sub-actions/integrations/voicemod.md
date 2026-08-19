---
title: "Streamer.bot — Sub-Actions: Integrations > Voicemod"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - integrations
source: "https://docs.streamer.bot/api/sub-actions/integrations/voicemod"
last-reviewed: 2026-07-31
---

# Integrations — Voicemod

> Sub-actions to control voices, soundboard playback, and effect states in Voicemod.

## Get Current Voice

**Location:** `Integrations > Voicemod > Get Current Voice`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Get the current voice in use from VoiceMod
**Parameters:** Not documented in official docs
**Variables:** Not documented in official docs

## Play Sound

**Location:** `Integrations > Voicemod > Play Sound`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Integrations-VoiceMod-Play-Sound-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Dependency:** requires a configured VoiceMod connection
**Description:** Play a sound of one of your soundboards. VoiceMod starts with a default soundboard called "My Soundboard" which contains no sounds — make sure the soundboard has at least one sound assigned to it before adding this sub-action.
**Parameters:** App-verified from `subaction-Integrations-VoiceMod-Play-Sound-dialog-uia.txt`, `subaction-Integrations-VoiceMod-Play-Sound-dialog.png` (Add SubAction - Integrations > VoiceMod > Play Sound, ~600×180): `VoiceMod is Not Connected!` (button), `Sound` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Select Random Voice

**Location:** `Integrations > Voicemod > Select Random Voice`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Integrations-VoiceMod-Select-Random-Voice-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Enable a random voice in VoiceMod via Streamer.bot
**Parameters:** App-verified from `subaction-Integrations-VoiceMod-Select-Random-Voice-dialog-uia.txt`, `subaction-Integrations-VoiceMod-Select-Random-Voice-dialog.png` (Add SubAction - Integrations > VoiceMod > Select Random Voice, ~600×140): `Mode` (select), `Test` (button), `Not Connected!` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Select Voice By ID

**Location:** `Integrations > Voicemod > Select Voice By ID`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Integrations-VoiceMod-Select-Voice-By-Id-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Set the active voice in VoiceMod via its ID using Streamer.bot
**Parameters:** App-verified from `subaction-Integrations-VoiceMod-Select-Voice-By-Id-dialog-uia.txt`, `subaction-Integrations-VoiceMod-Select-Voice-By-Id-dialog.png` (Add SubAction - Integrations > VoiceMod > Select Voice By Id, ~600×163): `Voice ID` (text), `VoiceId can be a fixed value or a parsed value using variables and/or inline functions.` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Select Voice By Name

**Location:** `Integrations > Voicemod > Select Voice By Name`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Integrations-VoiceMod-Select-Voice-by-Name-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Set the active voice in VoiceMod via its name using Streamer.bot
**Parameters:** App-verified from `subaction-Integrations-VoiceMod-Select-Voice-by-Name-dialog-uia.txt`, `subaction-Integrations-VoiceMod-Select-Voice-by-Name-dialog.png` (Add SubAction - Integrations > VoiceMod > Select Voice by Name, ~600×163): `Voice Name` (text), `Voice Name can be a fixed value or a parsed value using variables and/or inline functions.` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Select Voice

**Location:** `Integrations > Voicemod > Select Voice`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Integrations-VoiceMod-Select-Voice-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Set the active voice in VoiceMod via Streamer.bot
**Parameters:** App-verified from `subaction-Integrations-VoiceMod-Select-Voice-dialog-uia.txt`, `subaction-Integrations-VoiceMod-Select-Voice-dialog.png` (Add SubAction - Integrations > VoiceMod > Select Voice, ~600×139): `Voice` (button), `Not Connected!` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Set Background Effect State

**Location:** `Integrations > Voicemod > Set Background Effect State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Integrations-VoiceMod-Set-Background-Effect-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Modify the current state of background effects in VoiceMod
**Parameters:** App-verified from `subaction-Integrations-VoiceMod-Set-Background-Effect-State-dialog-uia.txt`, `subaction-Integrations-VoiceMod-Set-Background-Effect-State-dialog.png` (Add SubAction - Integrations > VoiceMod > Set Background Effect State, ~600×140): `State` (select), `Test` (button), `Not Connected!` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Set Censor State

**Location:** `Integrations > Voicemod > Set Censor State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Integrations-VoiceMod-Set-Censor-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Modify the current censorship state in VoiceMod via Streamer.bot
**Parameters:** App-verified from `subaction-Integrations-VoiceMod-Set-Censor-State-dialog-uia.txt`, `subaction-Integrations-VoiceMod-Set-Censor-State-dialog.png` (Add SubAction - Integrations > VoiceMod > Set Censor State, ~600×140): `State` (select), `Test` (button), `Not Connected!` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Set Hear My Voice State

**Location:** `Integrations > Voicemod > Set Hear My Voice State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Integrations-VoiceMod-Set-Hear-My-Voice-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Modify the Hear My Voice State in VoiceMod
**Parameters:** App-verified from `subaction-Integrations-VoiceMod-Set-Hear-My-Voice-State-dialog-uia.txt`, `subaction-Integrations-VoiceMod-Set-Hear-My-Voice-State-dialog.png` (Add SubAction - Integrations > VoiceMod > Set Hear My Voice State, ~600×140): `State` (select), `Test` (button), `Not Connected!` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Set Mute State

**Location:** `Integrations > Voicemod > Set Mute State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Integrations-VoiceMod-Set-Mute-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Modify the current muted state in VoiceMod
**Parameters:** App-verified from `subaction-Integrations-VoiceMod-Set-Mute-State-dialog-uia.txt`, `subaction-Integrations-VoiceMod-Set-Mute-State-dialog.png` (Add SubAction - Integrations > VoiceMod > Set Mute State, ~600×140): `State` (select), `Test` (button), `Not Connected!` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Set Voice Changer State

**Location:** `Integrations > Voicemod > Set Voice Changer State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Integrations-VoiceMod-Set-Voice-Changer-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Modify the current Voice Changer State in VoiceMod
**Parameters:** App-verified from `subaction-Integrations-VoiceMod-Set-Voice-Changer-State-dialog-uia.txt`, `subaction-Integrations-VoiceMod-Set-Voice-Changer-State-dialog.png` (Add SubAction - Integrations > VoiceMod > Set Voice Changer State, ~600×140): `State` (select), `Test` (button), `Not Connected!` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Stop All Sounds

**Location:** `Integrations > Voicemod > Stop All Sounds`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Stop all currently playing soundboard sounds in VoiceMod
**Parameters:** Not documented in official docs
**Variables:** Not documented in official docs
