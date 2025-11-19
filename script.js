
class KitabBazar {
    constructor() {
        this.books = [
            // Personal Development & Self-Help
            {
                id: 1,
                title: "Think Like A Monk",
                author: "Jay Shetty",
                price: 24.99,
                category: "self-help",
                stock: 15,
                image: "https://m.media-amazon.com/images/I/51Z461o52HL._SX329_BO1,204,203,200_.jpg"
            },
            {
                id: 2,
                title: "Ikigai",
                author: "Héctor García & Francesc Miralles",
                price: 19.99,
                category: "self-help",
                stock: 25,
                image: "https://m.media-amazon.com/images/I/51q6o2j67WL._SX329_BO1,204,203,200_.jpg"
            },
            {
                id: 3,
                title: "Think And Grow Rich",
                author: "Napoleon Hill",
                price: 22.99,
                category: "self-help",
                stock: 12,
                image: "https://m.media-amazon.com/images/I/51596v526wL._SX329_BO1,204,203,200_.jpg"
            },
            {
                id: 4,
                title: "Love For No Reason",
                author: "Marci Shimoff",
                price: 17.99,
                category: "self-help",
                stock: 10,
                image: "https://m.media-amazon.com/images/I/511h0099YnL._SX329_BO1,204,203,200_.jpg"
            },
            
            // Creativity & Art
            {
                id: 5,
                title: "Steal Like An Artist",
                author: "Austin Kleon",
                price: 21.99,
                category: "creativity",
                stock: 18,
                image: "https://m.media-amazon.com/images/I/51X6K8391WL._SX329_BO1,204,203,200_.jpg"
            },
            {
                id: 6,
                title: "Show Your Work!",
                author: "Austin Kleon",
                price: 18.99,
                category: "creativity",
                stock: 20,
                image: "https://m.media-amazon.com/images/I/5148K613XPL._SX329_BO1,204,203,200_.jpg"
            },
            {
                id: 7,
                title: "Keep Going",
                author: "Austin Kleon",
                price: 20.99,
                category: "creativity",
                stock: 15,
                image: "https://m.media-amazon.com/images/I/51Rj7dZ73gL._SX329_BO1,204,203,200_.jpg"
            },
            
            // Business & Marketing
            {
                id: 8,
                title: "100M Offers",
                author: "Alex Hormozi",
                price: 29.99,
                category: "business",
                stock: 8,
                image: "https://m.media-amazon.com/images/I/51m1m61uWcL._SX329_BO1,204,203,200_.jpg"
            },
            {
                id: 9,
                title: "100M Leads",
                author: "Alex Hormozi",
                price: 29.99,
                category: "business",
                stock: 8,
                image: "https://m.media-amazon.com/images/I/51903892JIL._SX329_BO1,204,203,200_.jpg"
            },
            {
                id: 10,
                title: "E-Myth Revisited",
                author: "Michael E. Gerber",
                price: 23.99,
                category: "business",
                stock: 14,
                image: "https://m.media-amazon.com/images/I/51748100YJL._SX329_BO1,204,203,200_.jpg"
            },
            
            // Artificial Intelligence & Machine Learning
            {
                id: 11,
                title: "Artificial Intelligence: A Modern Approach",
                author: "Russell, S., Norvig, P.",
                price: 159.99,
                category: "ai",
                stock: 5,
                image: "https://m.media-amazon.com/images/I/51Y3K6JQKVL._SX329_BO1,204,203,200_.jpg"
            },
            {
                id: 12,
                title: "Artificial Intelligence",
                author: "Rich, E, Knight, K., Nair, S. B.",
                price: 89.99,
                category: "ai",
                stock: 7,
                image: "https://m.media-amazon.com/images/I/512Y63524TL._SX329_BO1,204,203,200_.jpg"
            },
            {
                id: 13,
                title: "Pattern Recognition and Machine Learning",
                author: "Bishop, C. M.",
                price: 129.99,
                category: "machine-learning",
                stock: 3,
                image: "https://m.media-amazon.com/images/I/51f9v45jRrL._SX329_BO1,204,203,200_.jpg"
            },
            {
                id: 14,
                title: "Mathematics for Machine Learning",
                author: "Deisenroth, M. P., Faisal, A. A., Ong, C. S.",
                price: 99.99,
                category: "machine-learning",
                stock: 6,
                image: "https://m.media-amazon.com/images/I/51v0jJ105OL._SX329_BO1,204,203,200_.jpg"
            },
            
            // Digital Signal Processing
            {
                id: 15,
                title: "Signals and Systems",
                author: "Openheim, A.V., Wlsky, A.S., Nawab, S.H.",
                price: 119.99,
                category: "signal-processing",
                stock: 4,
                image: "https://m.media-amazon.com/images/I/51kV86p6YdL._SX329_BO1,204,203,200_.jpg"
            },
            {
                id: 16,
                title: "Discrete-Time Signal Processing",
                author: "Openheim, A., Schafer, R. W.",
                price: 139.99,
                category: "signal-processing",
                stock: 2,
                image: "https://m.media-amazon.com/images/I/51q878041NL._SX329_BO1,204,203,200_.jpg"
            },
            {
                id: 17,
                title: "Digital Signal Processing using MATLAB",
                author: "Ingle, V. K., Proakis, J. G.",
                price: 89.99,
                category: "signal-processing",
                stock: 8,
                image: "https://m.media-amazon.com/images/I/518J06jQKVL._SX329_BO1,204,203,200_.jpg"
            },
            {
                id: 18,
                title: "Linear Systems and Signals",
                author: "Lathi, B. P.",
                price: 124.99,
                category: "signal-processing",
                stock: 5,
                image: "https://m.media-amazon.com/images/I/5123sX027RL._SX329_BO1,204,203,200_.jpg"
            },
            
            // Computer Science & Mathematics
            {
                id: 19,
                title: "Discrete Mathematics and Its Applications",
                author: "Rosen, K. H.",
                price: 149.99,
                category: "computer-science",
                stock: 6,
                image: "https://m.media-amazon.com/images/I/51z370413HL._SX329_BO1,204,203,200_.jpg"
            },
            {
                id: 20,
                title: "Discrete Mathematics",
                author: "Johnsonbaugh, R.",
                price: 94.99,
                category: "computer-science",
                stock: 9,
                image: "https://m.media-amazon.com/images/I/51Gv1736XNL._SX329_BO1,204,203,200_.jpg"
            },
            {
                id: 21,
                title: "Applied and Algorithmic Graph Theory",
                author: "Chartrand, G., Oellermann, O. R.",
                price: 79.99,
                category: "computer-science",
                stock: 11,
                image: "https://m.media-amazon.com/images/I/51Zq5u36ZRL._SX329_BO1,204,203,200_.jpg"
            },
            {
                id: 22,
                title: "Elements of the Theory of Computation",
                author: "Lewis, H. R., Papadimitriou, C. H.",
                price: 109.99,
                category: "computer-science",
                stock: 7,
                image: "https://m.media-amazon.com/images/I/51876J947UL._SX329_BO1,204,203,200_.jpg"
            },
            {
                id: 23,
                title: "Introduction to Algorithms",
                author: "Cormen, T. H., Leiserson, C. E., Stein, C., Rivest, R. L.",
                price: 169.99,
                category: "computer-science",
                stock: 4,
                image: "https://m.media-amazon.com/images/I/513777862nL._SX329_BO1,204,203,200_.jpg"
            }
        ];

        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        this.searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.renderCategories();
        this.renderBooks();
        this.updateCartDisplay();
        this.updateWishlistDisplay();
        this.hideLoadingScreen();
    }

