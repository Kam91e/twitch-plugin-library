## Context

INDEX.md jest generowany przez skrypt `.opencode/scripts/rebuild-index.js`, który skanuje pliki `.md` w `plugins/`, parsuje YAML frontmatter i generuje dwie sekcje: "By Category" (lista z opisami) oraz "All Plugins" (tabela).

Obecnie:
- W sekcji "By Category" pluginy są wyświetlane w kolejności `fs.readdirSync` (przypadkowa, zależna od systemu plików)
- W tabeli "All Plugins" sortowanie tylko po kategorii (linia 242: `.sort((a, b) => a.categoryDir.localeCompare(b.categoryDir))`), bez sortowania po tytule w ramach kategorii

Skrypt w ~270 liniach czystego Node.js — prosty, bez zewnętrznych zależności.

## Goals / Non-Goals

**Goals:**
- Pluginy w każdej kategorii INDEX.md posortowane alfabetycznie według tytułu
- Tabela "All Plugins" posortowana po kategorii, a w ramach kategorii alfabetycznie

**Non-Goals:**
- Zmiana struktury, treści, frontmatter lub formatu INDEX.md poza kolejnością
- Jakiekolwiek zmiany w plikach pluginów

## Decisions

### Sortowanie: localeCompare

W obu sekcjach INDEX.md sortujemy tablicę pluginów przez `a.title.localeCompare(b.title)` przed iteracją. W tabeli sortujemy zagnieżdżone: najpierw po kategorii, potem po tytule.

```js
// Sekcja "By Category" — w ramach każdej kategorii:
catPlugins.sort((a, b) => a.title.localeCompare(b.title));

// Tabela "All Plugins" — najpierw kategoria, potem tytuł:
plugins.sort((a, b) => {
  const catCmp = a.categoryDir.localeCompare(b.categoryDir);
  return catCmp !== 0 ? catCmp : a.title.localeCompare(b.title);
});
```

Tytuły pluginów są w capital case, więc domyślne porównanie jest wystarczające.

## Risks / Trade-offs

- **Brak ryzyka**: Zmiana czysto kosmetyczna — nie wpływa na działanie, linki, treść. Łatwo zweryfikować wzrokowo.
