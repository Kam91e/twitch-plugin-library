# Writer Spec — Streamer.bot Reference (sub-actions/ & triggers/)

This file is the **format contract** for every writer lane implementing `streamer-bot-reference-docs`. Read it fully before writing any file.

## Target Locations

- Sub-actions reference root: `/home/kameo/misc/Twitch/tools/automation/streamer-bot/sub-actions/`
- Triggers reference root: `/home/kameo/misc/Twitch/tools/automation/streamer-bot/triggers/`
- Corpus (single source of truth — NEVER invent content): `/tmp/opencode/corpus/sub-actions/` and `/tmp/opencode/corpus/triggers/`
- File allocation (which entries go in which file): `/home/kameo/misc/Twitch/openspec/changes/streamer-bot-reference-docs/file-map.md`
- Vault template: `/home/kameo/misc/Twitch/tools/_TEMPLATE.md`

## Zero-Hallucination Policy (STRICT)

- Every description, parameter, and variable MUST come from the corresponding corpus file at `/tmp/opencode/corpus/{sub-actions|triggers}/<slug>.md`.
- If the corpus page does not document a section, write **"Not documented in official docs"** — never invent parameters, variables, or behavior.
- If the corpus page is missing entirely, write `> I couldn't verify this entry` as the description and flag it in your report.
- `Location` is derived from the corpus file path (see rule below) — it is not invented.

## File Frontmatter

Every reference file starts with:

```yaml
---
title: "Streamer.bot — <Category>: <Group>"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions        # or "triggers"
  - <category-slug>    # e.g. twitch, core, elgato
source: "https://docs.streamer.bot/api/<sub-actions|triggers>/<category>[/<group>]"
last-reviewed: 2026-07-31
---
```

- Category files (e.g. `sub-actions/settings.md`): `title: "Streamer.bot — Sub-Actions: Settings"`, source = category URL.
- Group files (e.g. `sub-actions/core/actions.md`): `title: "Streamer.bot — Sub-Actions: Core > Actions"`, source = group URL.
- Index files (`sub-actions/index.md`, `triggers/index.md`): `title: "Streamer.bot — Sub-Actions"` / `"Streamer.bot — Triggers"`, source = `https://docs.streamer.bot/api/sub-actions` / `https://docs.streamer.bot/api/triggers`, no category tag.

## Page Structure

```markdown
---
<frontmatter>
---

# <H1: Category — Group>        (e.g. "Core — Actions"; for category files just the category name)

> One-line description of what this group of sub-actions/triggers does.

## <Entry Name>                  (e.g. "Run Action" — human-readable, from corpus H1)

**Location:** `<Menu > Path > Entry>`    (see Location rule)
**Description:** <from corpus tagline `> ...`, or first paragraph>

**Parameters:** <from corpus `## Parameters` section, condensed>  | "Not documented in official docs"

**Variables:** <from corpus `<variables-description>` block, condensed>  | "Not documented in official docs"
```

- Entry heading uses the corpus page's H1 title (e.g. `# Run Action` → `## Run Action`).
- Keep entries compact: 3-5 lines each. No prose beyond the fields.
- Entries are ordered exactly as listed in `file-map.md` for that file.

## Location Rule

Derived from the corpus relative path. Take the path segments after the top-level category, Title-Case them, and join with ` > `. Append the entry name.

Examples:
- `core/actions/run-action.md` → `Core > Actions > Run Action`
- `twitch/chat/send-message-to-channel.md` → `Twitch > Chat > Send Message`
- `obs-studio/get-current-scene.md` → `OBS Studio > Get Current Scene`
- `elgato/camera-hub/prompter/set-brightness.md` → `Elgato > Camera Hub > Prompter > Set Brightness`

Category display names: `core`→`Core`, `twitch`→`Twitch`, `elgato`→`Elgato`, `integrations`→`Integrations`, `obs-studio`→`OBS Studio`, `streamlabs-desktop`→`Streamlabs Desktop`, `kick`→`Kick`, `meld-studio`→`Meld Studio`, `youtube`→`YouTube`, `speakerbot`→`Speaker.bot`, `streamfog`→`Streamfog`, `settings`→`Settings`, `streamerbot`→`Streamer.bot`, `polypop`→`PolyPop`, `custom`→`Custom`, `camera-hub`→`Camera Hub`, `wave-link`→`Wave Link`, `stream-deck`→`Stream Deck`.

The final segment (entry name) uses the corpus H1 title verbatim (e.g. `send-message-to-channel` → `Send Message`).

## Index Files

`sub-actions/index.md` and `triggers/index.md`:
- Intro paragraph (2-3 sentences): what the reference covers, link to official docs.
- A "## Categories" section listing every category/folder with a one-line description and a relative link to its index file or file (e.g. `[Core](core/index.md)`, `[Settings](settings.md)`).
- Inline H2 sections for micro-entries documented directly in the index (per file-map.md): `## <Entry>` with the standard fields.

## Category Index Files (e.g. `core/index.md`)

- Intro paragraph for the category.
- `## Categories` / `## Groups` listing group files with links.
- Inline H2 sections for micro-groups (per file-map.md) with the standard fields, using `### <Entry>` inside each micro-group's H2.

## Language

English only (AGENTS.md). UI menu terms stay as-is (`Twitch > Chat > Send Message`).

## Verification Before Report

1. Every file in your lane exists at the target path.
2. Every entry from file-map.md for your lane is present in the file.
3. Every entry has Location + Description fields.
4. No entry invents Parameters/Variables content.
5. Report: list of files written + any corpus pages that were missing or empty.
