---
title: "Streamer.bot — Sub-Actions: Core > Quotes"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - core
source: "https://docs.streamer.bot/api/sub-actions/core/quotes"
last-reviewed: 2026-07-31
---

# Core — Quotes

> Sub-actions to add, delete, count, and retrieve quotes.

## Add Quote

**Location:** `Core > Quotes > Add Quote`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Quotes-Add-Quote-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Add a quote which can be retrieved by the `Get Quote` Sub-Action. This sub-action sets the quote user to the user who called the action; setting a different user is only supported via the C# method.
**Parameters:** App-verified from `subaction-Core-Quotes-Add-Quote-dialog-uia.txt`, `subaction-Core-Quotes-Add-Quote-dialog.png` (Add SubAction - Core > Quotes > Add Quote, ~600×163): `Variable` (text), `The field above must contain the %variable% that will contain the quote to be added.` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Delete Quote

**Location:** `Core > Quotes > Delete Quote`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Quotes-Delete-Quote-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Delete the selected Quote. Deleting a quote does not change the Quote ID of following quotes; quotes can be re-indexed manually under [Services > Quotes](../../services.md#quotes).
**Parameters:** App-verified from `subaction-Core-Quotes-Delete-Quote-dialog-uia.txt`, `subaction-Core-Quotes-Delete-Quote-dialog.png` (Add SubAction - Core > Quotes > Delete Quote, ~600×163): `Quote ID` (text), `Quote ID can be a variable which must parse to a number, or a number.` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Get Quote Count

**Location:** `Core > Quotes > Get Quote Count`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Get the total number of quotes. The count returned is not necessarily the same as the last Quote ID, on account of deleted quotes.
**Parameters:** Not documented in official docs
**Variables:** Not documented in official docs

## Get Quote

**Location:** `Core > Quotes > Get Quote`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Quotes-Get-Quote-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Fetch stored quotes for usage in subsequent sub-actions
**Parameters:** App-verified from `subaction-Core-Quotes-Get-Quote-dialog-uia.txt`, `subaction-Core-Quotes-Get-Quote-dialog.png` (Add SubAction - Core > Quotes > Get Quote, ~600×205): `Quote ID` (text), `Adding multiple Get Quotes will overwrite each previous one` (button); Ok/Cancel present.
**Variables:** Not documented in official docs
