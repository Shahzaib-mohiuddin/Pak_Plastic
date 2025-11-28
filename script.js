// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initLoader();
    initNavigation();
    initScrollAnimations();
    initCounterAnimations();
    initFormValidation();
    initSmoothScrolling();
    initLazyLoading();
    initProductCarousel();
    initProductShowcase();
    initCategoriesModal();
    initInfoRequestForm();
    initAdvancedAnimations();
});

// Loading Animation
function initLoader() {
    const loader = document.getElementById('loader');
    
    // Hide loader after page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            loader.classList.add('hidden');
            // Remove loader from DOM after animation
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 1000);
    });
}

// Navigation Functionality
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active link highlighting for multi-page navigation
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href');
            
            // Check if current page matches the link
            if (linkHref === currentPage || 
                (currentPage === '' && linkHref === 'index.html') ||
                (currentPage === 'index.html' && linkHref === 'index.html')) {
                link.classList.add('active');
            }
        });
    }
    
    // Set active link on page load
    setActiveNavLink();
}

// Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Add scroll animation class to elements
    const animateElements = document.querySelectorAll(`
        .section-header,
        .about-content,
        .vision-card,
        .mission-card,
        .product-card,
        .tech-feature,
        .comparison,
        .sustainability-card,
        .partner-card,
        .market-item,
        .challenge,
        .solution,
        .goal-item,
        .contact-item,
        .contact-form
    `);

    animateElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
}

// Counter Animations
function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                animateCounter(counter, target);
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element, target) {
    // Skip animation for non-numeric values like "24/7"
    if (!target || isNaN(target)) {
        return;
    }
    
    element.classList.add('counting');
    let current = 0;
    const increment = target / 100;
    const duration = 2000; // 2 seconds
    const stepTime = duration / 100;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
            element.classList.remove('counting');
        }
        
        // Format numbers with + suffix for large numbers
        if (target >= 1000) {
            element.textContent = Math.floor(current) + '+';
        } else if (target === 70) {
            element.textContent = Math.floor(current) + '+';
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, stepTime);
}

// Form Validation and Submission
function initFormValidation() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            // Validate form
            if (validateForm(formObject)) {
                // Show success message
                showFormMessage('Thank you for your message! We will get back to you soon.', 'success');
                contactForm.reset();
            }
        });

        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });

            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    }
}

function validateForm(data) {
    let isValid = true;
    const form = document.getElementById('contactForm');

    // Required fields
    const requiredFields = ['name', 'email', 'message'];
    
    requiredFields.forEach(field => {
        if (!data[field] || data[field].trim() === '') {
            showFieldError(form.querySelector(`[name="${field}"]`), 'This field is required');
            isValid = false;
        }
    });

    // Email validation
    if (data.email && !isValidEmail(data.email)) {
        showFieldError(form.querySelector('[name="email"]'), 'Please enter a valid email address');
        isValid = false;
    }

    // Phone validation (if provided)
    if (data.phone && !isValidPhone(data.phone)) {
        showFieldError(form.querySelector('[name="phone"]'), 'Please enter a valid phone number');
        isValid = false;
    }

    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.getAttribute('name');

    clearFieldError(field);

    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'This field is required');
        return false;
    }

    if (fieldName === 'email' && value && !isValidEmail(value)) {
        showFieldError(field, 'Please enter a valid email address');
        return false;
    }

    if (fieldName === 'phone' && value && !isValidPhone(value)) {
        showFieldError(field, 'Please enter a valid phone number');
        return false;
    }

    return true;
}

function showFieldError(field, message) {
    clearFieldError(field);
    
    field.style.borderColor = '#ef4444';
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.color = '#ef4444';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(field) {
    field.style.borderColor = '#e2e8f0';
    
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

function showFormMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.style.padding = '1rem';
    messageDiv.style.borderRadius = '8px';
    messageDiv.style.marginTop = '1rem';
    messageDiv.style.textAlign = 'center';
    messageDiv.style.fontWeight = '500';
    
    if (type === 'success') {
        messageDiv.style.backgroundColor = '#dcfce7';
        messageDiv.style.color = '#166534';
        messageDiv.style.border = '1px solid #bbf7d0';
    } else {
        messageDiv.style.backgroundColor = '#fef2f2';
        messageDiv.style.color = '#dc2626';
        messageDiv.style.border = '1px solid #fecaca';
    }
    
    messageDiv.textContent = message;
    
    const form = document.getElementById('contactForm');
    form.appendChild(messageDiv);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

// Lazy Loading for Images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Enhanced scroll performance
const debouncedScroll = debounce(function() {
    // Any additional scroll-based functionality can go here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        
        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Focus management for accessibility
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    element.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

// Performance monitoring
function measurePerformance() {
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
                console.log('DOM Content Loaded:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart, 'ms');
            }, 0);
        });
    }
}

