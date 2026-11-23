/*
  Client-side recipe search: layouts/index.json publishes /index.json, this file
  fetches it once and filters it in the browser.

  Every query token must match somewhere in title + tags + cuisine + ingredients
  + directions + body, case- and accent-insensitively. Title hits rank above tag
  hits above ingredient hits, so "pasta carbonara" puts Carbonara first.
  Cards are built with createElement/textContent - index data is never inserted
  as HTML.
*/
(() => {
  "use strict";

  const form = document.querySelector("[data-search]");
  const status = document.querySelector("[data-search-status]");
  const results = document.querySelector("[data-search-results]");
  const pageContent = document.querySelector("[data-page-content]");
  if (!form || !status || !results) return;

  const input = form.querySelector("[data-search-input]");
  if (!input) return;

  const MAX = 30;

  let index = null;
  let loading = null;
  let debounce = null;

  const flattenText = (value) => {
    if (value == null) return "";
    if (Array.isArray(value)) return value.map(flattenText).join(" ");
    if (typeof value === "object") return Object.values(value).map(flattenText).join(" ");
    return String(value);
  };

  const strip = (value) =>
    flattenText(value).normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();

  const getIndex = () => {
    if (index) return Promise.resolve(index);
    if (!loading) {
      loading = fetch(form.dataset.index, { cache: "no-cache" })
        .then((res) => {
          if (!res.ok) throw new Error(`search index request failed: ${res.status}`);
          return res.json();
        })
        .then((data) => {
          index = (data.recipes || []).map((recipe) => ({
            ...recipe,
            titleSearch: strip(recipe.title),
            tagsSearch: (recipe.tags || []).map(strip),
            ingredientsSearch: (recipe.ingredients || []).map(strip),
            haystack: strip([
              recipe.title,
              recipe.tags,
              recipe.cuisine,
              recipe.ingredients,
              recipe.directions,
              recipe.body,
            ]),
          }));
          return index;
        })
        .catch((err) => {
          loading = null;
          throw err;
        });
    }
    return loading;
  };

  const search = (query) => {
    const tokens = strip(query).split(/\s+/).filter(Boolean);
    const hits = [];
    for (const recipe of index) {
      let score = 0;
      for (const token of tokens) {
        if (!recipe.haystack.includes(token)) { score = -1; break; }
        if (recipe.titleSearch.includes(token)) score += 8;
        if (recipe.tagsSearch.some((tag) => tag.includes(token))) score += 4;
        if (recipe.ingredientsSearch.some((item) => item.includes(token))) score += 2;
        score += 1;
      }
      if (score > 0) hits.push({ recipe, score });
    }
    hits.sort((a, b) => b.score - a.score || a.recipe.title.localeCompare(b.recipe.title, "de"));
    return hits;
  };

  /* Mirrors layouts/partials/gallery-card.html so hits look exactly like cards. */
  const card = (recipe) => {
    const item = document.createElement("div");
    item.className = "gallery-item";
    const link = document.createElement("a");
    link.className = "block relative bg-blue";
    link.href = recipe.url;
    if (recipe.thumb) {
      const thumb = document.createElement("div");
      thumb.className = "ratio bg-cover";
      thumb.style.backgroundImage = `url("${String(recipe.thumb).replace(/["\\]/g, "\\$&")}")`;
      link.append(thumb);
    }
    const title = document.createElement("h1");
    title.className = "title p2 m0 absolute white bottom-0 left-0 title-shadow";
    title.textContent = recipe.title;
    link.append(title);
    item.append(link);
    return item;
  };

  const setMode = (searching) => {
    if (pageContent) pageContent.hidden = searching;
    results.hidden = !searching;
  };

  const syncURL = (query) => {
    const url = new URL(window.location.href);
    if (query) url.searchParams.set("q", query);
    else url.searchParams.delete("q");
    if (url.pathname + url.search !== window.location.pathname + window.location.search) {
      history.replaceState(history.state, "", url);
    }
  };

  const run = async () => {
    const query = input.value.trim();
    syncURL(query);
    results.replaceChildren();
    if (!query) {
      setMode(false);
      status.textContent = "";
      return;
    }
    setMode(true);
    status.textContent = "Suche …";
    try {
      await getIndex();
    } catch {
      if (input.value.trim() !== query) return;
      setMode(false);
      status.textContent = "Der Suchindex konnte nicht geladen werden.";
      return;
    }
    if (input.value.trim() !== query) return;
    const hits = search(query);
    results.replaceChildren(...hits.slice(0, MAX).map(({ recipe }) => card(recipe)));
    status.textContent = hits.length
      ? `${hits.length} Treffer für «${query}»` + (hits.length > MAX ? `, gezeigt werden die ersten ${MAX}` : "")
      : `Kein Rezept passt zu «${query}».`;
    results.hidden = false;
  };

  input.addEventListener("input", () => {
    clearTimeout(debounce);
    debounce = setTimeout(run, 150);
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearTimeout(debounce);
    run();
  });

  /* A shared ?q= link opens with the results already rendered. */
  const initial = new URL(window.location.href).searchParams.get("q");
  if (initial) {
    input.value = initial;
    run();
  }
})();
