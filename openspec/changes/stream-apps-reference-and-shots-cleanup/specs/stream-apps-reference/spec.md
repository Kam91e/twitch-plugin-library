## ADDED Requirements

### Requirement: Stream Apps landing page documented

The Stream Apps reference SHALL document the Streamer.bot **Stream Apps** landing page: all four application cards (OBS Studio, Streamlabs Desktop, Meld Studio, PolyPop) with their exact in-app description texts, in the order they appear in the application.

#### Scenario: Landing page lists all four apps

- **WHEN** a reader opens the Stream Apps reference
- **THEN** they SHALL find a list of all four applications with their exact in-app descriptions ("The defacto standard for streaming", "Add, edit and manage Streamlabs Desktop instances", "An up and coming heavy weight", "A game engine for your live streams")

### Requirement: Per-app panel documentation

The reference SHALL document each of the four application panels as an individual subsection covering: panel content from top to bottom, control types, left-click behaviors (add/connect buttons, toggles), right-click context menus, dropdown/combo selectors, and any dialogs that open on click, with dialog sizes and field lists where captured.

#### Scenario: Panel content captured for every app

- **WHEN** an app panel opens in the live app (v1.0.4)
- **THEN** the reference SHALL describe its controls (labels, toggles, inputs, buttons, grids) in visual order

#### Scenario: OBS Studio panel documented from existing capture

- **WHEN** a reader reaches the OBS Studio subsection
- **THEN** the reference SHALL describe the connection grid (Host / Auto Connect / Reconnect / Retry / Status columns) and the "OBS Information" area as captured in `OBS-Studio-uia.txt`

#### Scenario: Right-click menus documented

- **WHEN** a panel exposes a right-click context menu
- **THEN** the reference SHALL list the menu items and any dialogs they open

#### Scenario: Dialogs documented with fields

- **WHEN** a dialog opens (e.g., Add/Edit connection)
- **THEN** the reference SHALL list the dialog's fields, control types, and button labels

#### Scenario: Below-fold content captured

- **WHEN** panel content extends below the visible area
- **THEN** the reference SHALL capture and document the scrolled state so no controls are omitted

### Requirement: Add-connection flows documented

The reference SHALL document how each application is added/connected from the Stream Apps tab, following the capture discipline: dialogs are opened and canceled without creating live connections.

#### Scenario: Add flow steps recorded per app

- **WHEN** a reader follows the Add/Connect flow for an app
- **THEN** the reference SHALL list the steps (button clicked, dialog fields, confirmation) with the evidence files for each step

#### Scenario: No live connection created

- **WHEN** an add flow is captured
- **THEN** no real connection to a live service SHALL be created; dialogs are canceled and a clean state is verified after each probe

### Requirement: Evidence and verification standards

Every factual claim in the reference SHALL be traceable to either a live-app capture (UIA text dump and/or screenshot in `/mnt/d/Twitch/shots/`) or the official Streamer.bot docs. Content that could not be verified SHALL be marked "I couldn't verify this" per the library's zero-hallucination policy, and the reference SHALL include an Evidence gaps section.

#### Scenario: Unverifiable content is flagged

- **WHEN** a control, menu item, or dialog field cannot be verified from a capture or official docs
- **THEN** the reference SHALL explicitly state "I couldn't verify this" for that item

#### Scenario: Docs coverage noted per app

- **WHEN** an app has official docs coverage (e.g., OBS Studio sub-actions/triggers pages)
- **THEN** the reference SHALL note that coverage; apps without docs coverage SHALL be marked as app-evidence only

### Requirement: PolyPop documentation gap closed

The library SHALL provide reference pages for PolyPop covering its sub-actions and triggers, closing the gap where only a single mention (`PolyPop > Trigger Alert` in `sub-actions/index.md`) exists today.

#### Scenario: PolyPop sub-actions page exists

- **WHEN** a reader browses `sub-actions/polypop/`
- **THEN** they SHALL find an index page documenting each PolyPop sub-action with its location, description, parameters, and output variables

#### Scenario: PolyPop triggers page exists

- **WHEN** a reader browses `triggers/polypop.md`
- **THEN** they SHALL find the PolyPop triggers with their descriptions and parameters

#### Scenario: Unverified PolyPop content flagged

- **WHEN** official docs coverage for PolyPop is thin or version-mismatched
- **THEN** the page SHALL state "I couldn't verify this" for any content not traceable to sources, rather than inventing details

### Requirement: Library integration

The reference SHALL be integrated into the library: linked from the Streamer.bot `overview.md` UI Flow References list, and the library index and link validation scripts SHALL pass after the change lands.

#### Scenario: Overview links to the new page

- **WHEN** the change is implemented
- **THEN** `tools/automation/streamer-bot/overview.md` SHALL list the Stream Apps reference in the UI Flow References section

#### Scenario: Links and index validate

- **WHEN** `node rebuild-index.js` and `node validate-links.js` run after implementation
- **THEN** both SHALL complete without errors
