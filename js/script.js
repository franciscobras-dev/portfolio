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

// Pause animation on hover
// Enhanced skills animation with dynamic duplication
document.addEventListener('DOMContentLoaded', function() {
    const skillsTrack = document.querySelector('.skills-track');
    
    if (skillsTrack) {
        // Get original skills
        const originalSkills = Array.from(skillsTrack.querySelectorAll('.skill-item'));
        const skillsCount = originalSkills.length;
        
        // Calculate how many to duplicate for seamless loop
        const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const skillWidth = 150; // Approximate width of each skill item
        const skillsToDuplicate = Math.ceil(viewportWidth / skillWidth);
        
        // Duplicate skills for seamless looping
        for (let i = 0; i < skillsToDuplicate; i++) {
            const skillToDuplicate = originalSkills[i % skillsCount];
            const clone = skillToDuplicate.cloneNode(true);
            skillsTrack.appendChild(clone);
        }
        
        // Pause/play on hover
        skillsTrack.addEventListener('mouseenter', () => {
            skillsTrack.style.animationPlayState = 'paused';
        });
        
        skillsTrack.addEventListener('mouseleave', () => {
            skillsTrack.style.animationPlayState = 'running';
        });
    }
});

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Any additional initialization can go here
});