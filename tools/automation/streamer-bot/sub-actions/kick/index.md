---
title: "Streamer.bot — Sub-Actions: Kick"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - kick
source: "https://docs.streamer.bot/api/sub-actions/kick"
last-reviewed: 2026-07-31
---

# Kick

> Sub-actions for managing a Kick channel from Streamer.bot: moderation, channel updates, chat messages, user groups, and user data.

Reference documentation for the Kick sub-actions. Each entry lists the action's location in the Streamer.bot UI, a description, its parameters, and the variables it exposes. Official documentation: <https://docs.streamer.bot/api/sub-actions/kick>.

## Groups

- [Moderation](moderation.md) — Moderate Kick chat: ban and timeout users.

## Channel

### Set Channel Category

**Location:** `Kick > Channel > Set Channel Category`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Kick-Channel-Set-Channel-Category-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Update the current category of your Kick channel

**Parameters:** App-verified from `subaction-Kick-Channel-Set-Channel-Category-dialog-uia.txt`, `subaction-Kick-Channel-Set-Channel-Category-dialog.png` (Add SubAction - Kick > Channel > Set Channel Category, ~600×248): `Category Name` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

### Set Channel Title

**Location:** `Kick > Channel > Set Channel Title`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Kick-Channel-Set-Channel-Title-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Update the current title of your Kick channel

**Parameters:** App-verified from `subaction-Kick-Channel-Set-Channel-Title-dialog-uia.txt`, `subaction-Kick-Channel-Set-Channel-Title-dialog.png` (Add SubAction - Kick > Channel > Set Channel Title, ~600×187): `Title` (text), `You can either set a static title, and/or use variables to set a title` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Chat

### Reply to Message

**Location:** `Kick > Chat > Reply to Message`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Kick-Chat-Reply-To-Message-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Send a reply to a specific Kick chat message

**Parameters:** App-verified from `subaction-Kick-Chat-Reply-To-Message-dialog-uia.txt`, `subaction-Kick-Chat-Reply-To-Message-dialog.png` (Add SubAction - Kick > Chat > Reply To Message, ~600×352): `Reply Id` (text), `Message` (text), `0/500` (text), `Send using bot account` (button), `Fallback to Broadcaster` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

### Send Message

**Location:** `Kick > Chat > Send Message`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Kick-Chat-Send-Message-to-Channel-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Send a Kick chat message

**Parameters:** App-verified from `subaction-Kick-Chat-Send-Message-to-Channel-dialog-uia.txt`, `subaction-Kick-Chat-Send-Message-to-Channel-dialog.png` (Add SubAction - Kick > Chat > Send Message to Channel, ~600×287): `Message` (text), `0/500` (text), `Send using bot account` (button), `Fallback to Broadcaster` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Rewards

### Configure Rewards

**Location:** `Kick > Rewards > Configure Rewards`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Kick-Rewards-Configure-Rewards-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Configure your Kick channel point rewards

**Parameters:** App-verified from `subaction-Kick-Rewards-Configure-Rewards-dialog-uia.txt`, `subaction-Kick-Rewards-Configure-Rewards-dialog.png` (Add SubAction - Kick > Rewards > Configure Rewards, ~600×400): `Rewards` (text), `Disable not configured rewards` (button), `Paused` (text), `Disabled` (text), `Not Configured` (text), `Test` (button), `No Rewards Found` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

### Get Reward Info

**Location:** `Kick > Rewards > Get Reward Info`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Kick-Rewards-Get-Reward-Info-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Get information about a Kick reward

**Parameters:** App-verified from `subaction-Kick-Rewards-Get-Reward-Info-dialog-uia.txt`, `subaction-Kick-Rewards-Get-Reward-Info-dialog.png` (Add SubAction - Kick > Rewards > Get Reward Info, ~600×139): `Reward` (text), `No Kick Rewards Found!` (button), `No Rewards Found` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

### Reset Reward Counter

**Location:** `Kick > Rewards > Reset Reward Counter`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Kick-Rewards-Reset-Reward-Counter-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Reset the counter of a Kick reward

