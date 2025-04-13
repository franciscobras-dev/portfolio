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

    // Form submission code
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    async function handleSubmit(event) {
        event.preventDefault();
        const submitButton = contactForm.querySelector('button[type="submit"]');
        
        try {
            submitButton.classList.add('loading');
            const formData = new FormData(event.target);
            
            const response = await fetch(event.target.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                formStatus.textContent = "Message sent successfully! I'll respond shortly.";
                formStatus.classList.remove('error');
                formStatus.classList.add('success');
                contactForm.reset();
            } else {
                throw new Error('Server responded with error');
            }
        } catch (error) {
            formStatus.textContent = "Oops! There was a problem sending your message. Please try again.";
            formStatus.classList.remove('success');
            formStatus.classList.add('error');
        } finally {
            submitButton.classList.remove('loading');
            formStatus.style.display = 'block';
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        }
    }

contactForm.addEventListener('submit', handleSubmit);

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