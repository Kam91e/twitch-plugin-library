---
title: "Streamer.bot — Sub-Actions: Elgato > Camera Hub > Prompter"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - elgato
source: "https://docs.streamer.bot/api/sub-actions/elgato/camera-hub/prompter"
last-reviewed: 2026-07-31
---

# Elgato — Camera Hub > Prompter

> Sub-actions to control the Elgato Camera Hub Prompter: chapter navigation, scripts, auto-scroll, and display settings such as brightness, crosshair, font, margins and opacity.

## Prompter Fast Forward Chapter

**Location:** `Elgato > Camera Hub > Prompter > Fast Forward Chapter`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Fast forwards to the next chapter

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Prompter Get Selected Script

**Location:** `Elgato > Camera Hub > Prompter > Get Selected Script`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Gets the selected script

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Prompter Rewind Chapter

**Location:** `Elgato > Camera Hub > Prompter > Rewind Chapter`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Rewinds current chapter

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Prompter Set Auto Scroll

**Location:** `Elgato > Camera Hub > Prompter > Set Auto Scroll`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Camera-Hub-Prompter-Set-Auto-Scroll-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Select options for auto scrolling

**Parameters:** App-verified from `subaction-Elgato-Camera-Hub-Prompter-Set-Auto-Scroll-State-dialog-uia.txt`, `subaction-Elgato-Camera-Hub-Prompter-Set-Auto-Scroll-State-dialog.png` (Add SubAction - Elgato > Camera Hub > Prompter > Set Auto Scroll State, ~600×140): `Mode` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Prompter Set Brightness

**Location:** `Elgato > Camera Hub > Prompter > Set Brightness`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Camera-Hub-Prompter-Set-Brightness-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Sets the desired brightness

**Parameters:** App-verified from `subaction-Elgato-Camera-Hub-Prompter-Set-Brightness-dialog-uia.txt`, `subaction-Elgato-Camera-Hub-Prompter-Set-Brightness-dialog.png` (Add SubAction - Elgato > Camera Hub > Prompter > Set Brightness, ~600×164): `Brightness` (text), `Adjustment` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Prompter Set Chapter

**Location:** `Elgato > Camera Hub > Prompter > Set Chapter`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Camera-Hub-Prompter-Set-Chapter-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Sets the desired chapter

**Parameters:** App-verified from `subaction-Elgato-Camera-Hub-Prompter-Set-Chapter-dialog-uia.txt`, `subaction-Elgato-Camera-Hub-Prompter-Set-Chapter-dialog.png` (Add SubAction - Elgato > Camera Hub > Prompter > Set Chapter, ~600×164): `Chapter` (text), `Adjustment` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Prompter Set Crosshair Image

**Location:** `Elgato > Camera Hub > Prompter > Set Crosshair Image`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Camera-Hub-Prompter-Set-Crosshair-Image-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Dependency:** requires a configured Elgato CameraHub connection
**Description:** WIP

**Parameters:** App-verified from `subaction-Elgato-Camera-Hub-Prompter-Set-Crosshair-Image-dialog-uia.txt`, `subaction-Elgato-Camera-Hub-Prompter-Set-Crosshair-Image-dialog.png` (Add SubAction - Elgato > Camera Hub > Prompter > Set Crosshair Image, ~600×124): `Crosshair` (button), `Elgato CameraHub is Not Connected!` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Prompter Set Crosshair Image

**Location:** `Elgato > Camera Hub > Prompter > Set Crosshair Image`
**Description:** Sets the desired crosshair image

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Prompter Set Crosshair

**Location:** `Elgato > Camera Hub > Prompter > Set Crosshair`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Camera-Hub-Prompter-Set-Crosshair-Image-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Dependency:** requires a configured Elgato CameraHub connection
**Description:** Sets the desired brightness

**Parameters:** App-verified from `subaction-Elgato-Camera-Hub-Prompter-Set-Crosshair-Image-dialog-uia.txt`, `subaction-Elgato-Camera-Hub-Prompter-Set-Crosshair-Image-dialog.png` (Add SubAction - Elgato > Camera Hub > Prompter > Set Crosshair Image, ~600×124): `Crosshair` (button), `Elgato CameraHub is Not Connected!` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Prompter Set Font Size

**Location:** `Elgato > Camera Hub > Prompter > Set Font Size`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Camera-Hub-Prompter-Set-Font-Size-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Sets the desired font size (in points)

