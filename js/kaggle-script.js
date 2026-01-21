// Global Search Index - Aggregated from all model and competition pages(hompage search bar)
/**
 * FUTURE-PROOFING: To add a new card to search:
 * 1. Add the card to your HTML (e.g. ml-models/index.html).
 * 2. Add an entry here with { title, meta, category, link }.
 * The IDs are automatically generated from titles, so matching is automatic!
 */
const GLOBAL_SEARCH_INDEX = [
    // ML Models
    { title: "Linear Regression", meta: "Fundamental regression technique", category: "ML MODELS", link: "ml-models/", id: "linear-regression" },
    { title: "Logistic Regression", meta: "Binary and multi-class classification", category: "ML MODELS", link: "ml-models/", id: "logistic-regression" },
    { title: "Decision Trees", meta: "Tree-based predictive modeling", category: "ML MODELS", link: "ml-models/", id: "decision-trees" },
    { title: "Random Forest", meta: "Ensemble of decision trees", category: "ML MODELS", link: "ml-models/", id: "random-forest" },
    { title: "Support Vector Machines", meta: "Powerful classification and regression", category: "ML MODELS", link: "ml-models/", id: "svm" },
    { title: "K-Means Clustering", meta: "Unsupervised data partitioning", category: "ML MODELS", link: "ml-models/", id: "k-means" },
    { title: "K-Nearest Neighbors", meta: "Instance-based learning", category: "ML MODELS", link: "ml-models/", id: "knn" },
    { title: "Gradient Boosting", meta: "Advanced ensemble boosting", category: "ML MODELS", link: "ml-models/", id: "gradient-boosting" },
    { title: "Naive Bayes", meta: "Probabilistic classification", category: "ML MODELS", link: "ml-models/", id: "naive-bayes" },

    // LLM Models
    { title: "GPT-3.5 Turbo", meta: "Advanced generation & understanding", category: "LLM MODELS", link: "llm-models/", id: "gpt-3-5" },
    { title: "GPT-4", meta: "State-of-the-art multimodal model", category: "LLM MODELS", link: "llm-models/", id: "gpt-4" },
    { title: "BERT", meta: "Bidirectional encoder representations", category: "LLM MODELS", link: "llm-models/", id: "bert" },
    { title: "T5 (Text-to-Text)", meta: "Unified text-to-text framework", category: "LLM MODELS", link: "llm-models/", id: "t5" },
    { title: "LLaMA", meta: "Open-source LLM by Meta", category: "LLM MODELS", link: "llm-models/", id: "llama" },
    { title: "Claude", meta: "Constitutional AI by Anthropic", category: "LLM MODELS", link: "llm-models/", id: "claude" },
    { title: "PaLM 2", meta: "Google's path-to-language model", category: "LLM MODELS", link: "llm-models/", id: "palm-2" },
    { title: "Mistral", meta: "High-perf open source model", category: "LLM MODELS", link: "llm-models/", id: "mistral" },
    { title: "Falcon", meta: "TII open LLM series", category: "LLM MODELS", link: "llm-models/", id: "falcon" },

    // DL Models
    { title: "Multi-Layer Perceptron", meta: "Foundational neural network", category: "DL MODELS", link: "dl-models/", id: "mlp" },
    { title: "Convolutional Neural Network", meta: "Image processing specialized", category: "DL MODELS", link: "dl-models/", id: "cnn" },
    { title: "Recurrent Neural Network", meta: "Sequential data analysis", category: "DL MODELS", link: "dl-models/", id: "rnn" },
    { title: "Long Short-Term Memory", meta: "Long-term dependency learning", category: "DL MODELS", link: "dl-models/", id: "lstm" },
    { title: "Gated Recurrent Unit", meta: "Efficient sequential model", category: "DL MODELS", link: "dl-models/", id: "gru" },
    { title: "ResNet (Residual Networks)", meta: "Deep residual connections", category: "DL MODELS", link: "dl-models/", id: "resnet" },
    { title: "Transformer Architecture", meta: "Attention-based modeling", category: "DL MODELS", link: "dl-models/", id: "transformer" },
    { title: "Autoencoder", meta: "Self-supervised encoding", category: "DL MODELS", link: "dl-models/", id: "autoencoder" },
    { title: "Generative Adversarial Network", meta: "Synthetic data generation", category: "DL MODELS", link: "dl-models/", id: "gan" },

    // Competitions
    { title: "Diabetes Prediction Challenge", meta: "Playground Series - S5E12", category: "COMPETITIONS", link: "kaggle-competitions/", id: "diabetes" },
    { title: "Titanic - ML from Disaster", meta: "Legendary ML competition", category: "COMPETITIONS", link: "kaggle-competitions/", id: "titanic" },
    { title: "Predicting Student Test Scores", meta: "Playground Series - Season 6 Episode 1", category: "COMPETITIONS", link: "kaggle-competitions/", id: "student-scores" },
    { title: "Predicting Loan Payback", meta: "Playground Series - S5E11", category: "COMPETITIONS", link: "kaggle-competitions/", id: "loan-payback" },
    { title: "House Prices - Advanced Regression", meta: "Predict sales prices, RFs, and Boosting", category: "COMPETITIONS", link: "kaggle-competitions/", id: "house-prices" },
    { title: "Spaceship Titanic", meta: "Classic machine learning classification", category: "COMPETITIONS", link: "kaggle-competitions/", id: "spaceship-titanic" },

    // Tools
    { title: "Neural Playground", meta: "Interactive neural network visualization", category: "TOOLS", link: "nuralplayground/", id: "playground" }
];

