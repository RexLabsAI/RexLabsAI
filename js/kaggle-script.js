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

// Make cards clickable with data-link attribute
document.querySelectorAll('.card[data-link]').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function () {
        const link = this.getAttribute('data-link');
        if (link) {
            window.location.href = link;
        }
    });
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

// Mobile menu toggle
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

// Search functionality for Kaggle Competitions
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        const cards = document.querySelectorAll('.card');

        searchInput.addEventListener('keyup', function () {
            const searchTerm = this.value.toLowerCase();

            cards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('.card-description').textContent.toLowerCase();

                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = '';
                    card.style.animation = 'fadeInUp 0.3s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});
