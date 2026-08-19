---
title: "Streamer.bot — Triggers: Core > Groups"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - triggers
  - core
source: "https://docs.streamer.bot/api/triggers/core/groups"
last-reviewed: 2026-07-31
---

# Core — Groups

> Triggers when groups are added, cleared, or removed, and when users are added to or removed from a group.

## Added

**Location:** `Core > Groups > Added`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Triggers when a new group gets added.
**Parameters:** Not documented in official docs
**Variables:** Not documented in official docs

## Cleared

**Location:** `Core > Groups > Cleared`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Core-Groups-Cleared-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Triggers when a group gets cleared.
**Parameters:** App-verified from `trigger-Core-Groups-Cleared-dialog-uia.txt`, `trigger-Core-Groups-Cleared-dialog.png` (Add Trigger - Core > Groups > Cleared, ~600×140): `Group` (select); Ok/Cancel present.
**Variables:** Not documented in official docs

## Removed

**Location:** `Core > Groups > Removed`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Triggers when a group gets removed.
**Parameters:** Not documented in official docs
**Variables:** Not documented in official docs

## Users Added

**Location:** `Core > Groups > Users Added`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Core-Groups-Users-Added-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Triggers when a user gets added to a group.
**Parameters:** App-verified from `trigger-Core-Groups-Users-Added-dialog-uia.txt`, `trigger-Core-Groups-Users-Added-dialog.png` (Add Trigger - Core > Groups > Users Added, ~600×140): `Group` (select); Ok/Cancel present.
**Variables:** Not documented in official docs

## Users Removed

**Location:** `Core > Groups > Users Removed`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Core-Groups-Users-Removed-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Triggers when a user gets removed from a group.
**Parameters:** App-verified from `trigger-Core-Groups-Users-Removed-dialog-uia.txt`, `trigger-Core-Groups-Users-Removed-dialog.png` (Add Trigger - Core > Groups > Users Removed, ~600×140): `Group` (select); Ok/Cancel present.
**Variables:** Not documented in official docs
