// QUANEX Website Scripts

document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.padding = '1rem 5%';
            header.style.backgroundColor = 'rgba(3, 3, 18, 0.95)';
        } else {
            header.style.padding = '1.5rem 5%';
            header.style.backgroundColor = 'rgba(5, 5, 32, 0.9)';
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Particle effect for quantum visualization
    const quantumVisualization = document.querySelector('.quantum-visualization');
    if (quantumVisualization) {
        createParticles(quantumVisualization);
    }

    // Animation for timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length > 0) {
        observeElements(timelineItems, 'animate-timeline');
    }

    // Animation for features
    const features = document.querySelectorAll('.feature');
    if (features.length > 0) {
        observeElements(features, 'animate-feature');
    }

    // Animation for resource cards
    const resourceCards = document.querySelectorAll('.resource-card');
    if (resourceCards.length > 0) {
        observeElements(resourceCards, 'animate-resource');
    }
});

// Create particle effect
function createParticles(element) {
    const particleCount = 50;
    const colors = ['#6e00ff', '#00b8ff', '#ff00e6'];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 5 + 2;
        
        // Random color
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Random animation duration
        const duration = Math.random() * 3 + 2;
        
        // Set styles
        particle.style.cssText = `
            position: absolute;
            top: ${posY}%;
            left: ${posX}%;
            width: ${size}px;
            height: ${size}px;
            background-color: ${color};
            border-radius: 50%;
            opacity: ${Math.random() * 0.5 + 0.3};
            animation: float ${duration}s infinite ease-in-out;
            animation-delay: ${Math.random() * 2}s;
            z-index: 1;
        `;
        
        element.appendChild(particle);
    }
}

// Intersection Observer for animations
function observeElements(elements, animationClass) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animationClass);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Add animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0) scale(1);
        }
        50% {
            transform: translateY(-10px) scale(1.1);
        }
    }
    
    .animate-timeline {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    .animate-feature {
        opacity: 0;
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    .animate-resource {
        opacity: 0;
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
