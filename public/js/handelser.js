// Klick och val som tidigare låg som onclick/onchange i HTML.
// Flyttade hit så att CSP:n kan stänga script-src för inline-kod.
(function () {
  document.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target.closest('[data-menu],[data-set-lang],[data-href],[data-order-close],[data-order-loc],[data-order-back]') : null;
    if (!t) return;
    if (t.hasAttribute('data-menu')) { toggleMenu(t.getAttribute('data-menu') === 'open'); return; }
    if (t.hasAttribute('data-set-lang')) { e.preventDefault(); setLanguage(t.getAttribute('data-set-lang')); return; }
    if (t.hasAttribute('data-href')) { window.location.href = t.getAttribute('data-href'); return; }
    if (t.hasAttribute('data-order-close')) { closeOrderModal(); return; }
    if (t.hasAttribute('data-order-loc')) { bramsSelectLocation(t.getAttribute('data-order-loc')); return; }
    if (t.hasAttribute('data-order-back')) { bramsBackToLocations(); return; }
  });
  document.addEventListener('change', function (e) {
    var t = e.target;
    if (t && t.matches && t.matches('select[data-lang-select]')) setLanguage(t.value);
  });
})();
// Hovringsfärg på "Alla nyheter" (var onmouseover/onmouseout).
(function () {
  function sw(e, attr) {
    var t = e.target.closest ? e.target.closest('[data-hover-color]') : null;
    if (t) t.style.color = t.getAttribute(attr);
  }
  document.addEventListener('mouseover', function (e) { sw(e, 'data-hover-color'); });
  document.addEventListener('mouseout', function (e) { sw(e, 'data-out-color'); });
})();
