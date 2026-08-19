---
title: "Streamer.bot — Triggers: Integrations"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - triggers
  - integrations
source: "https://docs.streamer.bot/api/triggers/integrations"
last-reviewed: 2026-07-31
---

# Integrations

This reference covers every trigger available from Streamer.bot's third-party integrations: storefronts and donation platforms (Fourthwall, Ko-Fi, Patreon, Streamlabs, StreamElements, DonorDrive, Throne, TipeeeStream, TreatStream, Shopify), crowd and tipping tools (CrowdControl, Pally.gg, StreamLoots), heart rate and wellness devices (HypeRate.io, Pulsoid), VTuber and voice tools (VTube Studio, Voicemod, T.I.T.s, Speaker.bot), and remote Streamer.bot instances. Each entry documents its menu location, description, parameters, and variables as sourced from the [official Streamer.bot documentation](https://docs.streamer.bot/api/triggers/integrations).

## Groups

- [CrowdControl](crowdcontrol.md) — Effect requests, results, coin exchanges, game sessions, and timed effects.
- [Fourthwall](fourthwall.md) — Store activity: donations, orders, products, subscriptions, gift draws, and newsletter signups.
- [HypeRate.io](hyperateio.md) — Heart rate pulses, Twitch clip creation, and connection state.
- [Ko-Fi](ko-fi.md) — Donations, subscriptions, commissions, and shop orders.
- [Patreon](patreon.md) — Follow and pledge lifecycle events.
- [StreamElements](streamelements.md) — Tips, merch purchases, and connection state.
- [Streamlabs](streamlabs.md) — Donations, charity donations, merchandise, and connection state.
- [Tits](tits/index.md) — Gameplay events (item hits, trigger activations) and connection state.
- [Voicemod](voicemod.md) — Connection state, soundboard changes, and voice loads.
- [VTube Studio](vtube-studio.md) — Model, animation, hotkey, item, background, and tracking events.

## DonorDrive

### Donation

**Location:** `Integrations > DonorDrive > Donation`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Integrations-DonorDrive-Donation-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for a DonorDrive Donation

**Parameters:** `DonorDrive` (Select, required) — choose a configured DonorDrive Provider; select `Any` to trigger on any provider

**Variables:** Not documented in official docs

### Incentive

**Location:** `Integrations > DonorDrive > Incentive`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Integrations-DonorDrive-Incentive-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for a DonorDrive Incentive

**Parameters:** `DonorDrive` (Select, required) — choose a configured DonorDrive Provider; select `Any` to trigger on any provider

**Variables:** Not documented in official docs

### Profile Updated

**Location:** `Integrations > DonorDrive > Profile Updated`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Integrations-DonorDrive-Profile-Updated-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for when your DonorDrive Profile is Updated

**Parameters:** `DonorDrive` (Select, required) — choose a configured DonorDrive Provider; select `Any` to trigger on any provider

**Variables:** Not documented in official docs

## Pally.gg

### Campaign Tip

**Location:** `Integrations > Pally.gg > Campaign Tip`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Integrations-Pally-gg-Campaign-Tip-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a tip has been received

**Parameters:** App-verified from `trigger-Integrations-Pally-gg-Campaign-Tip-dialog-uia.txt`, `trigger-Integrations-Pally-gg-Campaign-Tip-dialog.png` (Add Trigger - Integrations > Pally.gg > Campaign Tip, ~600×157): `Min` (text), `Max` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

### Connected

**Location:** `Integrations > Pally.gg > Connected`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when the Pally.gg integration has connected

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

### Disconnected

**Location:** `Integrations > Pally.gg > Disconnected`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when the Pally.gg integration has been disconnected

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Pulsoid

### Heart Rate Pulse

**Location:** `Integrations > Pulsoid > Heart Rate Pulse`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Integrations-Pulsoid-Heart-Rate-Pulse-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Pulsoid Heart Rate Pulse

**Parameters:** App-verified from `trigger-Integrations-Pulsoid-Heart-Rate-Pulse-dialog-uia.txt`, `trigger-Integrations-Pulsoid-Heart-Rate-Pulse-dialog.png` (Add Trigger - Integrations > Pulsoid > Heart Rate Pulse, ~600×157): `Min` (text), `Max` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

**Note:** When Pulsoid is broadcasting your heart rate, this event can fire once every second, so be sure whatever action you use runs fast enough so it won't cause a backlog in the action queue. It is also recommended that whatever action you are running be placed in a blocking queue.

## Shopify

### Order Created

**Location:** `Integrations > Shopify > Order Created`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Shopify Order is Created

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

### Order Paid

**Location:** `Integrations > Shopify > Order Paid`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Shopify Order is Paid

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Speaker.bot

### Connected

