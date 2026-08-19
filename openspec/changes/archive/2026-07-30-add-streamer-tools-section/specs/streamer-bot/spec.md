## ADDED Requirements

### Requirement: Document Streamer.bot overview (overview.md)
The `overview.md` SHALL explain that Streamer.bot is a free, open-source desktop application for stream automation that connects Twitch chat, OBS, Discord, and third-party APIs.

#### Scenario: Reader understands what Streamer.bot is
- **WHEN** a reader opens `overview.md`
- **THEN** they SHALL understand it is a desktop automation platform and see its main capabilities

### Requirement: Document installation and first-time setup (overview.md)
The `overview.md` SHALL provide step-by-step setup instructions: downloading from GitHub/streamer.bot, first-time configuration, connecting a Twitch account, and connecting OBS.

#### Scenario: Beginner can set up
- **WHEN** a new streamer follows the setup steps in overview.md
- **THEN** they SHALL be able to connect Streamer.bot to their Twitch channel and OBS

### Requirement: Document the actions system (actions-system.md)
The `actions-system.md` SHALL document the core programming model: actions, sub-actions, the action queue, C# code execution, event triggers (Twitch events, hotkeys, timers), and conditions/branches.

#### Scenario: Reader understands the automation model
- **WHEN** a reader opens the actions system guide
- **THEN** they SHALL understand what actions and sub-actions are, how to chain them, and how C# code execution works

### Requirement: Document integrations (integrations.md)
The `integrations.md` SHALL document all platforms Streamer.bot connects to: OBS WebSocket (scene switching, source control), Twitch (IRC chat, PubSub, EventSub), Discord webhooks, Stream Deck, Challonge API, Google Sheets, and others.

#### Scenario: Reader knows what can be integrated
- **WHEN** a reader opens the integrations guide
- **THEN** they SHALL see a complete list of supported integrations and how to configure each

### Requirement: Document commands and timers (commands-and-timers.md)
The `commands-and-timers.md` SHALL document the chat command system, permission levels, cooldowns, timers, variables, and how to create custom commands.

#### Scenario: Reader can create commands
- **WHEN** a reader opens the commands guide
- **THEN** they SHALL know how to create chat commands, set permissions, and use variables

### Requirement: Include alternatives (overview.md)
The `overview.md` SHALL list comparable tools: Streamlabs chatbot, Nightbot, Mix It Up, and explain when the reader might choose those instead.

#### Scenario: Reader can compare options
- **WHEN** a reader finishes the overview
- **THEN** they SHALL know what alternatives exist
