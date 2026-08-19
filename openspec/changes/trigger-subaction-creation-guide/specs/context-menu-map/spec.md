## ADDED Requirements

### Requirement: Context menu map in add-flows.md

The `add-flows.md` page SHALL include a `## Context menus` section documenting every distinct right-click context in Streamer.bot: Triggers pane, Sub-Actions pane, Commands grid, Action rows, Service rows (File/Folder Watcher, Timers, File Tails, Quotes, Process Watcher, Credits), Voice Control panes, MIDI panes, WebSocket panes, and Settings sections. Each context SHALL list its entry point, menu items in captured order, and the flow that follows each relevant item (picker flyout, own dialog, or direct action).

#### Scenario: Every context menu documented

- **WHEN** a reader opens the `## Context menus` section of `add-flows.md`
- **THEN** they SHALL find a subsection per right-click context with entry point, menu items in captured order, and resulting flow

#### Scenario: Context menu entries traceable to evidence

- **WHEN** a context menu is documented
- **THEN** its menu items SHALL be traceable to a `*-ctx-uia.txt` capture (or an existing cited capture) in the evidence folder

#### Scenario: Existing flows preserved

- **WHEN** the `## Context menus` section is added
- **THEN** the existing `## Add a Trigger`, `## Add a Sub-Action`, and `## Add an Action` sections SHALL remain intact and link to the new section rather than duplicating it
