## Why

Streamers increasingly rely on third-party emote platforms (BetterTTV and 7TV) to extend Twitch chat beyond native sub emotes. The knowledge library already documents 7TV as a Twitch Extension panel (`plugins/loyalty-and-recognition/emotes-and-badges/7tv-emotes.md`) but has **no standalone coverage of the web platforms** at `https://betterttv.com` and `https://7tv.app` — where the core "giving emotes" workflow lives (browsing/adding ready emotes and uploading custom ones). BetterTTV has zero coverage. Viewers and beginner streamers need a clear, verified guide for the browser-extension + web-dashboard flow, not just the Twitch Extension install path.

## What Changes

- Create `tools/chat-and-overlays/betterttv.md` — new tool doc for BetterTTV platform (https://betterttv.com), covering viewer install, streamer flows for **adding ready emotes from library [A]** and **uploading own emotes [B]**, plus configuration and paid-tier mention.
- Create `tools/chat-and-overlays/7tv.md` — new tool doc for 7TV platform (https://7tv.app), **duplicate** of the existing plugin coverage but reframed as a `tools/` web-platform doc with same dual focus ([A] + [B]). Intentionally coexists with `plugins/loyalty-and-recognition/emotes-and-badges/7tv-emotes.md`; the plugin file stays unchanged.
- Both files follow `tools/_TEMPLATE.md` structure (Overview, Key Features, Installation/Setup, Twitch Integration, Configuration, Tips & Tricks, Alternatives) and include only external screenshot URLs (no local assets).
- Both files are written in **English**, `price: "Freemium"`, `last-reviewed` set to creation date, paid features mentioned only as a brief note (not detailed pricing).
- Zero-hallucination: every slot count, file limit, format, and approval step must cite a source URL from the respective platform (betterttv.com / 7tv.app) or be marked unverified.

## Capabilities

### New Capabilities
- `betterttv-tool`: Documentation capability for the BetterTTV web platform + browser extension as a `tools/` entry, including emote library and custom upload workflows.
- `seven-tv-tool`: Documentation capability for the 7TV web platform + browser extension as a `tools/` entry (duplicate perspective on 7TV), including emote library, Emote Sets, and custom upload workflows.

### Modified Capabilities
<!-- No existing spec requirements are changed. The existing plugin spec for 7TV Emotes is untouched; tools/ is a separate documentation surface. -->

## Impact

- **New files**: `tools/chat-and-overlays/betterttv.md`, `tools/chat-and-overlays/7tv.md` (2 files, ~150 lines each expected).
- **No breaking changes**: `plugins/` untouched; `INDEX.md` (plugin index) not regenerated (tools/ is not indexed there). No `categories.md` change (tools categories are folder-based, `chat-and-overlays` already exists).
- **Dependencies**: Research on https://betterttv.com and https://7tv.app for verified facts; reuse of `tools/_TEMPLATE.md` and patterns from `ghost-chat.md` / `poll-ma-pe.md`.
- **Systems affected**: Documentation site navigation only; no runtime code, no scripts.
