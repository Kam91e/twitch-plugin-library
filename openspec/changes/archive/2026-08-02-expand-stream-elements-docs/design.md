# Design — expand-stream-elements-docs

## Context

The vault documents StreamElements with 4 top-level files under `tools/streaming-platforms/stream-elements/`: `overview.md`, `overlays-and-alerts.md`, `chatbot-and-loyalty.md`, `analytics-and-sponsorships.md`. The INDEX.md Tools table links StreamElements to `overview.md`. This change expands coverage to the platform's major dashboard pages (Dashboard, Activity Feed, Revenue pages, Media Request, Desktop apps/SE.Live), following the same pattern used for the recent Streamlabs Desktop expansion (per-page documentation + INDEX entry + automation bridge).

Key inputs: the user's ground-truth sidebar capture (`StreamElements Sidebar.md` at repo root), official StreamElements docs (support.streamelements.com, docs.streamelements.com, product pages), and live inspection of the user's logged-in dashboard via a CDP-connected Chrome (port 9222, persistent profile at `~/.profiles/streamelements`). Zero-hallucination policy applies: every fact must be traceable to a source; unverifiable details are omitted or flagged.

## Goals / Non-Goals

**Goals:**
- Document the StreamElements dashboard hub: sidebar navigation, Dashboard page, Activity Feed, first-setup wizard
- Document Revenue pages (Tipping settings, SE.Tips/SE.Pay/SE.Merch, Revenue history) with the Streamer.bot automation bridge
- Document the Media Request page (commands, queue, free/tipped requests, playback)
- Document the SE.Live OBS plugin (multi-streaming, multi-chat, canvases, audio tracks, docks)
- Correct the SE.Live misdescription in `overview.md` and make `dashboard.md` the new entry point (INDEX.md + overview.md links)
- Keep every fact verifiable (official docs + live dashboard inspection) and all content in English

**Non-Goals:**
- No changes to the automation reference (`tools/automation/streamer-bot/`) — the bridge is read-only links from SE docs
- No split of Chatbot/Loyalty groups into per-page files (existing 2 files already cover their 14 sidebar pages)
- No standalone files for Ground Control or Titanium (separate SE products) — only brief mentions in `overview.md`
- No screenshots stored locally (external URLs only, per repo rules)

## Decisions

- **D1 — dashboard.md is the entry point.** INDEX.md Tools row and `overview.md` link to `dashboard.md` (replacing the direct overview link in INDEX). `overview.md` remains the feature/overview page. This mirrors how each tool gets one primary index target while detailed pages hang off the hub.
- **D2 — Sidebar ground truth wins over web research.** The user's actual sidebar (7 groups: Data & reports, Streaming tools, Sponsorships, Revenue, Chatbot, Loyalty, Other + FAQ/Documentation external links) is authoritative. Where earlier web research suggested different labels ("My Overlays", "Alerts & Widgets"), the real sidebar is documented instead.
- **D3 — Sidebar described in `dashboard.md` as group tables.** Each group: `| Option | What it does | Where it leads |`, with an `External` flag and URLs for Chatstats (stats.streamelements.com), FAQ, Documentation. Channel-specific identifiers (e.g., the `kameo_s` in the Chatstats URL) are NOT copied into docs — written generically ("your channel's stats page").
- **D4 — Activity Feed is a section in `dashboard.md`, not a separate file.** It is part of the "Data & reports" overview cluster (filters, replay alerts, ad control, bot status, quick settings).
- **D5 — Revenue pages combined into `tips-and-merch.md`.** Tipping settings, SE.Tips, SE.Pay (Stripe), SE.Merch, and Revenue history share one file because they are one sidebar group ("Revenue") with interrelated setup (Stripe connection flows into tipping, tips flow into revenue history).
- **D6 — Media Request is its own file (`media-request.md`).** It is a substantial page with a full command set and queue system, warranting dedicated treatment (analogous to OBS audio-and-hotkeys depth).
- **D7 — SE.Live documented as an OBS plugin (`se-live.md`), correcting `overview.md`.** SE.Live is a plugin/dock layer inside OBS Studio (Windows; Mac discontinued/beta), NOT a standalone "desktop streaming app". It provides free unlimited multi-streaming (~7 platforms), unified multi-chat, custom canvases, per-platform audio tracks, and docks.
- **D8 — Automation bridge in `tips-and-merch.md`.** Links to `tools/automation/streamer-bot/triggers/integrations/streamelements.md` (triggers: Tip, Merch, Connected, Disconnected) and `sub-actions/` index where relevant. Read-only — no edits to Streamer.bot docs. Note: StreamElements has triggers only (no sub-actions), unlike Streamlabs Desktop.
- **D9 — Ground Control + Titanium are mentions in `overview.md` only.** Separate SE products (multi-stream companion app, UGC video tool), not part of the dashboard pages; brief mentions with links, no dedicated files.
- **D10 — Frontmatter per `tools/_TEMPLATE.md`.** All new files: `category: "streaming-platforms"`, `type: "Web platform"` (dashboard/revenue/media-request) or `type: "Desktop application"`/plugin framing for se-live (SE.Live is a plugin; type reflects that it is desktop software), `price: "Free"`, `url: "https://streamelements.com"`, `last-reviewed: 2026-08-01`. Existing files get `last-reviewed` bumped.
- **D11 — Working file removal.** `StreamElements Sidebar.md` (repo root) is the ground-truth input and is deleted after implementation, same pattern as `Streamlabs Sources`.
- **D12 — Live dashboard inspection via CDP.** During implementation, pages are opened in the user's logged-in Chrome (port 9222) and snapshotted via `agent-browser --cdp 9222`; findings feed the docs. The browser runs as an independent `setsid` process so agent-browser commands cannot restart/close it (headless-restart issue observed during exploration).

## Risks / Trade-offs

- **UI drift**: Dashboard sidebar/URLs may change over time. Mitigated by `last-reviewed` dates and the ground-truth capture.
- **Zero-hallucination limits**: Some page internals may not be visible without interaction (e.g., specific settings panels). Those sections are written from official docs where possible; anything unverifiable is omitted or explicitly flagged rather than invented.
- **Two sources to reconcile**: official docs vs live UI. The live UI (user's account) is authoritative for the sidebar and page existence; official docs are authoritative for settings details.
- **No main specs to sync**: `openspec/specs/` does not exist in this repo; delta specs are planning artifacts only, and no sync step is needed at archive time (same as the Streamlabs expansion).
