## 1. Evidence validator

- [x] 1.1 Create `.opencode/scripts/validate-evidence.js` — scans all library `.md` for backtick evidence refs (`.png`/`.txt`), expands brace `{a,b}` + range `1..6` patterns, checks existence under `/mnt/d/Twitch/shots/`, exits non-zero on missing; prints referenced/unreferenced split (dry-run mode)
- [x] 1.2 Run validator against current library — must report all 61 referenced files exist, exit 0 (baseline before any cleanup)

## 2. Stage A cleanup — diagnostic junk

- [x] 2.1 Run validator dry-run to list candidates matching junk patterns: `tmp*`, `probe*`, `*-verify.txt`, `state*.txt`, `navstate*.txt`, `scan2-delay.txt`, `wincheck.txt`, `cleanup2.txt`, `checkwin-after-source.txt`, `sidebar-dump*.txt`, `back*2-verify.txt`; confirm none are cited
- [x] 2.2 Delete the diagnostic-junk set (only unreferenced, no tooling files)
- [x] 2.3 Verify: validator exit 0, `validate-links.js` exit 0, junk count removed recorded — 33 files deleted (incl. `tmp/probe.txt` dir), shots 791 → 759; validator ✓ 61/61; validate-links ✓ (exit 0; pre-existing orphan tangia.md noted, out of scope)

## 3. Stream Apps panel captures (WSL + UIA pipeline)

- [x] 3.1 Extend/reuse capture scripts for `streamapps-*` evidence naming; land on Stream Apps tab — pipeline działa, `streamapps-landing-uia.txt/.png` (4 karty: OBS/Streamlabs/Meld/PolyPop + taglines)
- [x] 3.2 Capture **Streamlabs Desktop** panel: dump + deep dump (control types) + `.png` — `streamapps-streamlabs-uia.txt/.png` + `-full-uia.txt` (grid Host/Auto Connect/Reconnect/Retry/Status + "Select a Streamlabs Desktop Connection")
- [x] 3.3 Capture **Meld Studio** panel: dump + deep dump + `.png` — `streamapps-meld-uia.txt/.png` (grid + "Select a Meld Studio Connection")
- [x] 3.4 Capture **PolyPop** panel: dump + deep dump + `.png` — `streamapps-polypop-uia.txt/.png` + `-full-uia.txt` (serwer in-place: Auto Start toggle, Address/Port/Endpoint, Server Status, Start Server)
- [x] 3.5 Capture add/connect flows for each app (dialog open → fields → cancel, no live connection): `streamapps-<app>-add-*`; clean state verified after each probe — Streamlabs add dialog (Name/Host/Port/password/Auto Connect/Reconnect/Retry), Meld add dialog ("Add Meld Studio Connection": Name/Host/Port); PolyPop: brak add flow (serwer config in-place)
- [x] 3.6 Capture right-click menus on panel/grid rows + any dialogs: `streamapps-<app>-rclick-*` — Streamlabs/Meld pusty grid: Add + Update All Actions To Use Default; OBS z połączeniem: Add/Edit/Delete/Auto Connect/Auto Reconnect/Default/Force/Update All Actions To.../Connect; PolyPop: brak context menu; wszystkie dialogi anulowane, ESC domyka menu

## 4. Visual verification (observer)

- [x] 4.1 Observer review of Streamlabs/Meld/PolyPop panel screenshots (obs-1/obs-2 reuse) — panel structure, controls, breadcrumbs match UIA dumps — obs-1: 5/5 zgodne (landing 4 karty + taglines, `streamming` typo potwierdzone w UI, grids/panele OK); obs-2: 8/8 zgodne
- [x] 4.2 Observer review of add-flow screenshots — dialog fields/buttons legible, canceled state confirmed — Streamlabs Add dialog (Name/Host/Port/Token + Auto Connect/Reconnect toggles + Retry 30s + Ok/Cancel), Meld Add dialog (Name/Host + toggles + Retry, **bez Port/Token**), cancel/ESC stany czyste

## 5. Write the Stream Apps reference

- [x] 5.1 Create `tools/automation/streamer-bot/stream-apps.md` skeleton: frontmatter, tagline, disambiguation note if needed, landing overview (4 apps + descriptions from `Stream-Apps-uia.txt`)
- [x] 5.2 OBS Studio subsection from existing `OBS-Studio-uia.txt` (connection grid + OBS Information)
- [x] 5.3 Streamlabs Desktop subsection from `streamapps-streamlabs-*` captures
- [x] 5.4 Meld Studio subsection from `streamapps-meld-*` captures
- [x] 5.5 PolyPop subsection from `streamapps-polypop-*` captures
- [x] 5.6 Add-connection flows section per app (steps + evidence files)
- [x] 5.7 `## Evidence gaps` section (zero-hallucination markers) + `## Docs coverage` table (cross-check via lib-1) — lib-1 research: 4/4 appy mają realne guide + sub-actions strony; PolyPop najcieńszy (1 sub-action, 0 triggerów)

## 6. PolyPop documentation gap

- [x] 6.1 Research PolyPop via @librarian (lib-1 reuse): official docs coverage, sub-actions, triggers, version differences (v1.0.4 vs v1.0.5) — tylko 1 sub-action: **Trigger Alert** (`/api/sub-actions/polypop/trigger-alert`: param Alert Name, output Name→Alert Title / Value→Alert Value); **0 triggerów** ("No triggers are supported by this integration"); guide `/guide/stream-apps/polypop` realny (Auto Start/Address 127.0.0.1/Port 9652/Endpoint /); WebSocket plugin community-made (Jabbey92/PolyPopWebsocketPlugin v1.1); stabilny od v0.1.8, brak różnic v1.0.4 vs v1.0.5
- [x] 6.2 Create `sub-actions/polypop/index.md` — every PolyPop sub-action (location, description, parameters, output variables); flag unverifiable content — Trigger Alert (Alert Name; Name→Title, Value→Value) + connection model + setup + v1.0.4/v1.0.5 identical
- [x] 6.3 Create `triggers/polypop.md` — PolyPop triggers; flag unverifiable content — **0 triggerów** ("No triggers are supported by this integration"), 404 na /en/Triggers/PolyPop, brak w pickerze v1.0.4
- [x] 6.4 Link PolyPop pages from `sub-actions/index.md` and `triggers/index.md` (resolves the current orphan category entry) — PolyPop w Categories list + Trigger Alert sekcja z danymi (była "Not documented"); triggers/index.md notka "Notably absent: PolyPop"

## 7. Library integration

- [x] 7.1 Add the Stream Apps reference to the UI Flow References list in `tools/automation/streamer-bot/overview.md`
- [x] 7.2 Run `node .opencode/scripts/rebuild-index.js` and `node .opencode/scripts/validate-links.js`; both must pass — rebuild: 56 pluginów, exit 0; validate-links: exit 0 (orphan `tangia.md` pre-existing, notatka w propozycji)

## 8. Stage B cleanup — all unreferenced

- [x] 8.1 Re-run validator (now includes citations from `stream-apps.md` + PolyPop pages: `streamapps-*`, `Stream-Apps-*`, `OBS-Studio-*` protected) — validate-evidence: **100/100 cited files exist, exit 0**; 647 unreferenced listed (dry-run)
- [x] 8.2 Delete all remaining unreferenced files (exclude tooling `.ps1`/`.cs`/`.dll`); record freed space — **426 files / ~91 MB deleted** (158M → 67M; 796 → 370 files on disk). Safety: custom script (`/tmp/opencode/stage-b-candidates2.js`) with single-line token regex + brace `{-deep}`/comma + slash `a/b` expansion protected every extensionless citation from `settings.md`/`services.md`; all 426 candidates verified as **subset** of validator's 647 unreferenced (0 mismatches, 0 tooling). Remaining 221 unreferenced-per-validator files are all protected by extensionless brace/slash citations (0 unprotected). Backup: `/tmp/opencode/stage-b-backup-20260806.tar.gz` (83 MB)
- [x] 8.3 Final verification: validator exit 0, `validate-links.js` exit 0, shots folder size reported — validate-evidence exit 0 (100/100 cited); validate-links exit 0 (112 links, 57 plugin files, orphan `tangia.md` pre-existing); rebuild-index exit 0 (56 plugins); shots = **67M / 370 files**