**Parameters:** App-verified from `subaction-Kick-Rewards-Reset-Reward-Counter-dialog-uia.txt`, `subaction-Kick-Rewards-Reset-Reward-Counter-dialog.png` (Add SubAction - Kick > Rewards > Reset Reward Counter, ~600×139): `Reward` (text), `No Kick Rewards Found!` (button), `No Rewards Found` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

### Reset Reward User Counters

**Location:** `Kick > Rewards > Reset Reward User Counters`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Kick-Rewards-Reset-Reward-User-Counters-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Reset the user counters of a Kick reward

**Parameters:** App-verified from `subaction-Kick-Rewards-Reset-Reward-User-Counters-dialog-uia.txt`, `subaction-Kick-Rewards-Reset-Reward-User-Counters-dialog.png` (Add SubAction - Kick > Rewards > Reset Reward User Counters, ~600×139): `Reward` (text), `No Kick Rewards Found!` (button), `No Rewards Found` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

### Set Background Color

**Location:** `Kick > Rewards > Set Background Color`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Kick-Rewards-Set-Background-Color-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Set the background color of a Kick reward

**Parameters:** App-verified from `subaction-Kick-Rewards-Set-Background-Color-dialog-uia.txt`, `subaction-Kick-Rewards-Set-Background-Color-dialog.png` (Add SubAction - Kick > Rewards > Set Background Color, ~600×207): `Reward` (text), `No Editable Rewards Found!` (button), `Random Color` (button), `Color` (text), `Test` (button), `Kick is not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

### Set Cost

**Location:** `Kick > Rewards > Set Cost`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Kick-Rewards-Set-Cost-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Set the cost of a Kick reward

**Parameters:** App-verified from `subaction-Kick-Rewards-Set-Cost-dialog-uia.txt`, `subaction-Kick-Rewards-Set-Cost-dialog.png` (Add SubAction - Kick > Rewards > Set Cost, ~600×224): `Reward` (text), `No Editable Rewards Found!` (button), `Cost` (text), `Operator` (select), `Test` (button), `Kick is not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

### Set Description

**Location:** `Kick > Rewards > Set Description`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Kick-Rewards-Set-Description-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Set the description of a Kick reward

**Parameters:** App-verified from `subaction-Kick-Rewards-Set-Description-dialog-uia.txt`, `subaction-Kick-Rewards-Set-Description-dialog.png` (Add SubAction - Kick > Rewards > Set Description, ~600×232): `Reward` (text), `No Editable Rewards Found!` (button), `Description` (text), `Test` (button), `Kick is not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

### Set Enabled State

**Location:** `Kick > Rewards > Set Enabled State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Kick-Rewards-Set-Enabled-State-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Set the enabled state of a Kick reward

**Parameters:** App-verified from `subaction-Kick-Rewards-Set-Enabled-State-dialog-uia.txt`, `subaction-Kick-Rewards-Set-Enabled-State-dialog.png` (Add SubAction - Kick > Rewards > Set Enabled State, ~600×181): `Reward` (text), `No Editable Rewards Found!` (button), `State` (select), `Test` (button), `Kick is not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

### Set Group Enabled State

**Location:** `Kick > Rewards > Set Group Enabled State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Kick-Rewards-Set-Group-Enabled-State-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Set the enabled state of a Kick reward group

**Parameters:** App-verified from `subaction-Kick-Rewards-Set-Group-Enabled-State-dialog-uia.txt`, `subaction-Kick-Rewards-Set-Group-Enabled-State-dialog.png` (Add SubAction - Kick > Rewards > Set Group Enabled State, ~600×181): `Group` (text), `Add a Kick Reward!` (button), `State` (select), `No Kick Reward Groups Found!` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

### Set Group Paused State

