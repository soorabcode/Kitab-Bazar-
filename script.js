// Book Data
const books = [
    { id: 1, title: "Think Like A Monk", author: "Jay Shetty", price: 399, image: "https://m.media-amazon.com/images/I/71D9ImsvEtL._SL1500_.jpg", category: "Self-Help" },
    { id: 2, title: "Ikigai", author: "Héctor García & Francesc Miralles", price: 329, image: "https://m.media-amazon.com/images/I/71uJJBhYj+L._SL1500_.jpg", category: "Self-Help" },
    { id: 3, title: "Think and Grow Rich", author: "Napoleon Hill", price: 249, image: "https://m.media-amazon.com/images/I/81U8uJ+4qFL._SL1500_.jpg", category: "Self-Help" },
    { id: 4, title: "Steal Like An Artist", author: "Austin Kleon", price: 299, image: "https://m.media-amazon.com/images/I/71XwF8ZC5kL._SL1500_.jpg", category: "Creativity" },
    { id: 5, title: "100M Offers", author: "Alex Hormozi", price: 899, image: "https://m.media-amazon.com/images/I/61dQHt4Z6RL._SL1200_.jpg", category: "Business" },
    { id: 6, title: "100M Leads", author: "Alex Hormozi", price: 849, image: "https://m.media-amazon.com/images/I/61xI3k1h7FL._SL1500_.jpg", category: "Business" },
    { id: 7, title: "Love For No Reason", author: "Marci Shimoff", price: 349, image: "https://m.media-amazon.com/images/I/71QKQ9mwY7L._SL1500_.jpg", category: "Self-Help" },
    { id: 8, title: "Show Your Work", author: "Austin Kleon", price: 279, image: "https://m.media-amazon.com/images/I/71dG8Vd+QwL._SL1500_.jpg", category: "Creativity" },
    { id: 9, title: "Keep Going", author: "Austin Kleon", price: 319, image: "https://m.media-amazon.com/images/I/71uP6M2KJPL._SL1500_.jpg", category: "Creativity" },
    { id: 10, title: "E-Myth Revisited", author: "Michael Gerber", price: 429, image: "https://m.media-amazon.com/images/I/71Yn8wP0gQL._SL1500_.jpg", category: "Business" },
    { id: 11, title: "Artificial Intelligence: A Modern Approach", author: "Russell & Norvig", price: 799, image: "https://m.media-amazon.com/images/I/51wVQ8eQGWL._SL1000_.jpg", category: "AI" },
    { id: 12, title: "Pattern Recognition and Machine Learning", author: "Bishop", price: 899, image: "https://m.media-amazon.com/images/I/51q4Jd1eJGL._SL1000_.jpg", category: "AI" },
    { id: 13, title: "Signals and Systems", author: "Oppenheim", price: 699, image: "https://m.media-amazon.com/images/I/51Zt63uBq7L._SL1000_.jpg", category: "Signal Processing" },
    { id: 14, title: "Discrete-Time Signal Processing", author: "Oppenheim & Schafer", price: 749, image: "https://m.media-amazon.com/images/I/51FwBjQcHjL._SL1000_.jpg", category: "Signal Processing" },
    { id: 15, title: "Discrete Mathematics and Its Applications", author: "Rosen", price: 649, image: "https://m.media-amazon.com/images/I/51nD1mDqCBL._SL1000_.jpg", category: "Mathematics" },
    { id: 16, title: "Introduction to Algorithms", author: "Cormen et al.", price: 849, image: "https://m.media-amazon.com/images/I/51lCR-pj9LL._SL1000_.jpg", category: "Algorithms" }
];

