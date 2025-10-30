// PromptFolio Hub - Main JavaScript File
// Handles animations, interactions, and dynamic content

class PromptFolioHub {
    constructor() {
        this.init();
    }

    init() {
        this.setupParticleSystem();
        this.setupScrollAnimations();
        this.setupTypewriterEffect();
        this.setupTechStackAnimation();
        this.setupFeatureCards();
        this.setupNavigation();
        this.setupMobileMenu();
    }

    // Particle system for hero background
    setupParticleSystem() {
        const particleContainer = document.getElementById('particles');
        if (!particleContainer) return;

        // Create floating particles
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'absolute w-1 h-1 bg-white/30 rounded-full';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            particle.style.animation = 'float linear infinite';
            particleContainer.appendChild(particle);
        }
    }

    // Scroll-triggered animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe feature cards
        document.querySelectorAll('.feature-card').forEach(card => {
            observer.observe(card);
        });

        // Observe tech icons
        document.querySelectorAll('.tech-icon').forEach(icon => {
            observer.observe(icon);
        });
    }

    // Enhanced typewriter effect
    setupTypewriterEffect() {
        const typingElement = document.querySelector('.typing-animation');
        if (!typingElement) return;

        const text = 'PromptFolio Hub';
        let index = 0;

        // Clear existing content
        typingElement.textContent = '';

        function typeWriter() {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 150);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    typingElement.style.borderRight = 'none';
                }, 1000);
            }
        }

        // Start typing effect after a short delay
        setTimeout(typeWriter, 1000);
    }

    // Tech stack hover animations
    setupTechStackAnimation() {
        const techIcons = document.querySelectorAll('.tech-icon');
        
        techIcons.forEach((icon, index) => {
            // Staggered entrance animation
            anime({
                targets: icon,
                translateY: [50, 0],
                opacity: [0, 1],
                duration: 800,
                delay: index * 100,
                easing: 'easeOutQuart'
            });

            // Hover animation
            icon.addEventListener('mouseenter', () => {
                anime({
                    targets: icon,
                    scale: 1.1,
                    rotate: '5deg',
                    duration: 300,
                    easing: 'easeOutQuart'
                });
            });

            icon.addEventListener('mouseleave', () => {
                anime({
                    targets: icon,
                    scale: 1,
                    rotate: '0deg',
                    duration: 300,
                    easing: 'easeOutQuart'
                });
            });
        });
    }

    // Feature card interactions
    setupFeatureCards() {
        const cards = document.querySelectorAll('.feature-card');
        
        cards.forEach((card, index) => {
            // Entrance animation
            anime({
                targets: card,
                translateY: [30, 0],
                opacity: [0, 1],
                duration: 600,
                delay: index * 100,
                easing: 'easeOutQuart'
            });

            // Hover effect
            card.addEventListener('mouseenter', () => {
                anime({
                    targets: card,
                    translateY: -8,
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                    duration: 300,
                    easing: 'easeOutQuart'
                });
            });

            card.addEventListener('mouseleave', () => {
                anime({
                    targets: card,
                    translateY: 0,
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                    duration: 300,
                    easing: 'easeOutQuart'
                });
            });
        });
    }

    // Smooth scrolling navigation
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                // Only handle internal links
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    
                    if (target) {
                        const offsetTop = target.offsetTop - 80; // Account for fixed nav
                        
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });

        // Active nav link highlighting
        window.addEventListener('scroll', () => {
            this.updateActiveNavLink();
        });
    }

    // Update active navigation link based on scroll position
    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Mobile menu functionality
    setupMobileMenu() {
        const menuButton = document.querySelector('button[class*="md:hidden"]');
        const nav = document.querySelector('nav');
        
        if (menuButton) {
            menuButton.addEventListener('click', () => {
                // Toggle mobile menu (basic implementation)
                console.log('Mobile menu toggled');
            });
        }
    }

    // Utility function to create animated counters
    animateCounter(element, start, end, duration = 2000) {
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const current = Math.floor(start + (end - start) * progress);
            element.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }
        
        requestAnimationFrame(updateCounter);
    }

    // Parallax effect for hero section
    setupParallax() {
        const hero = document.querySelector('.hero-bg');
        
        if (hero) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                
                hero.style.transform = `translateY(${rate}px)`;
            });
        }
    }

    // Loading animation
    showLoadingAnimation() {
        const loader = document.createElement('div');
        loader.className = 'fixed inset-0 bg-primary z-50 flex items-center justify-center';
        loader.innerHTML = `
            <div class="text-center">
                <div class="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mb-4"></div>
                <p class="text-white text-lg">Loading PromptFolio Hub...</p>
            </div>
        `;
        
        document.body.appendChild(loader);
        
        // Remove loader after page is loaded
        window.addEventListener('load', () => {
            anime({
                targets: loader,
                opacity: 0,
                duration: 500,
                complete: () => {
                    loader.remove();
                }
            });
        });
    }
}

