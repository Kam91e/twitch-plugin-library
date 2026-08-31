## ADDED Requirements

### Requirement: 7TV platform documentation file exists in tools as duplicate
The system SHALL provide a tool documentation file at `tools/chat-and-overlays/7tv.md` for the 7TV platform at `https://7tv.app`, following `tools/_TEMPLATE.md` structure, written in English, and intentionally coexisting as a duplicate perspective alongside `plugins/loyalty-and-recognition/emotes-and-badges/7tv-emotes.md` (which SHALL remain untouched).

#### Scenario: File exists as duplicate
- **WHEN** the repository is inspected after the change
- **THEN** a file exists at `tools/chat-and-overlays/7tv.md` and the existing file at `plugins/loyalty-and-recognition/emotes-and-badges/7tv-emotes.md` still exists

#### Scenario: Frontmatter is valid
- **WHEN** the file's YAML frontmatter is parsed
- **THEN** it contains `title: "7TV"`, `category: "chat-and-overlays"`, `type: "Browser Extension"`, `price: "Freemium"`, `url: "https://7tv.app/"`, and `last-reviewed` in `YYYY-MM-DD` format

### Requirement: 7TV doc covers adding ready emotes workflow
The `Installation / Setup` section of `tools/chat-and-overlays/7tv.md` SHALL include a step-by-step workflow for streamers to add ready-made emotes from the 7TV library (browse/search, Add to Emote Set, set as Active/Default).

#### Scenario: Ready emote workflow documented
- **WHEN** a beginner streamer reads the Installation / Setup section
- **THEN** they find steps for logging in via Twitch, browsing `https://7tv.app/emotes`, adding an emote to a channel Emote Set, and activating the set for the channel

### Requirement: 7TV doc covers uploading custom emotes workflow
The `Installation / Setup` section SHALL include a step-by-step workflow for uploading custom emotes on 7TV (Dashboard upload, file constraints, naming, activation).

#### Scenario: Custom upload workflow documented
- **WHEN** a streamer wants to use their own image on 7TV
- **THEN** they find steps for 7TV Dashboard → Upload, allowed formats (PNG/GIF/WebP/etc.), max size (verified), emote code naming, and that activation is real-time, sourced from `https://7tv.app`

### Requirement: 7TV doc viewer install is documented
The `Installation / Setup` section SHALL include viewer-side installation of the 7TV browser extension and its visibility effect, plus the `;` emote picker hint.

#### Scenario: Viewer install documented
- **WHEN** a viewer reads the doc
- **THEN** they find extension install for Chrome/Firefox/Edge/Opera, refresh Twitch, and that without the extension chat shows plain text codes; the `;` picker shortcut is mentioned

### Requirement: 7TV configuration and Twitch integration are documented
The file SHALL contain `Twitch Integration` (injection into Twitch chat, real-time updates, relationship to native/Firefox/BetterTTV emotes, optional Kick/YouTube note) and `Configuration` (Emote Sets: Active/Default, editor/mod permissions, slot usage; extension settings: scale, FFZ integration toggle, highlight, stream stats) with verified details or explicit unverified markers.

#### Scenario: Integration and configuration present
- **WHEN** a power user reads those sections
- **THEN** they understand real-time set updates and can manage sets and extension preferences without fabricated data

### Requirement: 7TV paid features mentioned only briefly
The file SHALL mention 7TV paid subscription extras only as a brief note (one paragraph or bullet list), e.g., personal emotes, name paints, animated avatar, subscriber badge.

#### Scenario: Paid mention is concise
- **WHEN** the paid-features note is read
- **THEN** it lists subscription unlocks in 1-3 bullets without detailed pricing or checkout flow

### Requirement: 7TV doc uses external screenshots only and passes zero-hallucination
All images SHALL use external URLs only (no vendored files), and every slot count (e.g., 1000 slots), format, and real-time claim SHALL cite a source URL from `https://7tv.app` or be explicitly marked as unverified.

#### Scenario: External images and sourced facts
- **WHEN** the file is inspected
- **THEN** no image path is repository-local and factual claims include a traceable source or unverified marker

### Requirement: 7TV doc has standard closing sections and cross-links duplicate
The file SHALL include `Tips & Tricks` and `Alternatives` sections, with Alternatives noting the plugin perspective (`plugins/loyalty-and-recognition/emotes-and-badges/7tv-emotes.md`) and cross-linking to BetterTTV (`tools/chat-and-overlays/betterttv.md`) and FrankerFaceZ.

#### Scenario: Closing sections present
- **WHEN** Alternatives is read
- **THEN** it explains when to choose the `tools/` platform perspective vs the `plugins/` Extension panel perspective and links to the counterpart file
