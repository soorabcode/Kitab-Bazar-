// Books Data
const books = [
    { id: 1, title: 'Think Like A Monk', author: 'Jay Shetty', price: 15.99, image: 'https://m.media-amazon.com/images/I/71CME+YojvL._AC_UL600_.jpg', category: 'self-help', rating: 4.8 },
    { id: 2, title: 'Ikigai', author: 'Hector Garcia', price: 12.99, image: 'https://m.media-amazon.com/images/I/814L+vq01mL._AC_UL600_.jpg', category: 'self-help', rating: 4.6 },
    { id: 3, title: 'Think And Grow Rich', author: 'Napoleon Hill', price: 10.99, image: 'https://m.media-amazon.com/images/I/81wMJDtCALL._AC_UL600_.jpg', category: 'self-help', rating: 4.7 },
    { id: 4, title: 'Steal Like An Artist', author: 'Austin Kleon', price: 9.99, image: 'https://m.media-amazon.com/images/I/618iLg6I3zL._AC_UL600_.jpg', category: 'self-help', rating: 4.5 },
    { id: 5, title: '100M Offers', author: 'Alex Hormozi', price: 14.99, image: 'https://m.media-amazon.com/images/I/71NGkaAua0L._AC_UL600_.jpg', category: 'self-help', rating: 4.9 },
    { id: 6, title: '100M Leads', author: 'Alex Hormozi', price: 14.99, image: 'https://m.media-amazon.com/images/I/61PRwClra5L._AC_UL600_.jpg', category: 'self-help', rating: 4.8 },
    { id: 7, title: 'Love For No Reason', author: 'Marci Shimoff', price: 13.99, image: 'https://m.media-amazon.com/images/I/71CYfg8KvqL._AC_UL600_.jpg', category: 'self-help', rating: 4.4 },
    { id: 8, title: 'Show Your Work', author: 'Austin Kleon', price: 11.99, image: 'https://m.media-amazon.com/images/I/615i7JSSShL._AC_UL600_.jpg', category: 'self-help', rating: 4.6 },
    { id: 9, title: 'Keep Going', author: 'Austin Kleon', price: 11.99, image: 'https://m.media-amazon.com/images/I/71Kqghd9AjL._AC_UL600_.jpg', category: 'self-help', rating: 4.7 },
    { id: 10, title: 'E-Myth Revisited', author: 'Michael E. Gerber', price: 16.99, image: 'https://m.media-amazon.com/images/I/71V-PeMYiJL._AC_UL600_.jpg', category: 'self-help', rating: 4.5 },
    { id: 11, title: 'Artificial Intelligence: A Modern Approach', author: 'Russell, Norvig', price: 59.99, image: 'https://m.media-amazon.com/images/I/71987VGHEEL._AC_UL600_.jpg', category: 'ai', rating: 4.8 },
    { id: 12, title: 'Artificial Intelligence', author: 'Rich, Knight, Nair', price: 49.99, image: 'https://m.media-amazon.com/images/I/61CCWFxB90L._AC_UL600_.jpg', category: 'ai', rating: 4.6 },
    { id: 13, title: 'Pattern Recognition and Machine Learning', author: 'Bishop', price: 54.99, image: 'https://m.media-amazon.com/images/I/71fqxXDY2ZL._AC_UL600_.jpg', category: 'ai', rating: 4.7 },
    { id: 14, title: 'Mathematics for Machine Learning', author: 'Deisenroth et al.', price: 39.99, image: 'https://m.media-amazon.com/images/I/71BSCp3ZYJL._AC_UL600_.jpg', category: 'ai', rating: 4.5 },
    { id: 15, title: 'Signals and Systems', author: 'Oppenheim et al.', price: 44.99, image: 'https://m.media-amazon.com/images/I/718DWd6JlhL._AC_UL600_.jpg', category: 'signal', rating: 4.6 },
    { id: 16, title: 'Discrete-Time Signal Processing', author: 'Oppenheim, Schafer', price: 49.99, image: 'https://m.media-amazon.com/images/I/91faQIeWJgL._AC_UL600_.jpg', category: 'signal', rating: 4.7 },
    { id: 17, title: 'Digital Signal Processing using MATLAB', author: 'Ingle, Proakis', price: 42.99, image: 'https://m.media-amazon.com/images/I/91JUJPwQzoL._AC_UL600_.jpg', category: 'signal', rating: 4.5 },
    { id: 18, title: 'Linear Systems and Signals', author: 'Lathi', price: 45.99, image: 'https://m.media-amazon.com/images/I/81jdWMhGBjL._AC_UL600_.jpg', category: 'signal', rating: 4.6 },
    { id: 19, title: 'Discrete Mathematics and Its Applications', author: 'Rosen', price: 55.99, image: 'https://m.media-amazon.com/images/I/71S3fMFsygL._AC_UL600_.jpg', category: 'math', rating: 4.4 },
    { id: 20, title: 'Discrete Mathematics', author: 'Johnsonbaugh', price: 48.99, image: 'https://m.media-amazon.com/images/I/91Sb82idcVL._AC_UL600_.jpg', category: 'math', rating: 4.5 },
    { id: 21, title: 'Applied and Algorithmic Graph Theory', author: 'Chartrand, Oellermann', price: 52.99, image: 'https://m.media-amazon.com/images/I/81ZvbvKzSVL._AC_UL600_.jpg', category: 'math', rating: 4.3 },
    { id: 22, title: 'Elements of the Theory of Computation', author: 'Lewis, Papadimitriou', price: 47.99, image: 'https://m.media-amazon.com/images/I/41Ver71d2XL._AC_UL600_.jpg', category: 'math', rating: 4.4 },
    { id: 23, title: 'Introduction to Algorithms', author: 'Cormen et al.', price: 59.99, image: 'https://m.media-amazon.com/images/I/61Pgdn8Ys-L._AC_UL600_.jpg', category: 'math', rating: 4.8 }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentStep = 1;

// Render Books with loading placeholders
function renderBooks(filteredBooks = books) {
    const grid = document.getElementById('books-grid');
    grid.innerHTML = '';
    filteredBooks.forEach((book, index) => {
        const card = document.createElement('div');
        card.classList.add('book-card');
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
        card.innerHTML = `
            <div class="image-placeholder">
                <img src="${book.image}" alt="${book.title}" class="book-image" onload="this.style.opacity='1'" onerror="this.src='bookbaza.jpg'; this.style.opacity='1'">
            </div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">${book.author}</p>
                <p class="book-price">$${book.price.toFixed(2)}</p>
                <div class="book-rating">
                    ${'★'.repeat(Math.floor(book.rating)) + '☆'.repeat(5 - Math.floor(book.rating))}
                </div>
                <div class="book-actions">
                    <button class="add-to-cart" data-id="${book.id}"><i class="fas fa-cart-plus"></i> Add to Cart</button>
                    <button class="add-to-wishlist ${wishlist.some(item => item.id === book.id) ? 'liked' : ''}" data-id="${book.id}">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}



// Update Counts
function updateCartCount() {
    const counts = document.querySelectorAll('.cart-count');
    counts.forEach(count => count.textContent = cart.reduce((sum, item) => sum + item.quantity, 0));
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateWishlistCount() {
    const counts = document.querySelectorAll('.wishlist-count');
    counts.forEach(count => count.textContent = wishlist.length);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// Render Cart Items for Step 1
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
        document.getElementById('cart-total').textContent = 'Total: $0.00';
        return;
    }
    let total = 0;
    cart.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
            <img src="${item.image}" alt="${item.title}" onerror="this.src='bookbaza.jpg'">
            <h4>${item.title}</h4>
            <p>$${item.price.toFixed(2)}</p>
            <div class="quantity-controls">
                <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn increase" data-id="${item.id}">+</button>
            </div>
            <span class="remove-btn" data-id="${item.id}">Remove</span>
        `;
        cartItems.appendChild(div);
        total += item.price * item.quantity;
    });
    document.getElementById('cart-total').textContent = `Total: $${total.toFixed(2)}`;
}

// Render Wishlist
function renderWishlist() {
    const wishlistItems = document.getElementById('wishlist-items');
    wishlistItems.innerHTML = '';
    if (wishlist.length === 0) {
        wishlistItems.innerHTML = '<p>Your wishlist is empty.</p>';
        return;
    }
    wishlist.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('wishlist-item');
        div.innerHTML = `
            <img src="${item.image}" alt="${item.title}" onerror="this.src='bookbaza.jpg'">
            <h4>${item.title}</h4>
            <p>$${item.price.toFixed(2)}</p>
            <span class="remove-btn" data-id="${item.id}">Remove</span>
        `;
        wishlistItems.appendChild(div);
    });
}