// Mobile Sidebar Toggle Functionality
document.addEventListener('DOMContentLoaded', function () {
    const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
    const sidebar = document.querySelector('.sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const body = document.body;

    // Toggle sidebar on button click
    if (sidebarToggleBtn) {
        sidebarToggleBtn.addEventListener('click', function (e) {
            e.stopPropagation();

            // Always toggle sidebar
            sidebar?.classList.toggle('active');
            body.classList.toggle('sidebar-open');

            // Only toggle overlay on mobile (≤768px)
            if (window.innerWidth <= 768) {
                sidebarOverlay?.classList.toggle('active');
            }
        });
    }

    // Close sidebar when clicking overlay
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', function () {
            sidebar?.classList.remove('active');
            sidebarOverlay?.classList.remove('active');
            body.classList.remove('sidebar-open');
        });
    }

    // Close sidebar when clicking a link (optional, for better UX)
    if (sidebar) {
        const sidebarLinks = sidebar.querySelectorAll('a');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', function () {
                // Only close on mobile (when overlay is visible)
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('active');
                    sidebarOverlay?.classList.remove('active');
                    body.classList.remove('sidebar-open');
                }
            });
        });
    }

    // Handle window resize
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            sidebar?.classList.remove('active');
            sidebarOverlay?.classList.remove('active');
            body.classList.remove('sidebar-open');
        }
    });

    // Mobile Search Toggle Functionality
    const searchToggleBtn = document.getElementById('searchToggleBtn');
    const searchWrapper = document.querySelector('.search-wrapper');

    if (searchToggleBtn && searchWrapper) {
        searchToggleBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            searchWrapper.classList.toggle('active');

            // Focus on search input when opened
            if (searchWrapper.classList.contains('active')) {
                const searchInput = document.getElementById('searchInput');
                setTimeout(() => searchInput?.focus(), 300);
            }
        });

        // Close search when clicking outside
        document.addEventListener('click', function (e) {
            if (!searchWrapper.contains(e.target) && !searchToggleBtn.contains(e.target)) {
                searchWrapper.classList.remove('active');
            }
        });
    }

    // Global Search Functionality
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    // Only proceed with global search if searchResults exists (only on home page)
    if (searchInput && searchResults) {
        searchInput.addEventListener('input', function () {
            const query = this.value.toLowerCase().trim();

            if (query.length < 1) {
                searchResults.classList.remove('active');
                return;
            }

            const results = GLOBAL_SEARCH_INDEX.filter(item =>
                item.title.toLowerCase().includes(query) ||
                item.meta.toLowerCase().includes(query) ||
                item.category.toLowerCase().includes(query)
            );

            renderSearchResults(results);
        });

        // Hide dropdown when clicking outside
        document.addEventListener('click', function (e) {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.classList.remove('active');
            }
        });

        // Show dropdown when clicking back into search if not empty
        searchInput.addEventListener('focus', function () {
            if (this.value.trim().length > 0) {
                searchResults.classList.add('active');
            }
        });
    }

    function renderSearchResults(results) {
        if (!searchResults) return;

        const getSlug = (item) => {
            if (item.id) return item.id;
            return item.title.toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-');
        };

        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-no-results">No results found</div>';
        } else {
            searchResults.innerHTML = results.map(item => `
                <a href="${item.link}#${getSlug(item)}" class="search-result-item">
                    <div class="search-result-category">${item.category}</div>
                    <div class="search-result-title">${item.title}</div>
                    <div class="search-result-meta">${item.meta}</div>
                </a>
            `).join('');
        }
        searchResults.classList.add('active');
    }

    // Scroll-to-card logic with pagination awareness
    window.addEventListener('load', function () {
        const hash = window.location.hash;
        if (hash) {
            const targetId = hash.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // If it's a paginated page, we might need to jump to the right page
                const allCards = Array.from(document.querySelectorAll('.competition-card'));
                if (allCards.length > 0 && typeof itemsPerPage !== 'undefined') {
                    // Match by ID
                    const cardIndex = allCards.findIndex(card => card.id === targetId);
                    if (cardIndex !== -1) {
                        currentPage = Math.ceil((cardIndex + 1) / itemsPerPage);
                        if (typeof updateDisplay === 'function') updateDisplay();
                    }
                }

                setTimeout(() => {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    targetElement.classList.add('highlight-pulse');

                    // Remove highlight on any interaction
                    const clearHighlight = () => {
                        targetElement.classList.remove('highlight-pulse');
                        document.removeEventListener('click', clearHighlight);
                        document.removeEventListener('touchstart', clearHighlight);
                        document.removeEventListener('keydown', clearHighlight);
                    };
                    document.addEventListener('click', clearHighlight);
                    document.addEventListener('touchstart', clearHighlight);
                    document.addEventListener('keydown', clearHighlight);
                }, 600);
            }
        }
    });
});

