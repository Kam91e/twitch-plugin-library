---
title: "WizeBot - LeaderBoard"
category: "loyalty-and-recognition"
subcategory: "leaderboards"
tags:
  - leaderboard
  - loyalty
  - rank-system
  - level-system
  - chat-activity
  - watch-time
  - wizebot
audience:
  - variety
  - gamers
  - beginners
  - just-chatting
price: "Free"
url: "https://dashboard.twitch.tv/extensions/uvx2i1ncy5zr3f5jkyd561s4lur2tx"
screenshots: []
last-reviewed: 2026-07-28
---

# WizeBot - LeaderBoard

> Display a dynamic viewer leaderboard powered by WizeBot's rank and level system, with tabs for activity time, messages sent, and global stats.

## Quick Start

1. **Create a WizeBot account** at [wizebot.tv](https://www.wizebot.tv/) and add the bot to your Twitch channel
2. **Enable the Rank or Level system** — go to the [WizeBot panel](https://panel.wizebot.tv/) and turn on the Rank or Level system under interaction settings
3. **Install the extension** — go to the [WizeBot - LeaderBoard extension page](https://dashboard.twitch.tv/extensions/uvx2i1ncy5zr3f5jkyd561s4lur2tx) on Twitch and click **Install**
4. **Activate the extension** — in Creator Dashboard → **Extensions** → **My Extensions**, find WizeBot - LeaderBoard and click **Activate**, assigning it to a panel slot
5. **Position the panel** — drag it to your desired location in the About/Panels section of your channel page
6. **Configure rank settings** (optional) — visit [WizeBot rank system extension config](https://panel.wizebot.tv/interaction_rank_system_extension) to customise colours, thresholds, and exclusion lists
7. **Go live** — the leaderboard populates with data during your live streams

> **Note:** Leaderboard data can take several hours to appear. Allow at least one full live stream for rankings to populate.

## Features

- **Viewer ranking display** — shows a ranked list of your most active viewers in the Twitch About/Panels section
- **Multiple ranking tabs** — switch between Level, Rank, Uptime (watch time), and Global tabs
- **Individual viewer progress** — authenticated viewers can see their own rank, level, and XP progress
- **WizeBot Rank & Level XP integration** — ties directly into WizeBot's existing rank and experience point system
- **Bot/user exclusion** — assign the "Bot" role in WizeBot to prevent bots from appearing on the leaderboard
- **Background colour customisation** — adjust the panel's background colour to match your channel branding
- **Anti-bot protection** — viewers must speak at least once in chat for their watch time to be tracked
- **Dynamic updates** — rankings update throughout your stream as viewer activity changes

## Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Rank System | toggle (in WizeBot panel) | Off | Enable either Level or Rank system for the leaderboard |
| Background Color | colour picker | Default theme | Background colour of the leaderboard panel |
| Level Thresholds | custom levels (in WizeBot panel) | Default WizeBot levels | Define custom XP thresholds for each level |
| Bot Exclusion List | role assignment | None | Assign "Bot" role to exclude specific users from rankings |
| Global Stats | toggle | Off | Include all-time stats alongside session data |

### Rank System Activation

The leaderboard requires either the **Rank** or **Level** system to be enabled in WizeBot before it will display data. Without one of these systems turned on, the panel will appear empty.

- **Level system** — viewers earn XP and level up based on chat activity and watch time
- **Rank system** — viewers earn ranks based on accumulated activity metrics

Enable either (or both) at [panel.wizebot.tv](https://panel.wizebot.tv/) under the interaction/rank settings section.

### Bot Exclusion

To keep the leaderboard fair, assign the "Bot" role to any accounts that are not real viewers:

1. Go to the WizeBot panel
2. Navigate to your user/role management
3. Assign the "Bot" role to translation bots, moderation bots, or any automated accounts
4. These users will be automatically filtered from the leaderboard

### Global Stats Toggle

When enabled, the leaderboard will show all-time accumulated stats rather than just the current session. This is useful for recognising long-term loyal viewers.

## Tips & Tricks

- **Enable the rank system first** — the leaderboard will not display any data unless the Level or Rank system is activated in WizeBot before going live
- **Be patient with data** — leaderboard information can take several hours to populate. Do not expect instant results; allow at least one full stream session for rankings to build up
- **Data only updates live** — the leaderboard refreshes during live streams only. Rankings will not change when you are offline
- **Block all bots** — add translation bots, moderation bots, and any automated accounts to the bot exclusion list. Bots accumulate watch time 24/7 and will dominate rankings if not excluded
- **Viewers must speak** — WizeBot only tracks watch time for viewers who have sent at least one message in chat. Lurking alone will not count toward leaderboard rankings
- **Streamer is excluded** — the channel owner does not appear in leaderboard rankings, keeping the focus on your community
- **Colour match your brand** — use the background colour setting to make the leaderboard panel blend seamlessly with your channel's About section aesthetic

## Alternatives

- [Streamlabs Leaderboard](./streamlabs-leaderboard.md) — supports additional data categories including bits, subscribers, and emote usage; better suited for streamers already in the Streamlabs ecosystem
- [StreamElements Leaderboards](./streamelements-leaderboards.md) — most feature-rich alternative with loyalty store integration, stream scheduler, countdown, and viewer location maps; ideal for streamers using StreamElements
- [Latest Followers](./latest-followers.md) — a simpler, lightweight panel focused on your newest supporters by OWN3D Pro
- **Twitch Built-in Leaderboards** — Twitch's native leaderboard feature (available in the channel points section) requires no third-party setup but offers fewer customisation options
