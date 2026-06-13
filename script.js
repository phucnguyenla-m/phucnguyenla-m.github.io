
    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when link clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');

    function reveal() {
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', reveal);
    reveal(); // Initial check

    // Smooth Scroll for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Active Navigation Link
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.style.color = 'var(--text-secondary)';
            if (link.getAttribute('href').slice(1) === current) {
                link.style.color = 'var(--text)';
            }
        });
    });

    // Form Submission
    document.querySelector('.contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! I\'ll get back to you soon.');
        e.target.reset();
    });

    // Parallax Effect on Scroll
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${window.scrollY * 0.5}px)`;
        }
    });

    // Animate elements on scroll with stagger effect
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 100);
            }
        });
    }, observerOptions);

    reveals.forEach(element => {
        observer.observe(element);
    });