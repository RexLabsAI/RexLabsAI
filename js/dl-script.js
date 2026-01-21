// Navigation Active Link
document.addEventListener('DOMContentLoaded', function () {
    const currentLocation = location.pathname;

    // Check if we are at root or what folder we are in
    // Normalize path by removing trailing slash
    const normalizedPath = currentLocation.endsWith('/') ? currentLocation.slice(0, -1) : currentLocation;
    const pathSegments = normalizedPath.split('/');
    const currentFolder = pathSegments.pop() || 'index';

    const menuItems = document.querySelectorAll('.nav-menu a');

    menuItems.forEach(item => {
        const href = item.getAttribute('href');
        if (!href) return;

        // Clean href to compare with folder name
        let hrefClean = href.replace(/\.\.\//g, '').replace(/\/$/, '');
        if (hrefClean === '.' || hrefClean === '') hrefClean = 'index';

        // Check if the current folder matches the href
        // or if we are at root (index) and the link matches
        const isActive = (currentFolder === 'index' && (hrefClean === 'index' || hrefClean === '.')) ||
            (currentFolder === hrefClean);

        if (isActive) {
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

// Chat Widget Toggle
(function () {
    const initChat = () => {
        const chatToggle = document.getElementById('chatToggle');
        const chatOptions = document.getElementById('chatOptions');

        if (chatToggle && chatOptions) {
            chatToggle.addEventListener('click', function (e) {
                e.stopPropagation();
                chatToggle.classList.toggle('active');
                chatOptions.classList.toggle('show');

                // Toggle icon
                const icon = chatToggle.querySelector('i');
                if (chatToggle.classList.contains('active')) {
                    icon.className = 'fas fa-times';
                } else {
                    icon.className = 'fas fa-comment-dots';
                }
            });

            // Close when clicking outside
            document.addEventListener('click', function (e) {
                if (!chatToggle.contains(e.target) && !chatOptions.contains(e.target)) {
                    chatToggle.classList.remove('active');
                    chatOptions.classList.remove('show');
                    chatToggle.querySelector('i').className = 'fas fa-comment-dots';
                }
            });
        }
    };
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChat);
    } else {
        initChat();
    }
})();


// Messenger Chat Logic
(function () {
    const initMessenger = () => {
        const messengerBtn = document.querySelector('.chat-option.messenger');
        const chatBox = document.getElementById('messengerChatBox');
        const closeBtn = document.getElementById('closeMessenger');
        const minimizeBtn = document.getElementById('minimizeMessenger');

        if (messengerBtn && chatBox) {
            messengerBtn.addEventListener('click', function (e) {
                e.preventDefault(); // Prevent opening link in new tab
                e.stopPropagation();
                chatBox.classList.toggle('show');

                // Close the option menu when opening chat
                const chatOptions = document.getElementById('chatOptions');
                const chatToggle = document.getElementById('chatToggle');
                if (chatOptions) chatOptions.classList.remove('show');
                if (chatToggle) {
                    chatToggle.classList.remove('active');
                    chatToggle.querySelector('i').className = 'fas fa-comment-dots';
                }
            });

            const closeChat = () => {
                chatBox.classList.remove('show');
            };

            if (closeBtn) closeBtn.addEventListener('click', closeChat);
            if (minimizeBtn) minimizeBtn.addEventListener('click', closeChat);

            // Close when clicking outside
            document.addEventListener('click', function (e) {
                if (!chatBox.contains(e.target) && !messengerBtn.contains(e.target)) {
                    closeChat();
                }
            });
        }
    };
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMessenger);
    } else {
        initMessenger();
    }
})();


// Multi-Platform Chat Widget Logic
(function() {
    const initMultiChat = () => {
        const chatToggle = document.getElementById('chatToggle');
        const chatBox = document.getElementById('multiChatBox');
        const closeBtn = document.getElementById('closeChatBox');
        const tabBtns = document.querySelectorAll('.tab-btn');
        const chatViews = document.querySelectorAll('.chat-view');

        if (!chatToggle || !chatBox) return;

        // Toggle Chat Box
        chatToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            chatBox.classList.toggle('show');
            chatToggle.classList.toggle('active');
            const icon = chatToggle.querySelector('i');
            icon.className = chatBox.classList.contains('show') ? 'fas fa-times' : 'fas fa-comment-dots';
        });

        // Close Chat Box
        const closeChat = () => {
            chatBox.classList.remove('show');
            chatToggle.classList.remove('active');
            chatToggle.querySelector('i').className = 'fas fa-comment-dots';
        };
        if (closeBtn) closeBtn.addEventListener('click', closeChat);

        // Tab Switching
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.getAttribute('data-tab');
                tabBtns.forEach(b => b.classList.remove('active'));
                chatViews.forEach(v => v.classList.remove('active'));
                btn.classList.add('active');
                document.getElementById('view-' + targetTab).classList.add('active');
            });
        });

        // Send Logic
        const sendWS = () => {
            const text = document.getElementById('waInput').value;
            if (text.trim()) window.open('https://wa.me/8801883437005?text=' + encodeURIComponent(text), '_blank');
        };
        const sendTG = () => {
            const text = document.getElementById('tgInput').value;
            if (text.trim()) window.open('https://t.me/riddymazumder?text=' + encodeURIComponent(text), '_blank'); // Adjusted to username if available, or use phone
        };
        const sendMS = () => {
            window.open('https://m.me/riddy.maximiser', '_blank');
        };

        document.getElementById('sendWA')?.addEventListener('click', sendWS);
        document.getElementById('sendTG')?.addEventListener('click', sendTG);
        document.getElementById('sendMS')?.addEventListener('click', sendMS);

        // Enter key listeners
        document.getElementById('waInput')?.addEventListener('keypress', (e) => { if(e.key === 'Enter') sendWS(); });
        document.getElementById('tgInput')?.addEventListener('keypress', (e) => { if(e.key === 'Enter') sendTG(); });
        document.getElementById('msInput')?.addEventListener('keypress', (e) => { if(e.key === 'Enter') sendMS(); });

        // Click outside to close
        document.addEventListener('click', (e) => {
            if (!chatBox.contains(e.target) && !chatToggle.contains(e.target)) closeChat();
        });
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initMultiChat);
    else initMultiChat();
})();


// Real-Time Status Simulation Logic
(function() {
    const updateStatus = () => {
        const statusTexts = document.querySelectorAll('.header-info .status');
        const now = new Date();
        const mins = now.getMinutes();

        statusTexts.forEach(status => {
            const parent = status.closest('.view-header');
            if (parent.classList.contains('whatsapp')) {
                status.innerText = 'Online';
            } else if (parent.classList.contains('telegram')) {
                status.innerText = mins % 5 === 0 ? 'last seen recently' : 'online';
            } else if (parent.classList.contains('messenger')) {
                status.innerText = 'Active Now';
            }
        });
    };
    setInterval(updateStatus, 10000); // Update every 10 seconds
    window.addEventListener('load', updateStatus);
})();


// Search functionality for DL Models
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        const cards = document.querySelectorAll('.card');

        searchInput.addEventListener('input', function () {
            const searchTerm = searchInput.value.toLowerCase().trim();

            cards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('.card-description').textContent.toLowerCase();
                const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());

                const matches = title.includes(searchTerm) ||
                    description.includes(searchTerm) ||
                    tags.some(tag => tag.includes(searchTerm));

                if (matches) {
                    card.style.display = 'flex';
                    card.style.animation = 'fadeInUp 0.3s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});
