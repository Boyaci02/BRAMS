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
    
