---
title: "Streamer.bot — Commands and Timers"
category: "automation"
type: "Desktop application"
platforms:
  - Windows
price: "Free"
url: "https://streamer.bot"
repo: "https://github.com/Streamerbot/streamer.bot"
last-reviewed: 2026-07-30
---

# Commands and Timers

> Streamer.bot's chat command system and timer-based automation — the tools for direct viewer interaction and scheduled chat activity.

## Overview

Streamer.bot provides three ways to trigger actions from chat: **commands** (triggered by specific message prefixes), **timers** (triggered on a schedule), and **event-based triggers** (triggered by Twitch events like follows or subs). Commands and timers are the foundation for viewer-facing interactivity — they handle everything from simple moderation commands to complex multi-step interactions.

## Configuration

### Chat Commands

Commands are the most common way viewers interact with Streamer.bot. A command is triggered when a chat message starts with a configured prefix (e.g., `!so @user`).

**Creating a command:**
1. Go to the **Commands** tab
2. Click **+** to add a new command
3. Set the command name (e.g., `discord` — viewers will type `!discord`)
4. Choose which action the command triggers
5. Set permission level and cooldowns
6. Save

**Command options:**

| Setting | Description |
|---------|-------------|
| **Command name** | The text after `!` that triggers the command (e.g., `so` for `!so`) |
| **Aliases** | Alternative names that also trigger the command |
| **Permission** | Who can use the command: Everyone, Regular, Subscriber, VIP, Moderator, Broadcaster, or custom groups |
| **Global cooldown** | How long before the command can be used again by anyone |
| **User cooldown** | How long a specific user must wait before using the command again |
| **Enabled** | Turn the command on or off without deleting it |
| **Show in !commands** | Whether the command appears in the auto-generated help list |

### Permissions

Streamer.bot has a tiered permission system:

- **Everyone** — any viewer can use the command
- **Regular** — users added to a regular list (configured in the Users tab)
- **Subscriber** — active Twitch subscribers
- **VIP** — Twitch VIPs on the channel
- **Moderator** — Twitch moderators
- **Broadcaster** — the channel owner only
- **Custom Groups** — create named groups with specific user lists

Permission levels are hierarchical — a Moderator can use any command accessible to Subscriber or Everyone.

### Timers

Timers send messages or trigger actions on a recurring schedule. They keep chat active during quiet periods and provide regular reminders of stream features.

**Creating a timer:**
1. Go to the **Timers** tab
2. Click **+** to add a new timer
3. Set the interval (how often the timer fires)
4. Choose the action to trigger
5. Optionally set conditions (only fire when streaming, only when viewer count > N, etc.)

**Timer types:**

| Type | Description |
|------|-------------|
| **Chat timer** | Sends a message to chat at regular intervals |
| **Action timer** | Triggers any Streamer.bot action on a schedule |
| **Random timer** | Fires at random intervals within a configured range |

### Variables in Commands

Variables make commands dynamic by inserting information at runtime:

| Variable | Expands To |
|----------|-----------|
| `%user%` | The user who triggered the command |
| `%userName%` | Display name of the user |
| `%targetUser%` | User mentioned as an argument |
| `%message%` | The full message text |
| `%args%` | Arguments after the command |
| `%arg1%`, `%arg2%` | Individual arguments |
| `%viewerCount%` | Current viewer count |
| `%game%` | Current stream game |
| `%title%` | Current stream title |
| `%uptime%` | Stream uptime |
| `%followers%` | Follower count |
| `%subsCount%` | Subscriber count |
| `%bitsCheered%` | Total bits cheered by a user |

## Tips

- Use the **!commands** command (built into Streamer.bot) to let viewers see all available commands
- Set user cooldowns on giveaway or game commands to prevent spam — a 30-second user cooldown stops rapid re-entry
- Timers are excellent for reminding viewers about channel points, social links, or upcoming schedule
- Group related commands into categories in the Commands tab for easier management
- Use the **Enabled** toggle rather than deleting commands you want to temporarily disable
- Test commands in your own chat before going live to verify they work as expected
- The built-in reporting in the Commands tab shows usage statistics for each command
