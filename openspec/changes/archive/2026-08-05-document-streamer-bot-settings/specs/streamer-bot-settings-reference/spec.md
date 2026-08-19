## ADDED Requirements

### Requirement: Settings landing page documented

The Streamer.bot Settings reference SHALL document the Settings window landing page: all eight settings sections (General Settings, User Interface, Backups, Defaults, Groups, Variables, Labs, C# Compile Settings), each with its in-app description text, in the order they appear in the application.

#### Scenario: Landing page lists all eight sections

- **WHEN** a reader opens the Settings reference
- **THEN** they SHALL find a list of all eight settings sections with their exact in-app descriptions and a note about the scrollable list (CaretUp/CaretDown buttons)

#### Scenario: Scroll behavior verified

- **WHEN** the landing list is scrollable in the live app
- **THEN** the reference SHALL state whether additional items exist below the fold and document them if present

### Requirement: Per-section panel documentation

The reference SHALL document each of the eight settings sections as an individual subsection covering: panel content from top to bottom, left-click behaviors (toggles, expandable cards, buttons), right-click context menus, dropdown/combo selectors, and any dialogs that open on click, with dialog sizes and field lists where captured.

#### Scenario: Panel content captured for every section

- **WHEN** a section panel opens in the live app
- **THEN** the reference SHALL describe its controls (labels, toggles, inputs, buttons, grids) in visual order

#### Scenario: Right-click menus documented

- **WHEN** a panel exposes a right-click context menu
- **THEN** the reference SHALL list the menu items and any dialogs they open

#### Scenario: Dialogs documented with fields

- **WHEN** a dialog opens (e.g., Add Group, Add Variable, Force Backup, Add C# Reference)
- **THEN** the reference SHALL list the dialog's fields, control types, and button labels

#### Scenario: Below-fold content captured

- **WHEN** panel content extends below the visible area
- **THEN** the reference SHALL capture and document the scrolled state so no controls are omitted

### Requirement: Evidence and verification standards

Every factual claim in the reference SHALL be traceable to either a live-app capture (UIA text dump and/or screenshot in `/mnt/d/Twitch/shots/`) or the official Streamer.bot docs. Content that could not be verified SHALL be marked "I couldn't verify this" per the library's zero-hallucination policy, and the reference SHALL include an Evidence gaps section.

#### Scenario: Unverifiable content is flagged

- **WHEN** a control, menu item, or dialog field cannot be verified from a capture or official docs
- **THEN** the reference SHALL explicitly state "I couldn't verify this" for that item

#### Scenario: Docs coverage noted per section

- **WHEN** a settings section has official docs coverage (e.g., API pages for Groups, Variables)
- **THEN** the reference SHALL note that coverage; sections without docs coverage SHALL be marked as app-evidence only

### Requirement: Disambiguation from Settings sub-actions

The reference SHALL include an explicit note distinguishing the Settings **window** (application configuration) from the existing `sub-actions/settings.md` page (the Settings sub-action group: Pick Color, Reset Credits, Reset First Words, Set Voice Control Input), with a cross-link to that page.

#### Scenario: Reader distinguishes window from sub-action group

- **WHEN** a reader encounters "Settings" in the Streamer.bot section
- **THEN** the Settings window reference SHALL clarify it covers the application Settings window and link to the Settings sub-action group page

### Requirement: Library integration

The reference SHALL be integrated into the library: linked from the Streamer.bot `overview.md` UI Flow References list, and the library index and link validation scripts SHALL pass after the change lands.

#### Scenario: Overview links to the new page

- **WHEN** the change is implemented
- **THEN** `tools/automation/streamer-bot/overview.md` SHALL list the Settings reference in the UI Flow References section

#### Scenario: Links and index validate

- **WHEN** `node rebuild-index.js` and `node validate-links.js` run after implementation
- **THEN** both SHALL complete without errors
