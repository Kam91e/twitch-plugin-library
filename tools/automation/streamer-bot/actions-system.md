---
title: "Streamer.bot — Actions System"
category: "automation"
type: "Desktop application"
platforms:
  - Windows
price: "Free"
url: "https://streamer.bot"
repo: "https://github.com/Streamerbot/streamer.bot"
last-reviewed: 2026-07-31
---

# Actions System

> The core programming model of Streamer.bot — actions, sub-actions, and how they chain together to create powerful automations.

## Overview

Everything in Streamer.bot revolves around **actions**. An action is a named sequence of **sub-actions** that executes when triggered by an event. This event-driven model is the equivalent of a programming language where events are function calls and sub-actions are the lines of code. Actions can be triggered by Twitch events, chat commands, timers, hotkeys, OBS events, or HTTP requests.

## Configuration

### Creating an Action

1. In the **Actions** tab, click the **+** button or right-click → Add Action
2. Give the action a name (e.g., "Welcome New Follower")
3. Add sub-actions by right-clicking the action and selecting from the sub-action menu
4. Configure each sub-action's parameters in the panel that appears
5. Save — the action is now ready to be triggered

### Action Queue and Execution

Sub-actions within an action execute in order from top to bottom. Each sub-action completes before the next one starts, allowing predictable sequencing. However, actions can be configured to run immediately (ignoring the queue) or to queue behind previous executions of the same action — useful for preventing overlapping runs.

### Conditions and Branching

The **Condition** sub-action adds if/else logic to your actions. You can check:

- Variables (equality, comparison, contains, exists)
- User permissions (is the user a subscriber, VIP, moderator?)
- Source states (is a specific OBS source visible?)
- Random chance (execute based on percentage probability)
- Date/time (is it a specific day or time?)

## Browse the Reference

The full, structured catalog of every building block lives in the reference files, mirroring the [official Streamer.bot documentation](https://docs.streamer.bot/):

- [**Sub-Actions**](sub-actions/index.md) — every sub-action across Core, Twitch, YouTube, Kick, Elgato, OBS Studio, Streamlabs Desktop, Meld Studio, Streamfog, integrations, Speaker.bot, and settings, each with its menu location, parameters, and output variables.
- [**Triggers**](triggers/index.md) — every event that can fire an action, organised by platform and integration, with the variables each trigger populates.
- [**Variables**](variables.md) — system variables (`%var%` syntax), global variables, per-user variables, formatting, and inline functions.

For the step-by-step UI flows behind these — right-click → Add → picker flows for triggers, actions, and sub-actions — see [**Add Triggers, Actions & Sub-Actions**](add-flows.md). To add chat commands, see [**Adding Commands**](commands.md).

Actions can be triggered by chat commands, platform events (follows, subscriptions, bits, raids, channel points, hype trains, polls, predictions), timers, hotkeys, OBS events, other actions, HTTP requests, voice commands via Speaker.bot, and raw UDP messages — each trigger type is documented in the [Triggers reference](triggers/index.md).

## Tips

- Start with simple actions (e.g., a chat command that responds with text) and layer complexity gradually
- Use the **Test** button in the Actions tab to run actions without triggering the live event
- Export individual actions as JSON to share with others or back up your work
- For complex branching logic, combine Condition sub-actions with C# sub-actions
- Name actions descriptively — you will have many of them and clear naming saves time
- Use the **Cooldown** tab to prevent actions from being triggered too frequently
