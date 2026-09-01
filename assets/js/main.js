// JuneTrial site scripts: mobile nav toggle + lightweight static search.
// You do not need to edit this file to add content.

document.addEventListener("DOMContentLoaded", function () {
  // ---- Mobile menu ----
  var menuToggle = document.getElementById("menu-toggle");
  var mainNav = document.getElementById("main-nav");
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen);
    });
  }

  // ---- Search panel toggle ----
  var searchToggle = document.getElementById("search-toggle");
  var searchPanel = document.getElementById("search-panel");
  var searchInput = document.getElementById("site-search-input");
  if (searchToggle && searchPanel) {
    searchToggle.addEventListener("click", function () {
      var isOpen = searchPanel.classList.toggle("open");
      searchToggle.setAttribute("aria-expanded", isOpen);
      if (isOpen && searchInput) searchInput.focus();
    });
  }

  // ---- Static site search ----
  // Loads /search.json (built automatically by Jekyll from every
  // vehicle/blog/news/product) and searches it in the browser.
  var searchData = null;
  var resultsBox = document.getElementById("search-results");
  var hint = document.getElementById("search-hint");

  function loadSearchData() {
    if (searchData) return Promise.resolve(searchData);
    var base = document.body.getAttribute("data-baseurl") || "";
    return fetch(base + "/search.json")
      .then(function (r) { return r.json(); })
      .then(function (data) { searchData = data; return data; });
  }

  function runSearch(query) {
    if (!resultsBox) return;
    if (!query || query.length < 2) {
      resultsBox.innerHTML = "";
      if (hint) hint.style.display = "block";
      return;
    }
    if (hint) hint.style.display = "none";
    loadSearchData().then(function (data) {
      var q = query.toLowerCase();
      var matches = data.filter(function (item) {
        return (item.title + " " + item.excerpt + " " + item.category)
          .toLowerCase()
          .indexOf(q) !== -1;
      }).slice(0, 12);

      if (matches.length === 0) {
        resultsBox.innerHTML = "<p style='color:var(--ink-soft)'>No results found.</p>";
        return;
      }
      resultsBox.innerHTML = matches.map(function (item) {
        return '<a href="' + item.url + '"><strong>' + item.title +
          '</strong> &middot; <span class="mono">' + item.section + '</span></a>';
      }).join("");
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      runSearch(e.target.value.trim());
    });
  }
});
