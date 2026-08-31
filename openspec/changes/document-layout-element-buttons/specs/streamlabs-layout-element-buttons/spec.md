## ADDED Requirements

### Requirement: Mini Feed every button
The system SHALL document what every header button does on the Mini Feed layout tile (v1.21.9) as seen only when the `Test Elements` layout is selected — header-region close-up resolution — each button pressed and named.

#### Scenario: Mini Feed all buttons documented
- **WHEN** a reader selects the `Test Elements` layout from the Layouts grid and then opens the Mini Feed element section
- **THEN** they learn the header chrome button-by-button (⋮ drag handle, ⚙ settings, ✕ remove, plus filter/pause/clear controls) inside the `Test Elements` canvas and what each does, backed by `slobs-layout-minifeed-header.png` crop at 2× native HighQualityBicubic (captured inside `Test Elements`) plus `slobs-layout-minifeed-gear.png` / `slobs-layout-minifeed-filter.png` dialog captures or marked with “I couldn't verify this” only if header/dialog not legible at 2×

### Requirement: Legacy Events every button distinct
The system SHALL document Legacy Events as distinct from Mini Feed, documenting what every header button does on its tile as seen only when the `Test Elements` layout is selected — header-region close-up resolution — separately without copying Mini Feed description.

#### Scenario: Legacy Events every button distinguished
- **WHEN** a reader selects the `Test Elements` layout and then compares its Legacy Events tile to its Mini Feed tile
- **THEN** they learn Legacy Events' distinct filter set / chrome button-by-button inside the `Test Elements` canvas, backed by `slobs-layout-legacy-header.png` plus gear/dialog captures at 2× native captured inside `Test Elements`

### Requirement: Audio Mixer every header button
The documentation for the Audio Mixer layout tile header as seen only when the `Test Elements` layout is selected SHALL document every header button (⋮, ⚙, ✕) at close-up, and state rows are identical to Mixer dock reusing `mixer.md` evidence.

#### Scenario: Audio Mixer header every button documented
- **WHEN** a reader selects the `Test Elements` layout and then opens the Audio Mixer tile section inside its canvas
- **THEN** they learn each header button's function inside `Test Elements` and that rows are identical to Mixer dock (volume sliders, mute, gear/lock, meters as in `slobs-protocol-addscene-open.png`), cross-linked to `mixer.md`, backed by `slobs-layout-audiomixer-header.png` at 2× native captured inside `Test Elements`

### Requirement: Scene Selector every button
The Scene Selector tile documentation as seen only when the `Test Elements` layout is selected SHALL document every header button (⋮, ⚙, ✕, `+` at Scenes `296,578`, eye visibility) at close-up, cross-linking to `scenes-and-transitions.md` for dialog semantics.

#### Scenario: Scene Selector every button documented
- **WHEN** a reader selects the `Test Elements` layout and then opens the Scene Selector tile section inside its canvas
- **THEN** they learn each header button including `+` and eye inside `Test Elements`, backed by `slobs-layout-sceneselector-header.png` at 2× native captured inside `Test Elements` plus existing `slobs-addscene-dialog.png` 411K for dialog

### Requirement: Source Selector every button
The Source Selector tile documentation as seen only when the `Test Elements` layout is selected SHALL document every header button (⋮, ⚙, ✕, `+` at Sources `676,578`, eye visibility) at close-up, cross-linking to `sources.md`.

#### Scenario: Source Selector every button documented
- **WHEN** a reader selects the `Test Elements` layout and then opens the Source Selector tile section inside its canvas
- **THEN** they learn each header button including `+` and eye inside `Test Elements`, backed by `slobs-layout-sourceselector-header.png` at 2× native captured inside `Test Elements` plus existing `slobs-addsource-dialog.png` 712K

### Requirement: Evidence-backed every button
Every per-button claim for the 5 tiles as seen only when the `Test Elements` layout is selected SHALL be backed by a captured header-region screenshot at 2× native HighQualityBicubic inside the `Test Elements` canvas cited via backtick filename (`slobs-layout-{element}-header.png`, `slobs-layout-{element}-{gear,filter}.png`) or explicitly marked as unverified.

#### Scenario: Evidence cited at 2×
- **WHEN** a per-button claim inside the `Test Elements` canvas is documented
- **THEN** the page cites the 2× header-region capture(s) supporting it captured inside `Test Elements`

#### Scenario: Unverified marked
- **WHEN** a per-button dialog could not be captured at 2×
- **THEN** the page marks it with “I couldn't verify this” rather than guessing

### Requirement: Version pinning for every button
Every documentation update for every button SHALL pin v1.21.9 in tagline and frontmatter.

#### Scenario: Version pinned
- **WHEN** a reader opens the deepened layout-editor page for every button
- **THEN** they see v1.21.9 in title/tagline and frontmatter version / last-reviewed
