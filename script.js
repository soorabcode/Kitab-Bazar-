// Comprehensive Book Data with accurate Amazon images
const books = [
    { 
        id: 1, 
        title: "Think Like A Monk", 
        author: "Jay Shetty", 
        price: 399,
        rating: 4.7,
        reviews: 1285,
        image: "https://m.media-amazon.com/images/I/71D9ImsvEtL._SL1500_.jpg", 
        category: "Self-Help",
        description: "Learn how to think like a monk and use those powerful tools to overcome negative thoughts, habits, and patterns."
    },
    { 
        id: 2, 
        title: "Ikigai", 
        author: "Héctor García & Francesc Miralles", 
        price: 329,
        rating: 4.5,
        reviews: 3421,
        image: "https://m.media-amazon.com/images/I/71uJJBhYj+L._SL1500_.jpg", 
        category: "Self-Help",
        description: "The Japanese concept that will help you find your purpose and happiness in life."
    },
    { 
        id: 3, 
        title: "Think and Grow Rich", 
        author: "Napoleon Hill", 
        price: 249,
        rating: 4.8,
        reviews: 8945,
        image: "https://m.media-amazon.com/images/I/81U8uJ+4qFL._SL1500_.jpg", 
        category: "Self-Help",
        description: "The classic personal development and self-improvement book that has sold over 100 million copies worldwide."
    },
    { 
        id: 4, 
        title: "Steal Like An Artist", 
        author: "Austin Kleon", 
        price: 299,
        rating: 4.6,
        reviews: 2156,
        image: "https://m.media-amazon.com/images/I/71XwF8ZC5kL._SL1500_.jpg", 
        category: "Creativity",
        description: "10 things nobody told you about being creative - a manifesto for the digital age."
    },
    { 
        id: 5, 
        title: "100M Offers", 
        author: "Alex Hormozi", 
        price: 899,
        rating: 4.9,
        reviews: 876,
        image: "https://m.media-amazon.com/images/I/61dQHt4Z6RL._SL1200_.jpg", 
        category: "Business",
        description: "How to make offers so good people feel stupid saying no."
    },
    { 
        id: 6, 
        title: "100M Leads", 
        author: "Alex Hormozi", 
        price: 849,
        rating: 4.8,
        reviews: 743,
        image: "https://m.media-amazon.com/images/I/61xI3k1h7FL._SL1500_.jpg", 
        category: "Business",
        description: "How to get more leads, sales, and profits with the world's greatest marketing machine."
    },
    { 
        id: 7, 
        title: "Love For No Reason", 
        author: "Marci Shimoff", 
        price: 349,
        rating: 4.4,
        reviews: 562,
        image: "https://m.media-amazon.com/images/I/71QKQ9mwY7L._SL1500_.jpg", 
        category: "Self-Help",
        description: "7 steps to creating a life of unconditional love."
    },
    { 
        id: 8, 
        title: "Show Your Work", 
        author: "Austin Kleon", 
        price: 279,
        rating: 4.5,
        reviews: 1823,
        image: "https://m.media-amazon.com/images/I/71dG8Vd+QwL._SL1500_.jpg", 
        category: "Creativity",
        description: "10 ways to share your creativity and get discovered."
    },
    { 
        id: 9, 
        title: "Keep Going", 
        author: "Austin Kleon", 
        price: 319,
        rating: 4.6,
        reviews: 945,
        image: "https://m.media-amazon.com/images/I/71uP6M2KJPL._SL1500_.jpg", 
        category: "Creativity",
        description: "10 ways to stay creative in good times and bad."
    },
    { 
        id: 10, 
        title: "E-Myth Revisited", 
        author: "Michael Gerber", 
        price: 429,
        rating: 4.7,
        reviews: 2567,
        image: "https://m.media-amazon.com/images/I/71Yn8wP0gQL._SL1500_.jpg", 
        category: "Business",
        description: "Why most small businesses don't work and what to do about it."
    },
    { 
        id: 11, 
        title: "Artificial Intelligence: A Modern Approach", 
        author: "Russell & Norvig", 
        price: 799,
        rating: 4.9,
        reviews: 1243,
        image: "https://m.media-amazon.com/images/I/51wVQ8eQGWL._SL1000_.jpg", 
        category: "AI",
        description: "The most popular textbook in AI, used by over 1500 universities worldwide."
    },
    { 
        id: 12, 
        title: "Pattern Recognition and Machine Learning", 
        author: "Bishop", 
        price: 899,
        rating: 4.8,
        reviews: 876,
        image: "https://m.media-amazon.com/images/I/51q4Jd1eJGL._SL1000_.jpg", 
        category: "AI",
        description: "A comprehensive introduction to machine learning that uses probabilistic models."
    },
    { 
        id: 13, 
        title: "Signals and Systems", 
        author: "Oppenheim", 
        price: 699,
        rating: 4.7,
        reviews: 654,
        image: "https://m.media-amazon.com/images/I/51Zt63uBq7L._SL1000_.jpg", 
        category: "Signal Processing",
        description: "A comprehensive treatment of the theory and applications of signals and systems."
    },
    { 
        id: 14, 
        title: "Discrete-Time Signal Processing", 
        author: "Oppenheim & Schafer", 
        price: 749,
        rating: 4.8,
        reviews: 532,
        image: "https://m.media-amazon.com/images/I/51FwBjQcHjL._SL1000_.jpg", 
        category: "Signal Processing",
        description: "The standard text for courses in discrete-time signal processing."
    },
    { 
        id: 15, 
        title: "Discrete Mathematics and Its Applications", 
        author: "Rosen", 
        price: 649,
        rating: 4.6,
        reviews: 1876,
        image: "https://m.media-amazon.com/images/I/51nD1mDqCBL._SL1000_.jpg", 
        category: "Mathematics",
        description: "A comprehensive introduction to discrete mathematics for computer science students."
    },
    { 
        id: 16, 
        title: "Introduction to Algorithms", 
        author: "Cormen et al.", 
        price: 849,
        rating: 4.9,
        reviews: 2345,
        image: "https://m.media-amazon.com/images/I/51lCR-pj9LL._SL1000_.jpg", 
        category: "Algorithms",
        description: "The comprehensive, standard textbook on algorithms used by professionals worldwide."
    }
];

