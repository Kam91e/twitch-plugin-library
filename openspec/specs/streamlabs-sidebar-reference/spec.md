# streamlabs-sidebar-reference

## ADDED Requirements

### Requirement: Sidebar section inventory
The sidebar reference SHALL document every sidebar section visible in Streamlabs Desktop 1.21.9: Editor, Overlays, App Store, Highlighter, Recordings, Get Ultra, Dashboard, Get Help, Settings, and the account menu.

#### Scenario: All sections listed
- **WHEN** a reader opens the sidebar reference page
- **THEN** every sidebar section from the inventory is listed with its label and position

#### Scenario: Version pinned
- **WHEN** the sidebar reference page is read
- **THEN** it states the documented version (1.21.9) in the tagline and frontmatter

### Requirement: Expandable sections and sub-items
The sidebar reference SHALL document which sections are expandable and list their sub-items: Editor (Editor, Layout Editor, Studio Mode), Overlays (Scene, Alerts and Widgets), App Store (App Store Home, App Manager), Dashboard (Dashboard Home, Cloudbot, Alert Box Settings, Widgets, Tip Settings, Multistream).

#### Scenario: Sub-items documented per expandable section
- **WHEN** a reader looks up an expandable section
- **THEN** the page lists that section's sub-items and notes that clicking the label expands the section

#### Scenario: Navigation items distinguished
- **WHEN** a reader looks up Highlighter, Recordings, Get Ultra, Get Help, or Settings
- **THEN** the page notes these are navigation items that switch the main view rather than expand

### Requirement: Sidebar scroll behavior
The sidebar reference SHALL document that the sidebar scrolls when multiple sections are expanded, and that expanding a section can push lower items off-screen.

#### Scenario: Scrollability noted
- **WHEN** a reader reads the sidebar reference
- **THEN** the page explains that the sidebar is scrollable and that expanded sections shift item positions

### Requirement: Evidence-backed sidebar claims
Every sidebar claim SHALL be backed by a captured screenshot in `/mnt/d/Twitch/shots/` cited on the page, or explicitly marked as unverified.

#### Scenario: Evidence cited
- **WHEN** a sidebar claim is documented
- **THEN** the page cites the evidence file(s) supporting it

#### Scenario: Unverified items marked
- **WHEN** a sidebar item could not be captured
- **THEN** the page marks it as unverified rather than guessing its behavior