// Show Checkout Step
function showStep(step) {
    document.querySelectorAll('.checkout-steps .step').forEach(s => s.classList.remove('active'));
    document.getElementById(`step-${step}`).classList.add('active');
    document.querySelectorAll('.progress-step').forEach(p => p.classList.remove('active'));
    document.querySelector(`.progress-step[data-step="${step}"]`).classList.add('active');
    currentStep = step;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    renderBooks();

    // Dark Mode Toggle
    document.getElementById('dark-mode-toggle').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = document.getElementById('dark-mode-toggle');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });

    // Search
    document.getElementById('search-icon').addEventListener('click', () => {
        document.getElementById('search-bar').style.display = 'flex';
    });

    document.getElementById('close-search').addEventListener('click', () => {
        document.getElementById('search-bar').style.display = 'none';
        document.getElementById('search-input').value = '';
        renderBooks(getFilteredByCategory());
    });

    document.getElementById('search-input').addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const category = document.querySelector('.category-btn.active').dataset.category;
        const filtered = books.filter(book => 
            (category === 'all' || book.category === category) &&
            (book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query))
        );
        renderBooks(filtered);
    });

    // Menu
    document.getElementById('menu-icon').addEventListener('click', () => {
        const menu = document.getElementById('menu-dropdown');
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    // Menu Links
    document.querySelectorAll('.menu-dropdown a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            if (href === '#') {
                showToast('Feature coming soon!');
            } else {
                window.open(href, '_blank');
            }
            document.getElementById('menu-dropdown').style.display = 'none';
        });
    });

    // Cart Modal
    document.getElementById('cart-icon').addEventListener('click', () => {
        showStep(1);
        renderCart();
        document.getElementById('cart-modal').style.display = 'flex';
    });

    document.getElementById('bottom-cart').addEventListener('click', (e) => {
        e.preventDefault();
        showStep(1);
        renderCart();
        document.getElementById('cart-modal').style.display = 'flex';
    });

    // Wishlist
    document.getElementById('wishlist-icon').addEventListener('click', () => {
        renderWishlist();
        document.getElementById('wishlist-modal').style.display = 'flex';
    });

    document.getElementById('bottom-wishlist').addEventListener('click', (e) => {
        e.preventDefault();
        renderWishlist();
        document.getElementById('wishlist-modal').style.display = 'flex';
    });

    // Close Modals
    document.querySelectorAll('.close-modal').forEach(close => {
        close.addEventListener('click', () => {
            close.parentElement.parentElement.style.display = 'none';
        });
    });

    // Categories
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderBooks(getFilteredByCategory());
        });
    });

    function getFilteredByCategory() {
        const category = document.querySelector('.category-btn.active').dataset.category;
        return category === 'all' ? books : books.filter(book => book.category === category);
    }

    // Add to Cart / Wishlist
    document.getElementById('books-grid').addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const id = parseInt(e.target.dataset.id);
            const book = books.find(b => b.id === id);
            const existing = cart.find(item => item.id === id);
            if (existing) {
                existing.quantity++;
            } else {
                cart.push({ ...book, quantity: 1 });
            }
            updateCartCount();
            e.target.classList.add('pulse');
            setTimeout(() => e.target.classList.remove('pulse'), 1000);
            // Replace alert with toast notification
            showToast(`${book.title} added to cart!`);
        } else if (e.target.closest('.add-to-wishlist')) {
            const button = e.target.closest('.add-to-wishlist');
            const id = parseInt(button.dataset.id);
            const book = books.find(b => b.id === id);
            if (wishlist.some(item => item.id === id)) {
                wishlist = wishlist.filter(item => item.id !== id);
                button.classList.remove('liked');
                showToast(`${book.title} removed from wishlist!`);
            } else {
                wishlist.push(book);
                button.classList.add('liked');
                showToast(`${book.title} added to wishlist!`);
            }
            updateWishlistCount();
        }
    });

    // Cart Interactions
    document.getElementById('cart-modal').addEventListener('click', (e) => {
        const id = parseInt(e.target.dataset.id);
        if (e.target.classList.contains('remove-btn')) {
            cart = cart.filter(item => item.id !== id);
            renderCart();
            updateCartCount();
        } else if (e.target.classList.contains('increase')) {
            const item = cart.find(item => item.id === id);
            item.quantity++;
            renderCart();
            updateCartCount();
        } else if (e.target.classList.contains('decrease')) {
            const item = cart.find(item => item.id === id);
            if (item.quantity > 1) {
                item.quantity--;
            } else {
                cart = cart.filter(item => item.id !== id);
            }
            renderCart();
            updateCartCount();
        }
    });

    // Checkout Steps Navigation
    document.getElementById('next-to-shipping').addEventListener('click', () => showStep(2));
    document.getElementById('next-to-payment').addEventListener('click', () => {
        if (document.getElementById('shipping-form').checkValidity()) {
            showStep(3);
        } else {
            alert('Please fill out all shipping fields.');
        }
    });
    document.getElementById('next-to-confirmation').addEventListener('click', () => {
        if (document.getElementById('payment-form').checkValidity()) {
            showStep(4);
        } else {
            alert('Please fill out all payment fields.');
        }
    });
    document.getElementById('complete-checkout').addEventListener('click', () => {
        document.getElementById('cart-modal').style.display = 'none';
        cart = []; // Clear cart after confirmation
        updateCartCount();
    });

    // Wishlist Remove
    document.getElementById('wishlist-modal').addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-btn')) {
            const id = parseInt(e.target.dataset.id);
            wishlist = wishlist.filter(item => item.id !== id);
            renderWishlist();
            updateWishlistCount();
            document.querySelectorAll(`.add-to-wishlist[data-id="${id}"]`).forEach(btn => btn.classList.remove('liked'));
        }
    });

    // Hero Button
    document.querySelector('.hero-btn').addEventListener('click', () => {
        document.querySelector('.shop-section').scrollIntoView({ behavior: 'smooth' });
    });

    // Newsletter Subscription
    document.getElementById('newsletter-btn').addEventListener('click', () => {
        const email = document.getElementById('newsletter-email').value;
        if (email) {
            showToast('Thank you for subscribing!');
            document.getElementById('newsletter-email').value = '';
        } else {
            showToast('Please enter a valid email.');
        }
    });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
    if (!e.target.closest('.icons')) {
        document.getElementById('menu-dropdown').style.display = 'none';
    }
});

// Toast Notification Function
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}
