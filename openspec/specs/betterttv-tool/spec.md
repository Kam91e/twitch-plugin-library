## ADDED Requirements

### Requirement: BetterTTV platform documentation file exists in tools
The system SHALL provide a tool documentation file at `tools/chat-and-overlays/betterttv.md` for the BetterTTV platform at `https://betterttv.com`, following `tools/_TEMPLATE.md` structure and written in English.

#### Scenario: File exists at expected path
- **WHEN** the repository is inspected after the change
- **THEN** a file exists at `tools/chat-and-overlays/betterttv.md`

#### Scenario: Frontmatter is valid
- **WHEN** the file's YAML frontmatter is parsed
- **THEN** it contains `title: "BetterTTV"`, `category: "chat-and-overlays"`, `type: "Browser Extension"`, `price: "Freemium"`, `url: "https://betterttv.com/"`, and `last-reviewed` in `YYYY-MM-DD` format

### Requirement: BetterTTV doc covers adding ready emotes workflow
The `Installation / Setup` section of `tools/chat-and-overlays/betterttv.md` SHALL include a step-by-step workflow for streamers to add ready-made emotes from the BetterTTV public library to their channel.

#### Scenario: Ready emote workflow documented
- **WHEN** a beginner streamer reads the Installation / Setup section
- **THEN** they find steps for logging in via Twitch, browsing/searching the BetterTTV emote library, and adding a selected emote to the channel (or shared channel) with source verification

### Requirement: BetterTTV doc covers uploading custom emotes workflow
The `Installation / Setup` section of `tools/chat-and-overlays/betterttv.md` SHALL include a step-by-step workflow for streamers to upload their own custom emotes (image file, emote code/name, submission/approval).

#### Scenario: Custom upload workflow documented
- **WHEN** a streamer wants to use their own image as an emote
- **THEN** they find steps for Dashboard → Upload Emote, selecting file (with verified constraints: allowed formats and max size) and assigning an emote code, plus what happens after submit (e.g., approval queue if applicable), sourced from `https://betterttv.com`

### Requirement: BetterTTV doc viewer install is documented
The `Installation / Setup` section SHALL include viewer-side installation of the BetterTTV browser extension and the effect on chat visibility.

#### Scenario: Viewer install documented
- **WHEN** a viewer reads the doc
- **THEN** they find how to install the extension for Chrome/Firefox/Edge/Opera, refresh Twitch, and that without the extension emotes appear as plain text

### Requirement: BetterTTV configuration and Twitch integration are documented
The file SHALL contain `Twitch Integration` (how BetterTTV injects into Twitch chat, dependency on extension, relation to native Twitch emotes) and `Configuration` (dashboard settings such as channel/shared emote slots and moderator permissions; extension settings such as emote scale / toggles) sections with verified details or explicit "could not be verified" markers.

#### Scenario: Integration and configuration present
- **WHEN** a power user reads those sections
- **THEN** they understand the injection mechanism and can configure dashboard and extension settings without encountering fabricated limits

### Requirement: BetterTTV paid features mentioned only briefly
The file SHALL mention BetterTTV Pro / paid features only as a brief note (one paragraph or bullet list), not a detailed pricing breakdown.

#### Scenario: Paid mention is concise
- **WHEN** the paid-features note is read
- **THEN** it lists what Pro unlocks (e.g., additional emote slots, personal emotes) in 1-3 bullets without price tables or subscription flows

### Requirement: BetterTTV doc uses external screenshots only and passes zero-hallucination
All images SHALL use external URLs only (no vendored files), and every slot count, file limit, format, and approval claim SHALL cite a source URL from `https://betterttv.com` or be explicitly marked as unverified.

#### Scenario: External images and sourced facts
- **WHEN** the file is inspected
- **THEN** no image path points inside the repository and factual claims about limits/formats include a traceable source or an unverified marker per `AGENTS.md`

### Requirement: BetterTTV doc has standard closing sections
The file SHALL include `Tips & Tricks` and `Alternatives` sections, with Alternatives cross-linking to 7TV, FrankerFaceZ, and relevant emote display tools.

#### Scenario: Closing sections present
- **WHEN** the Alternatives section is read
- **THEN** it lists when to choose BetterTTV vs 7TV/FFZ and links to `tools/chat-and-overlays/7tv.md` and external platform URLs
