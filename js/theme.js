/* Optional: manual light/dark toggle. Without it the site follows the system setting. */
(function () {
  var r = document.documentElement, k = 'dbt', t;
  try { t = localStorage.getItem(k); } catch (e) {}
  if (t) r.dataset.theme = t;
  document.addEventListener('click', function (e) {
    if (!e.target.closest('[data-theme-toggle]')) return;
    var dark = r.dataset.theme ? r.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme:dark)').matches;
    var n = dark ? 'light' : 'dark';
    r.dataset.theme = n;
    try { localStorage.setItem(k, n); } catch (e) {}
  });
})();
