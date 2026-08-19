---
title: "Streamer.bot — Sub-Actions: Twitch > Rewards"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - twitch
source: "https://docs.streamer.bot/api/sub-actions/twitch/rewards"
last-reviewed: 2026-07-31
---

# Twitch — Rewards

> Sub-actions to create, configure and control Twitch channel point rewards, including cost, title, prompt, cooldowns, enabled/paused states, counters and redemption status.

## Configure Rewards

**Location:** `Twitch > Rewards > Configure Rewards`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Rewards-Configure-Rewards-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Enable, disable and pause multiple rewards.

**Parameters:** `Disable not configured rewards` — Checkbox; any reward in the `Not Configured` group will be disabled at the time of execution. `Move To` — Option; right-click a row and select `Move To` to move a selected reward to a new group. `Move All To` — Option; right-click a group and select `Move All To` to move all rewards within the selected group to a new group.
**Parameters (app-verified):** App-verified from `subaction-Twitch-Rewards-Configure-Rewards-dialog-uia.txt`, `subaction-Twitch-Rewards-Configure-Rewards-dialog.png` (Add SubAction - Twitch > Rewards > Configure Rewards, ~600×400): `Rewards` (button), `Not Configured` (button), `(0)` (button), `Test` (button), `No Rewards Found` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Get Reward Info

**Location:** `Twitch > Rewards > Get Reward Info`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Rewards-Get-Reward-Info-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Get the info from a reward.

**Parameters:** App-verified from `subaction-Twitch-Rewards-Get-Reward-Info-dialog-uia.txt`, `subaction-Twitch-Rewards-Get-Reward-Info-dialog.png` (Add SubAction - Twitch > Rewards > Get Reward Info, ~600×139): `No Twitch Rewards Found!` (button), `No Rewards Found` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Reset Reward Counter

**Location:** `Twitch > Rewards > Reset Reward Counter`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Rewards-Reset-Reward-Counter-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Reset the reward counter.

**Parameters:** `Reward` — Selection; select the reward.
**Parameters (app-verified):** App-verified from `subaction-Twitch-Rewards-Reset-Reward-Counter-dialog-uia.txt`, `subaction-Twitch-Rewards-Reset-Reward-Counter-dialog.png` (Add SubAction - Twitch > Rewards > Reset Reward Counter, ~600×139): `No Twitch Rewards Found!` (button), `No Rewards Found` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Reset Reward User Counters

**Location:** `Twitch > Rewards > Reset Reward User Counters`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Rewards-Reset-Reward-User-Counters-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Reset all user counters for a reward.

**Parameters:** `Reward` — Selection; select the reward.
**Parameters (app-verified):** App-verified from `subaction-Twitch-Rewards-Reset-Reward-User-Counters-dialog-uia.txt`, `subaction-Twitch-Rewards-Reset-Reward-User-Counters-dialog.png` (Add SubAction - Twitch > Rewards > Reset Reward User Counters, ~600×139): `No Twitch Rewards Found!` (button), `No Rewards Found` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Background Color

**Location:** `Twitch > Rewards > Set Background Color`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Rewards-Set-Background-Color-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Set the background color for a Twitch channel point reward. The reward must have been created through Streamer.bot (owned by your bot) in order to edit it.

**Parameters:** App-verified from `subaction-Twitch-Rewards-Set-Background-Color-dialog-uia.txt`, `subaction-Twitch-Rewards-Set-Background-Color-dialog.png` (Add SubAction - Twitch > Rewards > Set Background Color, ~600×207): `Reward` (button), `No Editable Rewards Found!` (button), `Random Color` (text), `Color` (text), `Test` (button), `Twitch is not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Cost

**Location:** `Twitch > Rewards > Set Cost`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Rewards-Set-Cost-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Change the cost of a channel point reward.

**Parameters:** `Reward` — Selection; select the reward. `Cost` — Integer; enter the amount you would like to set or modify. Operator — None, Add, Subtract, Multiply, Divide; works like `{OLD VALUE} {OPERATOR} {VALUE OF THE COST INPUT}`.
**Parameters (app-verified):** App-verified from `subaction-Twitch-Rewards-Set-Cost-dialog-uia.txt`, `subaction-Twitch-Rewards-Set-Cost-dialog.png` (Add SubAction - Twitch > Rewards > Set Cost, ~600×224): `No Editable Rewards Found!` (text), `Cost` (text), `Operator` (select), `Test` (button), `Twitch is not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Enabled State

**Location:** `Twitch > Rewards > Set Enabled State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Rewards-Set-Enabled-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Enable or disable a channel point reward.

**Parameters:** `Reward` — Selection; select the reward. `State` — Enabled (enable the channel point reward), Disabled (disable the channel point reward), Toggle (toggle the current status between enabled and disabled).
**Parameters (app-verified):** App-verified from `subaction-Twitch-Rewards-Set-Enabled-State-dialog-uia.txt`, `subaction-Twitch-Rewards-Set-Enabled-State-dialog.png` (Add SubAction - Twitch > Rewards > Set Enabled State, ~600×181): `No Editable Rewards Found!` (select), `State` (select), `Test` (button), `Twitch is not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Global Cooldown

**Location:** `Twitch > Rewards > Set Global Cooldown`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Rewards-Set-Global-Cooldown-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Change the global cooldown from a reward.

**Parameters:** `Reward` — Selection; select the reward. Cooldown — How long the new cooldown should be. Additive — Sets the cooldown relative to the previous cooldown. Set From Reward — Gets the current cooldown from the selected reward and fills in the Cooldown field.
**Parameters (app-verified):** App-verified from `subaction-Twitch-Rewards-Set-Global-Cooldown-dialog-uia.txt`, `subaction-Twitch-Rewards-Set-Global-Cooldown-dialog.png` (Add SubAction - Twitch > Rewards > Set Global Cooldown, ~600×207): `No Editable Rewards Found!` (text), `Cooldown` (text), `Additive` (button), `Test` (button), `Twitch is not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Group Enabled State

**Location:** `Twitch > Rewards > Set Group Enabled State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Rewards-Set-Group-Enabled-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Enable or disable all channel point rewards from a group.

**Parameters:** `Group` — Fill in the group of channel points. `State` — Enabled (enable the channel point reward group), Disabled (disable the channel point reward group), Toggle (toggle the current status between enabled and disabled).
**Parameters (app-verified):** App-verified from `subaction-Twitch-Rewards-Set-Group-Enabled-State-dialog-uia.txt`, `subaction-Twitch-Rewards-Set-Group-Enabled-State-dialog.png` (Add SubAction - Twitch > Rewards > Set Group Enabled State, ~600×181): `Add a Twitch Reward!` (select), `State` (select), `No Twitch Reward Groups Found!` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Group Paused State

**Location:** `Twitch > Rewards > Set Group Paused State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Rewards-Set-Group-Paused-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Pause or unpause all channel point rewards in a group.

**Parameters:** `Group` — Fill in the group of channel points. `State` — Paused (pause the selected group), Unpaused (unpause the selected group), Toggle (toggle the paused state of the selected group).
**Parameters (app-verified):** App-verified from `subaction-Twitch-Rewards-Set-Group-Paused-State-dialog-uia.txt`, `subaction-Twitch-Rewards-Set-Group-Paused-State-dialog.png` (Add SubAction - Twitch > Rewards > Set Group Paused State, ~600×181): `Add a Twitch Reward!` (select), `State` (select), `No Twitch Reward Groups Found!` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Max per Stream

**Location:** `Twitch > Rewards > Set Max per Stream`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Rewards-Set-Max-Per-Stream-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Set's the maxmimum number of redeems possible per stream

**Parameters:** App-verified from `subaction-Twitch-Rewards-Set-Max-Per-Stream-dialog-uia.txt`, `subaction-Twitch-Rewards-Set-Max-Per-Stream-dialog.png` (Add SubAction - Twitch > Rewards > Set Max Per Stream, ~600×207): `No Editable Rewards Found!` (text), `Cooldown` (text), `Additive` (button), `Test` (button), `Twitch is not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Max per User Per Stream

**Location:** `Twitch > Rewards > Set Max per User Per Stream`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Rewards-Set-Max-per-User-per-Stream-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Set's the maxmimum number of redeems possible per user per stream

