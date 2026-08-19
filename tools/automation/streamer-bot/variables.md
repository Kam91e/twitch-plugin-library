---
title: "Streamer.bot — Variables"
category: "automation"
type: "Desktop application"
platforms:
  - Windows
price: "Free"
url: "https://streamer.bot"
repo: "https://github.com/Streamerbot/streamer.bot"
last-reviewed: 2026-07-31
---

# Variables

> How Streamer.bot passes data between triggers and sub-actions — the argument stack, global variables, user variables, formatting, and inline functions.

## Overview

When a trigger fires an action, Streamer.bot automatically generates a set of variables for that event and places them on the **argument stack**. Sub-actions can then read these variables, and each sub-action can add its own output variables to the stack as it executes. This is how data flows through an action — a chat message trigger supplies `%message%`, a sub-action processes it, and the next sub-action reads the result.

Arguments exist only within the scope of the currently executing action. To share data across actions, or persist it across restarts, use **global variables** (see below).

To use a variable in any sub-action text field, wrap its name with `%` symbols: `%userName%`, `%message%`, `%game%`.

## System Variables

The following variables are always available in every action, regardless of the trigger:

| Variable | Type | Description |
|----------|------|-------------|
| `%date%` | string | Current system date, formatted `yyyy/MM/dd`. Supports formatting, e.g. `%date:dddd, dd MMMM yyyy%` |
| `%time%` | string | Current system time, formatted `hh:mm`. Supports formatting, e.g. `%time:HH-mm%` |
| `%longtime%` | string | Current system time, formatted `hh:mm:ss` |
| `%unixtime%` | long | Current system time as unix timestamp in seconds (e.g. `1725936677`) |
| `%filedatetime%` | string | Current system time, formatted `yyyyMMdd.hhmmss` |
| `%lf%` | string | New line character sequence `\r\n` |
| `%actionId%` | string | Unique ID of the action being executed |
| `%actionName%` | string | Name of the action being executed |
| `%runningActionId%` | string | Running ID of the action instance within the queue |
| `%actionQueuedAt%` | DateTime | Time the action was queued |
| `%__source%` | EventType | Event type which triggered the action (C# access required) |
| `%eventSource%` | EventSource | Event source which triggered the action (C# access required) |

## Global Variables

Global variables share data between actions and can persist across restarts.

### Setting and Getting

- **Set Global Variable** (`Core > Globals > Set Global Variable`) creates or updates a global variable. It does **not** make the value available in the current action.
- **Get Global Variable** (`Core > Globals > Get Global Variable`) fetches the value and populates a local argument, making it usable in the rest of the action. This is required before you can read a global variable in an action.
- **Persisted** globals can be read directly by wrapping the name with `~` symbols: `~myPersistedGlobalVariable~` (no Get sub-action needed). This works **only** for persisted, non-user globals.

### User Global Variables

User global variables behave like global variables but store values **per user**. Use them for per-user counters, leaderboards, or any per-viewer state. Like other globals, a **Global (Get)** sub-action is required to read them inside an action — the `~variable~` shortcut does not work for user globals.

## User Variables

Platform-specific user variables store data **per user** for a given platform (Twitch, YouTube, Kick, Patreon). They are managed through C# methods rather than a dedicated sub-action:

- Twitch: `CPH.GetTwitchUserVar` / `CPH.SetTwitchUserVar` / `CPH.UnsetTwitchUserVar`
- YouTube: `CPH.GetYouTubeUserVar` / `CPH.SetYouTubeUserVar` / `CPH.UnsetYouTubeUserVar`
- Kick: `CPH.GetKickUserVar` / `CPH.SetKickUserVar` / `CPH.UnsetKickUserVar`

> I couldn't verify the full per-platform user variable field lists from the official docs at review time (the Twitch/YouTube/Kick/Patreon user-variable reference pages were empty). See the official docs for the current method signatures.

## Formatting

Variables support standard C# inline formatting:

- **Numbers**: `%tipAmount:c2%` renders a number as currency with 2 decimals. See [numeric format strings](https://learn.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings).
- **Date/time**: `%time:t%` renders short time with AM/PM. See [date/time format strings](https://learn.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings).

## Inline Functions

Anywhere a variable replacement works, inline functions also work:

| Function | Purpose |
|----------|---------|
| `$math(expression)$` | Evaluate a math expression, e.g. `$math(%x% * 1.25)$` or `$math(10+10)$` (uses the mXparser library) |
| `$length(text)$` | Length of text or a variable, e.g. `$length(%rawInput%)$` |
| `$parse(name)$` | Fetch the value of the argument named by the parameter — "double parses" a value. Useful with numbered arguments in a While loop, e.g. `$parse(line%i%)$` |

Note: `%arguments%` and `~persistedGlobals~` are resolved inside `$parse()`, but other inline functions are not nested inside it.

## Inspecting Variables After Run

To debug: open **Action Queues → Action History**, right-click an executed action, and select **Inspect Variables After Run** to see every variable that was populated for that execution.

## Related References

- [Sub-Actions reference](sub-actions/index.md) — each entry lists the variables it exposes (where documented in official docs)
- [Triggers reference](triggers/index.md) — triggers populate event variables; per-trigger variables are documented on each trigger's official docs page