// Navigation Active Link
document.addEventListener('DOMContentLoaded', function () {
    const currentLocation = location.pathname;
    const normalizedPath = currentLocation.endsWith('/') ? currentLocation.slice(0, -1) : currentLocation;
    const pathSegments = normalizedPath.split('/');
    const currentFolder = pathSegments.pop() || 'index';
    const menuItems = document.querySelectorAll('.nav-menu a');

    menuItems.forEach(item => {
        const href = item.getAttribute('href');
        if (!href) return;
        let hrefClean = href.replace(/\.\.\//g, '').replace(/\/$/, '');
        if (hrefClean === '.' || hrefClean === '') hrefClean = 'index';
        const isActive = (currentFolder === 'index' && (hrefClean === 'index' || hrefClean === '.')) || (currentFolder === hrefClean);
        if (isActive) item.classList.add('active');
        else item.classList.remove('active');
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add animation on scroll
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Global Rank Badge Color Logic
function applyRankBadgeColors() {
    const badges = document.querySelectorAll('.rank-badge');
    badges.forEach(badge => {
        const text = badge.textContent;
        const match = text.match(/Top (\d+)%/);
        if (match) {
            const rank = parseInt(match[1]);
            badge.classList.remove('badge-purple', 'badge-navy', 'badge-blue', 'badge-yellow', 'badge-gray', 'badge-orange', 'badge-red');

            if (rank >= 1 && rank <= 5) badge.classList.add('badge-purple');
            else if (rank >= 6 && rank <= 9) badge.classList.add('badge-navy');
            else if (rank >= 10 && rank <= 19) badge.classList.add('badge-blue');
            else if (rank >= 20 && rank <= 30) badge.classList.add('badge-yellow');
            else if (rank >= 31 && rank <= 40) badge.classList.add('badge-gray');
            else if (rank >= 41 && rank <= 60) badge.classList.add('badge-orange');
            else if (rank >= 61 && rank <= 100) badge.classList.add('badge-red');
        }
    });
}

// Pagination State
let currentPage = 1;
const itemsPerPage = 12;

// Global Search and Pagination for Kaggle
function updateDisplay() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : "";
    const cards = Array.from(document.querySelectorAll('.competition-card'));

    // Filter cards based on search
    const filteredCards = cards.filter(card => {
        const title = (card.querySelector('h3')?.textContent || "").toLowerCase();
        const description = (card.querySelector('.card-meta')?.textContent || "").toLowerCase();
        return title.includes(searchTerm) || description.includes(searchTerm);
    });

    // Calculate total pages
    const totalPages = Math.ceil(filteredCards.length / itemsPerPage);
    if (currentPage > totalPages && totalPages > 0) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    // Show/Hide cards based on page and search
    cards.forEach(card => card.style.display = 'none');

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const cardsToShow = filteredCards.slice(startIndex, endIndex);

    cardsToShow.forEach(card => {
        card.style.display = 'flex';
        card.style.animation = 'fadeInUp 0.3s ease forwards';
    });

    renderPagination(totalPages);
}

function renderPagination(totalPages) {
    const container = document.getElementById('paginationControls');
    if (!container) return;

    container.innerHTML = "";
    if (totalPages <= 1) return;

    // Previous Button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'pagination-btn';
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => { currentPage--; updateDisplay(); window.scrollTo({ top: 0, behavior: 'smooth' }); };
    container.appendChild(prevBtn);

    // Page Numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            const btn = document.createElement('button');
            btn.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
            btn.textContent = i;
            btn.onclick = () => { currentPage = i; updateDisplay(); window.scrollTo({ top: 0, behavior: 'smooth' }); };
            container.appendChild(btn);
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            const ellipsis = document.createElement('span');
            ellipsis.className = 'pagination-ellipsis';
            ellipsis.textContent = '...';
            container.appendChild(ellipsis);
        }
    }

    // Next Button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'pagination-btn';
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => { currentPage++; updateDisplay(); window.scrollTo({ top: 0, behavior: 'smooth' }); };
    container.appendChild(nextBtn);
}

function initKaggleSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            currentPage = 1;
            updateDisplay();
        });
    }
}

