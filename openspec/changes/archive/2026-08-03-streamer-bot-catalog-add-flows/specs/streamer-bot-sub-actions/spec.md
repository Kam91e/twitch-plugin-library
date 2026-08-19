# streamer-bot-sub-actions

## ADDED Requirements

### Requirement: App-verified sub-action catalog
The sub-actions reference SHALL reflect the catalog of the running Streamer.bot v1.0.4 application: 14 top-level categories, 114 groups, 353 sub-actions, as captured in `/mnt/d/Twitch/shots/catalog-consolidated.txt`. Every category, group, and sub-action listed in the reference MUST trace to either that dump or an official docs URL recorded in frontmatter.

#### Scenario: Catalog matches live app
- **WHEN** a reader compares the reference category/group list with the v1.0.4 app's Sub-Actions picker
- **THEN** the 14 categories and 114 groups match, and no invented groups appear

#### Scenario: Counts traceable
- **WHEN** a reader checks a category's item count
- **THEN** the count matches `catalog-consolidated.txt` and the dump path is cited in frontmatter

### Requirement: Single-item group handling
Groups where the group name equals the only sub-action (e.g. OBS `Recording`, `Get Current Scene`, Speaker.bot `Speak`, YouTube `Set Title`, Settings `Pick Color`) SHALL be flagged as single-item groups, indicating the group item itself is the sub-action and opens no submenu.

#### Scenario: Single-item group flagged
- **WHEN** a reader opens a category index containing a single-item group
- **THEN** the group is marked `(single-item group — the group IS the sub-action)` so the reader does not expect a flyout

#### Scenario: No fabricated submenu entries
- **WHEN** a single-item group is documented
- **THEN** no additional entries are invented beneath it

### Requirement: Version-gated entries annotated
Entries that exist only in newer versions (v1.0.5+) SHALL carry an inline version note, including: Logic `Loop Continue` / `Loop Break` (v1.0.5 adds 2 to the 6 present in v1.0.4), StreamFog integration (6 sub-actions, v1.0.5 only), Twitch `Get Pinned Chat Message` / `Pin Chat Message` / `Unpin Chat Message` / `Update Pinned Chat Message Duration`, and Twitch `Add/Remove Suspicious Status`. Note: `Get Clip Download Urls` was originally believed v1.0.5+ but IS present in the v1.0.4 catalog dump (`catalog-consolidated.txt` line 376, `GRP:Clips` → `ITEM:Get Clip Download Urls`), so it carries NO version note.

#### Scenario: Version note next to entry
- **WHEN** a reader views a version-gated entry
- **THEN** an inline `Version note (v1.0.5+):` annotation states it is absent from v1.0.4

#### Scenario: Version matrix in overview
- **WHEN** a reader opens `tools/automation/streamer-bot/overview.md`
- **THEN** a version matrix lists which capabilities differ between v1.0.4 (app) and v1.0.5 (docs)

### Requirement: Logic sub-actions reflect v1.0.4
The Core Logic group SHALL document the 6 sub-actions present in v1.0.4 (Break, Get Input, Get Random Number, If/Else, Switch, While) with `Loop Continue` and `Loop Break` marked as v1.0.5 additions rather than listed as present.

#### Scenario: Logic group lists six
- **WHEN** a reader opens the Core Logic entry
- **THEN** six sub-actions are listed for v1.0.4 and the two loop sub-actions are annotated as v1.0.5+
