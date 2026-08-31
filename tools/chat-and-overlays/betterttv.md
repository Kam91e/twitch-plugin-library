---
title: "BetterTTV"
category: "chat-and-overlays"
type: "Browser Extension"
platforms:
  - Chrome
  - Firefox
  - Edge
  - Opera
price: "Freemium"
url: "https://betterttv.com/"
last-reviewed: 2026-08-31
---

# BetterTTV

> A browser extension and web platform for Twitch and YouTube that adds new features, emotes, and more — the most widely adopted third-party emote platform in Twitch chat.

## Overview

BetterTTV (BTTV) is a hybrid web platform and browser extension designed primarily for Twitch, and also works on YouTube. The homepage describes it as "a browser extension for Twitch and YouTube that adds new features, emotes, and more" (Source: https://betterttv.com). Viewers install the extension to see BTTV emotes inline in chat, while streamers use the dashboard at [betterttv.com](https://betterttv.com/) to browse the shared emote library or upload their own emotes. BetterTTV is historically the most-installed third-party emote platform, with a user base estimated in the millions — the platform claims broad adoption among Twitch viewers, though the exact count is not stated on the current homepage and could not be verified there.

## Key Features

- **Emote types** — BetterTTV categorises emotes into Global, Channel, Shared, and Personal emotes (Source: https://betterttv.com). Global emotes work everywhere for extension users, Channel emotes apply to a specific channel, Shared emotes are community-contributed and reusable across channels, and Personal emotes are usable in any chat.
- **Channel emotes** — emotes tied to your specific channel, visible to any viewer with the extension when they are in your chat.
- **Shared emotes** — a community library of ready-made emotes any streamer can add to their channel (Source: https://betterttv.com). Clicking **Add to Channel** places a shared emote into your channel's slots.
- **Personal emotes** — courtesy of BetterTTV Pro, personal emotes can be used in any chat regardless of the channel (Source: https://betterttv.com).
- **Animated GIF emotes** — channel emotes can be animated GIFs, giving chat more life than native Twitch emote images.
- **Emote menu / autocomplete** — the extension adds an emote menu and autocomplete so you and your viewers can browse and type emote codes easily.
- **Dashboard management** — manage channel and shared emote slots, submit emotes, and track approval status from the web dashboard at [betterttv.com](https://betterttv.com/) (Source: https://betterttv.com).

## Installation / Setup

### For Viewers

1. Visit [betterttv.com](https://betterttv.com/) and click the **Download** button (Source: https://betterttv.com)
2. Install the browser extension from the **Chrome Web Store**, **Firefox Add-ons**, **Edge Add-ons**, or **Opera add-ons** store for your browser (Source: https://betterttv.com — store listings)
3. Refresh any open Twitch tabs — BetterTTV emotes now appear automatically in chat
4. Without the extension, BetterTTV emote codes display as plain text (e.g., `NotLikeThis`) in chat, and emotes appear only as text codes rather than images

### For Streamers — Adding Ready Emotes

1. Visit [betterttv.com](https://betterttv.com/) and log in using your Twitch account
2. Browse or search the **Shared Emotes** library for emotes you want on your channel
3. Click **Add to Channel** on any shared emote you like
4. The emote now appears in your channel's shared emote slots and is usable by viewers with the extension

### For Streamers — Uploading Own Emotes

1. Go to the [BetterTTV Dashboard](https://betterttv.com/) and log in with Twitch
2. Navigate to the Dashboard's emote management area
3. Click **Upload Emote** and select your image file
4. Ensure the file meets the upload constraints: **112x112 px** (or up to **128x128 px** per some guides), **PNG or GIF only**, and a **maximum file size of 1 MB** (Source: community-documented — based on emoteresizer.app and tacticalliondesigns guides; could not be verified directly on betterttv.com)
5. Enter an **emote code** — the text viewers type to use the emote
6. Submit the upload — custom emotes may enter an **approval queue** before going live; shared emote submissions require approval, and Pro gets **priority approval** (Source: https://betterttv.com)

## Twitch Integration

BetterTTV works by injecting emote rendering and chat enhancements directly into the Twitch web interface. The extension modifies the chat DOM so it can replace emote codes with rendered images and adds its own emote menu and autocomplete. BetterTTV emotes are only visible to viewers who have the extension installed — without it, emote codes appear as plain text. BetterTTV coexists with native Twitch emotes (which always render) and, when installed alongside FrankerFaceZ (FFZ) and 7TV, all three platforms' emotes can display simultaneously. BetterTTV also runs as a **beta** on YouTube, extending its emote platform beyond Twitch (Source: https://betterttv.com).

## Configuration

### Dashboard (Web Platform)

The BetterTTV dashboard, reached after logging in with Twitch, is the primary configuration surface for streamers (Source: https://betterttv.com):

| Setting | Description |
|---------|-------------|
| Channel Emote Slots | Upload and manage your channel's custom emotes |
| Shared Emote Slots | Add and remove shared library emotes on your channel |
| Personal Emotes | Manage Personal emotes usable in any chat (Pro feature) |
| Approval Status | Track whether submitted global/shared emotes have been approved |
| Emote Code | The text code assigned to each emote viewers type to use it |

### Slot Limits

Free plan limits have changed over time and should be verified in your Dashboard for current values. Historically, non-Pro users received around **15 channel + 15 shared emotes (30 total)**, with Pro raising channel emotes to 100 and adding monthly increments (+2 channel, +2 shared, +1 personal per month), per community posts: https://community.nightdev.com/t/how-can-i-get-more-than-15-emotes/25809 and https://community.nightdev.com/t/emote-limit-and-how-to-unlock-it/1534592560848228209. The homepage states Pro unlocks "up to 500 channel emotes" (Source: https://betterttv.com). **Note:** these numbers have varied across time — always check your Dashboard.

### Browser Extension Settings

| Setting | Type | Description |
|---------|------|-------------|
| Emote Scale | slider | Adjust the size of emotes displayed in chat |
| Emote Menu | toggle | Enable or disable the built-in emote menu/autocomplete |
| BTTV Emote Rendering | toggle | Enable or disable BetterTTV emote rendering |
| 7TV Integration | toggle | Enable rendering of 7TV emotes when the 7TV extension is also installed |

*Specific field names in the extension options panel could not be fully verified; options include emote sizing and rendering toggles.*

### Paid Subscription (brief)

BetterTTV Pro unlocks additional emote capacity and exclusive features:

- **Up to 500 channel emotes** (Source: https://betterttv.com)
- **Personal emotes** — usable in any chat (Source: https://betterttv.com)
- **Evolving badge, animated username effects, priority approval, cloud backups, theme, and chatbot autocomplete** (Source: https://betterttv.com)

For pricing, see the "Pricing" page linked from the homepage (Source: https://betterttv.com) — historical community figures referenced ~$4.99/month but should not be relied on; current pricing was not verified.

## Tips & Tricks

- **Rotate slots without Pro** — use your 15 shared slots as a rotating "emote of the week" library; swap shared emotes in and out as trends come and go to get more mileage from free slots.
- **Name emotes with short, memorable codes** — an easy-to-type code (e.g., `LULW`, `Pog`) gets used far more often than a long or cryptic one.
- **Use a transparent background** — upload emotes with a PNG or GIF that has a transparent or matching background so they sit cleanly in chat and match your channel branding.
- **Combine with 7TV and FFZ** — install BetterTTV, 7TV *and* FrankerFaceZ together; with each platform's integration toggles enabled you can see emotes from all three, dramatically expanding the visible library (Source: https://betterttv.com, https://7tv.app, https://frankerfacez.com).
- **Sync channel emotes to Discord** — BetterTTV can sync your channel emotes to your Discord server so your community can use them in Discord too (Source: community-documented; verify current feature availability in the dashboard).

## Alternatives

- **[7TV](7tv.md)** — offers 1,000 free channel emote slots per channel, far more than BetterTTV's free 30. Choose 7TV if slot quantity and real-time set management matter most (see also the [7TV Emotes plugin doc](../../plugins/loyalty-and-recognition/emotes-and-badges/7tv-emotes.md)).
- **[FrankerFaceZ (FFZ)](https://frankerfacez.com)** — the original third-party emote platform with deep chat customisation. Choose FFZ for well-established emotes and custom chat styling.
- **Ghost Chat** — a desktop chat overlay that itself renders both BetterTTV and 7TV emotes. Different use case: it *displays* emotes in an OBS overlay rather than injecting into Twitch chat.
- **Twitch Native Sub Emotes** — built into Twitch with no installation needed, but with limited slots and no animation support. Choose BetterTTV when you want broader adoption and animated/community emotes.

When choosing adoption vs. slots: pick **BetterTTV** if you want the highest chance that viewers already have it installed (it is the most widely adopted platform), and pair it with **7TV** when you need many more free slots.
