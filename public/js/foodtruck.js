        let lastScrollTop = 0;
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > 50) navbar.classList.add('nav-active');
            else navbar.classList.remove('nav-active');
            if (scrollTop > lastScrollTop && scrollTop > 100) navbar.classList.add('nav-hidden');
            else navbar.classList.remove('nav-hidden');
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });

        function toggleMenu(open) {
            const drawer = document.getElementById('menu-drawer');
            const overlay = document.getElementById('menu-overlay');
            if (open) {
                drawer.classList.add('open');
                overlay.classList.add('open');
                document.body.style.overflow = 'hidden';
            } else {
                drawer.classList.remove('open');
                overlay.classList.remove('open');
                document.body.style.overflow = 'auto';
            }
        }

        const EVENT_TYPE_LABELS = {
            foretagsevent: 'FÖRETAGSEVENT',
            fest: 'FEST',
            festival: 'FESTIVAL/MARKNAD',
            brollop: 'BRÖLLOP',
            ovrigt: 'ÖVRIGT',
        };

        document.getElementById('booking-form').addEventListener('submit', async function(e) {
            e.preventDefault();
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.textContent = 'SKICKAR...';
            submitBtn.disabled = true;

            const formData = new FormData(this);
            const eventLabel = EVENT_TYPE_LABELS[formData.get('event-type')] || 'EVENEMANG';
            const senderName = (formData.get('name') || '').toString().trim() || 'okänd avsändare';
            const eventDate = (formData.get('date') || '').toString().trim();
            const dateSuffix = eventDate ? ` · ${eventDate}` : '';
            formData.set('subject', `[FOOD TRUCK – ${eventLabel}] Bokning från ${senderName}${dateSuffix}`);

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            const result = await response.json();

            if (result.success) {
                submitBtn.textContent = 'SKICKAT!';
                submitBtn.classList.add('bg-brand-gold');
                this.reset();
                setTimeout(() => {
                    submitBtn.textContent = 'SKICKA BOKNINGSFÖRFRÅGAN';
                    submitBtn.classList.remove('bg-brand-gold');
                    submitBtn.disabled = false;
                }, 3000);
            } else {
                submitBtn.textContent = 'FEL – FÖRSÖK IGEN';
                submitBtn.disabled = false;
            }
        });
    
