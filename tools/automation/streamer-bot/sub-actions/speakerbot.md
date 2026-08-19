---
title: "Streamer.bot — Sub-Actions: Speaker.bot"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - speakerbot
source: "https://docs.streamer.bot/api/sub-actions/speakerbot"
last-reviewed: 2026-07-31
---

# Speaker.bot

Sub-actions for controlling Speaker.bot text-to-speech from Streamer.bot — speaking messages, queue management, VoiceGate profiles, and enabled/paused state.

## Activate VoiceGate Profile (single-item group — the group IS the sub-action)

**Location:** `Speaker.bot > Activate VoiceGate Profile`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Speaker-bot-Activate-VoiceGate-Profile-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Dependency:** requires a configured Speaker.bot connection
**Description:** Activates a pre-configured VoiceGate profile in Speaker.bot

**Parameters:** App-verified from `subaction-Speaker-bot-Activate-VoiceGate-Profile-dialog-uia.txt`, `subaction-Speaker-bot-Activate-VoiceGate-Profile-dialog.png` (Add SubAction - Speaker.bot > Activate VoiceGate Profile, ~600×139): `Profile` (button), `Speaker.bot is Not Connected!` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Clear Pending (single-item group — the group IS the sub-action)

**Location:** `Speaker.bot > Clear Pending`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Remove all queued messages from Speaker.bot

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Set Enabled State (single-item group — the group IS the sub-action)

**Location:** `Speaker.bot > Set Enabled State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Speaker-bot-Set-Enabled-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Toggle the enabled state of TTS in Speaker.bot

**Parameters:** `State` (Select, required, default `Enabled`) — `Enabled`: Enable TTS, `Disabled`: Disable TTS, `Toggle`: Toggle the existing state.
**Parameters (app-verified):** App-verified from `subaction-Speaker-bot-Set-Enabled-State-dialog-uia.txt`, `subaction-Speaker-bot-Set-Enabled-State-dialog.png` (Add SubAction - Speaker.bot > Set Enabled State, ~600×140): `State` (select), `Speaker.bot Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Paused State (single-item group — the group IS the sub-action)

**Location:** `Speaker.bot > Set Paused State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Speaker-bot-Set-Paused-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Toggle the state of the Speaker.bot TTS queue

**Parameters:** `State` (Select, required, default `Paused`) — `Paused`: Pause the TTS queue, `Enabled`: Resume the TTS queue, `Toggle`: Toggle the existing state.
**Parameters (app-verified):** App-verified from `subaction-Speaker-bot-Set-Paused-State-dialog-uia.txt`, `subaction-Speaker-bot-Set-Paused-State-dialog.png` (Add SubAction - Speaker.bot > Set Paused State, ~600×140): `State` (select), `Speaker.bot Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Speak (UDP) (single-item group — the group IS the sub-action)

**Location:** `Speaker.bot > Speak (UDP)`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Speaker-bot-Speak-UDP--dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Send a message with text-to-speech (TTS) using Speaker.bot via UDP

**Parameters:** `Voice Alias` (Text, required) — The name of the voice alias to use. `Pass Through Bad Word Filter` (Toggle) — Toggle the bad word filter on or off. `Message` (Text, required) — The message content to send to Speaker.bot.
**Parameters (app-verified):** App-verified from `subaction-Speaker-bot-Speak-UDP--dialog-uia.txt`, `subaction-Speaker-bot-Speak-UDP--dialog.png` (Add SubAction - Speaker.bot > Speak (UDP), ~600×328): `Voice Alias` (text), `Pass through Bad Word Filter` (text), `Message` (text), `Test` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Speak (single-item group — the group IS the sub-action)

**Location:** `Speaker.bot > Speak`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Speaker-bot-Speak-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Send a message with text-to-speech (TTS) using Speaker.bot

**Parameters:** `Voice Alias` (Text, required) — The name of the voice alias to use. `Pass Through Bad Word Filter` (Toggle) — Toggle the bad word filter on or off. `Silent` (Toggle) — Processes the TTS only; enabling this will cause Speaker.bot to only process the TTS, and not play it. The `speechFile` argument will contain the full path to the processed audio file that can be played either in OBS, or using the Play Sound sub-action. `Delay` (Toggle) — Wait for TTS to be processed and finish playing before continuing execution of the current action. There is a h
**Parameters (app-verified):** App-verified from `subaction-Speaker-bot-Speak-dialog-uia.txt`, `subaction-Speaker-bot-Speak-dialog.png` (Add SubAction - Speaker.bot > Speak, ~600×353): `Voice Alias` (text), `Pass through Bad Word Filter` (button), `Silent` (button), `Delay` (text), `Message` (text), `Test` (button), `Speaker.bot Not Connected` (button); Ok/Cancel present.ard limit of 30s on a timeout to prevent stuck queues. `Message` (Text, required) — The message content to send to Speaker.bot.

**Variables:** Not documented in official docs

## Stop Speaking (single-item group — the group IS the sub-action)

**Location:** `Speaker.bot > Stop Speaking`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Stop the current TTS in Speaker.bot

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs
