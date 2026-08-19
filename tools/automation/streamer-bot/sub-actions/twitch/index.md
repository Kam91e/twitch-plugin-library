---
title: "Streamer.bot — Sub-Actions: Twitch"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - twitch
source: "https://docs.streamer.bot/api/sub-actions/twitch"
last-reviewed: 2026-07-31
---

# Twitch

Sub-actions for managing your Twitch channel from Streamer.bot — chat, moderation, channel point rewards, polls, predictions, guest stars, ads, tags, and user lookups. Official documentation: <https://docs.streamer.bot/api/sub-actions/twitch>

## Groups

- [Ads](ads.md) — Ad schedule, pre-roll free time, running commercials and snoozing ad breaks.
- [Channel](channel.md) — Viewer counts, clips, stream markers, branded content, game and title.
- [Chat](chat.md) — Sending messages, announcements and replies, and managing pinned chat messages.
- [Guest Star](guest-star.md) — Guest Star sessions, invites, slots and channel settings.
- [Moderation](moderation/index.md) — Moderators, VIPs, bans, timeouts, shoutouts, warnings, shield mode and chat modes.
- [Polls](polls.md) — Creating, checking, archiving and terminating polls.
- [Predictions](predictions.md) — Creating, locking, cancelling and resolving predictions.
- [Rewards](rewards.md) — Creating and configuring channel point rewards: cost, title, prompt, cooldowns, states and counters.
- [Tags](tags.md) — Adding, removing, clearing and setting channel tags.
- [User](user.md) — Fetching Twitch user data for the broadcaster, present users, random users and targets.

## Charity

### Get Latest Charity Campaign

**Location:** `Twitch > Charity > Get Latest Charity Campaign`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Fetches your latest Twitch Charity campaign and adds the information as variables

**Parameters:** Not documented in official docs

**Variables:** `campaignId` — Twitch's internal ID for your campaign. `charity.name` — The name of the charity you are supporting. `charity.description` — The description of the charity you are supporting. `charity.logoUrl` — The logo of the charity you are supporting. `charity.websiteUrl` — The website to the charity you are supporting. `currentAmount` — How much you have raised so far, in cents (e.g. `4200`). `targetAmount` — Your campaign's target amount, in cents (e.g. `5000`).

## Clips

### Get Clip Download Urls

**Location:** `Twitch > Clips > Get Clip Download Urls`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Clips-Get-Clip-Download-Urls-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Get the download URLs for a Twitch clip

**Parameters:** App-verified from `subaction-Twitch-Clips-Get-Clip-Download-Urls-dialog-uia.txt`, `subaction-Twitch-Clips-Get-Clip-Download-Urls-dialog.png` (Add SubAction - Twitch > Clips > Get Clip Download Urls, ~600×181): `Clip ID` (text), `The clip ID can contain either a specific id for a clip, or a %variable% that will be parsed.  This can also only get URLs for your own clips.` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Followers

### Get Follow Age Info for Target

**Location:** `Twitch > Followers > Get Follow Age Info for Target`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Followers-Get-Follow-Age-Info-for-Target-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Get the follow age from a Twitch user

**Parameters:** App-verified from `subaction-Twitch-Followers-Get-Follow-Age-Info-for-Target-dialog-uia.txt`, `subaction-Twitch-Followers-Get-Follow-Age-Info-for-Target-dialog.png` (Add SubAction - Twitch > Followers > Get Follow Age Info for Target, ~600×181): `User Login` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

### Get Follower Count

**Location:** `Twitch > Followers > Get Follower Count`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Get your current follower count.

**Parameters:** Not documented in official docs

**Variables:** `followerCount` — The current amount of followers.

### Get Latest Follower

**Location:** `Twitch > Followers > Get Latest Follower`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Get the latest follower on your channel.

**Parameters:** Not documented in official docs

**Variables:** `latestFollower.user` — The latest follower display name. `latestFollower.userName` — The latest follower login name. `latestFollower.userId` — The latest follower user id.

## Raid

### Cancel Raid

