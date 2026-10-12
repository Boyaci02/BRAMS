        // Leveranslänkar per enhet (Foodora/Wolt/Qopla). null = döljs.
        var BRAMS_DEST = {
            skarholmen: { name: 'Skärholmen', foodora: 'https://www.foodora.se/restaurant/ztza/brams-burgers-skarholmen', wolt: 'https://wolt.com/sv/swe/stockholm/restaurant/brams-burgers-kungens-kurva', qopla: "https://bramsburgers.qopla.com/restaurant/bram's-burgers---skarholmen/q8ydyvg9eM/order" },
            kista: { name: 'Kista', foodora: 'https://www.foodora.se/restaurant/rgfq/brams-burgers-kista', wolt: 'https://wolt.com/sv/swe/stockholm/restaurant/brams-burgers-kista', qopla: "https://bramsburgers.qopla.com/restaurant/bram's-burgers---kista/q7PNyL47re/order" },
            huddinge: { name: 'Huddinge', foodora: 'https://www.foodora.se/restaurant/zgbz/brams-burgers-huddinge-zgbz', wolt: 'https://wolt.com/sv/swe/stockholm/restaurant/brams-burgers-huddinge', qopla: "https://bramsburgers.qopla.com/restaurant/bram's-burgers---huddinge/qwNDeajN98/order" },
            uppsala: { name: 'Uppsala', foodora: 'https://www.foodora.se/restaurant/zkjh/brams-burgers-uppsala', wolt: 'https://wolt.com/sv/swe/uppsala/restaurant/brams-burgers-uppsala', qopla: "https://bramsburgers.qopla.com/restaurant/bram%E2%80%99s-burgers---uppsala/qeA4b2xNdX/order" },
            goteborg: { name: 'Göteborg', foodora: 'https://www.foodora.se/restaurant/qd6e/brams-burgers', wolt: 'https://wolt.com/sv/swe/goteborg/restaurant/bram-s-burgers-goteborg-2', qopla: "https://bramsburgers.qopla.com/restaurant/bram's-burgers---goteborg/qDQxKYXrEO/order" }
        };
        function setDeliv(id, url) {
            var el = document.getElementById(id);
            if (!el) return;
            if (url) { el.href = url; el.style.display = ''; } else { el.style.display = 'none'; }
        }
        function bramsSelectLocation(key) {
            var d = BRAMS_DEST[key];
            if (!d) return;
            document.getElementById('order-step2-name').textContent = d.name;
            setDeliv('order-foodora', d.foodora);
            setDeliv('order-wolt', d.wolt);
            setDeliv('order-qopla', d.qopla);
            document.getElementById('order-step-1').style.display = 'none';
            document.getElementById('order-step-2').style.display = 'block';
        }
        function bramsBackToLocations() {
            document.getElementById('order-step-2').style.display = 'none';
            document.getElementById('order-step-1').style.display = 'block';
        }
        function openOrderModal(e) {
            if (e && e.preventDefault) e.preventDefault();
            var m = document.getElementById('order-modal');
            if (!m) return;
            bramsBackToLocations(); // starta alltid på steg 1
            m.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            var card = document.getElementById('order-modal-card');
            if (card) { try { card.focus(); } catch (err) {} }
        }
        function closeOrderModal() {
            var m = document.getElementById('order-modal');
            if (!m) return;
            m.style.display = 'none';
            document.body.style.overflow = '';
            bramsBackToLocations(); // reset till steg 1 inför nästa öppning
        }
        (function () {
            var m = document.getElementById('order-modal');
            if (!m) return;
            // Klick på overlay (utanför kortet) stänger
            m.addEventListener('click', function (e) {
                if (e.target === m) closeOrderModal();
            });
            // Esc stänger
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape' && m.style.display === 'flex') closeOrderModal();
            });
        })();
    
