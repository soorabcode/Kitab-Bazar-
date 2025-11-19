// script.js
document.addEventListener('DOMContentLoaded', () => {
    const books = [
        { id: 1, title: 'Book 1', price: 10, image: 'https://via.placeholder.com/150?text=Book1' },
        { id: 2, title: 'Book 2', price: 15, image: 'https://via.placeholder.com/150?text=Book2' },
        { id: 3, title: 'Book 3', price: 20, image: 'https://via.placeholder.com/150?text=Book3' },
        { id: 4, title: 'Book 4', price: 12, image: 'https://via.placeholder.com/150?text=Book4' },
        { id: 5, title: 'Book 5', price: 18, image: 'https://via.placeholder.com/150?text=Book5' },
        // Add more books as needed
    ];

    const cart = [];

    const booksGrid = document.getElementById('books-grid');
    const searchInput = document.getElementById('search-input');
    const searchBar = document.getElementById('search-bar');
    const searchIcon = document.getElementById('search-icon');
    const cartIcon = document.getElementById('cart-icon');
    const cartModal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const closeCart = document.getElementById('close-cart');
    const checkout = document.getElementById('checkout');
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    const cartCount = document.querySelector('.cart-count');

    function renderBooks(filteredBooks = books) {
        booksGrid.innerHTML = '';
        filteredBooks.forEach(book => {
            const card = document.createElement('div');
            card.classList.add('book-card');
            card.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>$${book.price}</p>
                <button data-id="${book.id}">Add to Cart</button>
            `;
            booksGrid.appendChild(card);
        });
    }

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${item.title} - $${item.price}
                <button data-id="${item.id}">Remove</button>
            `;
            cartItems.appendChild(li);
            total += item.price;
        });
        cartTotal.textContent = total;
        cartCount.textContent = cart.length;
    }

    booksGrid.addEventListener('click', e => {
        if (e.target.tagName === 'BUTTON') {
            const id = parseInt(e.target.dataset.id);
            const book = books.find(b => b.id === id);
            cart.push(book);
            updateCart();
        }
    });

    cartItems.addEventListener('click', e => {
        if (e.target.tagName === 'BUTTON') {
            const id = parseInt(e.target.dataset.id);
            const index = cart.findIndex(item => item.id === id);
            if (index !== -1) {
                cart.splice(index, 1);
                updateCart();
            }
        }
    });

    searchIcon.addEventListener('click', () => {
        searchBar.style.display = searchBar.style.display === 'block' ? 'none' : 'block';
    });

    searchInput.addEventListener('input', e => {
        const query = e.target.value.toLowerCase();
        const filtered = books.filter(book => book.title.toLowerCase().includes(query));
        renderBooks(filtered);
    });

    cartIcon.addEventListener('click', () => {
        cartModal.style.display = 'flex';
    });

    closeCart.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    checkout.addEventListener('click', () => {
        alert('Checkout functionality not implemented.');
    });

    menuIcon.addEventListener('click', () => {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    renderBooks();
});