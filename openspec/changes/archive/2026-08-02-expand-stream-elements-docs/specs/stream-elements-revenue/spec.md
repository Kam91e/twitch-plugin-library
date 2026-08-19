## ADDED Requirements

### Requirement: Revenue pages file
The StreamElements documentation MUST include a `tips-and-merch.md` file covering the Revenue sidebar group: Tipping settings, SE.Tips, SE.Merch, and Revenue history.

#### Scenario: Sidebar mapping
- **WHEN** a reader navigates from the dashboard sidebar map (Revenue group)
- **THEN** the map links to `tips-and-merch.md` for the Merch and Tipping settings options

### Requirement: SE.Tips
The documentation MUST describe SE.Tips as the free tipping page service, including the customisation and moderation options and the payment methods available on the Tipping settings page (PayPal, with SE.Pay via Stripe as an additional provider described in StreamElements documentation).

### Requirement: SE.Pay via Stripe
The documentation MUST describe SE.Pay as an optional payment provider powered by Stripe, noting that the Tipping settings page on the verified dashboard shows PayPal as the payment provider, and that SE.Pay setup involves connecting a Stripe account, completing Stripe onboarding, and managing withdrawals through the Stripe Dashboard (first payout ~7 days while Stripe verifies the account).

### Requirement: SE.Merch
The documentation MUST describe SE.Merch as powered by the Fourthwall merch platform (the Merch page shows "Launch your premium streamer merch with Fourthwall" with exclusive benefits for StreamElements users), and note that Streamer.bot can trigger on merch purchases.

### Requirement: Revenue history
The documentation MUST describe the Revenue history page (Data & reports group) as the record of tips and other revenue events.

### Requirement: Automation bridge
The `tips-and-merch.md` file MUST include a Streamer.bot automation bridge section linking to the existing read-only reference at `tools/automation/streamer-bot/triggers/integrations/streamelements.md` (triggers: Tip, Merch, Connected, Disconnected) and MUST NOT modify any Streamer.bot documentation files.

#### Scenario: Bridge context
- **WHEN** a reader wants to automate StreamElements revenue events
- **THEN** they can follow the link to the Streamer.bot triggers reference for Tip, Merch, Connected, and Disconnected events
