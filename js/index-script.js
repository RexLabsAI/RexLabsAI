// Navigation Active Link
document.addEventListener('DOMContentLoaded', function () {
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('.nav-menu a');

    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentLocation ||
            item.getAttribute('href') === currentLocation.split('/').pop()) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Add animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Mobile menu toggle (if needed for mobile navigation)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Back to Top Button
document.addEventListener('DOMContentLoaded', function () {
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Carousel functionality
let slideIndex = 1;
let slideTimer;

function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[slideIndex - 1].classList.add('active');
    dots[slideIndex - 1].classList.add('active');
}

function currentSlide(n) {
    clearTimeout(slideTimer);
    slideIndex = n;
    showSlide(slideIndex);
    autoSlide();
}

function autoSlide() {
    slideIndex++;
    showSlide(slideIndex);
    slideTimer = setTimeout(autoSlide, 5000);
}

// Initialize carousel
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.image-carousel');
    if (carousel) {
        showSlide(slideIndex);
        autoSlide();
    }
});

// Make cards clickable with data-link attribute and wrap links
document.querySelectorAll('.card[data-link]').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function () {
        const link = this.getAttribute('data-link');
        if (link) {
            if (!link.includes('solution-view.html') && (link.startsWith('http') || link.startsWith('https'))) {
                window.location.href = 'solution-view.html?url=' + encodeURIComponent(link);
            } else {
                window.location.href = link;
            }
        }
    });
});
