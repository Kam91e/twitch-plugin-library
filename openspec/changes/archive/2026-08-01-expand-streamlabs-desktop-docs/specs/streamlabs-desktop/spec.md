## MODIFIED Requirements

### Requirement: Streamlabs Desktop overview
The documentation SHALL describe Streamlabs Desktop as an OBS-based streaming application with built-in overlays, alerts, and Cloudbot, targeting beginner streamers. The overview SHALL also cover the companion products Streamlabs Console and Streamlabs Mobile.

#### Scenario: Reader understands positioning
- **WHEN** a reader opens the overview
- **THEN** they SHALL learn that Streamlabs Desktop is a fork of OBS Studio
- **THEN** they SHALL see a comparison between Streamlabs Desktop and OBS Studio (ease of use vs customization)
- **THEN** they SHALL see platform availability (Windows, macOS) and pricing model (Free + Ultra $27/mo)

#### Scenario: Reader learns about Console and Mobile
- **WHEN** a reader opens the overview
- **THEN** they SHALL find a Console & Mobile section
- **THEN** they SHALL learn that Streamlabs Console enables streaming from PlayStation/Xbox and that a mobile companion app exists
- **THEN** the section SHALL note these are separate products from Streamlabs Desktop

### Requirement: Streamlabs Desktop overlays and themes
The documentation SHALL cover the overlay system — hundreds of free/premium themes, customization options, and import/export. The widget documentation SHALL use the application's own widget names (verified against the first-hand source list) and SHALL cover the complete widget set.

#### Scenario: Reader applies an overlay theme
- **WHEN** a reader follows the overlay documentation
- **THEN** they SHALL learn how to browse, preview, and apply themes from the Streamlabs library
- **THEN** they SHALL learn how to customize existing themes

#### Scenario: Widget names match the application
- **WHEN** a reader compares the widget documentation to the Streamlabs Desktop "Add Source → Widgets" list
- **THEN** the documented widget names SHALL match the application's names (e.g. Tip Goal, Bit Goal, Subscription Goal, The Jar, Spin Wheel, Sponsor Banner, Media Share, Poll, Emote Wall, Chat Highlight, Custom Widget, Streamlabs Charity Donation Goal)
- **THEN** obsolete names from earlier documentation (Tip Tracker, Donation Bar, Sub Goal) SHALL be replaced