// Initialize performance monitoring in development
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    measurePerformance();
}

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment the following lines if you want to add a service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(function(registration) {
        //         console.log('ServiceWorker registration successful');
        //     })
        //     .catch(function(err) {
        //         console.log('ServiceWorker registration failed');
        //     });
    });
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    // In production, you might want to send this to an error tracking service
});

// Unhandled promise rejection handling
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled Promise Rejection:', e.reason);
    // In production, you might want to send this to an error tracking service
});

// Analytics placeholder (replace with your analytics code)
function initAnalytics() {
    // Google Analytics, Facebook Pixel, or other analytics code would go here
    // Example:
    // gtag('config', 'GA_MEASUREMENT_ID');
}

// Product Showcase - Single Item Rotation
function initProductShowcase() {
    const showcase = document.getElementById('productShowcase');
    if (!showcase) {
        console.log('Product showcase not found');
        return;
    }
    
    const items = Array.from(showcase.querySelectorAll('.showcase-item'));
    if (items.length === 0) {
        console.log('No showcase items found');
        return;
    }
    
    console.log('Product showcase initialized with', items.length, 'items');
    
    let currentIndex = 0;
    let intervalId = null;
    
    // Show specific item
    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.remove('active');
        });
        items[index].classList.add('active');
        console.log('Showing item', index);
    }
    
    // Go to next item
    function nextItem() {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    }
    
    // Start auto-rotation
    function startRotation() {
        if (intervalId) clearInterval(intervalId);
        intervalId = setInterval(nextItem, 3000);
    }
    
    // Stop auto-rotation
    function stopRotation() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }
    
    // Pause on hover
    showcase.addEventListener('mouseenter', stopRotation);
    showcase.addEventListener('mouseleave', startRotation);
    
    // Initialize - show first item and start rotation
    showItem(0);
    startRotation();
}

// Product Carousel Functionality
function initProductCarousel() {
    const carousel = document.getElementById('productCarousel');
    if (!carousel) return;
    
    const products = carousel.querySelectorAll('.product-item');
    const visibleProducts = Array.from(products).filter(p => p.classList.contains('active'));
    const hiddenProducts = Array.from(products).filter(p => p.classList.contains('hidden'));
    
    let isAnimating = false;
    let shuffleTimeout;
    
    // Auto-shuffle every 4 seconds
    function autoShuffle() {
        if (!isAnimating) {
            shuffleProducts();
        }
        shuffleTimeout = setTimeout(autoShuffle, 4000);
    }
    
    // Shuffle products function
    function shuffleProducts() {
        if (isAnimating || hiddenProducts.length === 0) return;
        
        isAnimating = true;
        
        // Get random hidden product
        const randomHiddenIndex = Math.floor(Math.random() * hiddenProducts.length);
        const newProduct = hiddenProducts[randomHiddenIndex];
        
        // Get random visible product to replace (not the main product)
        const replaceableProducts = visibleProducts.filter(p => !p.classList.contains('main-product'));
        const randomVisibleIndex = Math.floor(Math.random() * replaceableProducts.length);
        const oldProduct = replaceableProducts[randomVisibleIndex];
        
        // Animate out the old product
        oldProduct.style.transform = 'translateY(-50px) scale(0.8)';
        oldProduct.style.opacity = '0';
        
        setTimeout(() => {
            // Hide old product
            oldProduct.classList.remove('active');
            oldProduct.classList.add('hidden');
            
            // Show new product
            newProduct.classList.remove('hidden');
            newProduct.classList.add('active');
            
            // Reset position and animate in
            newProduct.style.transform = 'translateY(50px) scale(0.8)';
            newProduct.style.opacity = '0';
            
            setTimeout(() => {
                newProduct.style.transform = 'translateY(0) scale(1)';
                newProduct.style.opacity = '1';
                
                // Update arrays
                const oldIndex = visibleProducts.indexOf(oldProduct);
                const hiddenIndex = hiddenProducts.indexOf(newProduct);
                
                if (oldIndex > -1) visibleProducts[oldIndex] = newProduct;
                if (hiddenIndex > -1) hiddenProducts[hiddenIndex] = oldProduct;
                
                setTimeout(() => {
                    isAnimating = false;
                }, 600);
            }, 50);
        }, 300);
    }
    
    // Add hover listeners to trigger shuffle
    products.forEach(product => {
        product.addEventListener('mouseenter', () => {
            clearTimeout(shuffleTimeout);
            if (!isAnimating) {
                shuffleProducts();
            }
        });
        
        product.addEventListener('mouseleave', () => {
            clearTimeout(shuffleTimeout);
            shuffleTimeout = setTimeout(autoShuffle, 2000);
        });
    });
    
    // Start auto-shuffle
    shuffleTimeout = setTimeout(autoShuffle, 4000);
    
    // Pause on carousel hover
    carousel.addEventListener('mouseenter', () => {
        clearTimeout(shuffleTimeout);
    });
    
    carousel.addEventListener('mouseleave', () => {
        shuffleTimeout = setTimeout(autoShuffle, 2000);
    });
}