// Global Click Navigation (Event Delegation)
function initCardNavigation() {
    document.addEventListener('click', function (e) {
        const card = e.target.closest('.competition-card');
        if (card) {
            const link = card.getAttribute('data-link');
            if (link && link !== '#') {
                window.location.href = link;
            }
        }
    });
}

// Page Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Auto-assign IDs to cards for future-proof search results
    document.querySelectorAll('.competition-card').forEach(card => {
        if (!card.id) {
            const titleEl = card.querySelector('h3');
            if (titleEl) {
                // Generate a slug from the title: "My Model" -> "my-model"
                const slug = titleEl.textContent.toLowerCase()
                    .replace(/[^\w\s-]/g, '') // remove special chars
                    .replace(/\s+/g, '-')     // replace spaces with -
                    .replace(/-+/g, '-');     // remove double --
                card.id = slug;
            }
        }
        observer.observe(card);
    });

    applyRankBadgeColors();
    initKaggleSearch();
    initCardNavigation();
    updateDisplay(); // Initial load
});

// Animation Keyframes
const styleElement = document.createElement('style');
styleElement.textContent = `
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(styleElement);

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
                const icon = chatToggle.querySelector('i');
                if (chatToggle.classList.contains('active')) icon.className = 'fas fa-times';
                else icon.className = 'fas fa-comment-dots';
            });
            document.addEventListener('click', function (e) {
                if (!chatToggle.contains(e.target) && !chatOptions.contains(e.target)) {
                    chatToggle.classList.remove('active');
                    chatOptions.classList.remove('show');
                    chatToggle.querySelector('i').className = 'fas fa-comment-dots';
                }
            });
        }
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initChat);
    else initChat();
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
                e.preventDefault();
                e.stopPropagation();
                chatBox.classList.toggle('show');
                const chatOptions = document.getElementById('chatOptions');
                const chatToggle = document.getElementById('chatToggle');
                if (chatOptions) chatOptions.classList.remove('show');
                if (chatToggle) {
                    chatToggle.classList.remove('active');
                    chatToggle.querySelector('i').className = 'fas fa-comment-dots';
                }
            });
            const closeChat = () => chatBox.classList.remove('show');
            if (closeBtn) closeBtn.addEventListener('click', closeChat);
            if (minimizeBtn) minimizeBtn.addEventListener('click', closeChat);
            document.addEventListener('click', function (e) {
                if (!chatBox.contains(e.target) && !messengerBtn.contains(e.target)) closeChat();
            });
        }
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initMessenger);
    else initMessenger();
})();

// Multi-Platform Chat Widget Logic
(function () {
    const initMultiChat = () => {
        const chatToggle = document.getElementById('chatToggle');
        const chatBox = document.getElementById('multiChatBox');
        const closeBtn = document.getElementById('closeChatBox');
        const tabBtns = document.querySelectorAll('.tab-btn');
        const chatViews = document.querySelectorAll('.chat-view');
        if (!chatToggle || !chatBox) return;
        chatToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            chatBox.classList.toggle('show');
            chatToggle.classList.toggle('active');
            const icon = chatToggle.querySelector('i');
            icon.className = chatBox.classList.contains('show') ? 'fas fa-times' : 'fas fa-comment-dots';
        });
        const closeChat = () => {
            chatBox.classList.remove('show');
            chatToggle.classList.remove('active');
            chatToggle.querySelector('i').className = 'fas fa-comment-dots';
        };
        if (closeBtn) closeBtn.addEventListener('click', closeChat);
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.getAttribute('data-tab');
                tabBtns.forEach(b => b.classList.remove('active'));
                chatViews.forEach(v => v.classList.remove('active'));
                btn.classList.add('active');
                document.getElementById('view-' + targetTab).classList.add('active');
            });
        });
        const sendWS = () => {
            const text = document.getElementById('waInput').value;
            if (text.trim()) window.open('https://wa.me/8801883437005?text=' + encodeURIComponent(text), '_blank');
        };
        const sendTG = () => {
            const text = document.getElementById('tgInput').value;
            if (text.trim()) window.open('https://t.me/riddymazumder?text=' + encodeURIComponent(text), '_blank');
        };
        const sendMS = () => window.open('https://m.me/riddy.maximiser', '_blank');
        document.getElementById('sendWA')?.addEventListener('click', sendWS);
        document.getElementById('sendTG')?.addEventListener('click', sendTG);
        document.getElementById('sendMS')?.addEventListener('click', sendMS);
        document.getElementById('waInput')?.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendWS(); });
        document.getElementById('tgInput')?.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendTG(); });
        document.getElementById('msInput')?.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMS(); });
        document.addEventListener('click', (e) => {
            if (!chatBox.contains(e.target) && !chatToggle.contains(e.target)) closeChat();
        });
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initMultiChat);
    else initMultiChat();
})();

// Real-Time Status Simulation Logic
(function () {
    const updateStatus = () => {
        const statusTexts = document.querySelectorAll('.header-info .status');
        const now = new Date();
        const mins = now.getMinutes();
        statusTexts.forEach(status => {
            const parent = status.closest('.view-header');
            if (parent.classList.contains('whatsapp')) status.innerText = 'Online';
            else if (parent.classList.contains('telegram')) status.innerText = mins % 5 === 0 ? 'last seen recently' : 'online';
            else if (parent.classList.contains('messenger')) status.innerText = 'Active Now';
        });
    };
    setInterval(updateStatus, 10000);
    window.addEventListener('load', updateStatus);
})();

// Mobile Navigation Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.querySelector('.sidebar');
    const navMenu = document.querySelector('.nav-menu'); // For solution view or other layouts
    const overlay = document.getElementById('sidebarOverlay');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (sidebar) sidebar.classList.toggle('active');
            if (navMenu) navMenu.classList.toggle('active');
            if (overlay) overlay.classList.toggle('active');

            // Toggle icon
            const icon = mobileBtn.querySelector('i');
            if (icon) {
                if ((sidebar && sidebar.classList.contains('active')) || (navMenu && navMenu.classList.contains('active'))) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // Close on overlay click
    if (overlay) {
        overlay.addEventListener('click', () => {
            if (sidebar) sidebar.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
            overlay.classList.remove('active');
            if (mobileBtn) {
                const icon = mobileBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // Close sidebar on link click (optional, but good for single-page feel or just cleanup)
    if (sidebar) {
        const links = sidebar.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('active');
                    if (overlay) overlay.classList.remove('active');
                    if (mobileBtn) {
                        const icon = mobileBtn.querySelector('i');
                        if (icon) {
                            icon.classList.remove('fa-times');
                            icon.classList.add('fa-bars');
                        }
                    }
                }
            });
        });
    }

    // Desktop/Global Rail Toggle
    const toggleBtn = document.getElementById('sidebarToggleBtn');
    const appContainer = document.querySelector('.app-container');
    if (toggleBtn && appContainer) {
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            appContainer.classList.toggle('collapsed');
        });
    }

    // --- Global Image Modal Logic ---
    function injectImageModal() {
        if (document.getElementById('global-image-modal')) return;

        const modalHtml = `
            <div id="global-image-modal" class="image-modal">
                <span class="close-modal">&times;</span>
                <img class="modal-content" id="global-modal-img">
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);

        const modal = document.getElementById('global-image-modal');
        const modalImg = document.getElementById('global-modal-img');
        const closeBtn = modal.querySelector('.close-modal');

        const closeModal = () => {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.style.display = "none";
                document.body.style.overflow = 'auto';
            }, 300);
        };

        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target === closeBtn) {
                closeModal();
            }
        });

        // Global function for other scripts to use
        window.openGlobalImageModal = function (src) {
            modal.style.display = "flex";
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                modal.classList.add('active');
                modalImg.src = src;
            }, 10);
        };
    }

    injectImageModal();

    // Attach to logo sections globally
    document.querySelectorAll('.header-logo-section, .logo-img').forEach(el => {
        el.addEventListener('click', function (e) {
            const img = this.querySelector('img') || (this.tagName === 'IMG' ? this : null);
            if (img && img.src) {
                e.preventDefault();
                e.stopPropagation();
                window.openGlobalImageModal(img.src);
            }
        });
    });
});
