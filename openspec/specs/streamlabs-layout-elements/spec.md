# streamlabs-layout-elements

## Purpose
Specify documentation requirements for what each button does on Layout Editor tiles Mini Feed, Legacy Events, Audio Mixer, Scene Selector, Source Selector — header chrome, element-specific controls, cross-link vs distinct handling, all evidence-backed and version-pinned.

## Requirements
## Requirements

### Requirement: Mini Feed element buttons
The system SHALL document what each header button does on the Mini Feed layout tile (v1.21.9) as observed via `slobs-layout-*` element-selected and header captures.

#### Scenario: Mini Feed chrome documented
- **WHEN** a reader opens the Layout Editor Mini Feed section
- **THEN** they learn the header chrome (⋮ drag handle, ⚙ settings, ✕ remove, plus any filter/pause/clear controls) and what each button does, backed by `slobs-layout-minifeed-*.png` captures or marked with “I couldn't verify this” if not observed

### Requirement: Legacy Events distinct chrome
The system SHALL document Legacy Events as distinct from Mini Feed, describing its header buttons and filter set separately without copying Mini Feed description.

#### Scenario: Legacy Events distinguished
- **WHEN** a reader compares Legacy Events to Mini Feed
- **THEN** they learn that Legacy Events shows a different event-type filter set / chrome and see its header buttons described separately, backed by `slobs-layout-legacy-*.png` captures

### Requirement: Audio Mixer tile identical to Mixer dock
The documentation for the Audio Mixer layout tile SHALL state it is identical to the Mixer dock and reuse its evidence, cross-linking to `mixer.md` instead of re-describing rows.

#### Scenario: Audio Mixer cross-linked
- **WHEN** a reader opens the Audio Mixer tile section
- **THEN** they learn its header buttons and rows are identical to the Mixer dock (volume sliders, mute, gear/lock, meters as in `slobs-protocol-addscene-open.png`) and are directed to `mixer.md` for row semantics, backed by `slobs-layout-audiomixer-*.png` header capture

### Requirement: Scene Selector same as Scenes panel
The Scene Selector tile documentation SHALL state its chrome is the same as the Scenes panel (Scenes `+` at `296,578` → `slobs-addscene-dialog.png` 411K, eye visibility, etc.) and cross-link to `scenes-and-transitions.md` instead of re-describing.

#### Scenario: Scene Selector cross-linked
- **WHEN** a reader opens the Scene Selector tile section
- **THEN** they learn its `+` and eye controls are the same as the Scenes panel and are directed to `scenes-and-transitions.md`, backed by `slobs-layout-sceneselector-*.png` header capture

### Requirement: Source Selector same as Sources panel
The Source Selector tile documentation SHALL state its chrome is the same as the Sources panel (Sources `+` at `676,578` → `slobs-addsource-dialog.png` 712K, eye visibility, etc.) and cross-link to `sources.md` instead of re-describing.

#### Scenario: Source Selector cross-linked
- **WHEN** a reader opens the Source Selector tile section
- **THEN** they learn its `+` and eye controls are the same as the Sources panel and are directed to `sources.md`, backed by `slobs-layout-sourceselector-*.png` header capture

### Requirement: Evidence-backed element claims
Every layout-element claim SHALL be backed by a captured screenshot in `/mnt/d/Twitch/shots/` cited via backtick filename (`slobs-layout-*-*.png`) or explicitly marked as unverified.

#### Scenario: Evidence cited
- **WHEN** an element button claim is documented
- **THEN** the page cites the `slobs-layout-{element}-*.png` capture(s) supporting it

#### Scenario: Unverified items marked
- **WHEN** an element button could not be captured
- **THEN** the page marks it with “I couldn't verify this” rather than guessing

### Requirement: Version pinning for layout elements
Every layout-elements documentation update SHALL pin v1.21.9 in tagline and frontmatter.

#### Scenario: Version pinned
- **WHEN** a reader opens the deepened layout-editor page for elements
- **THEN** they see v1.21.9 in title/tagline and frontmatter version / last-reviewed
