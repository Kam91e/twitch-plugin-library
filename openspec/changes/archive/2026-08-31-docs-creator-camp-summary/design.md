## Context

Creator Camp (https://www.twitch.tv/creatorcamp/en/) is Twitch's official, structured learning surface. From Chrome exploration via `agent-browser` (open → snapshot -i -u → click @e19/@e20 → snapshot → screenshot) we enumerated:

- **Level 1:** 7 paths, 43 chapters, 128 min — Get to Know Twitch (3), Going Live (8), Establish Your Brand (4), Growing Your Community (7), Content Categories (9), Monetization (5), Copyrights & Your Channel (7)
- **Level 2:** 2 paths, 9 chapters, 20 min — Creator Sponsorships (5), Better Broadcasts (4)
- **Live Learning:** video-only sessions, to be skipped per user request (≈ excludes ~30% of site)
- Each chapter URL follows `https://www.twitch.tv/creatorcamp/en/<level>/<path>/<chapter>/` and content is primarily text; single embedded videos repeat the text and can be ignored. Total scope for extraction: 52 chapter pages.

Current repo has two doc surfaces: `plugins/` (Twitch Extensions) and `tools/` (web services, browser extensions). Creator Camp is neither — it is a *knowledge reference* and deserves a new top-level surface. User prefers `docs/` or `knowledge/` and wants a mix of Option A (per-chapter TL;DR 2-3 sentences), Option B (per-path synthesis 3-5 sentences), and Option D (tables with Chapter | Time | Link | Tags plus combined index).

Constraints: `AGENTS.md` zero-hallucination (every TL;DR must trace to its source URL or be marked unverified), English language, `last-reviewed` per file, no local image vendoring.

## Goals / Non-Goals

**Goals:**
- Provide `docs/creator-camp/` (primary; fallback `knowledge/creator-camp/` if docs/ is reserved) with 9 path files + `README.md` index — all 52 chapters summarized with A+B+D.
- Extract text deterministically via Chrome (`agent-browser get text` on main article node) with fallback `webfetch extract_main`; ignore single videos when they duplicate text.
- Preserve traceability: each chapter row and TL;DR cites its exact `creatorcamp` URL; `last-reviewed` set to extraction date.
- Keep navigation lightweight: README hosts combined Option D table across all 9 paths for quick scanning.

**Non-Goals:**
- Live Learning video sessions — explicitly excluded.
- Copy-paste of Twitch text — only TL;DR summaries (2-3 sentences) in own words plus link.
- Changes to `plugins/`, `tools/`, `INDEX.md`, `categories.md`, or existing `openspec/specs/` outside new capability.
- Screenshots or video transcriptions; embedded videos skipped per spec.

## Decisions

**Decision: Location `docs/creator-camp/` (9 files) over single-file summary.**
- Rationale: One `summary.md` with 52 TL;DRs is unreadable (~1500+ words). 9 path files (120-200 lines each) mirror Camp's own IA, keep each file focused, and allow `README.md` to act as Option D index. `docs/` is more standard than `knowledge/` (parallels GitHub Pages conventions) and sits cleanly alongside `plugins/`/`tools/`; `knowledge/` accepted as alias if maintainer prefers.
- Alternative: single `docs/creator-camp-summary.md` — rejected: poor scanability, hard to maintain.
- Alternative: under `tools/creator-camp/` — rejected: tools/ implies installable software, not knowledge.

**Decision: File-per-path with A+B+D internal structure.**
- Template per `level1/*.md` / `level2/*.md`:
  ```
  # Path Name
  > Path synthesis (B)
  | Chapter | Time | TL;DR (A) | Link (D) |
  ## Details
  ### Chapter Name — TL;DR + source link
  ```
- Rationale: Mix satisfies both scanners (tables) and readers (synthesis + per-chapter detail). Keeps spec testable (each path file and each TL;DR is a scenario).

**Decision: Chrome-first extraction.**
- Rationale: Camp is SPA-ish but renders static HTML reachable by `agent-browser snapshot -i -u` (52 URLs already collected as @e36..@e110). Using Chrome matches the user's request to "see how you explore on Chrome" and guarantees fidelity vs `curl`-only (7TV/BTTV were JS-rendered and curl failed, but Camp is server-rendered and fetchable). Fallback to `webfetch` for speed; video nodes (`<video>`, `<iframe>`) skipped if text already covers content.
- Alternative: pure `webfetch`/scraping — rejected: user explicitly wants visible Chrome walkthrough and Camp's carousels rely on JS for full enumeration.

**Decision: Source-tracing and English-only.**
- Every chapter entry includes its canonical URL (`https://www.twitch.tv/creatorcamp/...`) as link; if extraction fails, mark "could not be verified on creatorcamp directly" per `AGENTS.md` zero-hallucination rule. All output in English to match source and repo policy (prior decision with user).

**Decision: No spec modification, new capability only.**
- New capability `creator-camp-docs` — no MODIFIED/REMOVED requirements; existing streamlabs/betterttv specs untouched.

## Risks / Trade-offs

- **Volume / rate limits (52 Chrome sessions)** → Mitigation: Batch in 2 groups (Level 1: 43, Level 2: 9), reuse single browser session (open once, `agent-browser open <url>` per chapter without close), add `wait --load networkidle` per page.
- **Content drift (Twitch updates chapters)** → Mitigation: `last-reviewed` per file + README note; re-extraction is idempotent (overwrite TL;DRs).
- **Video skipping loses info** → Mitigation: Only skip when video duplicates text; if video contains unique info, add `Video: <title>` note and mark as unverified/transcription not provided.
- **Copyright fair-use** → Mitigation: TL;DR paraphrases, never copy article body; always link source; keep per-chapter length 2-3 sentences (≈ 60-90 words for 52 chapters = ~4k words total, well within fair use with attribution).
- **Folder name bikeshedding (docs/ vs knowledge/)** → Mitigation: Default `docs/creator-camp/`; change is isolated — rename is single `mv` if maintainer prefers the other name; no index dependencies.
- **Hallucination under 52-page volume** → Mitigation: Enforce `Source: https://www.twitch.tv/creatorcamp/...` per TL;DR; reviewer checks random 10% against live pages.

## Migration Plan

- No data migration. On apply: create `docs/creator-camp/` hierarchy (or `knowledge/...`), write 10 files (README + 9 paths). Optionally add link from root `README.md` "Docs" section.
- Rollback: delete `docs/creator-camp/` directory.
- No dependencies on other changes; can apply independently of archived `add-betterttv-7tv-tools`.

## Open Questions

- Final top-level name: `docs/` vs `knowledge/` — propose `docs/creator-camp/`; confirm with maintainer before apply.
- Whether root `README.md` should gain a "Creator Camp" entry linking to the index — optional, not required for spec.
- Screenshot policy: Camp has no CDN images to reuse; propose no images (text-only) to avoid external URL rot.
