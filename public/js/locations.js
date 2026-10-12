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
            if (open) { drawer.classList.add('open'); overlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
            else { drawer.classList.remove('open'); overlay.classList.remove('open'); document.body.style.overflow = 'auto'; }
        }

        // Locations rail — desktop arrow nav + edge state
        (function () {
            const rail = document.getElementById('loc-rail');
            const prev = document.querySelector('.loc-prev');
            const next = document.querySelector('.loc-next');
            if (!rail || !prev || !next) return;

            const stepDistance = () => {
                const card = rail.querySelector('.loc-card');
                if (!card) return rail.clientWidth * 0.8;
                const styles = getComputedStyle(rail);
                const gap = parseFloat(styles.columnGap || styles.gap || 0);
                return card.getBoundingClientRect().width + gap;
            };

            prev.addEventListener('click', () => rail.scrollBy({ left: -stepDistance(), behavior: 'smooth' }));
            next.addEventListener('click', () => rail.scrollBy({ left: stepDistance(), behavior: 'smooth' }));

            const updateEdges = () => {
                const max = rail.scrollWidth - rail.clientWidth - 4;
                prev.disabled = rail.scrollLeft <= 4;
                next.disabled = rail.scrollLeft >= max;
            };
            rail.addEventListener('scroll', updateEdges, { passive: true });
            window.addEventListener('resize', updateEdges);
            updateEdges();
        })();
    
