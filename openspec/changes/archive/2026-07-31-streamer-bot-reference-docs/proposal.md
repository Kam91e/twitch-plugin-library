# streamer-bot-reference-docs

## Why

Streamer.bot is the most powerful automation tool in the library, but its documentation (`tools/automation/streamer-bot/`) covers only the conceptual level (overview, actions system, integrations). The tool exposes 350+ sub-actions and 413+ triggers — the actual building blocks streamers use daily — and none of them are documented locally. Beginners cannot find "how do I send a chat message" and veterans cannot look up parameter details without leaving the vault. We need a complete, navigable reference.

## What Changes

- **New `sub-actions/` reference** (`tools/automation/streamer-bot/sub-actions/`): every official sub-action group documented across the 14 top-level categories (core, twitch, elgato, obs-studio, integrations, streamlabs-desktop, kick, meld-studio, youtube, speakerbot, streamfog, settings, streamerbot, polypop), mirroring the official docs hierarchy.
- **New `triggers/` reference** (`tools/automation/streamer-bot/triggers/`): every official trigger group across the 10 top-level categories (twitch, elgato, integrations, core, youtube, kick, obs-studio, meld-studio, streamlabs-desktop, custom).
- **Category index files** (`sub-actions/index.md`, `triggers/index.md`): navigation hubs; micro-groups (≤3 entries) are documented inline as H2 sections instead of separate files.
- **New `variables.md`**: global variable reference (system, user, and per-action variables).
- **Refactor `actions-system.md`** into a conceptual intro with links to the new reference folders (no content loss; details migrate).
- **Screenshots are NOT added** (per AGENTS.md external-URLs-only rule; the reference is text-based).
- **BREAKING** for internal navigation: any links pointing to old `actions-system.md` sections are retargeted to the new reference files.

## Capabilities

### New Capabilities
- `streamer-bot-sub-actions`: Complete reference for all Streamer.bot sub-actions, organized by official category hierarchy, with per-entry location, description, parameters, and variables.
- `streamer-bot-triggers`: Complete reference for all Streamer.bot triggers, organized by official category hierarchy, with per-entry location, description, parameters, and variables.
- `streamer-bot-variables`: Reference for Streamer.bot global variables (system and user scope), including syntax, scope rules, and where variables are surfaced per action.

### Modified Capabilities
<!-- None: openspec/specs/ is empty; all capabilities are new. -->

## Impact

- **Files created**: ~120 new markdown files under `tools/automation/streamer-bot/sub-actions/` and `triggers/`, plus `variables.md`.
- **Files modified**: `tools/automation/streamer-bot/actions-system.md` (refactor to intro), `tools/automation/streamer-bot/overview.md` (nav links), any vault files linking to streamer-bot docs (`INDEX.md` if needed).
- **Source of truth**: official Streamer.bot docs (`https://docs.streamer.bot/`, raw markdown via `/raw/api/sub-actions/...` and `/raw/api/triggers/...`). Zero-hallucination policy applies: every entry is traceable to a docs URL.
- **No code, no dependencies, no runtime changes** — pure documentation expansion.
