## Context

Streamer.bot's left navigation has eight top-level tabs. Six are documented as UI Flow References (`platforms.md`, `services.md`, `servers-clients.md`, `voice-control.md`, `midi.md`, `settings.md`), all built on the same pattern: landing page capture + per-section panel captures via a WSL-driven `powershell.exe` UIA pipeline, screenshots verified by @observer, facts traceable to evidence files in `/mnt/d/Twitch/shots/`.

**Stream Apps** is the missing one. Current state:
- Landing page captured: `Stream-Apps-uia.txt/.png` — four apps with descriptions (OBS Studio, Streamlabs Desktop, Meld Studio, PolyPop)
- OBS Studio panel captured: `OBS-Studio-uia.txt/.png` — connection grid (Host/Auto Connect/Reconnect/Retry/Status) + "OBS Information"
- Streamlabs Desktop, Meld Studio, PolyPop panels: **no captures**
- Add-connection flows: **no captures**
- PolyPop docs gap: only `PolyPop > Trigger Alert` in `sub-actions/index.md` — no sub-actions page, no triggers page
- Streamfog: documented in `sub-actions/streamfog/index.md` (official docs) but **absent from the v1.0.4 app landing** (v1.0.5-only) — out of scope for the app-reference page

Evidence folder `/mnt/d/Twitch/shots/`: 791 files / 152 MB. Exactly 61 files are cited in the library (all exist — verified with brace+range expansion). ~49 tooling files (`.ps1` ×47, `.cs`/`.dll` ×2) are the capture pipeline. ~681 files (~147 MB) are unreferenced intermediate/diagnostic states.

## Goals / Non-Goals

**Goals:**
- Produce `stream-apps.md` — landing + four app panels with add-connection flows, right-click menus, dropdowns, dialogs; app-evidence traceability; `## Evidence gaps`
- Close the PolyPop documentation gap (sub-actions + triggers pages)
- Clean `/mnt/d/Twitch/shots/` in two stages (diagnostic junk now; all unreferenced after the page lands) with a validator proving no cited file is ever deleted
- Integrate: `overview.md` UI Flow References link; `validate-links.js` passes

**Non-Goals:**
- Documenting Streamfog as an app panel (not in v1.0.4 app; already covered in sub-actions docs)
- Re-capturing OBS Studio panel or the landing page (existing evidence suffices)
- Touching any cited evidence file (61 protected files stay regardless of cleanup stage)
- Any application-code changes

## Decisions

### D1: Follow the established UI Flow Reference pattern for `stream-apps.md`

Structure mirrors `settings.md`/`platforms.md`: frontmatter (title/category/type/tags/source/app-evidence/last-reviewed), landing overview (4 apps + descriptions), one `## <App>` section per panel (content top-to-bottom, control types, left-click/right-click, dropdowns, dialogs), `## Evidence gaps`, `## Docs coverage`.
- **Rationale:** consistency with the six existing references; readers already know the shape.
- **Alternative considered:** a single combined "app connection" doc — rejected, loses per-app depth (add flows differ per app).

### D2: Capture pipeline — reuse existing WSL + UIA scripts, new `streamapps-*` evidence naming

Extend/reuse `settings-click.ps1`/`settings-probe.ps1`/`settings-uiact.ps1`/`settings-dump-all.ps1` (or add thin `streamapps-*` wrappers) to:
1. Click each app card on the landing → panel dump (`streamapps-<app>-uia.txt` + `.png`)
2. Probe add/connect flow: add-instance button/dialog → fill → confirm → row appears (`streamapps-<app>-add-*`)
3. Right-click menus on grid rows + any dialogs (`streamapps-<app>-rclick-*`)
4. Deep dumps with control types (UIA AutomationIds) where needed
5. Screenshots verified by @observer (reuse obs-1/obs-2 sessions where context matches)
- **Rationale:** proven pipeline (8 prior panels); output naming convention `streamapps-*` avoids colliding with `settings-*`/`ui-*` prefixes.
- **Constraint:** settings changes are documented structurally — machine-specific values (instances, connection data) are noted, not copied as user data. Add flows that create real connections are **not** executed on live services; only dialogs are opened and canceled (capture discipline, same as Settings).

### D3: PolyPop pages — docs-first, capture-light

Create `sub-actions/polypop/index.md` and `triggers/polypop.md` following the existing sub-actions/triggers templates (Location/Description/Parameters/Output Variables + Evidence). Primary source: official docs (`docs.streamer.bot`) cross-checked via @librarian (reuse lib-1 session); verify the `PolyPop > Trigger Alert` location against the app's sub-action flyout only if a quick capture is cheap.
- **Rationale:** PolyPop is a one-sub-action integration in v1.0.4; full panel capture is overkill — the reference page still documents its app card.
- **Alternative considered:** fold PolyPop into `stream-apps.md` only — rejected; the library pattern is one page per sub-action group/trigger category, and `sub-actions/index.md` already lists PolyPop as a category (orphan link today).

### D4: Evidence-reference validator before any cleanup

Add a small script (e.g., `.opencode/scripts/validate-evidence.js`) that:
1. Scans all library `.md` for backtick evidence references (`*.png`/`*.txt`, including brace `{a,b}` and range `1..6` patterns)
2. Expands to concrete filenames, checks existence under `/mnt/d/Twitch/shots/`
3. Exits non-zero on any missing file; prints the referenced/unreferenced split (usable as a dry-run for cleanup)
- **Rationale:** cleanup stage B (delete all unreferenced) is only safe with a machine-checkable "cited" set; currently citations are prose-only. This mirrors the existing `validate-links.js` philosophy.
- **Alternative considered:** ad-hoc `grep` per cleanup — rejected, brittle and re-run each time; a script is reusable and testable.

### D5: Two-stage cleanup

- **Stage A (immediate): diagnostic junk** — files that are obviously transient by name: `tmp*`, `probe*`, `*-verify.txt`, `state*.txt`, `navstate*.txt`, `scan2-delay.txt`, `wincheck.txt`, `cleanup2.txt`, `checkwin-after-source.txt`, `sidebar-dump*.txt`, `back*2-verify.txt`. Verified unreferenced by the validator first; ~40 files, ~1–2 MB. Low risk.
- **Stage B (after `stream-apps.md` + PolyPop pages land): all remaining unreferenced files** — re-run validator (new pages will cite `streamapps-*`, `Stream-Apps-*`, `OBS-Studio-*` files, protecting them), then delete everything not cited and not tooling (`.ps1`/`.cs`/`.dll` kept). Expected ~147 MB reclaimed.
- **Rationale:** stage B must happen after the new pages land so their citations are protected; stage A is safe now and reduces noise immediately.
- **Alternative considered:** delete everything unreferenced now — rejected, would delete `Stream-Apps-*`/`OBS-Studio-*` files the new page needs.

## Risks / Trade-offs

- [Live-app captures mutate state (add flows)] → Mitigation: dialogs opened and canceled only; no connections created; clean-state verified after each probe (pattern proven in Settings/Groups/Variables flows)
- [Stage B deletes a file a future page needs] → Mitigation: validator is the gate — nothing unreferenced-and-cited is ever deleted; future pages cite before cleanup re-runs
- [PolyPop official docs thin or version-mismatched] → Mitigation: @librarian cross-check (reuse lib-1); if v1.0.4 app truly has only Trigger Alert, say so explicitly ("I couldn't verify this" for anything else) rather than inventing
- [New captures bloat shots again before cleanup] → Mitigation: stage A before captures; stage B after pages land — net effect is a large reduction either way
- [Validator misses a reference pattern] → Mitigation: reuse the exact expansion logic proven against the 61-file citation set; add the regex cases for brace and range that are already known

## Migration Plan

1. Stage A cleanup (immediate) — reversible? Deleted junk is transient by nature; no rollback needed
2. Capture Streamlabs/Meld/PolyPop panels + add flows (`streamapps-*`)
3. Observer verification of new screenshots
4. Write `stream-apps.md`; write PolyPop sub-actions/triggers pages
5. Update `overview.md` UI Flow References
6. Run `validate-evidence.js` (must pass: all cited exist) → Stage B cleanup
7. Run `rebuild-index.js` + `validate-links.js` (must pass)

## Open Questions

- Whether Streamlabs/Meld/PolyPop add flows should be exercised end-to-end (create a connection) — default is **no** (capture discipline); can revisit if the user wants a full add-flow verification like the Groups `zz-test` flow
- Whether the validator should live as a script (`.opencode/scripts/`) or a skill — default: script, matching `validate-links.js`
