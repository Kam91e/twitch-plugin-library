---
title: "Streamer.bot — Triggers: Core > Global Variables"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - triggers
  - core
source: "https://docs.streamer.bot/api/triggers/core/global-variables"
last-reviewed: 2026-07-31
---

# Core — Global Variables

> Triggers when global variables are created, deleted, or updated, and when user global variables are updated.

## Global Variable Created

**Location:** `Core > Global Variables > Global Variable Created`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Core-Global-Variables-Global-Variable-Created-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Triggered when a global variable has been created
**Parameters:** App-verified from `trigger-Core-Global-Variables-Global-Variable-Created-dialog-uia.txt`, `trigger-Core-Global-Variables-Global-Variable-Created-dialog.png` (Add Trigger - Core > Global Variables > Global Variable Created, ~600×224): `Variable Name` (text), `Persisted` (select), `Leaving name empty is considered a catch-all and will trigger on any global variable being created` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Global Variable Deleted

**Location:** `Core > Global Variables > Global Variable Deleted`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Core-Global-Variables-Global-Variable-Deleted-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Triggered when a global variable has been deleted
**Parameters:** App-verified from `trigger-Core-Global-Variables-Global-Variable-Deleted-dialog-uia.txt`, `trigger-Core-Global-Variables-Global-Variable-Deleted-dialog.png` (Add Trigger - Core > Global Variables > Global Variable Deleted, ~600×224): `Variable Name` (text), `Persisted` (select), `Leaving name empty is considered a catch-all and will trigger on any global variable being deleted` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Global Variable Updated

**Location:** `Core > Global Variables > Global Variable Updated`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Core-Global-Variables-Global-Variable-Updated-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Triggered when a global variable has been updated
**Parameters:** App-verified from `trigger-Core-Global-Variables-Global-Variable-Updated-dialog-uia.txt`, `trigger-Core-Global-Variables-Global-Variable-Updated-dialog.png` (Add Trigger - Core > Global Variables > Global Variable Updated, ~600×224): `Variable Name` (text), `Persisted` (select), `Leaving name empty is considered a catch-all and will trigger on any global variable updating` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## User Global Variable Updated

**Location:** `Core > Global Variables > User Global Variable Updated`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Core-Global-Variables-User-Global-Variable-Updated-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Triggered when a user global variable has been updated
**Parameters:** App-verified from `trigger-Core-Global-Variables-User-Global-Variable-Updated-dialog-uia.txt`, `trigger-Core-Global-Variables-User-Global-Variable-Updated-dialog.png` (Add Trigger - Core > Global Variables > User Global Variable Updated, ~600×308): `Variable Name` (text), `Persisted` (select), `User Login` (text), `Platform` (select), `Leaving name or login empty is considered a catch-all and will trigger on any user global variable updating` (button); Ok/Cancel present.
**Variables:** Not documented in official docs