**Location:** `Twitch > Raid > Cancel Raid`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Cancel the current raid.

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

### Start Raid

**Location:** `Twitch > Raid > Start Raid`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Raid-Start-Raid-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Start a raid

**Parameters:** App-verified from `subaction-Twitch-Raid-Start-Raid-dialog-uia.txt`, `subaction-Twitch-Raid-Start-Raid-dialog.png` (Add SubAction - Twitch > Raid > Start Raid, ~600×181): `User Login` (text), `This will allow you to start a raid to the user login that is specified in the above text box. Variables are supported.` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Sub Counter

### Get Twitch Sub Counter Count

**Location:** `Twitch > Sub Counter > Get Twitch Sub Counter Count`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Get the broadcaster's Twitch sub counter count

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

### Set Twitch Sub Counter Count

**Location:** `Twitch > Sub Counter > Set Twitch Sub Counter Count`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Sub-Counter-Set-Twitch-Sub-Counter-Count-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Set a Twitch subscriber counter count

**Parameters:** App-verified from `subaction-Twitch-Sub-Counter-Set-Twitch-Sub-Counter-Count-dialog-uia.txt`, `subaction-Twitch-Sub-Counter-Set-Twitch-Sub-Counter-Count-dialog.png` (Add SubAction - Twitch > Sub Counter > Set Twitch Sub Counter Count, ~600×163): `Count` (text), `The count can contain a specific number, or a %variables% that will be parsed` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Subscribers

### Get Latest Subscriber

**Location:** `Twitch > Subscribers > Get Latest Subscriber`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Get the latest subscriber on your channel.

**Parameters:** Not documented in official docs

**Variables:** `latestSubscriber.userName` — The latest subscriber's display name. `latestSubscriber.userId` — The latest subscriber's ID. `latestSubscriber.userLogin` — The latest subscriber's login name. `latestSubscriber.tier` — The latest subscriber's tier e.g. `Tier1`. `latestSubscriber.planName` — The latest subscriber's plan name e.g. `Channel Subscription (<broadcaster>)`. `latestSubscriber.isGift` — Boolean value indicating if this sub was gifted (`True`/`False`).

### Get Subscriber Count

**Location:** `Twitch > Subscribers > Get Subscriber Count`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Get your current subscriber count.

**Parameters:** Not documented in official docs

**Variables:** `subscriberCount` — The current amount of subscribers. `subscriberPoints` — Total points for your subscribers (`Tier 1 = 1 point`, `Tier 2 = 2 points`, `Tier 3 = 6 points`).

## User Groups

### Add User to Group

**Location:** `Twitch > User Groups > Add User to Group`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-User-Groups-Add-User-To-Group-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Add a Twitch user to a group

**Parameters:** App-verified from `subaction-Twitch-User-Groups-Add-User-To-Group-dialog-uia.txt`, `subaction-Twitch-User-Groups-Add-User-To-Group-dialog.png` (Add SubAction - Twitch > User Groups > Add User To Group, ~600×223): `User Login` (text), `Group Name` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

### Remove User from Group

**Location:** `Twitch > User Groups > Remove User from Group`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-User-Groups-Remove-User-from-Group-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Remove a Twitch user from a group

**Parameters:** App-verified from `subaction-Twitch-User-Groups-Remove-User-from-Group-dialog-uia.txt`, `subaction-Twitch-User-Groups-Remove-User-from-Group-dialog.png` (Add SubAction - Twitch > User Groups > Remove User from Group, ~600×223): `User Login` (text), `Group Name` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

### User in Group

**Location:** `Twitch > User Groups > User in Group`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-User-Groups-User-In-Group-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Check if a Twitch user is a member of a given group

**Parameters:** App-verified from `subaction-Twitch-User-Groups-User-In-Group-dialog-uia.txt`, `subaction-Twitch-User-Groups-User-In-Group-dialog.png` (Add SubAction - Twitch > User Groups > User In Group, ~600×223): `User Login` (text), `Group Name` (text); Ok/Cancel present.

**Variables:** Not documented in official docs
