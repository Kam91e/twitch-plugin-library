---
title: "Streamer.bot — Platforms (Twitch)"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - platforms
  - twitch
source: "https://docs.streamer.bot/"
app-evidence: "/mnt/d/Twitch/shots/twitch-platform-uia.txt"
last-reviewed: 2026-08-03
---

# Platforms

> Reference for the Streamer.bot **Platforms** section (v1.0.4, Windows 10): the platform landing page and the full Twitch section — feature cards, accounts, settings, panels, and dialogs.

## Platforms Overview

Open **Platforms** from the left navigation. The landing page shows four platform cards, each with a one-line description and a connect button (the `>` chevron):

| Platform | Description (as shown in-app) |
|---|---|
| **Twitch** | "Login to your Twitch account, manage Chanel Rewards [sic], Poll and Predictions, and settings." |
| **YouTube** | "Login to your YouTube account, see your broadcasts, and alter settings." |
| **Trovo** | "Login to your Trovo account, and adjust settings." |
| **Kick** | "Login to your Kick account, and adjust settings." |

Note: **Trovo** appears here (consistent with the 11 trigger sources) even though the official docs index omits Trovo.

## Twitch Section

Clicking the Twitch card opens the Twitch section. In page order, top to bottom (the page must be scrolled to reach Settings and Related Support):

1. Five feature cards (each with a `>` chevron that opens a panel on click)
2. **Accounts** — Broadcaster Account and Bot Account
3. **Settings** — six setting cards
4. **Related Support** — two external documentation links

### Feature Cards

Each card shows an icon, title, one-line description, and a `>` chevron on the right that opens the corresponding panel (see Panels below):

1. **Channel Point Rewards** — "Manage your Twitch channel point rewards"
2. **Polls** — "Manage Polls on your Twitch broadcaster account"
3. **Predictions** — "Manage Predictions on your Twitch broadcaster account"
4. **Sub Counter** — "Configure Twitch Sub Counter integration settings"
5. **Videos** — "Browse your past videos"

### Accounts

Both account cards show a down arrow (``) on the right that **expands** the card.

**Broadcaster Account**

- Shows the logged-in broadcaster username (e.g. `Kameo_S`) above the "Broadcaster Account" label, with a **Logout** button.
- Clicking the down arrow expands the card and reveals:
  - **"Forget this account?"** row with a **Forget** button.
  - **Services** group:
    - **Chat Client** — action button; at capture time it read "Connecting..." (connection in progress)
    - **EventSub** — action button reads **Disconnect**

**Bot Account**

- "Connect a bot account to send messages with a different user" with a **Login** button.
- Clicking the down arrow expands the card and reveals:
  - **"Forget this account?"** row with a **Forget** button.
  - **Services** group:
    - **EventSub Client** — action button reads **Connect** (shown because no bot account is logged in; a bot has no Chat Client service)

### Settings

The Settings cards show their descriptions and toggles already in the collapsed state. Most cards display a down arrow (``), but clicking it does **not** expand them (verified by probes on Emote Handlers and First Words — the layout is unchanged after clicking). The arrows are decorative; the toggles are the working controls.

| Card | Description (as shown in-app) | Toggle state shown | Down arrow |
|---|---|---|---|
| **Emote Handlers** | "Configure third party emote handling, changing these requires a restart" | — | Yes (does not expand) |
| **First Words** | "Configure the first words cache" | — | Yes (does not expand) |
| **Present Viewers** | "Keep track of active viewers in chat" | Enabled | Yes |
| **Gift Bombs** | "Whether or not to ignore Gift Subs from Gift Bombs" | Ignored | No |
| **Pyramids** | "Keep track of users that create pyramids in your chat" | Disabled | Yes |
| **Stream Update on Connect** | "Automatically run the Stream Update trigger when connecting to Twitch" | Disabled | No |

### Related Support

- **Help with Twitch** — external documentation link (icon + down arrow present; clicking it does not expand the row or open a dialog in-app — the main window stays focused, so it opens docs externally).
- **Configuring Twitch** — external documentation link (no down arrow).

The following panels open when you click the corresponding feature card:

