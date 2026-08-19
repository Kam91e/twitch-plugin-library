# streamer-bot-triggers

## ADDED Requirements

### Requirement: App-verified trigger sources
The triggers reference SHALL reflect the 11 trigger sources visible in the running Streamer.bot v1.0.4 application: Core, Custom, Elgato, Integrations, Kick, Meld Studio, OBS Studio, Streamlabs Desktop, Trovo, Twitch, YouTube. These were captured via UI probing of the Add-Trigger picker.

#### Scenario: Eleven sources listed
- **WHEN** a reader opens `tools/automation/streamer-bot/triggers/index.md`
- **THEN** all 11 app-visible sources are listed, including Trovo

#### Scenario: Trovo discrepancy documented
- **WHEN** a reader views the source list
- **THEN** a note states the official docs index lists 10 sources (no Trovo) while the v1.0.4 app includes Trovo

### Requirement: Source-level type coverage
Each trigger source SHALL document its trigger types (per official docs: Core 13+, Custom 3, Elgato 96, Integrations 114, Kick 26, Meld Studio 9, OBS Studio 10, Streamlabs Desktop 8, Twitch 152, YouTube 31), with each type traceable to its docs URL in frontmatter.

#### Scenario: Type counts per source
- **WHEN** a reader opens a source's trigger listing
- **THEN** the documented types match the official docs for that source

#### Scenario: No invented trigger types
- **WHEN** a trigger type is listed
- **THEN** it traces to an official docs URL recorded in frontmatter

### Requirement: App vs docs reconciliation
The triggers reference SHALL reconcile the app and docs: the app is the source of truth for what sources exist in the picker; the docs remain the source of truth for per-source trigger types and parameters.

#### Scenario: Source truth split stated
- **WHEN** a reader needs to know which trigger sources exist
- **THEN** the reference states the split explicitly (app = picker sources; docs = types/parameters)
