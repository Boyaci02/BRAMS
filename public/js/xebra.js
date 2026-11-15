/* Xebra-nivå (grenen xebra-stil): scroll-variabel, ridå, inträden och
   loopar som bara går i bild. Allt annat är CSS i /xebra.css.
   Rör bara transform/opacity. Står still vid prefers-reduced-motion. */
(function () {
  var reducerad = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.classList.add('js-x');

  /* --p går 0 till 1 medan heron skrollas ut. CSS gör resten. */
  var heror = Array.prototype.slice.call(document.querySelectorAll('[data-rida]'));
  if (heror.length && !reducerad) {
    var vantar = false;
    var rita = function () {
      var y = window.scrollY;
      heror.forEach(function (el) {
        var p = Math.min(Math.max(y / (el.offsetHeight || 1), 0), 1);
        el.style.setProperty('--p', p.toFixed(3));
      });
      vantar = false;
    };
    window.addEventListener('scroll', function () {
      if (!vantar) { vantar = true; requestAnimationFrame(rita); }
    }, { passive: true });
    rita();
  }

  /* Ridå: heron nålas fast och nästa sektion glider över. Är heron högre än
     fönstret nålas den först när nederkanten nått botten, så knapparna
     alltid hinner synas. Höjden läses en gång per resize (ingen reflow i scroll). */
  function nala() {
    heror.forEach(function (el) {
      if (!el.hasAttribute('data-nala')) return;
      el.style.position = 'sticky';
      el.style.top = Math.min(0, window.innerHeight - el.offsetHeight) + 'px';
    });
  }
  if (heror.length) { nala(); window.addEventListener('resize', nala); }

  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.intrade, .pop-in').forEach(function (el) { el.classList.add('inne'); });
    document.querySelectorAll('.dropp').forEach(function (el) { el.classList.add('kant-in'); });
    document.querySelectorAll('.loop-zon').forEach(function (el) { el.classList.add('i-vy'); });
    return;
  }

  /* Heron pausar sina loopar när den inte syns */
  var hx = document.querySelector('.hx');
  if (hx) {
    new IntersectionObserver(function (p) { hx.classList.toggle('hx--ute', !p[0].isIntersecting); }).observe(hx);
  }

  if (reducerad) {
    document.querySelectorAll('.intrade, .pop-in').forEach(function (el) { el.classList.add('inne'); });
    document.querySelectorAll('.dropp').forEach(function (el) { el.classList.add('kant-in'); });
  } else {
    var enGang = new IntersectionObserver(function (poster) {
      poster.forEach(function (p) {
        if (!p.isIntersecting) return;
        p.target.classList.add(p.target.classList.contains('dropp') ? 'kant-in' : 'inne');
        enGang.unobserve(p.target);
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    /* Inträden observeras via föräldern: objektet står utanför bild (40vw åt
       sidan) innan det kommer in och skulle annars aldrig räknas som synligt. */
    var viaFar = new IntersectionObserver(function (poster) {
      poster.forEach(function (p) {
        if (!p.isIntersecting) return;
        p.target.__x.forEach(function (el) { el.classList.add('inne'); });
        viaFar.unobserve(p.target);
      });
    }, { rootMargin: '0px 0px -12% 0px' });
    document.querySelectorAll('.dropp').forEach(function (el) { enGang.observe(el); });
    document.querySelectorAll('.pop-in').forEach(function (el) { enGang.observe(el); });
    document.querySelectorAll('.intrade').forEach(function (el) {
      var far = el.parentElement;
      (far.__x = far.__x || []).push(el);
      viaFar.observe(far);
    });
  }

  var zon = new IntersectionObserver(function (poster) {
    poster.forEach(function (p) { p.target.classList.toggle('i-vy', p.isIntersecting); });
  });
  document.querySelectorAll('.loop-zon').forEach(function (el) { zon.observe(el); });
})();