// DOM Elements
const productsContainer = document.getElementById('products-container');
const cartModal = document.getElementById('cart-modal');
const wishlistModal = document.getElementById('wishlist-modal');
const cartItemsContainer = document.getElementById('cart-items-container');
const wishlistItemsContainer = document.getElementById('wishlist-items-container');
const emptyCart = document.getElementById('empty-cart');
const emptyWishlist = document.getElementById('empty-wishlist');
const cartCount = document.getElementById('cart-count');
const wishlistCount = document.getElementById('wishlist-count');
const bottomCartCount = document.getElementById('bottom-cart-count');
const bottomWishlistCount = document.getElementById('bottom-wishlist-count');
const mobileWishlistCount = document.getElementById('mobile-wishlist-count');
const mobileCartCount = document.getElementById('mobile-cart-count');
const cartItemsCount = document.getElementById('cart-items-count');
const wishlistItemsCount = document.getElementById('wishlist-items-count');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartDiscount = document.getElementById('cart-discount');
const cartTotal = document.getElementById('cart-total');
const searchInput = document.getElementById('search-bar');
const searchResults = document.getElementById('search-results');
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');
const cartIcon = document.getElementById('cart-icon');
const wishlistIcon = document.getElementById('wishlist-icon');
const closeCart = document.getElementById('close-cart');
const closeWishlist = document.getElementById('close-wishlist');
const bottomSearch = document.getElementById('bottom-search');
const bottomWishlist = document.getElementById('bottom-wishlist');
const bottomCart = document.getElementById('bottom-cart');
const mobileWishlist = document.getElementById('mobile-wishlist');
const mobileCart = document.getElementById('mobile-cart');
const sortOptions = document.getElementById('sort-options');
const loader = document.getElementById('loader');
const toastContainer = document.getElementById('toast-container');
const checkoutBtn = document.getElementById('checkout-btn');
const moveAllToCartBtn = document.getElementById('move-all-to-cart');

// Cart & Wishlist
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// Initialize the application after page load
window.addEventListener('DOMContentLoaded', () => {
    // Show loader initially
    setTimeout(() => {
        loader.classList.add('hidden');
        initApp();
    }, 1200);
});

// Initialize the application
function initApp() {
    renderProducts(books);
    setupEventListeners();
    updateCartCount();
    updateWishlistCount();
    initAnimations();
    renderSearchResults();
    setupSortFunctionality();
    setupCategoryFilters();
}

