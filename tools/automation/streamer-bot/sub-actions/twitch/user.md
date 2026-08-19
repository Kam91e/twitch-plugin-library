---
title: "Streamer.bot — Sub-Actions: Twitch > User"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - twitch
source: "https://docs.streamer.bot/api/sub-actions/twitch/user"
last-reviewed: 2026-07-31
---

# Twitch — User

> Sub-actions to fetch Twitch user data — broadcaster, present users, random users, teams and arbitrary targets — and populate variables.

## Add Broadcaster Information

**Location:** `Twitch > User > Add Broadcaster Information`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Fetch user data for the connected Twitch broadcaster account

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Add Present User

**Location:** `Twitch > User > Add Present User`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-User-Add-Present-User-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Fetch info for a specified present user in your chat

**Parameters:** App-verified from `subaction-Twitch-User-Add-Present-User-dialog-uia.txt`, `subaction-Twitch-User-Add-Present-User-dialog.png` (Add SubAction - Twitch > User > Add Present User, ~600×200): `Index` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Add Random Users

**Location:** `Twitch > User > Add Random Users`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-User-Add-Random-Users-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Get a custom amount of random users

**Parameters:** App-verified from `subaction-Twitch-User-Add-Random-Users-dialog-uia.txt`, `subaction-Twitch-User-Add-Random-Users-dialog.png` (Add SubAction - Twitch > User > Add Random Users, ~600×403): `Count` (text), `Add the specified number of random users to the arguments, this will provide a unique number of users filterd by their present status and that have been seen by Streamer.bot.` (button), `Groups` (button), `Exclude` (list), `Add` (button), `Del` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Get Team Info For Target

**Location:** `Twitch > User > Get Team Info For Target`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-User-Get-Team-Info-for-Target-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Collects follow data from a Twitch user.

**Parameters:** `Source Type` — Broadcaster (the broadcast user), User (user that invoked the action e.g. a raid leader, subscriber, point redeemer etc.), From Input (takes the next word proceeding the trigger as the username to lookup; this user does not have to be present in the channel), Variable (use the content of an existing variable as the target). `Variable` — If you selected `Variable` as your `Source Type`, enter the name of the variable you would like to read in.
**Parameters (app-verified):** App-verified from `subaction-Twitch-User-Get-Team-Info-for-Target-dialog-uia.txt`, `subaction-Twitch-User-Get-Team-Info-for-Target-dialog.png` (Add SubAction - Twitch > User > Get Team Info for Target, ~600×181): `User Login` (text); Ok/Cancel present.

**Variables:** `teamId#` — The id of the target's team. `teamName#` — The name of the target's team. `teamDisplayName#` — The display name of the target's team. `teamBackgroundUrl#` — The background url of the target's team. `teamBannerUrl#` — The banner url of the target's team. `_jsonTeamData` — The json, used for coding in C#.

## Get User Info for Target

**Location:** `Twitch > User > Get User Info for Target`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-User-Get-User-Info-for-Target-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Fetch Twitch user data from a given value and populate a set of variables

**Parameters:** `User Login` — Text. The User Login field can contain either a literal username or a variable/argument. Examples: `%userName%` — the user who triggered the action; `genericuser` — a specific account with the name `genericuser`; `%input0%` — the first input provided (e.g., in a command or reward); `%broadcastUserName%` — the broadcaster's account (if not used with a Twitch/Command trigger, add the Add Broadcaster Information sub-action first).
**Parameters (app-verified):** App-verified from `subaction-Twitch-User-Get-User-Info-for-Target-dialog-uia.txt`, `subaction-Twitch-User-Get-User-Info-for-Target-dialog.png` (Add SubAction - Twitch > User > Get User Info for Target, ~600×181): `User Login` (text); Ok/Cancel present.

**Variables:** Not documented in official docs
