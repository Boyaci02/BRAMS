        let lastScrollTop = 0;
        const navbar = document.getElementById('navbar');

        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 50) {
                navbar.classList.add('nav-active');
            } else {
                navbar.classList.remove('nav-active');
            }

            if (scrollTop > lastScrollTop && scrollTop > 100) {
                navbar.classList.add('nav-hidden');
            } else {
                navbar.classList.remove('nav-hidden');
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
        }, false);

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

        /* Scroll-reveal: fade-up sections, images and cards as they enter view */
        (function () {
            var els = document.querySelectorAll('[data-reveal]');
            if (!els.length) return;
            if (!('IntersectionObserver' in window)) {
                els.forEach(function (el) { el.classList.add('revealed'); });
                return;
            }
            var io = new IntersectionObserver(function (entries) {
                entries.forEach(function (e) {
                    if (e.isIntersecting) { e.target.classList.add('revealed'); io.unobserve(e.target); }
                });
            }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
            els.forEach(function (el) { io.observe(el); });
        })();
    