// Render Products Grid
function renderProducts(products) {
    productsContainer.innerHTML = '';
    
    products.forEach(book => {
        // Get cart and wishlist status
        const inCart = cart.some(item => item.id === book.id);
        const inWishlist = wishlist.some(item => item.id === book.id);
        
        // Calculate rating stars
        const fullStars = Math.floor(book.rating);
        const hasHalfStar = book.rating % 1 >= 0.5;
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card animate-on-scroll';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${book.image}" alt="${book.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x450/eaeffe/2d274b?text=Book+Cover'">
                <button class="wishlist-btn ${inWishlist ? 'active' : ''}" data-id="${book.id}">
                    <i class="fas ${inWishlist ? 'fa-heart' : 'fa-heart'}"></i>
                </button>
                ${book.price < 350 ? `<div class="discount-badge">-25%</div>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${book.title}</h3>
                <p class="product-author">${book.author}</p>
                <div class="rating">
                    ${Array(fullStars).fill('<i class="fas fa-star"></i>').join('')}
                    ${hasHalfStar ? '<i class="fas fa-star-half-alt"></i>' : ''}
                    ${Array(5 - fullStars - (hasHalfStar ? 1 : 0)).fill('<i class="far fa-star"></i>').join('')}
                    <span class="rating-count">(${book.reviews})</span>
                </div>
                <div class="product-price-container">
                    <span class="product-price">₹${book.price}</span>
                    ${book.price > 300 ? `<span class="original-price">₹${Math.round(book.price * 1.3)}</span>` : ''}
                </div>
                <button class="add-to-cart ${inCart ? 'added-to-cart' : ''}" data-id="${book.id}">
                    <i class="fas ${inCart ? 'fa-check' : 'fa-cart-plus'}"></i>
                    <span>${inCart ? 'In Cart' : 'Add to Cart'}</span>
                </button>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
    
    // Add event listeners to buttons after rendering
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', handleAddToCart);
    });
    
    document.querySelectorAll('.wishlist-btn').forEach(button => {
        button.addEventListener('click', handleWishlistToggle);
    });
    
    // Trigger animations for visible items
    setTimeout(() => {
        document.querySelectorAll('.animate-on-scroll').forEach(item => {
            item.classList.add('visible');
        });
    }, 100);
}

// Handle Add to Cart
function handleAddToCart(e) {
    e.preventDefault();
    const button = e.currentTarget;
    const bookId = parseInt(button.dataset.id);
    const book = books.find(b => b.id === bookId);
    
    if (!book) return;
    
    // Find if item already exists in cart
    const existingItem = cart.find(item => item.id === bookId);
    
    if (existingItem) {
        // If already in cart, increment quantity
        existingItem.quantity += 1;
        showToast('Quantity updated in cart!', 'info');
    } else {
        // Add new item to cart
        cart.push({
            id: book.id,
            title: book.title,
            author: book.author,
            price: book.price,
            image: book.image,
            quantity: 1
        });
        button.classList.add('added-to-cart');
        button.innerHTML = '<i class="fas fa-check"></i> <span>In Cart</span>';
        showToast('Added to cart!', 'success');
    }
    
    // Update UI
    updateCartCount();
    updateCartModal();
    saveCartToStorage();
    animateCartIcon();
}

// Handle Wishlist Toggle
function handleWishlistToggle(e) {
    e.stopPropagation();
    e.preventDefault();
    const button = e.currentTarget;
    const bookId = parseInt(button.dataset.id);
    const book = books.find(b => b.id === bookId);
    
    if (!book) return;
    
    const existingIndex = wishlist.findIndex(item => item.id === bookId);
    
    if (existingIndex !== -1) {
        // Remove from wishlist
        wishlist.splice(existingIndex, 1);
        button.classList.remove('active');
        showToast('Removed from wishlist', 'error');
    } else {
        // Add to wishlist
        wishlist.push({
            id: book.id,
            title: book.title,
            author: book.author,
            price: book.price,
            image: book.image
        });
        button.classList.add('active');
        showToast('Added to wishlist!', 'info');
    }
    
    // Update UI
    updateWishlistCount();
    updateWishlistModal();
    saveWishlistToStorage();
    animateWishlistIcon();
}

// Update Cart UI in Modal
function updateCartModal() {
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '';
        cartItemsContainer.appendChild(emptyCart);
        checkoutBtn.disabled = true;
        return;
    }
    
    cartItemsContainer.innerHTML = '';
    let subtotal = 0;
    let discount = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        // Apply discount logic - 10% off for orders over ₹1000
        if (subtotal > 1000) {
            discount = subtotal * 0.1;
        }
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/80x110/eaeffe/2d274b?text=Book'">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-author">${item.author}</div>
                <div class="cart-item-price">₹${item.price}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                </div>
                <div class="remove-item" data-id="${item.id}">Remove item</div>
            </div>
        `;
        
        cartItemsContainer.appendChild(cartItem);
    });
    
    // Update cart summary
    cartItemsCount.textContent = `${cart.length} ${cart.length === 1 ? 'item' : 'items'}`;
    cartSubtotal.textContent = `₹${subtotal}`;
    cartDiscount.textContent = discount > 0 ? `-₹${Math.round(discount)}` : '-₹0';
    cartTotal.textContent = `₹${Math.round(subtotal - discount)}`;
    
    // Add event listeners to cart item buttons
    document.querySelectorAll('.quantity-btn.minus').forEach(button => {
        button.addEventListener('click', decreaseQuantity);
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(button => {
        button.addEventListener('click', increaseQuantity);
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', removeFromCart);
    });
    
    checkoutBtn.disabled = false;
}

// Update Wishlist UI in Modal
function updateWishlistModal() {
    if (wishlist.length === 0) {
        wishlistItemsContainer.innerHTML = '';
        wishlistItemsContainer.appendChild(emptyWishlist);
        moveAllToCartBtn.style.display = 'none';
        return;
    }
    
    wishlistItemsContainer.innerHTML = '';
    wishlistItemsCount.textContent = `${wishlist.length} ${wishlist.length === 1 ? 'item' : 'items'}`;
    moveAllToCartBtn.style.display = 'block';
    
    wishlist.forEach(item => {
        const wishlistItem = document.createElement('div');
        wishlistItem.className = 'wishlist-item';
        wishlistItem.innerHTML = `
            <div class="wishlist-item-image">
                <img src="${item.image}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/80x110/eaeffe/2d274b?text=Book'">
            </div>
            <div class="wishlist-item-details">
                <div class="wishlist-item-title">${item.title}</div>
                <div class="wishlist-item-author">${item.author}</div>
                <div class="cart-item-price">₹${item.price}</div>
                <button class="add-to-cart wishlist-add" data-id="${item.id}">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
            <div class="remove-item" data-id="${item.id}">Remove</div>
        `;
        
        wishlistItemsContainer.appendChild(wishlistItem);
    });
    
    // Add event listeners
    document.querySelectorAll('.wishlist-add').forEach(button => {
        button.addEventListener('click', (e) => {
            handleAddToCart(e);
            // Keep the wishlist item even after adding to cart
            updateWishlistModal();
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', removeFromWishlist);
    });
}

// Cart Item Functions
function decreaseQuantity(e) {
    const bookId = parseInt(e.currentTarget.dataset.id);
    const item = cart.find(item => item.id === bookId);
    
    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            cart = cart.filter(item => item.id !== bookId);
            // Update the product card button
            const productButton = document.querySelector(`.add-to-cart[data-id="${bookId}"]`);
            if (productButton) {
                productButton.classList.remove('added-to-cart');
                productButton.innerHTML = '<i class="fas fa-cart-plus"></i> <span>Add to Cart</span>';
            }
        }
        updateCartCount();
        updateCartModal();
        saveCartToStorage();
        showToast('Item quantity updated', 'info');
    }
}

function increaseQuantity(e) {
    const bookId = parseInt(e.currentTarget.dataset.id);
    const item = cart.find(item => item.id === bookId);
    
    if (item) {
        item.quantity += 1;
        updateCartCount();
        updateCartModal();
        saveCartToStorage();
        showToast('Item quantity updated', 'info');
    }
}

function removeFromCart(e) {
    const bookId = parseInt(e.currentTarget.dataset.id);
    cart = cart.filter(item => item.id !== bookId);
    
    // Update the product card button
    const productButton = document.querySelector(`.add-to-cart[data-id="${bookId}"]`);
    if (productButton) {
        productButton.classList.remove('added-to-cart');
        productButton.innerHTML = '<i class="fas fa-cart-plus"></i> <span>Add to Cart</span>';
    }
    
    updateCartCount();
    updateCartModal();
    saveCartToStorage();
    showToast('Removed from cart', 'error');
}

function removeFromWishlist(e) {
    const bookId = parseInt(e.currentTarget.dataset.id);
    wishlist = wishlist.filter(item => item.id !== bookId);
    
    // Update wishlist button on product card
    const wishlistButton = document.querySelector(`.wishlist-btn[data-id="${bookId}"]`);
    if (wishlistButton) {
        wishlistButton.classList.remove('active');
    }
    
    updateWishlistCount();
    updateWishlistModal();
    saveWishlistToStorage();
    showToast('Removed from wishlist', 'error');
}

// Update UI Counts
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = count;
    bottomCartCount.textContent = count;
    mobileCartCount.textContent = count;
}

function updateWishlistCount() {
    wishlistCount.textContent = wishlist.length;
    bottomWishlistCount.textContent = wishlist.length;
    mobileWishlistCount.textContent = wishlist.length;
}

// Storage Functions
function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function saveWishlistToStorage() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// Search Functionality
function renderSearchResults() {
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.trim().toLowerCase();
        searchResults.innerHTML = '';
        
        if (searchTerm.length < 2) {
            searchResults.classList.remove('active');
            return;
        }
        
        const filteredBooks = books.filter(book => 
            book.title.toLowerCase().includes(searchTerm) || 
            book.author.toLowerCase().includes(searchTerm) ||
            book.category.toLowerCase().includes(searchTerm)
        ).slice(0, 5);
        
        if (filteredBooks.length === 0) {
            searchResults.classList.add('active');
            searchResults.innerHTML = '<div class="search-result-item"><p>No results found for your search</p></div>';
            return;
        }
        
        filteredBooks.forEach(book => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            resultItem.innerHTML = `
                <div class="result-image">
                    <img src="${book.image}" alt="${book.title}" onerror="this.src='https://via.placeholder.com/60x85/eaeffe/2d274b?text=Book'">
                </div>
                <div class="result-details">
                    <h4>${book.title}</h4>
                    <p>${book.author}</p>
                    <span class="result-price">₹${book.price}</span>
                </div>
            `;
            
            resultItem.addEventListener('click', () => {
                searchInput.value = '';
                searchResults.classList.remove('active');
                
                // Scroll to the product section
                document.querySelector('.featured-section').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Flash the matching product cards
                document.querySelectorAll(`.product-card`).forEach(card => {
                    if (card.innerHTML.includes(book.title)) {
                        card.style.boxShadow = '0 0 0 3px var(--primary-light)';
                        setTimeout(() => {
                            card.style.boxShadow = '';
                        }, 1500);
                    }
                });
            });
            
            searchResults.appendChild(resultItem);
        });
        
        searchResults.classList.add('active');
    });
    
    // Close search results when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.remove('active');
        }
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Modal controls
    cartIcon.addEventListener('click', () => {
        cartModal.style.display = 'flex';
        updateCartModal();
    });
    
    wishlistIcon.addEventListener('click', () => {
        wishlistModal.style.display = 'flex';
        updateWishlistModal();
    });
    
    closeCart.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });
    
    closeWishlist.addEventListener('click', () => {
        wishlistModal.style.display = 'none';
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === cartModal) cartModal.style.display = 'none';
        if (e.target === wishlistModal) wishlistModal.style.display = 'none';
    });
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        mobileMenu.style.display = 'block';
        setTimeout(() => {
            mobileMenu.classList.add('active');
        }, 10);
        
        // Disable body scroll when menu is open
        document.body.style.overflow = 'hidden';
    });
    
    closeMenu.addEventListener('click', closeMobileMenu);
    
    // Bottom navigation
    bottomSearch.addEventListener('click', (e) => {
        e.preventDefault();
        searchInput.focus();
    });
    
    bottomWishlist.addEventListener('click', (e) => {
        e.preventDefault();
        wishlistModal.style.display = 'flex';
        updateWishlistModal();
    });
    
    bottomCart.addEventListener('click', (e) => {
        e.preventDefault();
        cartModal.style.display = 'flex';
        updateCartModal();
    });
    
    mobileWishlist.addEventListener('click', (e) => {
        e.preventDefault();
        closeMobileMenu();
        wishlistModal.style.display = 'flex';
        updateWishlistModal();
    });
    
    mobileCart.addEventListener('click', (e) => {
        e.preventDefault();
        closeMobileMenu();
        cartModal.style.display = 'flex';
        updateCartModal();
    });
    
    // Checkout button
    checkoutBtn.addEventListener('click', () => {
        showToast('Checkout functionality coming soon!', 'info');
        cartModal.style.display = 'none';
    });
    
    // Move all to cart
    moveAllToCartBtn.addEventListener('click', () => {
        wishlist.forEach(item => {
            const existingItem = cart.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: item.id,
                    title: item.title,
                    author: item.author,
                    price: item.price,
                    image: item.image,
                    quantity: 1
                });
            }
        });
        
        updateCartCount();
        updateCartModal();
        saveCartToStorage();
        showToast('All items added to cart!', 'success');
    });
    
    // Category filters
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            filterByCategory(category);
        });
    });
    
    // Newsletter form
    document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        if (email) {
            showToast('Thank you for subscribing! Check your email for confirmation.', 'success');
            this.reset();
        } else {
            showToast('Please enter a valid email address', 'error');
        }
    });
}