    bindEvents() {
        // DOM Elements
        this.elements = {
            loadingScreen: document.getElementById('loading-screen'),
            cartIcon: document.getElementById('cart-icon'),
            cartModal: document.getElementById('cart-modal'),
            closeCart: document.getElementById('close-cart'),
            cartItems: document.getElementById('cart-items'),
            cartTotal: document.getElementById('cart-total'),
            cartSubtotal: document.getElementById('cart-subtotal'),
            cartCountDisplay: document.getElementById('cart-count-display'),
            wishlistIcon: document.getElementById('wishlist-icon'),
            wishlistModal: document.getElementById('wishlist-modal'),
            closeWishlist: document.getElementById('close-wishlist'),
            wishlistItems: document.getElementById('wishlist-items'),
            wishlistCountDisplay: document.getElementById('wishlist-count-display'),
            menuIcon: document.getElementById('menu-icon'),
            mobileMenu: document.getElementById('mobile-menu'),
            closeMenu: document.getElementById('close-menu'),
            searchIcon: document.getElementById('search-icon'),
            searchModal: document.getElementById('search-modal'),
            closeSearch: document.getElementById('close-search'),
            searchInput: document.getElementById('search-input'),
            searchResults: document.getElementById('search-results'),
            bookGrid: document.getElementById('book-grid'),
            categoriesGrid: document.getElementById('categories-grid'),
            bottomCart: document.getElementById('bottom-cart'),
            proceedCheckout: document.getElementById('proceed-checkout'),
            continueShopping: document.getElementById('continue-shopping'),
            exploreBooks: document.getElementById('explore-books'),
            viewDeals: document.getElementById('view-deals'),
            searchSuggestions: document.querySelectorAll('.suggestion-tag')
        };

        // Event Listeners
        this.elements.cartIcon.addEventListener('click', () => this.openModal('cart'));
        this.elements.closeCart.addEventListener('click', () => this.closeModal('cart'));
        this.elements.wishlistIcon.addEventListener('click', () => this.openModal('wishlist'));
        this.elements.closeWishlist.addEventListener('click', () => this.closeModal('wishlist'));
        this.elements.menuIcon.addEventListener('click', () => this.toggleMobileMenu());
        this.elements.closeMenu.addEventListener('click', () => this.closeMobileMenu());
        this.elements.searchIcon.addEventListener('click', () => this.openModal('search'));
        this.elements.closeSearch.addEventListener('click', () => this.closeModal('search'));
        this.elements.bottomCart.addEventListener('click', (e) => {
            e.preventDefault();
            this.openModal('cart');
        });
        this.elements.proceedCheckout.addEventListener('click', () => this.proceedToCheckout());
        this.elements.continueShopping.addEventListener('click', () => this.closeModal('cart'));
        this.elements.exploreBooks.addEventListener('click', () => this.scrollToSection('categories'));
        this.elements.viewDeals.addEventListener('click', () => this.scrollToSection('deals'));
        
        this.elements.searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
        
        this.elements.searchSuggestions.forEach(tag => {
            tag.addEventListener('click', (e) => {
                this.elements.searchInput.value = e.target.dataset.search;
                this.handleSearch(e.target.dataset.search);
            });
        });

        // Close modals when clicking outside
        document.addEventListener('click', (e) => {
            if (e.target === this.elements.cartModal) this.closeModal('cart');
            if (e.target === this.elements.wishlistModal) this.closeModal('wishlist');
            if (e.target === this.elements.searchModal) this.closeModal('search');
            if (e.target === this.elements.mobileMenu) this.closeMobileMenu();
        });

        // Keyboard support
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal('cart');
                this.closeModal('wishlist');
                this.closeModal('search');
                this.closeMobileMenu();
            }
        });
    }

    openModal(modalType) {
        if (modalType === 'cart') {
            document.getElementById('cart-modal').classList.add('active');
            this.renderCartItems();
        } else if (modalType === 'wishlist') {
            document.getElementById('wishlist-modal').classList.add('active');
            this.renderWishlistItems();
        } else if (modalType === 'search') {
            document.getElementById('search-modal').classList.add('active');
            document.getElementById('search-input').focus();
        }
    }

    closeModal(modalType) {
        if (modalType === 'cart') {
            document.getElementById('cart-modal').classList.remove('active');
        } else if (modalType === 'wishlist') {
            document.getElementById('wishlist-modal').classList.remove('active');
        } else if (modalType === 'search') {
            document.getElementById('search-modal').classList.remove('active');
            document.getElementById('search-results').innerHTML = '';
        }
    }

    toggleMobileMenu() {
        document.getElementById('mobile-menu').classList.toggle('active');
    }

    closeMobileMenu() {
        document.getElementById('mobile-menu').classList.remove('active');
    }

    hideLoadingScreen() {
        setTimeout(() => {
            document.getElementById('loading-screen').classList.add('hidden');
        }, 1000);
    }

    renderCategories() {
        const categories = [
            { name: 'Self-Help', icon: 'fas fa-lightbulb', count: 120, id: 'self-help' },
            { name: 'Creativity', icon: 'fas fa-palette', count: 40, id: 'creativity' },
            { name: 'Business', icon: 'fas fa-chart-line', count: 85, id: 'business' },
            { name: 'AI & ML', icon: 'fas fa-robot', count: 45, id: 'ai' },
            { name: 'Computer Science', icon: 'fas fa-laptop-code', count: 65, id: 'computer-science' },
            { name: 'Signal Processing', icon: 'fas fa-wave-square', count: 30, id: 'signal-processing' }
        ];

        document.getElementById('categories-grid').innerHTML = categories.map(category => `
            <div class="category-card" onclick="kitabBazar.filterBooks('${category.id}')">
                <div class="category-icon">
                    <i class="${category.icon}"></i>
                </div>
                <div class="category-name">${category.name}</div>
                <div class="category-count">${category.count} books</div>
            </div>
        `).join('');
    }

    renderBooks(filter = 'all') {
        let filteredBooks = this.books;
        if (filter !== 'all') {
            filteredBooks = this.books.filter(book => book.category === filter);
        }

        document.getElementById('book-grid').innerHTML = filteredBooks.map(book => `
            <div class="book-card">
                <img src="${book.image}" alt="${book.title}" class="book-image" loading="lazy">
                <div class="book-info">
                    <h3 class="book-title">${book.title}</h3>
                    <p class="book-author">by ${book.author}</p>
                    <p class="book-price">$${book.price.toFixed(2)}</p>
                    <div class="book-actions">
                        <button class="add-to-cart" onclick="kitabBazar.addToCart(${book.id})">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                        <button class="add-to-wishlist" onclick="kitabBazar.toggleWishlist(${book.id})">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    addToCart(bookId) {
        const book = this.books.find(b => b.id === bookId);
        if (!book) return;

        if (book.stock <= 0) {
            this.showNotification('This book is out of stock!', 'error');
            return;
        }

        const existingItem = this.cart.find(item => item.id === bookId);
        if (existingItem) {
            if (existingItem.quantity >= book.stock) {
                this.showNotification('Maximum stock limit reached!', 'warning');
                return;
            }
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                id: book.id,
                title: book.title,
                author: book.author,
                price: book.price,
                image: book.image,
                quantity: 1
            });
        }

        this.saveCart();
        this.updateCartDisplay();
        this.showNotification(`${book.title} added to cart!`, 'success');
    }

    removeFromCart(bookId) {
        this.cart = this.cart.filter(item => item.id !== bookId);
        this.saveCart();
        this.updateCartDisplay();
        this.renderCartItems();
        this.showNotification('Item removed from cart', 'warning');
    }

    updateQuantity(bookId, newQuantity) {
        if (newQuantity <= 0) {
            this.removeFromCart(bookId);
            return;
        }

        const item = this.cart.find(item => item.id === bookId);
        if (item) {
            const book = this.books.find(b => b.id === bookId);
            if (newQuantity > book.stock) {
                this.showNotification(`Only ${book.stock} copies available!`, 'warning');
                return;
            }
            
            item.quantity = newQuantity;
            this.saveCart();
            this.updateCartDisplay();
            this.renderCartItems();
        }
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    updateCartDisplay() {
        const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const total = subtotal;

        document.querySelectorAll('.cart-count, .nav-cart-count').forEach(el => {
            el.textContent = totalItems;
        });

        document.getElementById('cart-count-display').textContent = totalItems;
        document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
    }

    renderCartItems() {
        const cartItems = document.getElementById('cart-items');
        if (this.cart.length === 0) {
            cartItems.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: var(--text-light);">
                    <i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i>
                    <p>Your cart is empty</p>
                    <button class="btn btn-secondary" onclick="kitabBazar.closeModal('cart')" style="margin-top: 1rem;">
                        Continue Shopping
                    </button>
                </div>
            `;
            return;
        }

        cartItems.innerHTML = this.cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.title}</div>
                    <div class="cart-item-author">${item.author}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-actions">
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="kitabBazar.updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                            <input type="number" class="quantity-input" value="${item.quantity}" min="1" onchange="kitabBazar.updateQuantity(${item.id}, this.value)">
                            <button class="quantity-btn" onclick="kitabBazar.updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                        </div>
                        <button class="remove-item" onclick="kitabBazar.removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    toggleWishlist(bookId) {
        const book = this.books.find(b => b.id === bookId);
        if (!book) return;

        const existingIndex = this.wishlist.findIndex(item => item.id === bookId);
        if (existingIndex > -1) {
            this.wishlist.splice(existingIndex, 1);
            this.showNotification(`${book.title} removed from wishlist`, 'warning');
        } else {
            this.wishlist.push({
                id: book.id,
                title: book.title,
                author: book.author,
                price: book.price,
                image: book.image
            });
            this.showNotification(`${book.title} added to wishlist`, 'success');
        }

        this.saveWishlist();
        this.updateWishlistDisplay();
    }

    saveWishlist() {
        localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
    }

    updateWishlistDisplay() {
        const wishlistCount = this.wishlist.length;
        document.querySelectorAll('.wishlist-count').forEach(el => {
            el.textContent = wishlistCount;
        });
        document.getElementById('wishlist-count-display').textContent = wishlistCount;
    }

    renderWishlistItems() {
        const wishlistItems = document.getElementById('wishlist-items');
        if (this.wishlist.length === 0) {
            wishlistItems.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: var(--text-light);">
                    <i class="fas fa-heart" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i>
                    <p>Your wishlist is empty</p>
                </div>
            `;
            return;
        }

        wishlistItems.innerHTML = this.wishlist.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.title}</div>
                    <div class="cart-item-author">${item.author}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                </div>
                <button class="remove-item" onclick="kitabBazar.toggleWishlist(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }

    handleSearch(query) {
        if (query.length < 2) {
            document.getElementById('search-results').innerHTML = '';
            return;
        }

        const results = this.books.filter(book => 
            book.title.toLowerCase().includes(query.toLowerCase()) ||
            book.author.toLowerCase().includes(query.toLowerCase())
        );

        document.getElementById('search-results').innerHTML = results.map(book => `
            <div class="search-result-item" onclick="kitabBazar.closeModal('search')">
                <img src="${book.image}" alt="${book.title}">
                <div class="search-result-info">
                    <h4>${book.title}</h4>
                    <p>by ${book.author}</p>
                </div>
            </div>
        `).join('');

        // Add to search history
        if (!this.searchHistory.includes(query)) {
            this.searchHistory.unshift(query);
            if (this.searchHistory.length > 5) {
                this.searchHistory = this.searchHistory.slice(0, 5);
            }
            localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
        }
    }

    filterBooks(category) {
        this.renderBooks(category);
    }

    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    proceedToCheckout() {
        if (this.cart.length === 0) {
            this.showNotification('Your cart is empty!', 'error');
            return;
        }
        this.showNotification('Checkout functionality would be implemented here', 'info');
        this.closeModal('cart');
    }

    showNotification(message, type = 'info') {
        const toastContainer = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <i class="fas ${this.getNotificationIcon(type)}"></i>
            <span>${message}</span>
        `;
        
        toastContainer.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }

    getNotificationIcon(type) {
        const icons = {
            success: 'fa-check-circle',
            warning: 'fa-exclamation-triangle',
            error: 'fa-times-circle',
            info: 'fa-info-circle'
        };
        return icons[type] || 'fa-info-circle';
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.kitabBazar = new KitabBazar();
});
