---
title: "Streamer.bot — Triggers: Integrations > CrowdControl"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - triggers
  - integrations
source: "https://docs.streamer.bot/api/triggers/integrations/crowdcontrol"
last-reviewed: 2026-07-31
---

# Integrations — CrowdControl

> Triggers for CrowdControl events: effect requests, results, coin exchanges, game sessions, and timed effects.

## Coin Exchange

**Location:** `Integrations > CrowdControl > Coin Exchange`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Integrations-CrowdControl-Coin-Exchange-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** When a CrowdControl user exchanges for CrowdControl's Coin currency

**Parameters:** App-verified from `trigger-Integrations-CrowdControl-Coin-Exchange-dialog-uia.txt`, `trigger-Integrations-CrowdControl-Coin-Exchange-dialog.png` (Add Trigger - Integrations > CrowdControl > Coin Exchange, ~600×253): `Coin Type` (select), `Exchange Source` (select), `Min` (text), `Max` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Effect Failure

**Location:** `Integrations > CrowdControl > Effect Failure`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Integrations-CrowdControl-Effect-Failure-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for a Crowd Control Effect Failure

**Parameters:** App-verified from `trigger-Integrations-CrowdControl-Effect-Failure-dialog-uia.txt`, `trigger-Integrations-CrowdControl-Effect-Failure-dialog.png` (Add Trigger - Integrations > CrowdControl > Effect Failure, ~600×338): `Game` (select), `Pack` (select), `Effect` (select), `Min` (text), `Max` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Effect Request

**Location:** `Integrations > CrowdControl > Effect Request`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Integrations-CrowdControl-Effect-Request-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for a Crowd Control Effect Request

**Parameters:** App-verified from `trigger-Integrations-CrowdControl-Effect-Request-dialog-uia.txt`, `trigger-Integrations-CrowdControl-Effect-Request-dialog.png` (Add Trigger - Integrations > CrowdControl > Effect Request, ~600×338): `Game` (select), `Pack` (select), `Effect` (select), `Min` (text), `Max` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Effect Success

**Location:** `Integrations > CrowdControl > Effect Success`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Integrations-CrowdControl-Effect-Success-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for a Crowd Control Effect Success

**Parameters:** App-verified from `trigger-Integrations-CrowdControl-Effect-Success-dialog-uia.txt`, `trigger-Integrations-CrowdControl-Effect-Success-dialog.png` (Add Trigger - Integrations > CrowdControl > Effect Success, ~600×338): `Game` (select), `Pack` (select), `Effect` (select), `Min` (text), `Max` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Game Session End

**Location:** `Integrations > CrowdControl > Game Session End`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Crowd Control Game Session Ends

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Game Session Start

**Location:** `Integrations > CrowdControl > Game Session Start`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Crowd Control Game Session Starts

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Timed Effect Ended

**Location:** `Integrations > CrowdControl > Timed Effect Ended`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Crowd Control Timed Effect is Ended

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Timed Effect Started

**Location:** `Integrations > CrowdControl > Timed Effect Started`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Crowd Control Timed Effect is Started

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Timed Effect Updated

**Location:** `Integrations > CrowdControl > Timed Effect Updated`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Crowd Control Timed Effect is Updated

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs
