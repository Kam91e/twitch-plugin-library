# Tasks — streamer-bot-catalog-add-flows

> Evidence base: `/mnt/d/Twitch/shots/catalog-consolidated.txt` (14 categories / 114 groups / 353 items, v1.0.4 app walk); UI dumps (`add-action-dialog-uia.txt`, `actions-ctx-uia.txt`, `actions-ctx2-uia.txt`, `triggersctx-uia.txt`, `triggersadd-uia.txt`, `subaction-ctx-uia.txt`); modal dumps (`subaction-runaction-modal-uia.txt`, `add-trigger-test-modal-uia.txt`, `delete-all-triggers-modal-uia.txt`, `add-command-modal-uia.txt`, `commands-ctx-uia.txt`, `commands-panel-uia.txt`). Twitch section dumps (`twitch-platform-uia.txt` landing, `twitch-scrolled1..10-uia.txt` + `twitch-bottom3.txt` scrolled-to-bottom, `polls-panel-uia.txt`, `polls-ctx-uia.txt`, `new-poll-modal-uia.txt`, `predictions-panel-uia.txt`, `pred-ctx-uia.txt`, `new-prediction-modal-uia.txt`, `cpr-panel-uia.txt`, `cpr-ctx-uia.txt`, `create-reward-modal-uia.txt`, `subcounter-panel-uia.txt`, `subcounter-scrolled-uia.txt`, `videos-panel-uia.txt`, `videos-type-dropdown.txt`). Expandable-card probe dumps (`twitch-expand-broadcaster-uia.txt`, `twitch-expand-bot-uia.txt`, `twitch-expand-bot-scrolled-uia.txt`, `twitch-settings-cards-uia.txt`, `twitch-emote-expand2-uia.txt`, `twitch-firstwords-click-uia.txt`, `twitch-wheel-scroll2-uia.txt`, `twitch-pyramids-area-uia.txt`, `twitch-helpwithtwitch-click-uia.txt`). Docs source: `https://docs.streamer.bot/` (v1.0.5).

## 1. Preparation

- [x] 1.1 Read `tools/automation/streamer-bot/sub-actions/index.md` and all category files; inventory which entries need version/single-item annotations
- [x] 1.2 Read `tools/automation/streamer-bot/triggers/index.md`; confirm current source list vs 11 app sources (add Trovo, note Custom)
- [x] 1.3 Read `tools/automation/streamer-bot/overview.md` and `actions-system.md` for current nav structure and links to update
- [x] 1.4 Confirm `catalog-consolidated.txt` is the latest evidence snapshot (re-run `catalog.ps1` only if app state changed)

## 2. Sub-actions — version annotations

- [x] 2.1 Annotate Core Logic: ensure only 6 v1.0.4 sub-actions listed; mark `Loop Continue` and `Loop Break` as v1.0.5+ (update `sub-actions/core/logic.md` or index inline H2)
- [x] 2.2 Annotate Twitch entries that are v1.0.5+: Chat `Get Pinned Chat Message` / `Pin Chat Message` / `Unpin Chat Message` / `Update Pinned Chat Message Duration`, Clips `Get Clip Download Urls`, Moderation `Add/Remove Suspicious Status` — add inline `Version note (v1.0.5+):` *(note: `Get Clip Download Urls` IS present in the v1.0.4 dump (line 376), so no version note — spec/design/proposal corrected accordingly)*
- [x] 2.3 Add `StreamFog` version note (v1.0.5+ integration, 6 sub-actions) in `sub-actions/streamfog/` and category index if present
- [x] 2.4 Add inline version notes where other app-vs-docs gaps exist (verify against `catalog-consolidated.txt` per category)

## 3. Sub-actions — single-item group flags

- [x] 3.1 Flag single-item groups in category indexes: OBS Studio (Create Record Chapter, Get Current Scene, Get Status, Raw, Recording, Set Active Scene, Streaming, Take Screenshot), Meld Studio (Get Current Scene, Get Status, Record Clip, Recording, Show Scene, Streaming, Take Screenshot, Take Vertical Screenshot), Streamlabs Desktop (Recording, Streaming), PolyPop (Trigger Alert), Settings (Pick Color, Reset Credits, Reset First Words, Set Voice Control Input), Speaker.bot (all 7 groups), YouTube (Send Message to Channel, Set Description, Set Title, Set Title and Description), Core (Delay, Triggers)
- [x] 3.2 Verify each flagged group appears in `catalog-consolidated.txt` as `GRP:` with matching `ITEM:` (group = sub-action) *(Meld `Record Clip`/`Take Vertical Screenshot` verified in dump but absent from reference — no entry to flag; Core `Triggers` flagged per task list with capture-artifact caveat)*

## 4. Triggers — source reconciliation

- [x] 4.1 Update `triggers/index.md` to list 11 app-visible sources: Core, Custom, Elgato, Integrations, Kick, Meld Studio, OBS Studio, Streamlabs Desktop, Trovo, Twitch, YouTube
- [x] 4.2 Add note: official docs index lists 10 sources (no Trovo); app v1.0.4 includes Trovo — app is source of truth for picker, docs for per-source types
- [x] 4.3 Verify per-source type counts against docs (Core 13+, Custom 3, Elgato 96, Integrations 114, Kick 26, Meld 9, OBS 10, Streamlabs 8, Twitch 152, YouTube 31) and record docs URLs in frontmatter *(per-source frontmatter already carries docs URLs; counts added as annotations in index; Trovo has no docs URL — noted as undocumented)*

## 5. Add-flows reference

- [x] 5.1 Create `tools/automation/streamer-bot/add-flows.md` with frontmatter (category automation, type Reference, source docs URL, last-reviewed)
- [x] 5.2 Write "Add a Trigger" section: Right-Click Triggers pane → Add → 11-source picker → source → type; context menu (Add, Clear All Triggers, Disable All Triggers, Enable All Triggers, Favorite Triggers, Recent Triggers); cite `triggersctx-uia.txt`
- [x] 5.3 Write "Add a Sub-Action" section: Right-Click Sub-Actions pane → Add → 14-category flyout → group → sub-action; context menu (Add, Add Group, Delete All, Favorite Sub-Actions, Recent Sub-Actions); cite `subaction-ctx-uia.txt`
- [x] 5.4 Write "Add an Action" section: Right-Click Actions list → Add → "Add Action" dialog with fields Name, Enabled, Group, Queue, Random Action/Concurrent, Always Run, Exclude from Action Queue Pending/History, Ok/Cancel; context menu (Add, Collapse All, Expand All); cite `actions-ctx-uia.txt` + `add-action-dialog-uia.txt`
- [x] 5.5 State flows were captured on v1.0.4 (Windows 10); note approximation for other versions

## 6. Overview — version matrix and nav

- [x] 6.1 Add version matrix to `overview.md`: v1.0.4 (app) vs v1.0.5 (docs) — Logic 6 vs 8, StreamFog absent/present, Trovo source present/absent, Twitch Chat pin + Clip Download Urls + Suspicious Status absent/present *(matrix corrected: Clip Download Urls is present in both, per dump line 376)*
- [x] 6.2 Link `add-flows.md` from `overview.md` and `actions-system.md` nav

## 7. Verification

- [x] 7.1 Run `node .opencode/scripts/validate-links.js` — all INDEX.md and cross-links resolve
- [x] 7.2 Run `node .opencode/scripts/rebuild-index.js` if plugin index changed (only if vault INDEX.md affected) *(not needed — change touched only `tools/automation/streamer-bot/`, not plugins/)*
- [x] 7.3 Spot-check 5 annotated entries against `catalog-consolidated.txt` (e.g. Core Logic, OBS Recording, YouTube Set Title, Twitch Chat, Speaker.bot Speak)
- [x] 7.4 Confirm no fabricated entries: every new/annotated fact cites a dump path or docs URL

## 8. Commands — add-flow reference

- [x] 8.1 Create `tools/automation/streamer-bot/commands.md` (or `commands/` folder) with frontmatter (category automation, type Reference, source docs URL, last-reviewed)
- [x] 8.2 Write "Add a Command" section from `commands-ctx-uia.txt` + `add-command-modal-uia.txt`: Right-Click Commands grid (columns Name, Command, Options, Location, GCD, UCD, Enabled) → Add → "Add Command" dialog (850×560): Name `#Edit`, Enabled, Mode ComboBox, Include, Command(s) multi-line edit (one prefix per line), Location ComboBox, Group ComboBox (editable), Options tab (Ignore Bot Account, Ignore Internal Messages, Persist per User Counter, Persist Counter, Case Sensitive), Cooldowns tab, Sources tab, Permissions (Grant Type ComboBox, Group Permissions tab with Available/Allowed lists + `>>`/`<<`, User Permissions tab), Ok/Cancel; context menu (Add, Collapse All, Expand All)
- [x] 8.3 Note the search box above the grid (`Edit` at -971,165) for filtering commands; note that empty grid right-click exposes the same Add menu
- [x] 8.4 State that the "Add Command" dialog opens a modal window that blocks the main UI until Ok/Cancel (consistent with Action/Trigger/Sub-Action flows)
- [x] 8.5 Add Commands entry to `tools/automation/streamer-bot/overview.md` nav and link from `add-flows.md`

## 9. Twitch platform — section reference

- [x] 9.1 Create `tools/automation/streamer-bot/platforms.md` (or `platforms/twitch.md`) with frontmatter (category automation, type Reference, source docs URL, last-reviewed)
- [x] 9.2 Write the Platforms overview from `platforms-nav-uia.txt`: left nav → Platforms → landing shows 4 platform cards — Twitch, YouTube, Trovo, Kick (each with description + connect button). Note Trovo is present here too (consistent with trigger sources)
- [x] 9.3 Write the Twitch section landing from `twitch-platform-uia.txt` + `twitch-scrolled1..10-uia.txt` + `twitch-bottom3.txt`: 5 feature cards (Channel Point Rewards, Polls, Predictions, Sub Counter, Videos) + Accounts section (Broadcaster Account with logged-in user `Kameo_S` + Logout; Bot Account with Login) + Settings subsection (Emote Handlers, First Words, Present Viewers, Gift Bombs, Pyramids, Stream Update on Connect) + Related Support subsection (Help with Twitch, Configuring Twitch). Note each card has a `>` chevron button, and the page must be scrolled to reach Settings and Related Support
- [x] 9.4 Write the Polls panel from `polls-panel-uia.txt` + `polls-ctx-uia.txt`: DataGrid columns Title, Choices, Votes, Duration, Winner, State; "Selected Poll" combo; context menu (New Poll, Refresh Polls from Twitch)
- [x] 9.5 Write "Create Twitch Poll" dialog from `new-poll-modal-uia.txt` (600×590): Question, Response list (minimum 2, maximum 5) with Add/Del, Channel Points Per Vote (0 = disabled, spinner with up/down), Duration (seconds), Create/Cancel; note modal blocks main UI until closed
- [x] 9.6 Write the Predictions panel from `predictions-panel-uia.txt` + `pred-ctx-uia.txt`: DataGrid columns Title, Users, Outcomes, Points, Duration, Winner, State; "Selected Prediction" combo; context menu (New Prediction, Refresh Predictions from Twitch)
- [x] 9.7 Write "Create Twitch Prediction" dialog from `new-prediction-modal-uia.txt` (600×578): Start a Prediction info box, Name the prediction, Outcomes list (minimum 2, maximum 10) with Add/Del, Submission Period (seconds, spinner), Create/Cancel; note the app label typo "Submission Preiod"
- [x] 9.8 Write the Channel Point Rewards panel from `cpr-panel-uia.txt` + `cpr-ctx-uia.txt`: DataGrid columns Reward Name, Cost, Enabled, Paused, Options, Owned; context menu (Create Reward, Collapse All, Expand All)
- [x] 9.9 Write "Add Twitch Channel Reward" dialog from `create-reward-modal-uia.txt` (600×679): Reward Name, Enabled/Paused, Description (Optional), Background Color, User Input Required, Redemption Skips Queue, Cost, Max per Stream, Max per User per Stream, Global Cooldown (seconds), Streamer.bot Settings (Persist Counter, Persist User Counter), Group ComboBox, Create/Cancel
- [x] 9.10 Write the Sub Counter panel from `subcounter-panel-uia.txt` + `subcounter-scrolled-uia.txt`: Enabled toggle, Sub Counter value + refresh, Rollover toggle, Output File + browse, Output Text template, Reset Sub Counter (destructive warning)
- [x] 9.11 Write the Videos panel from `videos-panel-uia.txt` + `videos-type-dropdown.txt`: User filter, Type ComboBox (All/Archive/Highlight/Upload), Search box, "Found 0 videos" status, DataGrid columns Title, Created At, View Count, Type, Duration
- [x] 9.12 Note evidence gaps for follow-up probing: YouTube/Trovo/Kick platform sections not yet explored (Twitch section itself is now fully covered)
- [x] 9.13 Add Platforms entry to `tools/automation/streamer-bot/overview.md` nav
- [x] 9.14 Document expandable-card behavior from the probe dumps: only the two Accounts cards expand on `` arrow click (revealing "Forget this account?" + Forget, plus Services group — Broadcaster: Chat Client/EventSub with Disconnect; Bot: EventSub Client with Connect); Settings cards and Related Support rows keep the arrow but do not expand (descriptions/toggles visible collapsed; Stream Update on Connect has no arrow); feature cards use the `>` chevron and open panels