// Close mobile menu
function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    setTimeout(() => {
        mobileMenu.style.display = 'none';
        // Re-enable body scroll
        document.body.style.overflow = 'auto';
    }, 400);
}

// Setup Sorting Functionality
function setupSortFunctionality() {
    sortOptions.addEventListener('change', function() {
        let sortedBooks = [...books];
        
        switch(this.value) {
            case 'price-low':
                sortedBooks.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                sortedBooks.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                sortedBooks.sort((a, b) => b.rating - a.rating);
                break;
            case 'newest':
                sortedBooks.sort((a, b) => b.id - a.id);
                break;
            default:
                sortedBooks = [...books];
        }
        
        renderProducts(sortedBooks);
    });
}

// Setup Category Filters
function setupCategoryFilters() {
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            filterByCategory(category);
        });
    });
}

// Filter Books by Category
function filterByCategory(category) {
    const filteredBooks = category === 'All' 
        ? [...books] 
        : books.filter(book => book.category === category);
    
    renderProducts(filteredBooks);
    
    // Scroll to products section
    document.querySelector('.featured-section').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
    
    showToast(`Showing ${filteredBooks.length} books in ${category} category`, 'info');
}

// Animations
function initAnimations() {
    // Animate elements on scroll
    const animateOnScroll = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animateOnScroll.forEach(element => {
        observer.observe(element);
    });
    
    // Floating books animation
    document.querySelectorAll('.floating-books .book').forEach((book, index) => {
        book.style.animationDelay = `${0.2 + index * 0.3}s`;
    });
}

