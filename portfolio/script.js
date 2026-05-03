// ============================================
// Portfolio Website - JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all functions
    initNavbar();
    initSmoothScroll();
    initParallax();
    initScrollAnimations();
    initCounterAnimation();
    initMobileMenu();
    initContactForm();
});

/* ============================================
   Navbar Effects
   ============================================ */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/* ============================================
   Smooth Scroll
   ============================================ */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navLinks = document.querySelector('.nav-links');
                const hamburger = document.querySelector('.hamburger');
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
}

/* ============================================
   Parallax Effects
   ============================================ */
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-speed]');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = parseFloat(element.dataset.speed);
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + scrollY;
            
            // Only animate if element is in view
            if (rect.bottom > 0 && rect.top < window.innerHeight) {
                const yPos = (scrollY - elementTop) * speed;
                element.style.transform = `translate3d(0, ${yPos}px, 0)`;
            }
        });
    }, { passive: true });
    
    // Hero parallax background
    const heroBg = document.querySelector('.parallax-bg');
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;
            heroBg.style.transform = `translate3d(0, ${scrollY * 0.5}px, 0)`;
        }, { passive: true });
    }
}

/* ============================================
   Scroll Animations (Fade In / Slide Up)
   ============================================ */
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    };
    
    // Initial check
    revealOnScroll();
    
    // Listen for scroll
    window.addEventListener('scroll', revealOnScroll);
}

/* ============================================
   Counter Animation
   ============================================ */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    let hasAnimated = false;
    
    const animateCounters = () => {
        const aboutSection = document.getElementById('about');
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100 && !hasAnimated) {
            hasAnimated = true;
            
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
            });
        }
    };
    
    window.addEventListener('scroll', animateCounters);
}

/* ============================================
   Mobile Menu
   ============================================ */
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

/* ============================================
   Contact Form
   ============================================ */
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (name && email && subject && message) {
            // Show success message (in production, you'd send to a backend)
            showNotification('Message sent successfully!', 'success');
            form.reset();
        } else {
            showNotification('Please fill in all fields', 'error');
        }
    });
}

/* ============================================
   Notification System
   ============================================ */
function showNotification(message, type) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Add styles dynamically
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? 'rgba(0, 255, 136, 0.2)' : 'rgba(255, 0, 68, 0.2)'};
        border: 1px solid ${type === 'success' ? 'var(--neon-green)' : 'var(--neon-pink)'};
        border-radius: 10px;
        color: ${type === 'success' ? 'var(--neon-green)' : 'var(--neon-pink)'};
        font-family: 'Rajdhani', sans-serif;
        font-size: 1.1rem;
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 15px;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: inherit;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;
    
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add keyframe animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

/* ============================================
   Additional Interactive Features
   ============================================ */

// Cursor trail effect (optional - can be removed if too distracting)
let cursorTrail = [];
const trailLength = 20;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY });
    
    if (cursorTrail.length > trailLength) {
        cursorTrail.shift();
    }
});

// Add hover effect to skill cards
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.zIndex = '1';
    });
});

// Add click ripple effect to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        const x = e.clientX - e.target.getBoundingClientRect().left;
        const y = e.clientY - e.target.getBoundingClientRect().top;
        
        const ripples = document.createElement('span');
        ripples.style.cssText = `
            position: absolute;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            pointer-events: none;
            width: 20px;
            height: 20px;
            left: ${x}px;
            top: ${y}px;
            transform: translate(-50%, -50%);
            animation: ripple 0.6s linear;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripples);
        
        setTimeout(() => ripples.remove(), 600);
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        0% {
            width: 0;
            height: 0;
            opacity: 0.5;
        }
        100% {
            width: 500px;
            height: 500px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

/* ============================================
   Loading Animation
   ============================================ */
// Add page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Intersection Observer for section animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add visible class styling
const sectionStyle = document.createElement('style');
sectionStyle.textContent = `
    section.visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(sectionStyle);

/* ============================================
   Console Welcome Message
   ============================================ */
console.log('%c Welcome to My Portfolio! ', 'background: #0a0a0f; color: #00f3ff; font-size: 20px; padding: 10px; border: 2px solid #00f3ff; border-radius: 5px;');
console.log('%c Built with ❤️ using HTML, CSS & JavaScript ', 'background: #0a0a0f; color: #9d00ff; font-size: 14px; padding: 5px;');