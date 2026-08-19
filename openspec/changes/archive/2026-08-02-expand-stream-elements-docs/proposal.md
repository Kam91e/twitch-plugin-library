# Proposal — expand-stream-elements-docs

## Why

The StreamElements documentation in the vault covers only the top-level features (4 files: overview, overlays-and-alerts, chatbot-and-loyalty, analytics-and-sponsorships) but omits the platform's major dashboard pages and monetisation/desktop capabilities. Streamers using StreamElements cannot find documented guidance on the dashboard itself, tipping/merch (SE.Tips, SE.Pay, SE.Merch), Media Request (song requests), or the SE.Live OBS plugin — all core parts of the platform. The `overview.md` also misdescribes SE.Live as a "desktop streaming app" when it is actually an OBS plugin.

## What Changes

- **New file `dashboard.md`** — becomes the StreamElements entry point (linked from INDEX.md and overview.md). Describes the `streamelements.com/dashboard` hub: the sidebar navigation (ground truth from the user's actual sidebar, all 7 groups + external links), the Dashboard page (top bar, quick settings, bot status), the Activity Feed page, the Other group (Chatstats, Profile page), and the first-setup wizard.
- **New file `tips-and-merch.md`** — Revenue pages: Tipping settings, SE.Tips (tipping page, SE.Pay via Stripe, PayPal, chargeback protection), SE.Merch, Revenue history. Includes the Streamer.bot automation bridge (triggers for Tip, Merch, Connected/Disconnected).
- **New file `media-request.md`** — the Media Request page: `!sr`/`!songrequest` command set, queue & moderation, free vs tipped requests, loyalty costs, backup playlist, skip voting, YouTube-only source, SE.Live dock integration.
- **New file `se-live.md`** — the Desktop apps page / SE.Live OBS plugin: free unlimited multi-streaming (~7 platforms), unified multi-chat, custom canvases (horizontal/vertical), per-platform audio track selection, docks (Activity, Elements Control Center, Media Request, Multi-Chat), Windows support (Mac beta).
- **Update `overview.md`** — correct the SE.Live description ("OBS plugin", not "desktop app"), mention Ground Control and Titanium as separate products, link to `dashboard.md` as the navigation entry point, bump `last-reviewed` to 2026-08-01.
- **Update `INDEX.md`** — StreamElements Tools row now links to `dashboard.md` (new entry point) instead of `overview.md`.
- **Remove working file** — delete the ground-truth file `StreamElements Sidebar.md` from the repo root after implementation (same pattern as `Streamlabs Sources`).

## Capabilities

### New Capabilities
- `stream-elements-dashboard`: The dashboard hub page — sidebar navigation map, Dashboard page, Activity Feed, first-setup wizard.
- `stream-elements-revenue`: Tipping settings, SE.Tips/SE.Pay/SE.Merch, revenue history, Streamer.bot automation bridge.
- `stream-elements-media-request`: The Media Request page — commands, queue, free/tipped requests, playback options.
- `stream-elements-se-live`: The SE.Live OBS plugin — multi-streaming, multi-chat, canvases, audio tracks, docks.

### Modified Capabilities
- (none — no existing main specs in `openspec/specs/`)

## Impact

- **Files created**: `tools/streaming-platforms/stream-elements/{dashboard,tips-and-merch,media-request,se-live}.md`
- **Files updated**: `tools/streaming-platforms/stream-elements/overview.md`, `INDEX.md`
- **File removed**: `StreamElements Sidebar.md` (repo root, ground truth working file)
- **Links added**: dashboard.md ↔ all feature files (wiki links); tips-and-merch.md → `tools/automation/streamer-bot/triggers/integrations/streamelements.md` (read-only bridge, no changes to automation docs)
- **Content**: English only, per repo rules. Facts sourced from official StreamElements docs (support.streamelements.com, docs.streamelements.com, product pages) and the user's logged-in dashboard (viewed via browser) — zero-hallucination policy
