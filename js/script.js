document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Sticky Navigation
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a server
            console.log({ name, email, message });
            
            alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
            contactForm.reset();
        });
    }

    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Skills Animation Control
    const skillsTrack = document.querySelector('.skills-track');
    if (skillsTrack) {
        // Pause animation on hover
        skillsTrack.addEventListener('mouseenter', () => {
            skillsTrack.style.animationPlayState = 'paused';
        });
        
        skillsTrack.addEventListener('mouseleave', () => {
            skillsTrack.style.animationPlayState = 'running';
        });

        // Reset animation at the end of each cycle for perfect loop
        skillsTrack.addEventListener('animationiteration', () => {
            // This ensures perfect looping with no visible jump
            skillsTrack.style.animation = 'none';
            void skillsTrack.offsetWidth; // Trigger reflow
            skillsTrack.style.animation = 'scroll 40s linear infinite';
        });
    }

    // Initialize animations
    const animateOnScroll = () => {
        const skillsSection = document.querySelector('#skills');
        if (skillsSection && skillsSection.getBoundingClientRect().top < window.innerHeight) {
            skillsTrack.style.animationPlayState = 'running';
            window.removeEventListener('scroll', animateOnScroll);
        }
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});