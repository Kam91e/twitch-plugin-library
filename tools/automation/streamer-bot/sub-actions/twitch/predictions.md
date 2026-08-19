---
title: "Streamer.bot — Sub-Actions: Twitch > Predictions"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - twitch
source: "https://docs.streamer.bot/api/sub-actions/twitch/predictions"
last-reviewed: 2026-07-31
---

# Twitch — Predictions

> Sub-actions to create, lock, cancel and resolve Twitch Predictions.

## Cancel Active Prediction

**Location:** `Twitch > Predictions > Cancel Active Prediction`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Cancels the currently active prediction

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Create Prediction

**Location:** `Twitch > Predictions > Create Prediction`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Predictions-Create-Prediction-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Starts a new Twitch Prediction

**Parameters:** App-verified from `subaction-Twitch-Predictions-Create-Prediction-dialog-uia.txt`, `subaction-Twitch-Predictions-Create-Prediction-dialog.png` (Add SubAction - Twitch > Predictions > Create Prediction, ~600×399): `Title` (text), `Outcomes (Minimum of 2, maximum of 10)` (list), `Add` (button), `Del` (text), `Prediction Window (seconds) default is 60s` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Get Active Prediction

**Location:** `Twitch > Predictions > Get Active Prediction`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Check if a prediction is currently active and unlocked

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Lock Active Prediction

**Location:** `Twitch > Predictions > Lock Active Prediction`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Locks the currently active prediction

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Resolve Last Prediction by Title

**Location:** `Twitch > Predictions > Resolve Last Prediction by Title`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Predictions-Resolve-Last-Prediction-By-Title-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Resolves the last active prediction by Title

**Parameters:** App-verified from `subaction-Twitch-Predictions-Resolve-Last-Prediction-By-Title-dialog-uia.txt`, `subaction-Twitch-Predictions-Resolve-Last-Prediction-By-Title-dialog.png` (Add SubAction - Twitch > Predictions > Resolve Last Prediction By Title, ~600×205): `Outcome Title` (text), `Specify the title of the outcome to use as the winning outcome when resolving the active prediction.  Variables are supported.` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Resolve Last Prediction

**Location:** `Twitch > Predictions > Resolve Last Prediction`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Predictions-Resolve-Last-Prediction-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Resolves the last active prediction

**Parameters:** App-verified from `subaction-Twitch-Predictions-Resolve-Last-Prediction-dialog-uia.txt`, `subaction-Twitch-Predictions-Resolve-Last-Prediction-dialog.png` (Add SubAction - Twitch > Predictions > Resolve Last Prediction, ~600×205): `Winning Index` (text), `Specify the 0 based index of the outcome to use as the winning outcome when resolving the current active prediction.  Variables are supported.` (button); Ok/Cancel present.

**Variables:** Not documented in official docs