### Channel Point Rewards Panel

- Grid columns: **Reward Name, Cost, Enabled, Paused, Options, Owned**
- Right-click context menu: **Create Reward**, **Collapse All**, **Expand All**

### Polls Panel

- **"Selected Poll"** selector (combo) above the grid
- Grid columns: **Title, Choices, Votes, Duration, Winner, State**
- Right-click context menu: **New Poll**, **Refresh Polls from Twitch**

### Predictions Panel

- **"Selected Prediction"** selector (combo) above the grid
- Grid columns: **Title, Users, Outcomes, Points, Duration, Winner, State**
- Right-click context menu: **New Prediction**, **Refresh Predictions from Twitch**

### Sub Counter Panel

- **Enabled** — toggle ("Enable the Sub Counter for tracking of subscriptions and rollovers"); shown **Disabled**
- **Sub Counter** — current counter value with a refresh button ("The current value of the sub counter")
- **Rollover** — toggle ("Enable automatic roll over once the subsction count [sic] reaches a set number"); shown **Disabled**
- **Output File** — file path input with a browse button ("The file to write the sub-counter data to")
- **Output Text** — multi-line template input ("The output template to use when writing to the file specified above")
- **Reset** — **Reset Sub Counter** button ("Reset sub-counter and rollover counters, this can not be undone")

### Videos Panel

- **User** filter — selector showing `<None>` (no user selected)
- **Type** combo — options: **All / Archive / Highlight / Upload**
- **Search** — search box (with search icon) + Search button
- Status line: **"Found 0 videos"**
- Grid columns: **Title, Created At, View Count, Type, Duration**

The dialogs below open from the panels (New Poll / New Prediction / Create Reward). All three are modal — they block the main UI until closed.

### Create Twitch Poll

Dialog 600×590, titled "Create a New Poll":

1. **Question** — text input
2. **Response** (Minimum of 2, maximum of 5) — list with an input line and **Add** / **Del** buttons
3. **Channel Points Per Vote** — numeric spinner (up/down); helper text "set to 0 to disable"
4. **Duration** — numeric spinner in seconds; helper "How long viewers have to vote in the poll"
5. **Create** / **Cancel** buttons

### Create Twitch Prediction

Dialog 600×578, titled "Start a Prediction":

1. Info box — "Creators and mods can create predictions. Viewers who guess the outcome correctly can win Channel Points. All predictions must follow Twitch's Terms of Service." (with a **Terms of Service** hyperlink)
2. **Name the prediction** — text input
3. **Outcomes** (Minimum of 2, maximum of 10) — list with an input line and **Add** / **Del** buttons; helper "Chatters will receive a temporary chat badge indicating the option they voted for until the prediction ends."
4. **Submission Preiod** [sic] — numeric spinner in seconds; helper "How long viewers have to guess the outcome"
5. **Create** / **Cancel** buttons

### Add Twitch Channel Reward

Dialog 600×679:

1. **Reward Name** — text input, with **Enabled** and **Paused** toggle buttons
2. **Description** — multi-line input, labeled "(Optional)"
3. **Background Color** — color value input with two color-picker buttons
4. **User Input Required** — toggle
5. **Redemption Skips Queue** — toggle
6. **Cost** — numeric spinner in channel points
7. **Max** — numeric spinner ("per Stream")
8. **Max** — numeric spinner ("per User per Stream")
9. **Global Cooldown** — numeric spinner in seconds
10. **Streamer.bot Settings** — **Persist Counter** and **Persist User Counter** toggles
11. **Group** — editable combo box (free-text)
12. **Create** / **Cancel** buttons

## Evidence gaps

- **YouTube, Trovo, and Kick platform sections are not yet explored** — the Twitch section itself is fully covered.
- The **Chat Client** service button was captured mid-connection ("Connecting..."); a later capture may show "Disconnect" once connected.
- The down arrows on the **Present Viewers** and **Pyramids** settings cards were not individually click-probed (probes covered Emote Handlers, First Words, and Help with Twitch only).
- The **Videos** panel's Type combo default value was not captured as text (only its dropdown options: All / Archive / Highlight / Upload).
