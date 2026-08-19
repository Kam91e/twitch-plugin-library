# Tasks — expand-stream-elements-docs

> Ground truth: user's sidebar capture `StreamElements Sidebar.md` at repo root (7 groups + external links). Sources: official StreamElements docs (support.streamelements.com, docs.streamelements.com, product pages) + live inspection of the user's logged-in dashboard via CDP Chrome (port 9222, profile `~/.profiles/streamelements`, `agent-browser --cdp 9222`). Frontmatter per `tools/_TEMPLATE.md`. All content in English. Zero-hallucination: unverifiable facts are omitted or flagged, never invented.

## 1. Preparation

- [x] 1.1 Back up `tools/streaming-platforms/stream-elements/overview.md` and `INDEX.md` to `/tmp/opencode/` (no git history in repo)
- [x] 1.2 Verify CDP browser is live and logged in (dashboard reachable at port 9222); re-open if WSL restart killed it (restart chrome direct with `--remote-debugging-port=9222 --user-data-dir=~/.profiles/streamelements` via `setsid`)
- [x] 1.3 Confirm the ground-truth sidebar file `StreamElements Sidebar.md` matches the live dashboard sidebar (compare groups/options)

## 2. New file — dashboard.md (entry point)

- [x] 2.1 Write `tools/streaming-platforms/stream-elements/dashboard.md` — frontmatter per template (category `streaming-platforms`, type `Web platform`, platforms [Web], price `Free`, url `https://streamelements.com`, last-reviewed 2026-08-01)
- [x] 2.2 Write Sidebar section — group tables (Data & reports, Streaming tools, Sponsorships, Revenue, Chatbot, Loyalty, Other) with `| Option | What it does | Where it leads |`, wiki-links to feature files, External flags + URLs for Chatstats/FAQ/Documentation (no channel-specific identifiers)
- [x] 2.3 Write Dashboard page section — top bar (time range, profile/online indicator, account switching, profile menu), quick settings (title, game), bot status (Join/Part/Mute)
- [x] 2.4 Write Activity Feed section — filtering by platform/event, replay alerts, mark read, ad control (mods), session reset
- [x] 2.5 Write first-setup wizard section — connect Twitch, activate+mod bot, tipping (PayPal/SE.Pay) + tipping panel, overlay create/pick/import, SE.Live install
- [x] 2.6 Verify dashboard.md links to all 7 feature files (overlays-and-alerts, chatbot-and-loyalty, analytics-and-sponsorships, tips-and-merch, media-request, se-live) and frontmatter

## 3. New file — tips-and-merch.md

- [x] 3.1 Write `tips-and-merch.md` — frontmatter per template; Revenue group pages: Tipping settings, SE.Tips, SE.Pay (Stripe connect from Tipping settings, withdrawals via Stripe Dashboard, ~7 day first payout), SE.Merch, Revenue history
- [x] 3.2 Write Automation bridge section — link to `tools/automation/streamer-bot/triggers/integrations/streamelements.md` (triggers: Tip, Merch, Connected, Disconnected); note triggers-only (no sub-actions for StreamElements)
- [x] 3.3 Verify frontmatter, internal links, and that the Streamer.bot reference is NOT modified

## 4. New file — media-request.md

- [x] 4.1 Write `media-request.md` — frontmatter per template; Media Request page: request commands (`!songrequest`/`!sr`, `!song`, `!next`, `!when`, `!wrongsong`, `!voteskip`, `!volume`, `!songqueue`, `!skip`, `!removesong`), YouTube-only source
- [x] 4.2 Write queue & moderation, free vs tipped requests (loyalty cost, subscriber discount, min user level, prioritised tipped, cost/sec, min tip), playback options (backup playlist, filters, shuffle, autoplay, skip voting, delay), public request page (generic `<channel>` placeholder)
- [x] 4.3 Write SE.Live dock integration (recommended vs website, orange conflict bar)
- [x] 4.4 Verify frontmatter and internal links

## 5. New file — se-live.md

- [x] 5.1 Write `se-live.md` — frontmatter per template (type reflects desktop/plugin framing); SE.Live as OBS plugin: free unlimited multi-streaming (Twitch, TikTok, YouTube, X, KICK, Trovo, custom RTMP), native logins (no stream keys), unified multi-chat, custom canvases (horizontal/vertical, linked scenes), per-platform audio tracks (VOD safety), docks (Activity, Elements Control Center, Media Request, Multi-Chat), Windows support / Mac discontinued
- [x] 5.2 Verify frontmatter and internal links

## 6. Updates to existing files

- [x] 6.1 Update `overview.md` — correct SE.Live description to "OBS plugin" (was "desktop streaming app"), add Ground Control + Titanium brief mentions, link to `dashboard.md` as navigation entry point, bump `last-reviewed` to 2026-08-01
- [x] 6.2 Update `INDEX.md` — change StreamElements Tools row link from `overview.md` to `dashboard.md` (keep description accurate, e.g. add "and monetisation")

## 7. Verification

- [x] 7.1 Check all internal links in the 4 new + 2 updated files resolve (incl. dashboard → feature files and tips-and-merch → Streamer.bot triggers)
- [x] 7.2 Check all files have template frontmatter (title, category, type, platforms, price, url, last-reviewed)
- [x] 7.3 Confirm sidebar group/option coverage in dashboard.md matches the ground-truth `StreamElements Sidebar.md` exactly (count + names, including external flags)
- [x] 7.4 Confirm no channel-specific identifiers (e.g., `kameo_s`) appear in any doc
- [x] 7.5 Confirm zero-hallucination: every non-obvious fact traceable to official docs or live dashboard view; unverifiable items omitted
- [x] 7.6 Remove the working file `StreamElements Sidebar.md` from repo root
- [x] 7.7 Verify INDEX.md Tools table renders correctly with the new entry-point link

## 8. Live audit corrections (user-requested verification via logged-in CDP dashboard)

- [x] 8.1 Verified all sidebar pages via CDP: Data & reports (Dashboard, Activity feed, Revenue history), Streaming tools (Overlays, Overlays gallery, Elements, Media request, Desktop apps), Sponsorships (Campaigns, Payouts), Revenue (Merch, Tipping settings), Chatbot (8 pages), Loyalty (6 pages), Other (Profile page, Import)
- [x] 8.2 Corrected dashboard.md: Overlays gallery is an internal page (`/dashboard/themes`, Featured/Brand New/Most Popular/All), not external widgets.streamelements.com; Desktop apps lists SE.Live (Windows + macOS beta) and Ground Control
- [x] 8.3 Corrected se-live.md: macOS is beta (not discontinued); Ground Control companion app noted; platforms + install step updated
- [x] 8.4 Corrected media-request.md: refined "skip mid-track" → "skip the backup list mid-track upon incoming request" (verified in Advanced settings)
- [x] 8.5 Corrected tips-and-merch.md: SE.Merch is powered by Fourthwall; Payment Providers shows PayPal (SE.Pay/Stripe documented as additional provider); added verified Tipping settings list (Page Settings, Design, Tip Panel Setup, Tip Moderation, public tip link)
- [x] 8.6 Updated specs/stream-elements-se-live (macOS beta) and specs/stream-elements-revenue (PayPal/Fourthwall/SE.Pay framing)
- [x] 8.7 Final verification: all internal links resolve, no channel identifiers, no stale claims (discontinued/widgets.streamelements.com), Fourthwall + macOS beta + PayPal present