// DOM Elements
const productsContainer = document.getElementById('products-container');
const cartIcon = document.getElementById('cart-icon');
const cartModal = document.getElementById('cart-modal');
const closeCart = document.querySelector('.close-cart');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartCount = document.getElementById('cart-count');
const bottomCartCount = document.getElementById('bottom-cart-count');
const cartTotalElement = document.getElementById('cart-total');
const searchInput = document.getElementById('search-bar');
const searchResults = document.getElementById('search-results');
const wishlistCount = document.getElementById('wishlist-count');
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.querySelector('.close-menu');
const bottomSearch = document.getElementById('bottom-search');
const bottomWishlist = document.getElementById('bottom-wishlist');
const bottomCart = document.getElementById('bottom-cart');
const bottomMenu = document.getElementById('bottom-menu');
const sortOptions = document.getElementById('sort-options');

// Initialize cart and wishlist from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// Initialize UI
function init() {
    renderProducts(books);
    updateCartCount();
    updateWishlistCount();
    setupEventListeners();
    renderSearchResults();
}

// Render Products
function renderProducts(products) {
    productsContainer.innerHTML = '';
    
    products.forEach(book => {
        const cartItem = cart.find(item => item.id === book.id);
        const inCart = cartItem ? true : false;
        const inWishlist = wishlist.some(item => item.id === book.id);
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${book.image}" alt="${book.title}">
                <button class="wishlist-btn ${inWishlist ? 'active' : ''}" data-id="${book.id}">
                    <i class="fas ${inWishlist ? 'fa-heart' : 'fa-heart'}"></i>
                </button>
            </div>
            <div class="product-info">
                <h3 class="product-title">${book.title}</h3>
                <p class="product-author">${book.author}</p>
                <div class="product-price">₹${book.price}</div>
                <button class="add-to-cart ${inCart ? 'added-to-cart' : ''}" data-id="${book.id}">
                    ${inCart ? '<i class="fas fa-check"></i> In Cart' : 'Add to Cart'}
                </button>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
    
    // Add event listeners to buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
    
    document.querySelectorAll('.wishlist-btn').forEach(button => {
        button.addEventListener('click', toggleWishlist);
    });
}

// Add to Cart Functionality
function addToCart(e) {
    const bookId = parseInt(e.target.closest('button').dataset.id);
    const book = books.find(b => b.id === bookId);
    
    if (!book) return;
    
    const existingItem = cart.find(item => item.id === bookId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: book.id,
            title: book.title,
            author: book.author,
            price: book.price,
            image: book.image,
            quantity: 1
        });
    }
    
    updateCartCount();
    saveCartToStorage();
    renderProducts(books);
    showToast('Added to cart!', 'success');
}

// Toggle Wishlist
function toggleWishlist(e) {
    e.stopPropagation();
    const bookId = parseInt(e.target.closest('button').dataset.id);
    const book = books.find(b => b.id === bookId);
    
    if (!book) return;
    
    const existingIndex = wishlist.findIndex(item => item.id === bookId);
    
    if (existingIndex !== -1) {
        wishlist.splice(existingIndex, 1);
    } else {
        wishlist.push({
            id: book.id,
            title: book.title,
            author: book.author,
            price: book.price,
            image: book.image
        });
    }
    
    updateWishlistCount();
    saveWishlistToStorage();
    renderProducts(books);
    showToast(existingIndex !== -1 ? 'Removed from wishlist' : 'Added to wishlist!', 'info');
}

// Update Cart UI
function updateCartUI() {
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-basket"></i>
                <p>Your cart is empty</p>
            </div>
        `;
        cartTotalElement.textContent = '₹0';
        return;
    }
    
    let total = 0;
    cartItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image" style="background-image: url('${item.image}'); background-size: cover;"></div>
            <div class="cart-item-details">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-author">${item.author}</div>
                <div class="cart-item-price">₹${item.price}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    <span class="remove-item" data-id="${item.id}">Remove</span>
                </div>
            </div>
        `;
        
        cartItemsContainer.appendChild(cartItem);
    });
    
    cartTotalElement.textContent = `₹${total}`;
    
    // Add event listeners to quantity buttons and remove items
    document.querySelectorAll('.quantity-btn.minus').forEach(button => {
        button.addEventListener('click', decreaseQuantity);
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(button => {
        button.addEventListener('click', increaseQuantity);
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', removeFromCart);
    });
}

// Update Cart Count
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = count;
    bottomCartCount.textContent = count;
}

