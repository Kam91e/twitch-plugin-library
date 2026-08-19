## ADDED Requirements

### Requirement: Evidence-reference validator

The library SHALL provide a validator script that checks every evidence file cited in the documentation exists on disk. The validator SHALL scan all library markdown files for backtick evidence references (`.png`/`.txt`), expand brace `{a,b}` and range `1..6` patterns into concrete filenames, and report any missing files with a non-zero exit code.

#### Scenario: All cited files exist

- **WHEN** the validator runs against the current library
- **THEN** it SHALL report that all 61 referenced evidence files exist on disk and exit with code 0

#### Scenario: Missing citation detected

- **WHEN** a documentation file cites an evidence file that does not exist in `/mnt/d/Twitch/shots/`
- **THEN** the validator SHALL print the missing filename and exit with a non-zero code

#### Scenario: Citation patterns expanded

- **WHEN** a documentation file cites files using brace notation (e.g., `settings-{actions,commands}-open-uia.txt`) or ranges (e.g., `wheel1..6`)
- **THEN** the validator SHALL expand the pattern and check each concrete filename

### Requirement: Staged evidence cleanup

The evidence folder `/mnt/d/Twitch/shots/` SHALL be cleaned in two stages. **Stage A** SHALL delete diagnostic junk files (transient by name: `tmp*`, `probe*`, `*-verify.txt`, `state*.txt`, `navstate*.txt`, `scan2-delay.txt`, `wincheck.txt`, `cleanup2.txt`, `checkwin-after-source.txt`, `sidebar-dump*.txt`, `back*2-verify.txt`) that are verified unreferenced by the validator. **Stage B** SHALL delete all remaining unreferenced files after the Stream Apps reference page and PolyPop pages land, re-running the validator first so newly cited files are protected.

#### Scenario: Stage A removes diagnostic junk only

- **WHEN** Stage A runs
- **THEN** SHALL delete only files matching the diagnostic-junk name patterns, and only those confirmed unreferenced by the validator; no cited file and no tooling file SHALL be deleted

#### Scenario: Stage B removes all unreferenced files

- **WHEN** Stage B runs after the new documentation pages land
- **THEN** SHALL delete every file in `/mnt/d/Twitch/shots/` that is neither cited (after re-running the validator, which now includes citations from the new Stream Apps and PolyPop pages) nor tooling (`.ps1`/`.cs`/`.dll`)

#### Scenario: Tooling files preserved

- **WHEN** any cleanup stage runs
- **THEN** the capture-pipeline files (`.ps1` scripts, `.cs`/`.dll` helpers) SHALL never be deleted, even though they are not cited by documentation

### Requirement: Cited evidence never deleted

No cleanup stage SHALL delete a file cited by any library documentation. The set of protected files is computed by the validator immediately before each deletion pass.

#### Scenario: Cited files protected during cleanup

- **WHEN** a cleanup stage computes its deletion list
- **THEN** any file in the validator's referenced set SHALL be excluded from deletion, including files cited by pages written in this same change (e.g., `streamapps-*`, `Stream-Apps-*`, `OBS-Studio-*`)

### Requirement: Cleanup result verified

After each cleanup stage, the validator SHALL run again and pass (all cited files still exist), and the library link/index validation SHALL pass.

#### Scenario: Post-cleanup validation passes

- **WHEN** a cleanup stage completes
- **THEN** `validate-evidence.js` SHALL exit 0 (no cited file missing), and `validate-links.js` SHALL exit 0
