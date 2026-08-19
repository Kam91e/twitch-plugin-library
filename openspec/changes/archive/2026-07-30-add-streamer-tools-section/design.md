## Context

The repository currently documents only **Twitch Extensions** (plugins/ directory), following a strict template with YAML frontmatter that maps to Twitch's official extension taxonomy. Streamers use many critical tools that exist outside this ecosystem — desktop apps, web services, automation platforms.

Our research into streaming production workflows identified five high-value tools that don't fit the existing plugin structure. Rather than force them into the plugin template, we introduce a parallel `tools/` section with its own structure and taxonomy.

## Goals / Non-Goals

**Goals:**
- Create a `tools/` directory with categorized subdirectories for non-extension streaming tools
- Define a documentation template for tools (distinct from the plugin template)
- Document 5 initial tools: Streamer.bot, StreamElements, OBS Studio, poll.ma.pe, Ghost Chat
- Update INDEX.md to include tools alongside plugins
- Provide clear guidance for future tool additions

**Non-Goals:**
- Changing the existing plugins/ structure or documentation
- Merging tools and plugins into a single taxonomy
- Creating scripts to automate tools documentation (future concern)
- Documenting all possible streaming tools (only the initial 5)

## Decisions

### Decision 1: Separate `tools/` directory (not merged into plugins/)

**Choice:** New top-level `tools/` directory alongside existing `plugins/`.

**Rationale:**
- Different metadata requirements (no Twitch Extension dashboard URL, no official category)
- Different audience expectations (tools are installed outside Twitch)
- Clean separation avoids polluting the plugin taxonomy
- The existing AGENTS.md, categories.md, and build scripts reference plugins specifically

### Decision 2: Lightly categorized subdirectories

**Choice:** Four functional subcategories inside `tools/`.

```
tools/
├── streaming-software/         # Core broadcast software
│   └── obs-studio/            # folder — multiple files
├── streaming-platforms/        # All-in-one platforms
│   └── stream-elements/       # folder — multiple files
├── automation/                 # Bots and automation
│   └── streamer-bot/          # folder — multiple files
└── chat-and-overlays/         # Chat overlays, web tools
    ├── ghost-chat.md          # single file (simpler tool)
    └── poll-ma-pe.md          # single file (simpler tool)
```

**Rationale:**
- Flat would become messy as more tools are added
- Too many categories would over-engineer for the initial 5 tools
- These 4 groups are distinct in what problem they solve
- Easy to add new categories later

### Decision 3: Subfolders for large tools — files describe tool components

**Choice:** Complex tools get their own subfolder with multiple files organized by the tool's own components/elements. Simpler tools stay as single `.md` files.

```
# Complex tool → folder with component files
tools/streaming-platforms/stream-elements/
├── overview.md                 # Introduction, account setup, Twitch connection
├── overlays-and-alerts.md      # Widget library, OBS Browser Source, alert system
├── chatbot-and-loyalty.md      # Chatbot commands, loyalty points, mini-games
└── analytics-and-sponsorships.md  # Statistics, sponsorship marketplace

# Simpler tool → single file
tools/chat-and-overlays/poll-ma-pe.md
```

**File organization principles:**
- Files are named after **tool components**, not after use cases — no "tournament-" or "how-to-" prefixed names
- Each file covers one coherent aspect of the tool (e.g., "actions system", "overlays", "sources")
- Tournament relevance is woven into the component descriptions, not separated into dedicated files
- `overview.md` is the entry point: covers what the tool is, installation, and first-time setup

**Tools with folders:** Streamer.bot, OBS Studio, StreamElements
- Each has 3+ distinct feature areas worthy of dedicated documentation
- StreamElements upgraded from single file because it's a deep platform (overlays, chatbot, loyalty, analytics, sponsorships)

**Tools as single files:** Ghost Chat, poll.ma.pe
- Focused purpose, well-covered in one document each

### Decision 4: Separate documentation template for tools

**Choice:** Custom YAML frontmatter + sections tailored for tools, not plugins.

**Tool frontmatter fields:**
```yaml
---
title: "Tool Name"
category: "automation"         # Subfolder name in tools/
type: "Desktop application"    # Desktop / Web / Service / Browser Extension
platforms:                     # What OS it runs on
  - Windows
  - macOS
  - Linux
price: "Free"                  # Free / Freemium / Paid
url: "https://example.com"
repo: "https://github.com/..." # If open source
last-reviewed: 2026-07-30
---
```

**Tool document sections (for single-file tools & overview.md):**
1. **H1 heading** — tool name
2. **Tagline** — one-sentence description
3. **Overview** — paragraph explanation of what it does
4. **Key Features** — bullet list of main capabilities
5. **Installation / Setup** — step-by-step setup guide
6. **Twitch Integration** — how it connects to Twitch
7. **Configuration** — detailed settings and options (for power users)
8. **Tips & Tricks** — pro tips, cross-tool integrations
9. **Alternatives** — comparable tools with guidance on when to choose them

This template lives at `tools/_TEMPLATE.md`.

For **folder-based tools** (multi-file), `overview.md` follows the same template. Additional files cover one tool component each (e.g., `integrations.md`, `commands-system.md`, `sources.md`) and use the following structure:
1. **H1 heading** — component name
2. **Overview** — what this component does
3. **Configuration** — how to set it up
4. **Reference** — detailed reference (if applicable)
5. **Tips** — pro tips for this component

### Decision 5: INDEX.md integration

**Choice:** Add a "Tools" section to INDEX.md with a separate table, clearly distinguished from plugins.

**Rationale:** Users browsing the index can see both plugins and tools in one place, with clear visual separation.

### Decision 6: No build script changes initially

**Choice:** The initial 5 tools are added manually. `rebuild-index.js` and `validate-links.js` can be updated in a future change.

**Rationale:** These scripts currently only scan `plugins/`. Updating them to also scan `tools/` is straightforward but not required for the first 5 documents.

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| **Scope creep** — request to document all streaming tools | Explicit non-goal: only the initial 5. Each tool requires research and verification. |
| **Boundary confusion** — tools that also have Twitch Extensions (e.g., StreamElements) | Clear guidance: the tool doc covers the platform, the plugin doc covers the specific Twitch Extension. Cross-link where relevant. |
| **Stale documentation** — tools change faster than plugins | Set `last-reviewed` in frontmatter; encourage periodic audits. |
| **Template inconsistency** — tools are diverse and resist uniform template | The template is recommended but flexible; use judgment for tool-specific sections. |
| **INDEX.md duplication** — manual edits may conflict with auto-generated plugin index | Add tools section manually below the auto-generated plugin section. Future script update can automate. |
