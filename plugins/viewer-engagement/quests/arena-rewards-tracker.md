---
title: "Arena Rewards Tracker"
category: "viewer-engagement"
subcategory: "quests"
tags:
  - rewards
  - arp
  - alienware-arena
  - watch-time
  - loyalty-points
  - dell
audience:
  - variety
  - gamers
  - beginners
  - just-chatting
price: "Free"
url: "https://dashboard.twitch.tv/extensions/ehc5ey5g9hoehi8ys54lr6eknomqgr"
screenshots: []
last-reviewed: 2026-07-28
---

# Arena Rewards Tracker

> Earn Alienware Reward Points (ARP) by watching participating Twitch streamers — a free loyalty program from Alienware Arena that rewards viewers for their watch time.

## Quick Start

Follow these steps to start earning ARP as a viewer:

1. **Create or log in** to your [Alienware Arena account](https://eu.alienwarearena.com/account)
2. **Connect your Twitch account** in the Account settings page — link the two accounts
3. **Find a participating streamer** — look for Alienware Hive members, Nexus members, or Alienware Partners on Twitch
4. **Scroll down** on the streamer's page to the **About** section to find the ARP widget panel
5. **Grant permissions** and log in to Alienware Arena if prompted by the extension
6. **Keep the stream open** — the extension tracks your watch time and awards ARP automatically (up to 15 ARP per day)

> **For streamers:** This extension is not available to all streamers by default. You must be accepted into the Alienware Hive or Nexus program to install it on your channel.

## Features

- **ARP rewards for watching** — Earn Alienware Reward Points (ARP) by watching live streams from participating creators, with a daily cap of 15 ARP
- **Dual earning rates** — Hive partner streams earn ARP at 2× speed (~0.4 ARP/min, max in ~37.5 min); non-Hive streams earn at 0.2 ARP/min (~75 min to max)
- **Real-time overlay** — A widget overlay (added October 2024) shows your earned ARP during the stream so you can track your progress live
- **Panel + Component support** — Available as a panel in the About section and as a clickable component overlay icon
- **Mobile compatible** — Works on both web and mobile Twitch
- **Background tracking** — The extension pings Alienware Arena servers every 60 seconds to report watch time; stream can be paused or in a background tab
- **Alienware Artifacts integration** — Certain Artifacts can increase your daily ARP cap beyond the standard 15 ARP

## Configuration

The Arena Rewards Tracker has minimal configuration options — most of the experience is viewer-facing. Below are the key behaviours and settings that affect how it works.

| Setting / Behaviour | Type | Default | Description |
|---------|------|---------|-------------|
| Daily ARP cap | fixed | 15 ARP | Maximum ARP earnable per day (may be increased by Alienware Artifacts) |
| Hive partner rate | fixed | ~0.4 ARP/min | Double earning rate on Hive partner streams |
| Standard rate | fixed | ~0.2 ARP/min | Standard earning rate on non-Hive participating streams |
| Server ping interval | fixed | 60 seconds | How often the extension reports watch time to Alienware Arena servers |
| Stream status check | automatic | — | Extension detects if the streamer is live; shows "streamer is offline" when not |

### Earning Rates

- **Hive partner streams:** ~0.4 ARP per minute — reach the daily cap of 15 ARP in approximately 37.5 minutes of watch time
- **Non-Hive streams:** ~0.2 ARP per minute — takes approximately 75 minutes to reach the daily cap
- The extension tracks cumulative watch time across all participating streams in a single day

### Alienware Artifacts

Alienware Artifacts are digital collectibles that can provide bonus perks, including increasing your daily ARP cap. Check your Alienware Arena inventory to see if you have any applicable Artifacts equipped.

## Tips & Tricks

- **Prioritise Hive partners:** Hive member streams earn ARP at double the rate — you can max out your daily 15 ARP in roughly 37.5 minutes instead of 75 minutes
- **Paused streams still count:** The extension continues pinging servers every 60 seconds even when the stream is paused — you don't need to actively watch
- **Force refresh if stuck:** If the widget shows "streamer is offline" while you know they're live, press CTRL+F5 to force a hard refresh of the page
- **Fix login loops:** If the extension asks you to log in repeatedly, try syncing your system clock — time drift can cause authentication issues
- **Browser tab suspension:** Disable "suspend inactive tabs" in your browser settings to ensure reliable ARP earnings, especially if you keep the stream in a background tab
- **Scroll down to load:** The extension panel lives in the About section below the stream player — you must scroll down for it to load and start tracking
- **Daily reset:** The 15 ARP cap resets daily (likely on a UTC or your local midnight), so you can earn again each day

## Alternatives

- **Automatic Twitch: Drops, Moments and Points** — A browser extension (not a Twitch Extension) that automatically claims Twitch Drops and channel reward points. Choose this if you want a general-purpose auto-claimer for all Twitch drops rather than a specific loyalty program.
- **Streamlabs Loyalty System** — Lets streamers create their own channel currency with custom rewards. Choose this if you're a streamer who wants to run your own loyalty program rather than participating in the Alienware Arena system.
