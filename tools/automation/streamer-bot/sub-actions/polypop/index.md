---
title: "Streamer.bot — Sub-Actions: PolyPop"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - polypop
source: "https://docs.streamer.bot/api/sub-actions/polypop"
last-reviewed: 2026-08-06
---

# PolyPop

Sub-actions for triggering [PolyPop](https://polypop.live/) alerts from Streamer.bot. This is the **smallest integration in the app**: exactly **one** sub-action exists (Trigger Alert), and the official docs confirm **no triggers are supported** by the PolyPop integration (see [PolyPop triggers](../triggers/polypop.md)).

## Trigger Alert (single-item group — the group IS the sub-action)

**Location:** `PolyPop > Trigger Alert`

**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-PolyPop-Trigger-Alert-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger a PolyPop alert from Streamer.bot. The alert must be configured inside PolyPop's WebSocket plugin (see below).

**Parameters:**

- **Alert Name** (Text, required) — the name of the alert to trigger, matching an alert configured in the PolyPop WebSocket plugin's properties.

**Variables:**

- `Name` — becomes the **Alert Title** in PolyPop
- `Value` — becomes the **Alert Value** in PolyPop

## How the connection works

The PolyPop integration uses a **community-made WebSocket plugin** inside PolyPop (Jabbey92/PolyPopWebsocketPlugin, v1.1 on GitHub) — it is not an official PolyPop feature. Streamer.bot acts as the **server** (configured under Stream Apps > PolyPop: Auto Start, Address default `127.0.0.1`, Port default `9652`, Endpoint default `/`), and the PolyPop plugin connects to it as a client. Limited PolyPop support has existed since Streamer.bot **v0.1.8+**.

## Setup (prerequisites)

From the official docs and the streamerbot-wiki source file:

1. Install **PolyPop** and the **WebSocket plugin** (v1.1) from Plugins inside PolyPop
2. In Streamer.bot: Stream Apps > PolyPop — configure Address/Port/Endpoint and click **Start Server**
3. Configure the alert inside the PolyPop WebSocket plugin's properties (the alert name must match the **Alert Name** parameter used in the Trigger Alert sub-action)
4. Add the **Trigger Alert** sub-action to an action with the matching alert name

## Version differences (v1.0.4 app vs v1.0.5 docs)

**None.** Trigger Alert is present in both, no PolyPop triggers exist in either, and the config defaults are identical (Address `127.0.0.1`, Port `9652`, Endpoint `/`). The integration has been stable since v0.1.8.

## Sources

- [Official docs: PolyPop sub-actions](https://docs.streamer.bot/api/sub-actions/polypop)
- [Official docs: Trigger Alert](https://docs.streamer.bot/api/sub-actions/polypop/trigger-alert)
- [Guide: PolyPop setup](https://docs.streamer.bot/guide/stream-apps/polypop)
- [Wiki source: Sub-Actions/PolyPop/Trigger-Alert.md](https://raw.githubusercontent.com/Streamerbot/streamerbot-wiki/main/Sub-Actions/PolyPop/Trigger-Alert.md)