**Location:** `Integrations > Speaker.bot > Connected`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Triggers when Speaker.bot successfully connects to Streamer.bot

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

### Disconnected

**Location:** `Integrations > Speaker.bot > Disconnected`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Triggers when Speaker.bot disconnects from Streamer.bot for any reason

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Streamer.bot

### Custom Webhook

**Location:** `Integrations > Streamer.bot > Custom Webhook`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Integrations-Streamer-bot-Custom-Webhook-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Streamer.bot Custom Webhook

**Parameters:** App-verified from `trigger-Integrations-Streamer-bot-Custom-Webhook-dialog-uia.txt`, `trigger-Integrations-Streamer-bot-Custom-Webhook-dialog.png` (Add Trigger - Integrations > Streamer.bot > Custom Webhook, ~600×124): `Custom Webhook` (text), `Not Authenticated` (button), `Not Authenticated` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Streamer.bot Remote

### Remote Instance Connected

**Location:** `Integrations > Streamer.bot Remote > Remote Instance Connected`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Integrations-Streamer-bot-Remote-Remote-Instance-Connected-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Triggers when a remote Streamer.bot instance connects

**Parameters:** App-verified from `trigger-Integrations-Streamer-bot-Remote-Remote-Instance-Connected-dialog-uia.txt`, `trigger-Integrations-Streamer-bot-Remote-Remote-Instance-Connected-dialog.png` (Add Trigger - Integrations > Streamer.bot Remote > Remote Instance Connected, ~600×124): `Not Authenticated` (button), `Not Authenticated` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

### Remote Instance Disconnected

**Location:** `Integrations > Streamer.bot Remote > Remote Instance Disconnected`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Integrations-Streamer-bot-Remote-Remote-Instance-Disconnected-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Triggers when a remote Streamer.bot instance disconnects

**Parameters:** App-verified from `trigger-Integrations-Streamer-bot-Remote-Remote-Instance-Disconnected-dialog-uia.txt`, `trigger-Integrations-Streamer-bot-Remote-Remote-Instance-Disconnected-dialog.png` (Add Trigger - Integrations > Streamer.bot Remote > Remote Instance Disconnected, ~600×124): `Not Authenticated` (button), `Not Authenticated` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

### Remote Instance Trigger

**Location:** `Integrations > Streamer.bot Remote > Remote Instance Trigger`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Integrations-Streamer-bot-Remote-Remote-Instance-Trigger-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Triggers when a remote Streamer.bot instance trigger gets sent

**Parameters:** App-verified from `trigger-Integrations-Streamer-bot-Remote-Remote-Instance-Trigger-dialog-uia.txt`, `trigger-Integrations-Streamer-bot-Remote-Remote-Instance-Trigger-dialog.png` (Add Trigger - Integrations > Streamer.bot Remote > Remote Instance Trigger, ~600×223): `Not Authenticated` (text), `Event Name` (text), `Leaving Event Name empty is considered a catch-all and will trigger on any remote event name.` (button), `Not Authenticated` (button); Ok/Cancel present.

**Variables:** Additional variables will be populated for all arguments configured in the sending sub-action

**Note:** This trigger is executed by the Send Remote Trigger sub-action, sent from another instance.

## Streamloots

### Card Redeemed

**Location:** `Integrations > Streamloots > Card Redeemed`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a card is redeemed in StreamLoots

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

### Pack Gifted

**Location:** `Integrations > Streamloots > Pack Gifted`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a pack is gifted in StreamLoots

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

### Pack Purchased

**Location:** `Integrations > Streamloots > Pack Purchased`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a pack is purchased in StreamLoots

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

### Reaction

**Location:** `Integrations > Streamloots > Reaction`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for a StreamLoots Reaction

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Throne

### Contribution Purchased

**Location:** `Integrations > Throne > Contribution Purchased`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Triggered when a contribution is purchased through the Throne integration

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

### Gift Crowdfunded

**Location:** `Integrations > Throne > Gift Crowdfunded`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Triggered when a gift is crowdfunded through the Throne integration

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

### Gift Purchased

**Location:** `Integrations > Throne > Gift Purchased`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Triggered when a gift is purchased through the Throne integration

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## TipeeeStream

### Donation

**Location:** `Integrations > TipeeeStream > Donation`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Integrations-TipeeeStream-Donation-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for a TipeeeStream Donation

**Parameters:** App-verified from `trigger-Integrations-TipeeeStream-Donation-dialog-uia.txt`, `trigger-Integrations-TipeeeStream-Donation-dialog.png` (Add Trigger - Integrations > TipeeeStream > Donation, ~600×157): `Min` (text), `Max` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## TreatStream

### Treat

**Location:** `Integrations > TreatStream > Treat`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for a TreatStream Treat

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs
