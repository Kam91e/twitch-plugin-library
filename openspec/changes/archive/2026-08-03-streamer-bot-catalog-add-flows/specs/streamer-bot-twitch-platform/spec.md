# streamer-bot-twitch-platform

## ADDED Requirements

### Requirement: Full Twitch section structure documented
The reference SHALL document the complete Platforms → Twitch section of Streamer.bot v1.0.4 in page order: 5 feature cards (Channel Point Rewards, Polls, Predictions, Sub Counter, Videos), Accounts section (Broadcaster Account with logged-in user and Logout; Bot Account with Login), Settings subsection (Emote Handlers, First Words, Present Viewers, Gift Bombs, Pyramids, Stream Update on Connect), and Related Support subsection (Help with Twitch, Configuring Twitch). The reference SHALL distinguish the two arrow kinds captured: feature cards show a `>` chevron (``) and open their panel on card click; Accounts cards show a down arrow (``) that expands/collapses the card; Settings cards and Related Support rows show the down arrow but do not expand (their descriptions and toggles are visible collapsed, and Help with Twitch/Configuring Twitch are external-docs links); Stream Update on Connect has a toggle and no arrow. The reference SHALL state that the page must be scrolled to reach Settings and Related Support.

#### Scenario: Landing cards listed
- **WHEN** a reader opens the Twitch section reference
- **THEN** all 5 feature cards (Channel Point Rewards, Polls, Predictions, Sub Counter, Videos) are listed in page order with their descriptions

#### Scenario: Accounts section documented
- **WHEN** a reader views the Accounts section
- **THEN** the Broadcaster Account (logged-in user + Logout) and Bot Account (Login) are described

#### Scenario: Accounts cards expand
- **WHEN** a reader views the Accounts cards description
- **THEN** the reference notes that clicking the down arrow expands each card to reveal a "Forget this account?" row with a Forget button and a Services group (Broadcaster: Chat Client + EventSub; Bot: EventSub Client with Connect when no bot is logged in)

#### Scenario: Settings subsection documented
- **WHEN** a reader views the Settings subsection
- **THEN** Emote Handlers, First Words, Present Viewers, Gift Bombs, Pyramids, and Stream Update on Connect are listed, each with its toggle state label (Enabled/Ignored/Disabled) where applicable

#### Scenario: Settings cards do not expand
- **WHEN** a reader views the Settings cards description
- **THEN** the reference notes the down arrow is decorative for Settings cards (descriptions and toggles already visible collapsed) and that Stream Update on Connect has no arrow

#### Scenario: Related Support subsection documented
- **WHEN** a reader views the Related Support subsection
- **THEN** Help with Twitch and Configuring Twitch are listed as the final cards on the page, noted as external-docs links that do not expand

#### Scenario: Scroll requirement stated
- **WHEN** a reader navigates the section
- **THEN** the reference notes Settings and Related Support are only visible after scrolling

### Requirement: Panel grids documented
The reference SHALL document each feature card's panel grid columns as captured: Channel Point Rewards (Reward Name, Cost, Enabled, Paused, Options, Owned), Polls (Title, Choices, Votes, Duration, Winner, State), Predictions (Title, Users, Outcomes, Points, Duration, Winner, State), Sub Counter (settings form, not a grid: Enabled, Sub Counter value + refresh, Rollover, Output File + browse, Output Text template, Reset Sub Counter), Videos (Title, Created At, View Count, Type, Duration) with its User/Type filters and Search box.

#### Scenario: CPR grid columns
- **WHEN** a reader opens the Channel Point Rewards panel description
- **THEN** the 6 grid columns (Reward Name, Cost, Enabled, Paused, Options, Owned) are listed

#### Scenario: Polls grid columns
- **WHEN** a reader opens the Polls panel description
- **THEN** the 6 grid columns (Title, Choices, Votes, Duration, Winner, State) and the "Selected Poll" combo are listed

#### Scenario: Predictions grid columns
- **WHEN** a reader opens the Predictions panel description
- **THEN** the 7 grid columns (Title, Users, Outcomes, Points, Duration, Winner, State) and the "Selected Prediction" combo are listed

#### Scenario: Sub Counter settings listed
- **WHEN** a reader opens the Sub Counter panel description
- **THEN** the settings form fields (Enabled, value + refresh, Rollover, Output File, Output Text, Reset) are listed with the destructive-warning note on Reset

#### Scenario: Videos panel listed
- **WHEN** a reader opens the Videos panel description
- **THEN** the filters (User, Type, Search), the "Found 0 videos" empty state, and the 5 grid columns are listed

### Requirement: Context menus documented
The reference SHALL list each panel's context-menu entries as captured: Channel Point Rewards (Create Reward, Collapse All, Expand All), Polls (New Poll, Refresh Polls from Twitch), Predictions (New Prediction, Refresh Predictions from Twitch).

#### Scenario: CPR context menu
- **WHEN** a reader right-clicks the Channel Point Rewards grid (in the app or via the reference)
- **THEN** Create Reward, Collapse All, and Expand All are listed

#### Scenario: Polls context menu
- **WHEN** a reader right-clicks the Polls grid
- **THEN** New Poll and Refresh Polls from Twitch are listed

#### Scenario: Predictions context menu
- **WHEN** a reader right-clicks the Predictions grid
- **THEN** New Prediction and Refresh Predictions from Twitch are listed

### Requirement: Add-dialogs documented
The reference SHALL document the three captured add-dialogs with their fields: "Create Twitch Poll" (Question, Response list min 2 max 5 with Add/Del, Channel Points Per Vote with 0 = disabled, Duration in seconds, Create/Cancel), "Create Twitch Prediction" (Start a Prediction info, Name the prediction, Outcomes list min 2 max 10 with Add/Del, Submission Period in seconds, Create/Cancel), "Add Twitch Channel Reward" (Reward Name, Enabled/Paused, Description Optional, Background Color, User Input Required, Redemption Skips Queue, Cost, Max per Stream, Max per User per Stream, Global Cooldown, Streamer.bot Settings Persist Counter / Persist User Counter, Group ComboBox, Create/Cancel).

#### Scenario: Poll dialog fields
- **WHEN** a reader views the "Create Twitch Poll" dialog description
- **THEN** all fields are listed including the min/max response constraint and 0-to-disable Channel Points Per Vote

#### Scenario: Prediction dialog fields
- **WHEN** a reader views the "Create Twitch Prediction" dialog description
- **THEN** all fields are listed including the min/max outcome constraint; the app's "Submission Preiod" label typo is noted

#### Scenario: Reward dialog fields
- **WHEN** a reader views the "Add Twitch Channel Reward" dialog description
- **THEN** all fields are listed including the Streamer.bot-specific Persist Counter / Persist User Counter options

### Requirement: Evidence traceability
Every app-derived fact in the reference SHALL trace to a captured dump under `/mnt/d/Twitch/shots/` (e.g. `twitch-platform-uia.txt`, `polls-panel-uia.txt`, `new-poll-modal-uia.txt`, `predictions-panel-uia.txt`, `new-prediction-modal-uia.txt`, `cpr-panel-uia.txt`, `create-reward-modal-uia.txt`, `subcounter-panel-uia.txt`, `videos-panel-uia.txt`), cited in frontmatter or inline.

#### Scenario: Dump cited per panel
- **WHEN** a reader views any panel or dialog description
- **THEN** the corresponding dump path is cited

#### Scenario: No fabricated facts
- **WHEN** the reference is reviewed
- **THEN** no grid column, context-menu entry, or dialog field appears without a dump citation