// Demo data for interactive features
const DEMO_PROMPTS = [
    {
        id: '1',
        title: 'Creative Writing Assistant',
        content: 'Act as a creative writing assistant. Help me develop characters, plot twists, and engaging dialogue for my fantasy novel. Provide specific examples and techniques for improving narrative flow.',
        tags: ['creative', 'writing', 'fantasy', 'storytelling'],
        rating: 4.8,
        author: 'Sarah Chen',
        platform: 'ChatGPT'
    },
    {
        id: '2',
        title: 'Code Review Expert',
        content: 'You are an experienced software engineer. Review my code for best practices, performance optimizations, and potential bugs. Explain your suggestions with clear reasoning and examples.',
        tags: ['programming', 'code-review', 'best-practices', 'optimization'],
        rating: 4.9,
        author: 'Mike Rodriguez',
        platform: 'Claude'
    },
    {
        id: '3',
        title: 'Marketing Strategy Generator',
        content: 'Create comprehensive marketing strategies for tech startups. Include social media campaigns, content marketing plans, and growth hacking techniques with measurable KPIs.',
        tags: ['marketing', 'strategy', 'startups', 'growth'],
        rating: 4.7,
        author: 'Emma Thompson',
        platform: 'ChatGPT'
    },
    {
        id: '4',
        title: 'Data Analysis Interpreter',
        content: 'Help me understand and interpret complex datasets. Explain statistical concepts, create visualizations, and provide actionable insights from raw data.',
        tags: ['data-analysis', 'statistics', 'visualization', 'insights'],
        rating: 4.6,
        author: 'David Kim',
        platform: 'Claude'
    },
    {
        id: '5',
        title: 'UI/UX Design Consultant',
        content: 'Act as a UI/UX design expert. Provide feedback on interface designs, suggest improvements for user experience, and recommend modern design patterns and trends.',
        tags: ['design', 'ui-ux', 'interface', 'user-experience'],
        rating: 4.8,
        author: 'Lisa Wang',
        platform: 'ChatGPT'
    }
];

// Utility functions for other pages
window.PromptFolioUtils = {
    // Search functionality
    searchPrompts: function(query, prompts = DEMO_PROMPTS) {
        if (!query) return prompts;
        
        const lowerQuery = query.toLowerCase();
        return prompts.filter(prompt => 
            prompt.title.toLowerCase().includes(lowerQuery) ||
            prompt.content.toLowerCase().includes(lowerQuery) ||
            prompt.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
        );
    },

    // Filter by tags
    filterByTags: function(selectedTags, prompts = DEMO_PROMPTS) {
        if (!selectedTags.length) return prompts;
        
        return prompts.filter(prompt =>
            selectedTags.some(tag => prompt.tags.includes(tag))
        );
    },

    // Format rating stars
    getRatingStars: function(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        
        return '★'.repeat(fullStars) + 
               (hasHalfStar ? '☆' : '') + 
               '☆'.repeat(emptyStars);
    },

    // Copy to clipboard functionality
    copyToClipboard: function(text) {
        navigator.clipboard.writeText(text).then(() => {
            this.showNotification('Copied to clipboard!');
        });
    },

    // Show notification
    showNotification: function(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg text-white ${
            type === 'success' ? 'bg-green-500' : 'bg-red-500'
        }`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate in
        anime({
            targets: notification,
            translateX: [300, 0],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutQuart'
        });
        
        // Remove after 3 seconds
        setTimeout(() => {
            anime({
                targets: notification,
                translateX: 300,
                opacity: 0,
                duration: 300,
                complete: () => notification.remove()
            });
        }, 3000);
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', async () => {
    new PromptFolioHub();

    const { authManager } = await import('./auth.js');
    window.authManager = authManager;

    // Add loading animation
    window.PromptFolioUtils.showLoadingAnimation && window.PromptFolioUtils.showLoadingAnimation();
});

// Performance optimization
window.addEventListener('load', () => {
    // Preload critical resources
    const criticalImages = [
        'resources/hero-image.jpg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('Application error:', e.error);
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PromptFolioHub, PromptFolioUtils };
}