## Why

INDEX.md jest auto-generowany, ale lista pluginów w ramach kategorii nie jest posortowana — kolejność zależy od systemu plików. To utrudnia szybkie znajdowanie konkretnego pluginu.

## What Changes

- **Sortowanie alfabetyczne**: Pluginy w każdej kategorii w INDEX.md będą posortowane alfabetycznie według nazwy, zarówno w sekcji "By Category" jak i w tabeli "All Plugins"
- **Skrypt rebuild-index.js**: Aktualizacja skryptu generującego INDEX.md — dodanie sortowania

Nie zmieniamy zawartości merytorycznej żadnego pluginu, frontmatter, ani INDEX.md poza kolejnością wpisów.

## Capabilities

### New Capabilities
*(brak — czysta zmiana prezentacji, nie dodajemy nowych capability)*

### Modified Capabilities
*(brak)*

## Impact

- **Skrypt**: `.opencode/scripts/rebuild-index.js` — zmiana logiki sortowania w obu sekcjach
- **INDEX.md**: Regeneracja — ta sama treść, inna kolejność
