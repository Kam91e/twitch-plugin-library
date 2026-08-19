# streamer-bot-add-flows

## ADDED Requirements

### Requirement: Add Sub-Action flow documented
The reference SHALL document the step-by-step flow for adding a Sub-Action in Streamer.bot v1.0.4: Right-Click in the Sub-Actions pane → `Add` → picker flyout (14 categories) → category → group → sub-action. The context-menu entries (Add, Add Group, Delete All, Favorite Sub-Actions, Recent Sub-Actions) SHALL be listed.

#### Scenario: Sub-action flow steps present
- **WHEN** a reader opens the add-flows reference and looks up "Add a Sub-Action"
- **THEN** they find the right-click entry point, the Add menu, category/group navigation, and confirmation of the selected sub-action

#### Scenario: Context menu documented
- **WHEN** a reader views the Sub-Actions context menu
- **THEN** all entries (Add, Add Group, Delete All, Favorite Sub-Actions, Recent Sub-Actions) are listed

### Requirement: Add Trigger flow documented
The reference SHALL document the step-by-step flow for adding a Trigger: Right-Click in the Triggers pane → `Add` → picker flyout (11 sources: Core, Custom, Elgato, Integrations, Kick, Meld Studio, OBS Studio, Streamlabs Desktop, Trovo, Twitch, YouTube) → source → trigger type. The context-menu entries (Add, Clear All Triggers, Disable All Triggers, Enable All Triggers, Favorite Triggers, Recent Triggers) SHALL be listed.

#### Scenario: Trigger flow steps present
- **WHEN** a reader looks up "Add a Trigger"
- **THEN** they find the right-click entry point, the Add menu, and source/type navigation through the 11-source picker

#### Scenario: Trigger context menu documented
- **WHEN** a reader views the Triggers context menu
- **THEN** all entries (Add, Clear All Triggers, Disable All Triggers, Enable All Triggers, Favorite Triggers, Recent Triggers) are listed

### Requirement: Add Action flow documented
The reference SHALL document the flow for adding an Action: Right-Click on the Actions list → `Add` → "Add Action" dialog. The dialog fields SHALL be listed: Name, Enabled, Group, Queue, Random Action / Concurrent, Always Run (even if Queue is Paused), Exclude from Action Queue Pending/History, Ok, Cancel. The context-menu entries (Add, Collapse All, Expand All) SHALL be listed.

#### Scenario: Action flow steps present
- **WHEN** a reader looks up "Add an Action"
- **THEN** they find the right-click entry point and the Add menu

#### Scenario: Dialog fields documented
- **WHEN** a reader views the Add Action dialog section
- **THEN** all fields (Name, Enabled, Group, Queue, Random Action/Concurrent, Always Run, Exclude from Action Queue Pending/History, Ok/Cancel) are listed with brief descriptions

### Requirement: Flows traceable to captured UI
Each flow SHALL cite the captured UI dump that evidences it (e.g. `add-action-dialog-uia.txt`, `actions-ctx-uia.txt`, `triggersctx-uia.txt`) and SHALL state the flows were captured on v1.0.4 (Windows 10).

#### Scenario: Evidence cited per flow
- **WHEN** a reader views any flow
- **THEN** the corresponding dump path is cited and the captured version/platform is stated

#### Scenario: Version caveat present
- **WHEN** a reader may use a different Streamer.bot version
- **THEN** the reference notes the flows are approximate for versions other than v1.0.4
