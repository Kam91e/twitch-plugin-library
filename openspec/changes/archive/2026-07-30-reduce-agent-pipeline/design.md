## Context

Obecnie dokumentowanie pluginu wymaga 3 subagentów w sekwencji:

```
plugin-researcher  →  plugin-writer  →  index-updater
```

Każdy agent ładuje osobny kontekst (system prompt + AGENTS.md rules + własna definicja roli). Dwa pierwsze przepuszczają dane przez `.opencode/tmp/`. Index-updater skanuje wszystkie 56+ plików pluginów — pracę, którą już wykonują skrypty Node.js.

Szacowany koszt tokenów na plugin:
- researcher: ~6-15K
- writer: ~5-7K
- index-updater: ~8-12K
- **Razem: ~19-34K**

## Goals / Non-Goals

**Goals:**
- Połączenie researcher + writer w jednego agenta `plugin-documenter`
- Zastąpienie index-updater bezpośrednimi wywołaniami skryptów
- Aktualizacja AGENTS.md — pipeline, role boundaries
- Usunięcie niepotrzebnych plików agentów

**Non-Goals:**
- Zmiana działania skryptów rebuild-index.js / validate-links.js
- Zmiana formatu plików pluginów
- Zmiana kategorii lub struktury pluginów
- Optyka widoku INDEX.md

## Decisions

### 1. Nowy agent: plugin-documenter

Jeden agent z uprawnieniami read+write. Robi to, co obecnie researcher + writer:

1. Czyta categories.md (lub dostaje kategorię od orchestratora w task prompt)
2. Researchuje plugin przez web search / web fetch
3. Określa kategorię i subkategorię
4. Tworzy plik .md w odpowiedniej ścieżce
5. Jeśli nowa subkategoria: tworzy folder + aktualizuje categories.md
6. Zwraca ścieżkę pliku

**Dlaczego nie dwa osobne agenty?** Jeden kontekst zamiast dwóch — oszczędność ~5-7K tokenów na plugin. Brak handoff przez tmp/ — mniej błędów, prostszy orchestrator.

### 2. Index-updater → skrypty

Index-updater robi:
- Skanuje frontmatter wszystkich pluginów → `rebuild-index.js`
- Weryfikuje spójność kategorii → `validate-links.js`
- Czyści tmp/ → `rm -rf .opencode/tmp/*`

Wszystkie te operacje są wykonywane przez skrypty lub proste bash. Bezpośrednie wywołanie z orchestratora:

```bash
node .opencode/scripts/rebuild-index.js
node .opencode/scripts/validate-links.js
```

**Dlaczego nie agent?** Agent ładuje ~8-12K tokenów, żeby uruchomić skrypt. Orchestrator może zrobić to samo za 0 tokenów (koszt samego procesu).

### 3. Usunięcie .opencode/tmp/

Tmp był używany do handoff między researcher→writer. Po mergu nie ma handoff — tmp jest zbędny. Usuwamy zawartość przy okazji zmiany. Jeśli katalog jest pusty, usuwamy go.

### 4. Aktualizacja AGENTS.md

- Sekcja Agent Workflow: 3 role → 1 rola + skrypty
- Role Boundaries: researcher+writer → plugin-documenter, index-updater → skrypty
- Wzmianka o tmp/ do usunięcia

## Risks / Trade-offs

- **Mniejsza weryfikowalność**: Obecnie orchestrator może przejrzeć notatki researchera zanim writer stworzy plik. Po mergu nie ma tej kontroli. *Mitigacja: agent od razu tworzy finalny plik, ale może wewnętrznie zweryfikować fakty przed zapisem.*
- **Dłuższy czas jednego agenta**: Researcher + writer w jednym to dłuższa sesja, ale mniej narzutu na start kontekstu. W praktyce powinno być szybciej.
- **Utrata możliwości równoległości**: Obecnie researcher i writer to dwa osobne taski — mogłyby potencjalnie biec równolegle (choć w praktyce są sekwencyjne). Nie ma to znaczenia dla obecnego przepływu.
- **tmp/ może być używany przez inne rzeczy**: Przed usunięciem sprawdzić, czy nie ma innych odwołań do `.opencode/tmp/`.
