// BRAMS beställ-modal: välj restaurang → välj beställningssätt (samma flöde som Dunder Smash).
// Injiceras på alla sidor; nav-knappen "Beställ" (data-i18n="nav.order") och drawerns
// "Beställ online" öppnar modalen istället för att gå direkt till Qopla. Utan JS
// funkar länkarnas ordinarie href som fallback.
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
            wolt: null, // Göteborg finns inte på Wolt
            foodora: 'https://www.foodora.se/restaurant/qd6e/brams-burgers'
        }
    ];

    var css = '' +
        '.om-overlay{position:fixed;inset:0;z-index:200;background:rgba(12,12,12,.82);display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(3px)}' +
        '.om-overlay[hidden]{display:none}' +
        '.om-panel{position:relative;width:min(420px,100%);background:#0c0c0c;border:1px solid rgba(198,140,23,.45);border-radius:20px;padding:30px 26px 26px;max-height:90svh;overflow-y:auto;color:#f9f6f1;font-family:inherit}' +
        '.om-panel h3{font-size:1.15rem;font-weight:800;text-align:center;margin:0 0 18px;letter-spacing:.02em;color:#f9f6f1}' +
        '.om-steg{display:flex;flex-direction:column;gap:10px}' +
        '.om-steg[hidden]{display:none}' +
        '.om-enhet{display:block;width:100%;text-align:center;background:#c68c17;color:#0c0c0c;border:none;border-radius:9999px;padding:13px 18px;font-weight:800;font-size:.95rem;letter-spacing:.04em;text-transform:uppercase;cursor:pointer;transition:transform .15s,opacity .15s}' +
        '.om-enhet:hover{transform:scale(1.03)}' +
        '.om-enhet small{display:block;font-weight:500;text-transform:none;letter-spacing:0;font-size:.78rem;opacity:.75;margin-top:1px}' +
        '.om-lank{display:flex;align-items:center;justify-content:space-between;background:rgba(255,255,255,.06);color:#f9f6f1;border-radius:12px;padding:14px 18px;font-weight:700;font-size:.9rem;letter-spacing:.05em;text-transform:uppercase;text-decoration:none;transition:background .15s}' +
        '.om-lank:hover{background:rgba(255,255,255,.12)}' +
        '.om-lank svg{color:#c68c17;flex-shrink:0}' +
        '.om-lank.om-direkt{background:#c68c17;color:#0c0c0c}' +
        '.om-lank.om-direkt svg{color:#0c0c0c}' +
        '.om-lank.om-direkt:hover{background:#d99a1f}' +
        '.om-stang{position:absolute;top:10px;right:14px;background:none;border:none;color:#f9f6f1;font-size:1.7rem;cursor:pointer;line-height:1}' +
        '.om-stang:hover{color:#c68c17}' +
        '.om-tillbaka{position:absolute;top:14px;left:14px;background:none;border:none;color:#f9f6f1;cursor:pointer;padding:4px;display:flex;line-height:1}' +
        '.om-tillbaka:hover{color:#c68c17}';

    var pil = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';
    var bakpil = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>';

    function lank(url, namn, direkt) {
        if (!url) return '';
        return '<a href="' + url + '" target="_blank" rel="noopener" class="om-lank' + (direkt ? ' om-direkt' : '') + '">' +
            '<span>' + namn + '</span>' + pil + '</a>';
    }

    var steg2 = ENHETER.map(function (e) {
        return '<div class="om-steg" data-steg="' + e.id + '" hidden>' +
            '<button type="button" class="om-tillbaka" aria-label="Byt restaurang">' + bakpil + '</button>' +
            '<h3>' + e.namn + ' — <span data-i18n="om.how">välj var du beställer</span></h3>' +
            lank(e.qopla, '<span data-i18n="om.pickup">Beställ direkt / Hämta</span>', true) +
            lank(e.uber, 'Uber Eats') +
            lank(e.wolt, 'Wolt') +
            lank(e.foodora, 'Foodora') +
            '</div>';
    }).join('');

    var overlay = document.createElement('div');
    overlay.className = 'om-overlay';
    overlay.id = 'brams-order-modal';
    overlay.hidden = true;
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-label', 'Beställ från BRAMS');
    overlay.innerHTML = '<div class="om-panel">' +
        '<button type="button" class="om-stang" aria-label="Stäng">&#215;</button>' +
        '<div class="om-steg" data-steg="1"><h3 data-i18n="om.where">Var vill du beställa ifrån?</h3>' +
        ENHETER.map(function (e) {
            return '<button type="button" class="om-enhet" data-enhet="' + e.id + '">' + e.namn +
                '<small>' + e.adress + '</small></button>';
        }).join('') +
        '</div>' + steg2 + '</div>';

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