**Location:** `Kick > Rewards > Set Group Paused State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Kick-Rewards-Set-Group-Paused-State-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Set the paused state of a Kick reward group

**Parameters:** App-verified from `subaction-Kick-Rewards-Set-Group-Paused-State-dialog-uia.txt`, `subaction-Kick-Rewards-Set-Group-Paused-State-dialog.png` (Add SubAction - Kick > Rewards > Set Group Paused State, ~600×181): `Group` (text), `Add a Kick Reward!` (button), `State` (select), `No Kick Reward Groups Found!` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

### Set Paused State

**Location:** `Kick > Rewards > Set Paused State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Kick-Rewards-Set-Paused-State-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Set the paused state of a Kick reward

**Parameters:** App-verified from `subaction-Kick-Rewards-Set-Paused-State-dialog-uia.txt`, `subaction-Kick-Rewards-Set-Paused-State-dialog.png` (Add SubAction - Kick > Rewards > Set Paused State, ~600×181): `Reward` (text), `No Editable Rewards Found!` (button), `State` (select), `Test` (button), `Kick is not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

### Set Title

**Location:** `Kick > Rewards > Set Title`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Kick-Rewards-Set-Title-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Set the title of a Kick reward

**Parameters:** App-verified from `subaction-Kick-Rewards-Set-Title-dialog-uia.txt`, `subaction-Kick-Rewards-Set-Title-dialog.png` (Add SubAction - Kick > Rewards > Set Title, ~600×181): `Reward` (text), `No Editable Rewards Found!` (button), `Title` (text), `Test` (button), `Kick is not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## User Groups

### Add User To Group

**Location:** `Kick > User Groups > Add User To Group`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Kick-User-Groups-Add-User-To-Group-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Add a Kick user to a group

**Parameters:** App-verified from `subaction-Kick-User-Groups-Add-User-To-Group-dialog-uia.txt`, `subaction-Kick-User-Groups-Add-User-To-Group-dialog.png` (Add SubAction - Kick > User Groups > Add User To Group, ~600×223): `User Login` (text), `Group Name` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

### Remove User From Group

**Location:** `Kick > User Groups > Remove User From Group`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Kick-User-Groups-Remove-User-from-Group-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Remove a Kick user from a group

**Parameters:** App-verified from `subaction-Kick-User-Groups-Remove-User-from-Group-dialog-uia.txt`, `subaction-Kick-User-Groups-Remove-User-from-Group-dialog.png` (Add SubAction - Kick > User Groups > Remove User from Group, ~600×223): `User Login` (text), `Group Name` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

### User in Group

**Location:** `Kick > User Groups > User in Group`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Kick-User-Groups-User-In-Group-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Check if a Kick user is a member of a given group

**Parameters:** App-verified from `subaction-Kick-User-Groups-User-In-Group-dialog-uia.txt`, `subaction-Kick-User-Groups-User-In-Group-dialog.png` (Add SubAction - Kick > User Groups > User In Group, ~600×223): `User Login` (text), `Group Name` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## User

### Add Broadcaster Information

**Location:** `Kick > User > Add Broadcaster Information`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Fetch user data for the connected Kick broadcaster account

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

### Add Random Users

**Location:** `Kick > User > Add Random Users`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Kick-User-Add-Random-Users-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Get a custom amount of random Kick users

**Parameters:** App-verified from `subaction-Kick-User-Add-Random-Users-dialog-uia.txt`, `subaction-Kick-User-Add-Random-Users-dialog.png` (Add SubAction - Kick > User > Add Random Users, ~600×403): `Count` (text), `Add the specified number of random users to the arguments, this will provide a unique number of users filterd by their present status and that have been seen by Streamer.bot.` (button), `Groups` (button), `Exclude` (list), `Add` (button), `Del` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

### Get User Info for Target Info

**Location:** `Kick > User > Get User Info for Target Info`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Kick-User-Get-User-Info-for-Target-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Fetch Kick user data and populate a set of variables

**Parameters:** App-verified from `subaction-Kick-User-Get-User-Info-for-Target-dialog-uia.txt`, `subaction-Kick-User-Get-User-Info-for-Target-dialog.png` (Add SubAction - Kick > User > Get User Info for Target, ~600×163): `User Login` (text); Ok/Cancel present.

**Variables:** Not documented in official docs
