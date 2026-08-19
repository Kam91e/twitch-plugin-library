## ADDED Requirements

### Requirement: Dashboard hub page
The StreamElements documentation MUST include a `dashboard.md` file documenting the `streamelements.com/dashboard` hub as the primary navigation entry point for the platform.

#### Scenario: Entry point linking
- **WHEN** a reader opens the StreamElements entry from INDEX.md
- **THEN** they land on `dashboard.md`, which links to all other StreamElements feature files (overlays, chatbot, loyalty, analytics, tips & merch, media request, SE.Live)

#### Scenario: Overview cross-link
- **WHEN** a reader opens `overview.md`
- **THEN** `overview.md` links to `dashboard.md` as the full navigation map

### Requirement: Sidebar navigation map
The dashboard documentation MUST describe the sidebar navigation using the user's actual sidebar ground truth, organized by its 7 groups: Data & reports, Streaming tools, Sponsorships, Revenue, Chatbot, Loyalty, and Other, plus the FAQ and Documentation external links.

#### Scenario: Group table
- **WHEN** the sidebar is documented
- **THEN** each group is presented as a table of options with what each option does and where it leads (in-dashboard page or external URL)

#### Scenario: External links flagged
- **WHEN** a sidebar option leads to another site (Chatstats, FAQ, Documentation)
- **THEN** it MUST be explicitly marked as external with its public URL, and channel-specific identifiers MUST NOT be copied into the docs

#### Scenario: Sidebar-to-file mapping
- **WHEN** a sidebar option corresponds to a documented feature page
- **THEN** the option MUST link to the corresponding file (e.g., Media request → `media-request.md`, Tipping settings → `tips-and-merch.md`, Desktop apps → `se-live.md`)

### Requirement: Dashboard page
The dashboard documentation MUST cover the Dashboard page itself: the top bar (time-range selector, profile with online indicator, account switching, profile menu), quick settings for stream title and game category, and the bot presence status (Join/Part/Mute/Unmute).

### Requirement: Activity Feed section
The dashboard documentation MUST describe the Activity Feed as a section within `dashboard.md`, covering event filtering by platform and event type, replaying alerts, marking notifications read, ad control for moderators, and session reset.

### Requirement: First-setup wizard
The dashboard documentation MUST describe the first-setup wizard flow: connecting the Twitch account, activating and moderating the bot, setting up tipping (PayPal or SE.Pay) and the tipping panel, creating/picking/importing an overlay, and installing SE.Live.

### Requirement: Working file removal
After implementation, the ground-truth working file `StreamElements Sidebar.md` at the repo root MUST be removed.
