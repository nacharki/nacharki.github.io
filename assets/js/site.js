/* Small, dependency-free behaviours: mobile navigation and copy-to-clipboard for the email address. */
(function () {
  'use strict';

  var toggle = document.querySelector('[data-nav-toggle]');
  var nav = document.querySelector('[data-nav]');
  if (toggle && nav) {
    var close = function () {
      nav.classList.remove('is-open');
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    };
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      document.body.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { close(); }
    });
    nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
    window.matchMedia('(min-width: 48em)').addEventListener('change', close);
  }

  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    var text = btn.getAttribute('data-copy');
    var label = btn.textContent;
    btn.addEventListener('click', function () {
      if (!navigator.clipboard) { return; }
      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = 'Copied';
        btn.classList.add('is-copied');
        setTimeout(function () { btn.textContent = label; btn.classList.remove('is-copied'); }, 1600);
      });
    });
  });
})();
