---
title: "Alveus Ambassadors"
category: "viewer-engagement"
subcategory: "interactive-overlays"
tags:
  - alveus
  - sanctuary
  - wildlife
  - education
  - ambassador
  - open-source
  - overlay
audience:
  - variety
  - just-chatting
  - beginners
  - creative
price: "Free"
url: "https://dashboard.twitch.tv/extensions/m4ekmqj4n0nw5huja87u2zhhd5xvc4"
screenshots:
  - "https://extensions-discovery-images.twitch.tv/m4ekmqj4n0nw5huja87u2zhhd5xvc4/1.8.1/screenshot74eb87b5-cf54-434c-a05c-1f4ceb14f1b1"
last-reviewed: 2026-07-28
---

# Alveus Ambassadors

> An interactive extension from Alveus Sanctuary that displays educational information cards about animal ambassadors — triggered via chat commands as a panel or fullscreen overlay.

![Alveus Ambassadors extension screenshot](https://extensions-discovery-images.twitch.tv/m4ekmqj4n0nw5huja87u2zhhd5xvc4/1.8.1/screenshot74eb87b5-cf54-434c-a05c-1f4ceb14f1b1)

## Quick Start

1. Go to your Twitch **Creator Dashboard** → **Extensions** and search for "Alveus Ambassadors".
2. Click **Install**, then go to **My Extensions**.
3. Click **Activate** and choose your slot:
   - **Panel** — visible on your channel page (works offline)
   - **Video - Fullscreen** — appears as an overlay during live streams
   - **Mobile** — works on Twitch mobile app
4. You can activate all three types simultaneously.
5. Moderators can type `!ambassador-name` in chat to trigger ambassador cards (e.g., `!nilla` for Nilla Wafer, `!snork` for Snork).

## Features

- **Ambassador information cards:** Display detailed info about Alveus Sanctuary's animal ambassadors — name, species, photos, and educational facts — as panel cards or fullscreen overlays.
- **Chat command integration:** Type `![ambassador-name]` to trigger a specific card (e.g., `!nilla`). Type `!welcome` for the Alveus introduction section.
- **Moderator-triggered popups:** Moderators can trigger ambassador card overlays from chat during live streams.
- **Cross-channel listening:** The extension listens on multiple Alveus-related channels simultaneously for moderation commands.
- **Viewer preferences:** Viewers can disable mod-triggered popups in local storage.
- **Mod identity grant:** Moderators can grant identity access to see available chat commands within the extension UI.
- **Open source:** Built with TypeScript and React — contributions welcome on [GitHub](https://github.com/alveusgg/extension).

## Configuration

| Setting | Description |
|---|---|
| Extension type | Activate as Panel, Video - Fullscreen, and/or Mobile (all three can be active) |
| Viewers: disable popups | Viewers can disable moderator-triggered ambassador card popups in their browser preferences (stored locally) |
| Moderators: grant identity | Moderators can grant identity access to see available chat commands within the extension |

For developers self-hosting: environment variables control privileged users, channel names, API base URL, and timezone.

## Tips & Tricks

- **Use first names only for chat commands:** Ambassador commands use just the first name — `!nilla` for "Nilla Wafer", `!snork` for "Snork".
- **Test panel while offline:** Unlike the overlay (which requires being live), the panel can be tested and viewed on your channel About page while offline.
- **Moderators should grant identity:** Granting identity shows available chat commands directly in the extension UI — very helpful for new mods.
- **Extension remembers preferences:** The extension stores each viewer's last-accessed section and popup preferences locally. Clearing browser data resets these.
- **No data storage concern:** The extension never stores chat messages or personal info — only local preferences.

## Alternatives

This extension is purpose-built for Alveus Sanctuary. No direct alternatives exist on Twitch. The closest general-purpose tools are:

- **[Streamlabs](../all-in-one-interactions/streamlabs.md)** — General overlay and engagement tools, but without animal ambassador content.
- **StreamElements** — Overlay widgets and alerts, customisable to display educational content via browser sources.