**Parameters:** App-verified from `subaction-Elgato-Camera-Hub-Prompter-Set-Font-Size-dialog-uia.txt`, `subaction-Elgato-Camera-Hub-Prompter-Set-Font-Size-dialog.png` (Add SubAction - Elgato > Camera Hub > Prompter > Set Font Size, ~600×164): `Font Size` (text), `pt` (button), `Adjustment` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Prompter Set Font

**Location:** `Elgato > Camera Hub > Prompter > Set Font`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Camera-Hub-Prompter-Set-Font-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Dependency:** requires a configured Elgato CameraHub connection
**Description:** Sets the desired font

**Parameters:** App-verified from `subaction-Elgato-Camera-Hub-Prompter-Set-Font-dialog-uia.txt`, `subaction-Elgato-Camera-Hub-Prompter-Set-Font-dialog.png` (Add SubAction - Elgato > Camera Hub > Prompter > Set Font, ~600×124): `Font` (button), `Elgato CameraHub is Not Connected!` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Prompter Set Horizontal Margin

**Location:** `Elgato > Camera Hub > Prompter > Set Horizontal Margin`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Camera-Hub-Prompter-Set-Horizontal-Margin-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Sets the desired horizontal margin

**Parameters:** App-verified from `subaction-Elgato-Camera-Hub-Prompter-Set-Horizontal-Margin-dialog-uia.txt`, `subaction-Elgato-Camera-Hub-Prompter-Set-Horizontal-Margin-dialog.png` (Add SubAction - Elgato > Camera Hub > Prompter > Set Horizontal Margin, ~600×164): `Margin` (text), `Adjustment` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Prompter Set Line Spacing

**Location:** `Elgato > Camera Hub > Prompter > Set Line Spacing`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Camera-Hub-Prompter-Set-Line-Spacing-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Sets the desired line spacing

**Parameters:** App-verified from `subaction-Elgato-Camera-Hub-Prompter-Set-Line-Spacing-dialog-uia.txt`, `subaction-Elgato-Camera-Hub-Prompter-Set-Line-Spacing-dialog.png` (Add SubAction - Elgato > Camera Hub > Prompter > Set Line Spacing, ~600×169): `Line Spacing` (text), `Adjustment` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Prompter Set Mode

**Location:** `Elgato > Camera Hub > Prompter > Set Mode`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Camera-Hub-Prompter-Set-Mode-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Sets the desired brightness

**Parameters:** App-verified from `subaction-Elgato-Camera-Hub-Prompter-Set-Mode-dialog-uia.txt`, `subaction-Elgato-Camera-Hub-Prompter-Set-Mode-dialog.png` (Add SubAction - Elgato > Camera Hub > Prompter > Set Mode, ~600×140): `Mode` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Prompter Set Opacity

**Location:** `Elgato > Camera Hub > Prompter > Set Opacity`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Camera-Hub-Prompter-Set-Opacity-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Sets the desired opacity

**Parameters:** App-verified from `subaction-Elgato-Camera-Hub-Prompter-Set-Opacity-dialog-uia.txt`, `subaction-Elgato-Camera-Hub-Prompter-Set-Opacity-dialog.png` (Add SubAction - Elgato > Camera Hub > Prompter > Set Opacity, ~600×164): `Line Spacing` (text), `Adjustment` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Prompter Set Scripts

**Location:** `Elgato > Camera Hub > Prompter > Set Scripts`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Camera-Hub-Prompter-Set-Script-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Dependency:** requires a configured Elgato CameraHub connection
**Description:** WIP

**Parameters:** App-verified from `subaction-Elgato-Camera-Hub-Prompter-Set-Script-dialog-uia.txt`, `subaction-Elgato-Camera-Hub-Prompter-Set-Script-dialog.png` (Add SubAction - Elgato > Camera Hub > Prompter > Set Script, ~600×124): `Script` (button), `Elgato CameraHub is Not Connected!` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Prompter Set Vertical Margin

**Location:** `Elgato > Camera Hub > Prompter > Set Vertical Margin`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Camera-Hub-Prompter-Set-Vertical-Margin-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Sets the desired vertical margin

**Parameters:** App-verified from `subaction-Elgato-Camera-Hub-Prompter-Set-Vertical-Margin-dialog-uia.txt`, `subaction-Elgato-Camera-Hub-Prompter-Set-Vertical-Margin-dialog.png` (Add SubAction - Elgato > Camera Hub > Prompter > Set Vertical Margin, ~600×164): `Margin` (text), `Adjustment` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs
