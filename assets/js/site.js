/* Bilingual toggle + small niceties. No external requests. */
(function () {
  var STORE = 'felix-lang';
  var btn = document.getElementById('langBtn');

  function apply(lang) {
    document.documentElement.lang = (lang === 'zh') ? 'zh-CN' : 'en';
    var nodes = document.querySelectorAll('[data-' + lang + ']');
    for (var i = 0; i < nodes.length; i++) {
      var v = nodes[i].getAttribute('data-' + lang);
      if (v !== null) nodes[i].innerHTML = v;
    }
    if (btn) {
      btn.textContent = (lang === 'zh') ? 'EN' : '中文';
      btn.setAttribute('aria-label', (lang === 'zh') ? 'Switch to English' : '切换到中文');
    }
    try { localStorage.setItem(STORE, lang); } catch (e) {}
  }

  function current() {
    try {
      var saved = localStorage.getItem(STORE);
      if (saved === 'zh' || saved === 'en') return saved;
    } catch (e) {}
    return (navigator.language || '').toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en';
  }

  var lang = current();
  apply(lang);

  if (btn) {
    btn.addEventListener('click', function () {
      apply(document.documentElement.lang === 'zh-CN' ? 'en' : 'zh');
    });
  }

  /* Highlight the nav item of the section currently in view. */
  var links = document.querySelectorAll('.menu a[href^="#"]');
  var targets = [];
  for (var i = 0; i < links.length; i++) {
    var t = document.querySelector(links[i].getAttribute('href'));
    if (t) targets.push([t, links[i]]);
  }
  if ('IntersectionObserver' in window && targets.length) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        for (var j = 0; j < targets.length; j++) {
          if (targets[j][0] === en.target) {
            targets[j][1].style.color = en.isIntersecting ? 'var(--fg)' : '';
          }
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    targets.forEach(function (pair) { obs.observe(pair[0]); });
  }
})();