// Categories Modal Functionality
function initCategoriesModal() {
    const categoryCards = document.querySelectorAll('.category-card');
    const modal = document.getElementById('productModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalClose = document.getElementById('modalClose');
    const productsGrid = document.getElementById('productsGrid');
    
    if (!modal) return;
    
    // Product data for each category
    const categoryProducts = {
        'regular-crates': {
            title: 'Regular Crates',
            products: [
                { icon: '📦', name: 'Standard Crate 40L', description: 'Durable plastic crate for general storage' },
                { icon: '📋', name: 'Ventilated Crate', description: 'Breathable design for fresh produce' },
                { icon: '🗂️', name: 'Stackable Crate', description: 'Space-efficient stacking design' },
                { icon: '📦', name: 'Heavy Duty Crate', description: 'Reinforced for heavy loads' }
            ]
        },
        'series-crates': {
            title: 'Series Crates',
            products: [
                { icon: '📋', name: 'Series A Crate', description: 'Modular design for systematic organization' },
                { icon: '🗃️', name: 'Series B Crate', description: 'Enhanced durability for industrial use' },
                { icon: '📦', name: 'Series C Crate', description: 'Compact design for tight spaces' },
                { icon: '🗂️', name: 'Series D Crate', description: 'Premium quality for specialized applications' }
            ]
        },
        'spare-parts': {
            title: 'Spare Parts Bin',
            products: [
                { icon: '⚙️', name: 'Small Parts Bin', description: 'Organize small components efficiently' },
                { icon: '🔧', name: 'Tool Storage Bin', description: 'Dedicated storage for tools and equipment' },
                { icon: '🔩', name: 'Hardware Bin', description: 'Perfect for nuts, bolts, and fasteners' },
                { icon: '⚡', name: 'Electronic Parts Bin', description: 'Anti-static bins for electronic components' }
            ]
        },
        'pallets': {
            title: 'Pallets',
            products: [
                { icon: '🏗️', name: 'Standard Pallet', description: 'Industry standard 1200x800mm pallet' },
                { icon: '🚛', name: 'Export Pallet', description: 'ISPM-15 compliant for international shipping' },
                { icon: '🏭', name: 'Heavy Duty Pallet', description: 'Reinforced for maximum load capacity' },
                { icon: '♻️', name: 'Eco Pallet', description: '100% recycled material construction' }
            ]
        },
        'spill-pallets': {
            title: 'Spill Pallets',
            products: [
                { icon: '🛢️', name: 'Drum Spill Pallet', description: 'Containment for 200L drums' },
                { icon: '🧪', name: 'Chemical Spill Pallet', description: 'Chemical resistant materials' },
                { icon: '⛽', name: 'Fuel Spill Pallet', description: 'Specialized for fuel storage' },
                { icon: '🏭', name: 'Industrial Spill Pallet', description: 'Heavy-duty industrial applications' }
            ]
        },
        'waste-bins': {
            title: 'Waste Bins',
            products: [
                { icon: '🗑️', name: 'Standard Waste Bin', description: 'General purpose waste collection' },
                { icon: '♻️', name: 'Recycling Bin', description: 'Color-coded for recycling programs' },
                { icon: '🏥', name: 'Medical Waste Bin', description: 'Specialized for healthcare facilities' },
                { icon: '🏭', name: 'Industrial Waste Bin', description: 'Heavy-duty for industrial waste' }
            ]
        },
        'pallet-boxes': {
            title: 'Pallet Boxes',
            products: [
                { icon: '📦', name: 'Collapsible Pallet Box', description: 'Space-saving foldable design' },
                { icon: '🚛', name: 'Solid Pallet Box', description: 'Rigid construction for heavy loads' },
                { icon: '🌊', name: 'Ventilated Pallet Box', description: 'Airflow design for perishables' },
                { icon: '🔒', name: 'Lockable Pallet Box', description: 'Secure storage with locking mechanism' }
            ]
        },
        'general-handling': {
            title: 'General Handling Products',
            products: [
                { icon: '🏭', name: 'Material Handling Tray', description: 'Versatile trays for various materials' },
                { icon: '📋', name: 'Document Tray', description: 'Office organization solutions' },
                { icon: '🧰', name: 'Tool Box', description: 'Portable tool storage solutions' },
                { icon: '📦', name: 'Storage Container', description: 'Multi-purpose storage containers' }
            ]
        }
    };
    
    // Add click listeners to category cards
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            const categoryData = categoryProducts[category];
            
            if (categoryData) {
                showCategoryProducts(categoryData);
            }
        });
    });
    
    // Show products in modal
    function showCategoryProducts(categoryData) {
        modalTitle.textContent = categoryData.title;
        
        // Clear existing products
        productsGrid.innerHTML = '';
        
        // Add products to grid
        categoryData.products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <span class="product-icon">${product.icon}</span>
                <h4>${product.name}</h4>
                <p>${product.description}</p>
            `;
            productsGrid.appendChild(productCard);
        });
        
        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Close modal functionality
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    modalClose.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Info Request Form Functionality
function initInfoRequestForm() {
    const form = document.getElementById('infoRequestForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            product: formData.get('product'),
            message: formData.get('message')
        };
        
        // Validate required fields
        if (!data.name || !data.email) {
            showFormMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        // Validate email format
        if (!isValidEmail(data.email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = form.querySelector('.btn-submit');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'SUBMITTING...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            showFormMessage('Thank you! Your request has been submitted successfully. We will contact you soon.', 'success');
            form.reset();
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

function showFormMessage(message, type) {
    // Remove existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = message;
    
    // Insert message
    const form = document.getElementById('infoRequestForm');
    const submitSection = form.querySelector('.form-submit');
    submitSection.parentNode.insertBefore(messageDiv, submitSection);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}

// Advanced Animations
function initAdvancedAnimations() {
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Enhanced scroll animations with stagger
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const staggerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 100);
                staggerObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Add scroll animations to elements
    const animateElements = document.querySelectorAll(`
        .category-card,
        .feature-card,
        .stat-card,
        .about-content,
        .form-section,
        .customer-service-image
    `);
    
    animateElements.forEach(el => {
        el.classList.add('scroll-animate');
        staggerObserver.observe(el);
    });
    
    // Mouse movement parallax for floating elements
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        const shapes = document.querySelectorAll('.shape, .bg-shape');
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            shape.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
    
    // Add pulse animation to important buttons
    const importantButtons = document.querySelectorAll('.btn-primary, .btn-submit');
    importantButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.animation = 'pulse 0.6s ease-in-out';
        });
        btn.addEventListener('animationend', () => {
            btn.style.animation = '';
        });
    });
}

// Call analytics initialization
// initAnalytics();

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        isValidEmail,
        isValidPhone,
        validateForm,
        debounce,
        throttle,
        initProductCarousel
    };
}