// Update Wishlist Count
function updateWishlistCount() {
    wishlistCount.textContent = wishlist.length;
}

// Save Cart to Local Storage
function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Save Wishlist to Local Storage
function saveWishlistToStorage() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// Show Toast Notification
function showToast(message, type) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
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
            book.author.toLowerCase().includes(searchTerm)
        );
        
        if (filteredBooks.length === 0) {
            searchResults.classList.add('active');
            searchResults.innerHTML = '<div class="search-result-item"><p>No results found</p></div>';
            return;
        }
        
        filteredBooks.slice(0, 5).forEach(book => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            resultItem.innerHTML = `
                <div class="result-image" style="background-image: url('${book.image}'); background-size: cover;"></div>
                <div class="result-details">
                    <h4>${book.title}</h4>
                    <p>${book.author}</p>
                    <span class="result-price">₹${book.price}</span>
                </div>
            `;
            resultItem.addEventListener('click', () => {
                searchInput.value = '';
                searchResults.classList.remove('active');
                document.querySelector('.shop-section').scrollIntoView({ behavior: 'smooth' });
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

// Sort Products
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
            case 'newest':
                sortedBooks.sort((a, b) => b.id - a.id);
                break;
            default:
                sortedBooks = [...books];
        }
        
        renderProducts(sortedBooks);
    });
}

// Event Listeners
function setupEventListeners() {
    // Cart modal
    cartIcon.addEventListener('click', () => {
        cartModal.style.display = 'flex';
        updateCartUI();
    });
    
    closeCart.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
    
    // Mobile menu
    menuToggle.addEventListener('click', () => {
        mobileMenu.style.display = 'block';
        setTimeout(() => {
            mobileMenu.classList.add('active');
        }, 10);
    });
    
    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        setTimeout(() => {
            mobileMenu.style.display = 'none';
        }, 400);
    });
    
    // Bottom navigation
    bottomSearch.addEventListener('click', (e) => {
        e.preventDefault();
        searchInput.focus();
    });
    
    bottomWishlist.addEventListener('click', (e) => {
        e.preventDefault();
        showToast('Wishlist functionality coming soon!', 'info');
    });
    
    bottomCart.addEventListener('click', (e) => {
        e.preventDefault();
        cartModal.style.display = 'flex';
        updateCartUI();
    });
    
    bottomMenu.addEventListener('click', (e) => {
        e.preventDefault();
        menuToggle.click();
    });
    
    // Quantity controls
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('minus')) {
            decreaseQuantity(e);
        } else if (e.target.classList.contains('plus')) {
            increaseQuantity(e);
        } else if (e.target.classList.contains('remove-item')) {
            removeFromCart(e);
        }
    });
    
    // Setup sort functionality
    setupSortFunctionality();
}

// Cart Item Functions
function decreaseQuantity(e) {
    const bookId = parseInt(e.target.dataset.id);
    const item = cart.find(item => item.id === bookId);
    
    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            cart = cart.filter(item => item.id !== bookId);
        }
        updateCartCount();
        saveCartToStorage();
        updateCartUI();
    }
}

function increaseQuantity(e) {
    const bookId = parseInt(e.target.dataset.id);
    const item = cart.find(item => item.id === bookId);
    
    if (item) {
        item.quantity += 1;
        updateCartCount();
        saveCartToStorage();
        updateCartUI();
    }
}

function removeFromCart(e) {
    const bookId = parseInt(e.target.dataset.id);
    cart = cart.filter(item => item.id !== bookId);
    updateCartCount();
    saveCartToStorage();
    updateCartUI();
    showToast('Removed from cart', 'error');
}

// Initialize the application
document.addEventListener('DOMContentLoaded', init);
