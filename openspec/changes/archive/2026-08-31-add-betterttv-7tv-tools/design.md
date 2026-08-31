## Context

The Twitch Plugin Knowledge Library has two documentation surfaces: `plugins/` (Twitch Extensions installable from `dashboard.twitch.tv/extensions/*`, indexed in `INDEX.md`) and `tools/` (standalone software, web services, browser extensions, documented per `tools/_TEMPLATE.md`). The existing `plugins/loyalty-and-recognition/emotes-and-badges/7tv-emotes.md` documents 7TV as a Twitch Extension panel + browser extension hybrid with `url: https://7tv.app/`, already stretching the "Twitch Extension only" definition. BetterTTV (`https://betterttv.com`) has no coverage at all, despite being the most-installed emote platform and frequently cited in Alternatives.

The user request is to document **the web platforms themselves** (not the Twitch Extensions) at `https://7tv.app` and `https://betterttv.com`, with focus on **giving emotes**: both (A) adding ready-made emotes from the public library and (B) uploading custom emotes. Paid features should be mentioned only briefly. Output language must be English, screenshots must be external URLs only, and the user explicitly wants both files under `tools/` with a **duplicate** 7TV entry (plugin file stays, new tools file is a second perspective).

Stakeholders: beginner streamers (Quick Start), veteran streamers (Configuration, Tips). Constraint: Zero-hallucination policy (`AGENTS.md`) — every slot count, file limit, image format, and approval step must be sourced from the official dashboards or marked unverified.

## Goals / Non-Goals

**Goals:**
- Provide two verified, English-language `tools/` docs: `tools/chat-and-overlays/betterttv.md` and `tools/chat-and-overlays/7tv.md`, both following `tools/_TEMPLATE.md` structure.
- Cover both emote-giving workflows [A] and [B] in `Installation / Setup` with step-by-step instructions for viewers and streamers.
- Keep paid tiers to a single paragraph / bullet list per platform (Freemium note only).
- Preserve the existing plugin doc at `plugins/.../7tv-emotes.md` unchanged (intentional duplication for different audience entry points).
- Use `chat-and-overlays` category (already exists, matches `ghost-chat.md` / `poll-ma-pe.md` neighbors) with `type: "Browser Extension"` and appropriate `platforms`.

**Non-Goals:**
- Modifying `plugins/`, `INDEX.md`, `categories.md`, or `openspec/specs/` outside this change.
- Detailed pricing/comparison tables for Pro/Paid subscriptions beyond a brief mention.
- Downloading or vendoring screenshots; all images remain external URLs.
- Creating automation, bots, or Twitch Extension installation guides (those belong in `plugins/`).

## Decisions

**Decision: Location `tools/chat-and-overlays/` (not `tools/emotes/` or `plugins/`).**
- Rationale: `chat-and-overlays` already houses chat-enhancement tools (`ghost-chat.md` renders BTTV/FFZ/7TV emotes; `poll-ma-pe.md` is a web chat tool). BTTV/7TV are chat enhancers (browser extension injecting emotes into Twitch chat + web dashboard). Reusing an existing category avoids a new taxonomy entry and keeps discovery co-located. Creating `tools/emotes/` would fragment navigation for a two-file addition.
- Alternative considered: new `tools/emotes/` folder or `plugins/emotes-and-badges` reuse. Rejected: user explicitly requested `tools/` and duplicate 7TV; `plugins/` would conflate Extension vs Platform semantics.

**Decision: Two separate tool docs + intentional duplicate for 7TV.**
- Rationale: Each platform has distinct UX (e.g., 7TV Emote Sets + 1000 slots + `;` picker + `/add` commands vs BTTV Channel/Personal/Shared emote types + approval queue). Separate files allow precise `Twitch Integration` and `Configuration` sections. Duplicate is user-requested and architecturally justified: `plugins/7tv-emotes.md` answers "how to install the Twitch panel", `tools/7tv.md` answers "how to manage emotes on 7tv.app" — different entry points. No symlink; independent markdown files.
- Alternative: single combined `emote-platforms.md`. Rejected: violates one-tool-per-file convention, makes frontmatter (`url`, `price`) ambiguous.

**Decision: Frontmatter types per `tools/_TEMPLATE.md`.**
- `category: "chat-and-overlays"`, `type: "Browser Extension"`, `platforms: [Chrome, Firefox, Edge, Opera]`, `price: "Freemium"`, `url` = platform root. `type` chosen as Browser Extension because the primary integration is the browser extension injecting into Twitch chat; web dashboard is secondary. Alternative `type: "Web service"` would understate the extension requirement (viewers see plain text without it).

**Decision: Template mapping for emote-giving focus.**
- `Overview` = what the platform is (web + extension hybrid).
- `Key Features` = emote types, slot semantics, formats, picker.
- `Installation / Setup` = three subsections: For Viewers (extension install), For Streamers — Adding Ready [A], For Streamers — Uploading Own [B]. This deviates slightly from template's single "setup" but preserves the beginner <2min promise.
- `Twitch Integration` = IRC/API injection, visibility dependency on extension, interaction with native Twitch emotes.
- `Configuration` = dashboard settings (Active/Default Set, mod permissions) + extension settings (scale, FFZ toggle, highlight).
- Paid note lives as a short subsection under Configuration or Tips, not a full section.

**Decision: Source verification strategy.**
- Researcher must open https://betterttv.com/dashboard and https://7tv.app, capture current slot limits, upload constraints (max MB, allowed formats PNG/GIF/WebP/WebM/AVIF), and approval flow. Each fact gets an inline source comment or footnote referencing the URL. Unverifiable claims marked "could not be verified" per `AGENTS.md` rule.

## Risks / Trade-offs

- **Drift between duplicate 7TV docs** → Mitigation: note in both files' Alternatives that the other perspective exists (`plugins/.../7tv-emotes.md` vs `tools/.../7tv.md`) with cross-link and "different use case" guidance; accept small maintenance cost (two files, ~150 lines each).
- **Slot/price data volatility (BTTV Pro limits change)** → Mitigation: phrase as "as of last-reviewed" and cite source; keep paid mention brief to minimize churn; set `last-reviewed` to creation date and expect periodic refresh.
- **Screenshot external URL rot** → Mitigation: prefer `cdn.7tv.app` / `cdn.betterttv.net` / `7tv.app` / `betterttv.com` origins; avoid third-party blogs (e.g., hollyland.com used in old plugin doc); no local vendoring per policy.
- **Scope creep into Twitch Extension docs** → Mitigation: explicitly exclude `dashboard.twitch.tv/extensions` install path from `tools/` docs; link to plugin doc instead.
- **Hallucination risk under time pressure** → Mitigation: require researcher to include Verification Notes section in PR description (list of source URLs per fact); reviewer rejects unverified slot/format claims.

## Migration Plan

- No data migration. On apply: create two new markdown files under `tools/chat-and-overlays/`. No index regeneration needed (`INDEX.md` indexes only `plugins/`). Rollback: delete the two files.
- No dependency on other changes; can be applied independently. Existing `document-layout-element-buttons` change is unrelated.

## Open Questions

- Exact `type` value for hybrid platforms — confirm "Browser Extension" is preferred over "Web service" with maintainers (current decision: Browser Extension; can switch to "Web service" or "Browser Extension + Web" if template allows).
- Whether to include a small comparison table BTTV vs 7TV vs FFZ in each file's Alternatives or keep cross-links minimal — current decision: brief cross-links only, no big matrix, to stay focused on "giving".
- Screenshot selection: which external URLs are most stable/long-lived (7tv.app docs vs cdn) — to be resolved during implementation via quick verification pass.
