## ADDED Requirements

### Requirement: Every trigger classified as dialog or direct

The library SHALL classify every trigger documented under `tools/automation/streamer-bot/triggers/` (all `**Location:**` entries across all trigger pages) as either **dialog** (clicking the item in the Add Trigger picker opens a config modal) or **direct** (the item is added immediately with no dialog). The classification SHALL be derived from live-app probing of Streamer.bot v1.0.4 via the WSL + UIA pipeline, not from the official documentation.

#### Scenario: Classification recorded for every trigger

- **WHEN** the library contains a trigger entry with a `**Location:**` line
- **THEN** that entry SHALL also carry an `**Add behavior:** dialog|direct` line naming its live-app behavior

#### Scenario: Classification traceable to evidence

- **WHEN** a reader follows a trigger entry's `**Add behavior:**` line
- **THEN** the line SHALL reference the `creation-flows-catalog.txt` entry (and dialog capture file where applicable) that documents the observed behavior

### Requirement: Every sub-action classified as dialog or direct

The library SHALL classify every sub-action documented under `tools/automation/streamer-bot/sub-actions/` (all `**Location:**` entries) as either **dialog** or **direct**, using the same live-app probing method as for triggers.

#### Scenario: Classification recorded for every sub-action

- **WHEN** the library contains a sub-action entry with a `**Location:**` line
- **THEN** that entry SHALL also carry an `**Add behavior:** dialog|direct` line naming its live-app behavior

#### Scenario: Sub-action classification traceable to evidence

- **WHEN** a reader follows a sub-action entry's `**Add behavior:**` line
- **THEN** the line SHALL reference the `creation-flows-catalog.txt` entry (and dialog capture file where applicable) that documents the observed behavior

### Requirement: Dialog fields documented from app evidence

For every item classified as **dialog**, the library SHALL document the config dialog's fields — dialog title, approximate size, field labels with control types (text, combo/select, checkbox/toggle, radio, data grid, button), and Ok/Cancel presence — as captured in the app. The `**Parameters:**` line SHALL be upgraded from `Not documented in official docs` to the app-verified field list, tracing each field to a `*-dialog-uia.txt` capture and where useful a `.png` screenshot.

#### Scenario: Dialog item has app-verified parameters

- **WHEN** an item is classified as **dialog** and its dialog was captured
- **THEN** its `**Parameters:**` line SHALL list the captured fields with control types instead of `Not documented in official docs`, citing the `*-dialog-uia.txt` evidence file

#### Scenario: Direct item parameters remain as-is

- **WHEN** an item is classified as **direct** (no dialog)
- **THEN** its `**Parameters:**` line SHALL NOT claim any dialog fields, and the doc SHALL note that the item is added without configuration where official docs provide no parameter data

### Requirement: Machine-readable creation-flows catalog

The probe run SHALL produce a machine-readable catalog at `/mnt/d/Twitch/shots/creation-flows-catalog.txt` recording, for every probed item, its picker path (`CAT > GRP > ITEM`), its classification (`dialog` or `direct`), and the evidence filename of its dialog capture (empty for direct items).

#### Scenario: Catalog line per probed item

- **WHEN** the probe script visits an item in the Add picker
- **THEN** the catalog SHALL contain one line with the item's picker path, classification, and dialog evidence filename

#### Scenario: Probe preserves app state

- **WHEN** the probe classifies a **direct** item (which adds a row to the live app)
- **THEN** the script SHALL delete that row immediately and verify the app returns to its prior state, or SHALL flag `POLLUTION` and stop rather than continue silently

### Requirement: Connection-dependent dialogs flagged

Items whose dialog only opens when a required connection or selection exists (e.g. MIDI triggers requiring a registered device, command triggers requiring a command) SHALL be classified from the dialog they open when the connection exists, and the doc SHALL note the dependency (e.g. "requires a configured MIDI device") rather than omitting the dialog.

#### Scenario: Dependency noted in docs

- **WHEN** a dialog item requires a pre-configured connection to open its dialog
- **THEN** the item's documentation SHALL state the dependency alongside its `**Add behavior:**` classification

