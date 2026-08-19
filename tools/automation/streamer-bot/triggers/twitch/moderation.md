---
title: "Streamer.bot — Triggers: Twitch > Moderation"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - triggers
  - twitch
source: "https://docs.streamer.bot/api/triggers/twitch/moderation"
last-reviewed: 2026-07-31
---

# Twitch — Moderation

> Triggers for Twitch moderation events: AutoMod holds, bans and timeouts, VIP and moderator changes, unban requests, warnings, and Shield Mode.

## AutoMod Message Held

**Location:** `Twitch > Moderation > AutoMod Message Held`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when an AutoMod message is held

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## AutoMod Message Updated

**Location:** `Twitch > Moderation > AutoMod Message Updated`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when an update happens on an AutoMod message

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Blocked Terms Added

**Location:** `Twitch > Moderation > Blocked Terms Added`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when an a blocked term has been added

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Blocked Terms Deleted

**Location:** `Twitch > Moderation > Blocked Terms Deleted`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when an a blocked term has been deleted

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Chat Cleared

**Location:** `Twitch > Moderation > Chat Cleared`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when the Twitch Chat is Cleared

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Chat Message Deleted

**Location:** `Twitch > Moderation > Chat Message Deleted`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Twitch Chat Message is Deleted

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Moderator Added

**Location:** `Twitch > Moderation > Moderator Added`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Twitch moderator has been added

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Moderator Removed

**Location:** `Twitch > Moderation > Moderator Removed`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Twitch moderator has been removed

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Permitted Terms Added

**Location:** `Twitch > Moderation > Permitted Terms Added`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when an a permitted term has been added

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Permitted Terms Deleted

**Location:** `Twitch > Moderation > Permitted Terms Deleted`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when an a permitted term has been deleted

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Shield Mode Begin

**Location:** `Twitch > Moderation > Shield Mode Begin`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Twitch Shield Mode Begins

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Shield Mode End

**Location:** `Twitch > Moderation > Shield Mode End`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Twitch Shield Mode Ends

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Shoutout Created

**Location:** `Twitch > Moderation > Shoutout Created`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Twitch Shoutout is Created

**Parameters:** Not documented in official docs

**Variables:** User Variables: who created the shoutout. Target Variables: who received the shoutout

## Suspicious User Message

**Location:** `Twitch > Moderation > Suspicious User Message`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Twitch Suspicious User Message

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Suspicious User Update

**Location:** `Twitch > Moderation > Suspicious User Update`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Twitch user's restriction or monitor mode updates.

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Unban Request Approved

**Location:** `Twitch > Moderation > Unban Request Approved`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when an Unban Request has been approved

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Unban Request Created

**Location:** `Twitch > Moderation > Unban Request Created`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when an Unban Request has been created

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Unban Request Denied

**Location:** `Twitch > Moderation > Unban Request Denied`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when an Unban Request has been denied

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## User Banned

**Location:** `Twitch > Moderation > User Banned`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Twitch User is Banned

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## User Timed Out

**Location:** `Twitch > Moderation > User Timed Out`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Twitch-Moderation-User-Timed-Out-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Twitch User is Timed Out

**Parameters:** App-verified from `trigger-Twitch-Moderation-User-Timed-Out-dialog-uia.txt`, `trigger-Twitch-Moderation-User-Timed-Out-dialog.png` (Add Trigger - Twitch > Moderation > User Timed Out, ~600×157): `Min` (text), `Max` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## User Unbanned

**Location:** `Twitch > Moderation > User Unbanned`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Twitch user is unbanned

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## User Untimed Out

**Location:** `Twitch > Moderation > User Untimed Out`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Twitch user is untimed out.

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## VIP Added

**Location:** `Twitch > Moderation > VIP Added`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Twitch VIP gets added.

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## VIP Removed

**Location:** `Twitch > Moderation > VIP Removed`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Twitch VIP gets removed.

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Warned User

**Location:** `Twitch > Moderation > Warned User`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Twitch user is warned

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Warning Acknowledged

**Location:** `Twitch > Moderation > Warning Acknowledged`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Triggers when a user acknowledges a warning

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs
