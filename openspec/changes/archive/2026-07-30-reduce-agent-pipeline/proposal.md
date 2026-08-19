## Why

Obecny 3-agentowy pipeline (researcher → writer → index-updater) zużywa niepotrzebne tokeny, bo każdy agent ładuje osobny kontekst. Researcher i writer mogą być jednym agentem (zbiera dane i od razu tworzy plik), a index-updater jest agentem udającym skrypt — nie dodaje wartości ponad `rebuild-index.js` i `validate-links.js`.

## What Changes

- **Nowy agent `plugin-documenter`**: Łączy role researcher + writer w jeden agent, który researchuje plugin i od razu tworzy plik dokumentacji
- **Usunięcie `plugin-researcher` i `plugin-writer`**: Zastąpione przez `plugin-documenter`
- **Usunięcie `index-updater`**: Zastąpiony bezpośrednim wywołaniem skryptów `rebuild-index.js` i `validate-links.js` z orchestratora
- **Aktualizacja AGENTS.md**: Pipeline z 3 ról → 1 rola + skrypty; aktualizacja Role Boundaries
- **Usunięcie `.opencode/tmp/`**: Niepotrzebny po mergu (brak handoff między agentami)

## Capabilities

### New Capabilities
- `plugin-documenter`: Nowy agent łączący research i pisanie dokumentacji pluginu w jednym kontekście

### Modified Capabilities
*(brak)*

## Impact

- **Nowy plik**: `.opencode/agents/plugin-documenter.md`
- **Usunięte pliki**: `.opencode/agents/plugin-researcher.md`, `.opencode/agents/plugin-writer.md`, `.opencode/agents/index-updater.md`
- **Modyfikacja**: `AGENTS.md` — sekcje Agent Workflow i Role Boundaries
- **Potencjalne usunięcie**: `.opencode/tmp/` (jeśli jest pusty)
