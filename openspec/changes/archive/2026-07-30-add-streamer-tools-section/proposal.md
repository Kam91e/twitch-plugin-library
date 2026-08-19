## Why

The Twitch Plugin Knowledge Library currently only documents **Twitch Extensions** (plugins installed from the Twitch Extension dashboard). However, streamers rely heavily on **non-extension streaming tools** (desktop applications, web services, automation platforms) that are equally critical to document but don't fit the Twitch Extension taxonomy.

This change introduces a dedicated `tools/` section to cover these essential streaming tools, starting with five high-impact applications identified during research into streaming production workflows.

## What Changes

- New top-level `tools/` directory with four subcategories
- Five new documentation files for non-extension streaming tools
- Each tool document follows a purpose-built template (not the plugin template)
- Update `INDEX.md` to include tools section alongside plugins
- No changes to existing `plugins/` structure or documentation

## Capabilities

### New Capabilities

- `streamer-bot`: Desktop automation bot that integrates Twitch chat, OBS, Discord, and third-party APIs — a powerful platform for automating stream interactions
- `stream-elements`: All-in-one streaming platform with overlays, alerts, chatbot, loyalty system, and sponsorship marketplace
- `obs-studio`: Free and open-source streaming/recording software — the foundation of all stream production
- `poll-ma-pe`: Web-based polling tool with Twitch chat integration and themed OBS Browser Source overlays
- `ghost-chat`: Lightweight desktop chat overlay supporting Twitch, YouTube, and Kick with transparent rendering and custom themes

### Modified Capabilities

- *(none — this is a new section, not a modification of existing specs)*

## Impact

- **Repository structure**: New `tools/` directory with four subcategory folders
- **INDEX.md**: Tools section added alongside existing plugin index
- **Categories**: No changes to `categories.md` (tools use their own taxonomy)
- **AGENTS.md**: May need updates for agent workflows involving tools
- **Build/validation scripts**: `rebuild-index.js` and `validate-links.js` may need updates to handle tools section
