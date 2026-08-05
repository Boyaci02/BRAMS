// BRAMS beställ-modal: välj restaurang → välj beställningssätt (samma flöde som Dunder Smash).
// Design enligt Ahmeds mockup 4/8: ljus panel, Anton-rubriker, plattformsknappar i
// respektive varumärkes färger (Foodora rosa, Wolt cyan, Uber Eats svart, Qopla vit
// med svart ram). Injiceras på alla sidor; nav-knappen "Beställ" (data-i18n="nav.order")
// och drawerns "Beställ online" öppnar modalen. Utan JS funkar ordinarie href som fallback.
(function () {
    var ENHETER = [
        {
            id: 'skarholmen', namn: 'Skärholmen', adress: 'Lillholmsgången 2',
            qopla: "https://bramsburgers.qopla.com/restaurant/bram's-burgers---skarholmen/q8ydyvg9eM/order",
            uber: 'https://www.ubereats.com/se/store/brams-burgers-skarholmen/rpr6NW50WUOoVvhxNSKFEQ',
            wolt: 'https://wolt.com/sv/swe/stockholm/restaurant/brams-burgers-kungens-kurva',
            foodora: 'https://www.foodora.se/restaurant/ztza/brams-burgers-skarholmen'
        },
        {
            id: 'kista', namn: 'Kista', adress: 'Kistagången 20B',
            qopla: "https://bramsburgers.qopla.com/restaurant/bram's-burgers---kista/q7PNyL47re/order",
            uber: 'https://www.ubereats.com/se/store/brams-burgers-kista/SvrxyijzQcqt0tRjyiL6Gg',
            wolt: 'https://wolt.com/sv/swe/stockholm/restaurant/brams-burgers-kista',
            foodora: 'https://www.foodora.se/restaurant/rgfq/brams-burgers-kista'
        },
        {
            id: 'huddinge', namn: 'Huddinge', adress: 'Novavägen 17',
            qopla: "https://bramsburgers.qopla.com/restaurant/bram's-burgers---huddinge/qwNDeajN98/order",
            uber: 'https://www.ubereats.com/se/store/brams-burgers-huddinge/C2X8Fh7GVZaEtbbsODjoPA',
            wolt: 'https://wolt.com/sv/swe/stockholm/restaurant/brams-burgers-huddinge',
            foodora: 'https://www.foodora.se/restaurant/zgbz/brams-burgers-huddinge-zgbz'
        },
        {
            id: 'uppsala', namn: 'Uppsala', adress: 'Väderkvarnsgatan 28C',
            qopla: 'https://bramsburgers.qopla.com/restaurant/bram%E2%80%99s-burgers---uppsala/qeA4b2xNdX/order',
            uber: 'https://www.ubereats.com/se/store/brams-burger-uppsala/MSoRSUVJWBe3g0VLve8npw',
            wolt: 'https://wolt.com/sv/swe/uppsala/restaurant/brams-burgers-uppsala',
            foodora: 'https://www.foodora.se/restaurant/zkjh/brams-burgers-uppsala'
        },
        {
            id: 'goteborg', namn: 'Göteborg', adress: 'Kungsportsavenyen 29',
            qopla: "https://bramsburgers.qopla.com/restaurant/bram's-burgers---goteborg/qDQxKYXrEO/order",
            uber: 'https://www.ubereats.com/se/store/brams-burger-goteborg/XjL9idu2UIm3x5gQh-tOiA',
            wolt: 'https://wolt.com/sv/swe/goteborg/restaurant/bram-s-burgers-goteborg-2',
            foodora: 'https://www.foodora.se/restaurant/qd6e/brams-burgers'
        }
    ];

    var css = '' +
        '.om-overlay{position:fixed;inset:0;z-index:200;background:rgba(12,12,12,.55);display:flex;align-items:center;justify-content:center;padding:18px;backdrop-filter:blur(3px)}' +
        '.om-overlay[hidden]{display:none}' +
        '.om-panel{position:relative;width:min(440px,100%);background:#fff;border-radius:28px;padding:26px 24px 26px;max-height:92svh;overflow-y:auto;color:#0c0c0c;font-family:Inter,-apple-system,sans-serif;box-shadow:0 24px 70px rgba(0,0,0,.35)}' +
        '.om-rubrik{font-family:Anton,Impact,sans-serif;font-weight:400;font-size:2.6rem;line-height:1.05;letter-spacing:.01em;margin:34px 0 10px;color:#0c0c0c;text-transform:uppercase}' +
        '.om-sub{font-size:.8rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#6b7280;margin:0 0 22px}' +
        '.om-steg{display:flex;flex-direction:column}' +
        '.om-steg[hidden]{display:none}' +
        '.om-lista{display:flex;flex-direction:column;gap:14px}' +
        '.om-pill{display:flex;align-items:center;gap:14px;border-radius:9999px;padding:12px 22px 12px 12px;text-decoration:none;border:none;cursor:pointer;text-align:left;transition:transform .15s ease,box-shadow .15s ease;font-family:inherit}' +
        '.om-pill:hover{transform:scale(1.02)}' +
        '.om-ikon{width:52px;height:52px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:rgba(255,255,255,.22)}' +
        '.om-text{flex:1;min-width:0}' +
        '.om-titel{display:block;font-family:Anton,Impact,sans-serif;font-weight:400;font-size:1.25rem;letter-spacing:.03em;text-transform:uppercase;line-height:1.1}' +
        '.om-undertext{display:block;font-size:.8rem;font-weight:600;margin-top:2px;opacity:.9}' +
        '.om-pil{flex-shrink:0;opacity:.9}' +
        '.om-foodora{background:#d70f64;color:#fff;box-shadow:0 10px 26px rgba(215,15,100,.35)}' +
        '.om-wolt{background:#00c2e8;color:#fff;box-shadow:0 10px 26px rgba(0,194,232,.35)}' +
        '.om-uber{background:#0c0c0c;color:#fff;box-shadow:0 10px 26px rgba(0,0,0,.28)}' +
        '.om-qopla{background:#fff;color:#0c0c0c;border:2px solid #0c0c0c}' +
        '.om-qopla .om-ikon{background:#f3f4f6}' +
        '.om-enhet{background:#0c0c0c;color:#fff;box-shadow:0 10px 26px rgba(0,0,0,.22)}' +
        '.om-stang{position:absolute;top:18px;right:18px;width:44px;height:44px;border-radius:50%;background:#f3f4f6;border:none;color:#0c0c0c;font-size:1.35rem;cursor:pointer;line-height:1;display:flex;align-items:center;justify-content:center}' +
        '.om-stang:hover{background:#e5e7eb}' +
        '.om-tillbaka{position:absolute;top:28px;left:24px;background:none;border:none;color:#0c0c0c;cursor:pointer;padding:4px 0;display:flex;align-items:center;gap:8px;font-size:.78rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;font-family:inherit}' +
        '.om-tillbaka:hover{opacity:.6}';

    var pilUpp = '<svg class="om-pil" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="9 7 17 7 17 15"></polyline></svg>';
    var bakpil = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>';
    var ikonMoped = '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17.5" r="2.5"/><circle cx="18.5" cy="17.5" r="2.5"/><path d="M8 17.5h7.5M15 6h2.5l2 8.5M15 6l1.2 5.5c.2 1-.3 2-1.3 2.3L8 15.5M6 9h5l1 4"/></svg>';
    var ikonVagn = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.6"/><circle cx="17" cy="20" r="1.6"/><path d="M3 4h2l2.4 11h10.2l2.4-8H6"/></svg>';
    var ikonHus = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/></svg>';

    function plattform(url, klass, namn, subKey, subDefault, ikon) {
        if (!url) return '';
        return '<a href="' + url + '" target="_blank" rel="noopener" class="om-pill ' + klass + '">' +
            '<span class="om-ikon">' + ikon + '</span>' +
            '<span class="om-text"><span class="om-titel">' + namn + '</span>' +
            '<span class="om-undertext" data-i18n="' + subKey + '">' + subDefault + '</span></span>' +
            pilUpp + '</a>';
    }

    var steg2 = ENHETER.map(function (e) {
        return '<div class="om-steg" data-steg="' + e.id + '" hidden>' +
            '<button type="button" class="om-tillbaka">' + bakpil + '<span data-i18n="om.back">Tillbaka</span></button>' +
            '<h2 class="om-rubrik">' + e.namn + '</h2>' +
            '<p class="om-sub" data-i18n="om.how">Hur vill du beställa?</p>' +
            '<div class="om-lista">' +
            plattform(e.foodora, 'om-foodora', 'Foodora', 'om.delivery', 'Hemleverans', ikonMoped) +
            plattform(e.wolt, 'om-wolt', 'Wolt', 'om.delivery', 'Hemleverans', ikonMoped) +
            plattform(e.uber, 'om-uber', 'Uber Eats', 'om.delivery', 'Hemleverans', ikonMoped) +
            plattform(e.qopla, 'om-qopla', 'Qopla', 'om.pickup', 'Avhämtning & leverans', ikonVagn) +
            '</div></div>';
    }).join('');

    var steg1 = '<div class="om-steg" data-steg="1">' +
        '<h2 class="om-rubrik" style="margin-top:14px" data-i18n="om.order">Beställ</h2>' +
        '<p class="om-sub" data-i18n="om.where">Var vill du beställa ifrån?</p>' +
        '<div class="om-lista">' +
        ENHETER.map(function (e) {
            return '<button type="button" class="om-pill om-enhet" data-enhet="' + e.id + '">' +
                '<span class="om-ikon">' + ikonHus + '</span>' +
                '<span class="om-text"><span class="om-titel">' + e.namn + '</span>' +
                '<span class="om-undertext">' + e.adress + '</span></span>' +
                pilUpp + '</button>';
        }).join('') +
        '</div></div>';

    var overlay = document.createElement('div');
    overlay.className = 'om-overlay';
    overlay.id = 'brams-order-modal';
    overlay.hidden = true;
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-label', 'Beställ från BRAMS');
    overlay.innerHTML = '<div class="om-panel">' +
        '<button type="button" class="om-stang" aria-label="Stäng">&#215;</button>' +
        steg1 + steg2 + '</div>';

    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
    document.body.appendChild(overlay);

    var alla = overlay.querySelectorAll('.om-steg');
    function visa(id) { alla.forEach(function (s) { s.hidden = s.getAttribute('data-steg') !== id; }); }
    function oppna(e) { e.preventDefault(); overlay.hidden = false; document.body.style.overflow = 'hidden'; visa('1'); }
    function stang() { overlay.hidden = true; document.body.style.overflow = ''; }

    // Toppbarens "Beställ" + drawerns "Beställ online" öppnar modalen
    document.querySelectorAll('a[data-i18n="nav.order"], a[data-i18n="drawer.orderOnline"]').forEach(function (a) {
        a.addEventListener('click', oppna);
    });
    overlay.querySelectorAll('.om-enhet').forEach(function (b) {
        b.addEventListener('click', function () { visa(b.getAttribute('data-enhet')); });
    });
    overlay.querySelectorAll('.om-tillbaka').forEach(function (b) {
        b.addEventListener('click', function () { visa('1'); });
    });
    overlay.querySelector('.om-stang').addEventListener('click', stang);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) stang(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') stang(); });

    // Applicera sparat språk på modalens data-i18n-texter (modalen injiceras efter i18n.js)
    try {
        var lang = localStorage.getItem('brams-lang');
        if (lang && typeof setLanguage === 'function' && typeof BRAMS_TRANSLATIONS !== 'undefined' && BRAMS_TRANSLATIONS[lang]) setLanguage(lang);
    } catch (e) {}
})();
