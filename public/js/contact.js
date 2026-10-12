        // Navbar scroll logic
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

        // Drawer logic
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

        // Form logic
        const caseSelect = document.getElementById('case-type');
        const uploadSection = document.getElementById('upload-section');
        const fileInput = document.getElementById('file-input');
        const fileNameSpan = document.getElementById('file-name');
        const contactForm = document.getElementById('contact-form');

        caseSelect.addEventListener('change', (e) => {
            const val = e.target.value;
            if (val === 'jobb' || val === 'reklamation') {
                uploadSection.classList.remove('hidden');
            } else {
                uploadSection.classList.add('hidden');
            }
        });

        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                fileNameSpan.textContent = e.target.files[0].name;
                fileNameSpan.classList.remove('text-gray-400');
                fileNameSpan.classList.add('text-brand-gold');
            }
        });

        const CASE_TYPE_LABELS = {
            jobb: 'JOBBANSÖKAN',
            reklamation: 'REKLAMATION',
            bestallning: 'BESTÄLLNINGSFRÅGA',
            samarbete: 'SAMARBETE',
            ovrigt: 'ÖVRIGT',
        };

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.textContent = 'SKICKAR...';
            submitBtn.disabled = true;

            const formData = new FormData(contactForm);
            const caseLabel = CASE_TYPE_LABELS[formData.get('case-type')] || 'ÖVRIGT';
            const senderName = (formData.get('name') || '').toString().trim() || 'okänd avsändare';
            formData.set('subject', `[KONTAKT – ${caseLabel}] Ny förfrågan från ${senderName}`);

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            const result = await response.json();

            if (result.success) {
                submitBtn.textContent = 'SKICKAT!';
                submitBtn.classList.add('bg-brand-gold');
                contactForm.reset();
                uploadSection.classList.add('hidden');
                fileNameSpan.textContent = "INGEN FIL VALD";
                setTimeout(() => {
                    submitBtn.textContent = 'SKICKA MEDDELANDE';
                    submitBtn.classList.remove('bg-brand-gold');
                    submitBtn.disabled = false;
                }, 3000);
            } else {
                submitBtn.textContent = 'FEL – FÖRSÖK IGEN';
                submitBtn.disabled = false;
            }
        });
    
