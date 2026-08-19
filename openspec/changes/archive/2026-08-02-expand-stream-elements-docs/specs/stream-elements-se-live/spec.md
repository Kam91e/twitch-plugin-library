## ADDED Requirements

### Requirement: SE.Live plugin file
The StreamElements documentation MUST include a `se-live.md` file documenting SE.Live, the OBS Studio plugin, covering the "Desktop apps" sidebar option.

#### Scenario: Sidebar mapping
- **WHEN** a reader navigates from the dashboard sidebar map (Streaming tools → Desktop apps)
- **THEN** the map links to `se-live.md`

#### Scenario: Plugin identity
- **WHEN** SE.Live is described
- **THEN** it MUST be described as a plugin/dock layer inside OBS Studio, not as a standalone streaming application

### Requirement: Multi-streaming
The documentation MUST describe SE.Live multi-streaming as free and unlimited, supporting simultaneous streaming to Twitch, TikTok, YouTube, X, KICK, Trovo, and custom RTMP outputs, with native platform logins (no stream keys).

### Requirement: Unified multi-chat
The documentation MUST describe the multi-chat dock consolidating chat from Twitch, YouTube, X, and KICK into one feed.

### Requirement: Custom canvases
The documentation MUST describe custom canvases enabling unlimited horizontal and vertical layouts with linked scenes, for switching between just-chatting and gameplay or targeting vertical platforms.

### Requirement: Per-platform audio tracks
The documentation MUST describe custom audio track selection allowing different audio tracks per platform (e.g., music on the live stream but not on VOD channels) to avoid copyright strikes.

### Requirement: Docks
The documentation MUST describe the SE.Live docks: Activity feed, Elements Control Center (add widgets from the gallery), Media Request, and Multi-Chat.

### Requirement: Platform support
The documentation MUST state that SE.Live is supported on Windows and available on macOS in beta (both listed on the Desktop apps page), without claiming macOS is discontinued.

### Requirement: Overview correction
The `overview.md` file MUST be corrected to describe SE.Live as an OBS plugin (not a "desktop streaming app") and MUST mention Ground Control and Titanium only as brief mentions of separate StreamElements products.