**Parameters:** App-verified from `subaction-Twitch-Rewards-Set-Max-per-User-per-Stream-dialog-uia.txt`, `subaction-Twitch-Rewards-Set-Max-per-User-per-Stream-dialog.png` (Add SubAction - Twitch > Rewards > Set Max per User per Stream, ~600×207): `No Editable Rewards Found!` (text), `Cooldown` (text), `Additive` (button), `Test` (button), `Twitch is not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Paused State

**Location:** `Twitch > Rewards > Set Paused State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Rewards-Set-Paused-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Toggle the paused state of a channel point reward.

**Parameters:** `Reward` — Selection; select the reward. `State` — Paused (pause the channel point reward), Unpaused (unpause the channel point reward), Toggle (toggle the current status between paused and unpaused).
**Parameters (app-verified):** App-verified from `subaction-Twitch-Rewards-Set-Paused-State-dialog-uia.txt`, `subaction-Twitch-Rewards-Set-Paused-State-dialog.png` (Add SubAction - Twitch > Rewards > Set Paused State, ~600×181): `No Editable Rewards Found!` (select), `State` (select), `Test` (button), `Twitch is not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Prompt

**Location:** `Twitch > Rewards > Set Prompt`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Rewards-Set-Prompt-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Change the prompt of a channel point reward.

**Parameters:** `Reward` — Selection; select the reward. Prompt — Enter the text to apply to your reward prompt; the input field can span multiple lines and will also accept variables. Reset to Original — Reset the reward prompt to its original value.
**Parameters (app-verified):** App-verified from `subaction-Twitch-Rewards-Set-Prompt-dialog-uia.txt`, `subaction-Twitch-Rewards-Set-Prompt-dialog.png` (Add SubAction - Twitch > Rewards > Set Prompt, ~600×232): `No Editable Rewards Found!` (text), `Prompt` (text), `Test` (button), `Twitch is not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Title

**Location:** `Twitch > Rewards > Set Title`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Rewards-Set-Title-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Modify the title of a channel point reward.

**Parameters:** `Reward` — Selection; select the reward. Title — Enter the new title for your channel point reward. Reset to Original — Reset the reward title to its original value.
**Parameters (app-verified):** App-verified from `subaction-Twitch-Rewards-Set-Title-dialog-uia.txt`, `subaction-Twitch-Rewards-Set-Title-dialog.png` (Add SubAction - Twitch > Rewards > Set Title, ~600×181): `No Editable Rewards Found!` (text), `Title` (text), `Test` (button), `Twitch is not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Update Redemption Status

**Location:** `Twitch > Rewards > Update Redemption Status`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Rewards-Update-Redemption-Status-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Set a reward redemption as fulfilled or canceled. A redeem must be originally created by Streamer.bot for this sub-action to work.

**Parameters:** `Status` — Fulfilled (accept the redemption, marking it as complete), Cancel (cancel the reward redemption, refunding any channel points spent).
**Parameters (app-verified):** App-verified from `subaction-Twitch-Rewards-Update-Redemption-Status-dialog-uia.txt`, `subaction-Twitch-Rewards-Update-Redemption-Status-dialog.png` (Add SubAction - Twitch > Rewards > Update Redemption Status, ~600×239): `Status` (select); Ok/Cancel present.

**Variables:** Not documented in official docs

## Update

**Location:** `Twitch > Rewards > Update`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Rewards-Update-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Modify the `Title`, `Prompt` and `Cost` of a channel point reward at once.

**Parameters:** `Reward` — Selection; select the reward. Title — Enter the new title for your channel point reward. Prompt — Enter the text to apply to your reward prompt. Cost — Enter the amount you would like to set or modify. Operator — None (set the cost to the amount entered), Add (add the amount entered to the current cost), Subtract (subtract the amount entered from the current cost), Multiply (multiply the amount entered with the current cost), Divide (divide the current cost by the amount entered). Reset to Original — Revert all rewar
**Parameters (app-verified):** App-verified from `subaction-Twitch-Rewards-Update-dialog-uia.txt`, `subaction-Twitch-Rewards-Update-dialog.png` (Add SubAction - Twitch > Rewards > Update, ~600×387): `Reward` (button), `No Editable Rewards Found!` (button), `Title` (text), `Prompt` (text), `Cost` (text), `Operator` (select), `To not set a value for any of the options,, just leave the field empty` (button), `Test` (button), `Twitch is not Connected` (button); Ok/Cancel present.d settings to their original values.

**Variables:** Not documented in official docs