// UI Effects
function animateCartIcon() {
    cartIcon.classList.add('pulse');
    setTimeout(() => {
        cartIcon.classList.remove('pulse');
    }, 1000);
}

function animateWishlistIcon() {
    wishlistIcon.classList.add('pulse');
    setTimeout(() => {
        wishlistIcon.classList.remove('pulse');
    }, 1000);
}

// Toast Notifications
function showToast(message, type) {
    const toast = document.createElement('div');
    toast.className = `toast ${type} animate__animated animate__fadeInRight`;
    
    let icon = '';
    switch(type) {
        case 'success':
            icon = '<i class="fas fa-check-circle"></i>';
            break;
        case 'error':
            icon = '<i class="fas fa-exclamation-circle"></i>';
            break;
        case 'info':
            icon = '<i class="fas fa-info-circle"></i>';
            break;
        case 'warning':
            icon = '<i class="fas fa-exclamation-triangle"></i>';
            break;
    }
    
    toast.innerHTML = `${icon} ${message}`;
    toastContainer.appendChild(toast);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        toast.classList.add('animate__fadeOutRight');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Handle image errors
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        const originalSrc = e.target.src;
        e.target.src = 'https://via.placeholder.com/300x450/eaeffe/2d274b?text=Book+Cover';
        e.target.onerror = null; // Prevent infinite loop
        
        // Log the error for debugging
        console.warn('Image failed to load:', originalSrc);
    }
}, true);

// Initialize the app
document.addEventListener('DOMContentLoaded', initApp);
