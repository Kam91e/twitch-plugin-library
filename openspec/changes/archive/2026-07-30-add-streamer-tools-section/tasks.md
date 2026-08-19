## 1. Directory Structure and Template

- [x] 1.1 Create `tools/` directory with subdirectories: `streaming-software/`, `streaming-platforms/`, `automation/`, `chat-and-overlays/`
- [x] 1.2 Create `tools/_TEMPLATE.md` with tool documentation template (YAML frontmatter + section guide)

## 2. Tool — Streamer.bot (folder)

- [x] 2.1 Create `tools/automation/streamer-bot/` directory
- [x] 2.2 Research and write `tools/automation/streamer-bot/overview.md` — what it is, installation, first-time setup, connecting Twitch account, alternatives
- [x] 2.3 Write `tools/automation/streamer-bot/actions-system.md` — actions, sub-actions, C# code execution, event triggers, the core programming model
- [x] 2.4 Write `tools/automation/streamer-bot/integrations.md` — OBS WebSocket, Twitch (IRC, PubSub, EventSub), Discord, Stream Deck, Challonge API, Google Sheets
- [x] 2.5 Write `tools/automation/streamer-bot/commands-and-timers.md` — chat commands, permissions system, timers, cooldowns, variables
- [x] 2.6 Verify all facts against official Streamer.bot site, GitHub, and documentation

## 3. Tool — StreamElements (folder)

- [x] 3.1 Create `tools/streaming-platforms/stream-elements/` directory
- [x] 3.2 Research and write `tools/streaming-platforms/stream-elements/overview.md` — platform overview, account setup, Twitch connection, dashboard tour, alternatives
- [x] 3.3 Write `tools/streaming-platforms/stream-elements/overlays-and-alerts.md` — widget library, custom overlays, OBS Browser Source setup, alert system configuration
- [x] 3.4 Write `tools/streaming-platforms/stream-elements/chatbot-and-loyalty.md` — chatbot commands, loyalty points, channel points integration, mini-games, giveaways
- [x] 3.5 Write `tools/streaming-platforms/stream-elements/analytics-and-sponsorships.md` — stream statistics, viewer metrics, sponsorship marketplace, revenue tracking
- [x] 3.6 Add cross-reference from existing `plugins/loyalty-and-recognition/leaderboards/streamelements-leaderboards.md` to the StreamElements tool doc
- [x] 3.7 Verify all facts against streamelements.com and documentation

## 4. Tool — OBS Studio (folder)

- [x] 4.1 Create `tools/streaming-software/obs-studio/` directory
- [x] 4.2 Research and write `tools/streaming-software/obs-studio/overview.md` — what it is, installation, interface overview, basic workflow, alternatives
- [x] 4.3 Write `tools/streaming-software/obs-studio/sources.md` — all source types: game capture, window capture, Browser Source, NDI, media source, image, text, display capture
- [x] 4.4 Write `tools/streaming-software/obs-studio/scenes-and-transitions.md` — scenes, scene collections, Studio Mode, transition types, Multiview
- [x] 4.5 Write `tools/streaming-software/obs-studio/audio-and-hotkeys.md` — audio mixer, audio filters (noise gate, noise suppression, gain, VST), hotkey configuration
- [x] 4.6 Write `tools/streaming-software/obs-studio/plugins.md` — community plugins: NDI, Stream Deck, advanced scene switcher, source plugins, script plugins
- [x] 4.7 Verify all facts against obsproject.com and community resources

## 5. Tool — poll.ma.pe (single file)

- [x] 5.1 Research and write `tools/chat-and-overlays/poll-ma-pe.md` — poll creation, Twitch chat voting, themed OBS overlays, pollMapeBot, dashboard management, alternatives

## 6. Tool — Ghost Chat (single file)

- [x] 6.1 Research and write `tools/chat-and-overlays/ghost-chat.md` — multi-platform chat overlay (Twitch, YouTube, Kick), transparent OBS capture, custom themes, emote support, vanish mode, alternatives

## 7. Repository Integration

- [x] 7.1 Add "Tools" section to INDEX.md — list all 5 tools with descriptions and links, clearly separated from plugins
- [x] 7.2 Update README.md to mention the tools section in the repository structure overview
- [x] 7.3 Run `node .opencode/scripts/validate-links.js` to verify all internal links resolve
