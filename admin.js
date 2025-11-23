// Admin Panel JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    const navBtns = document.querySelectorAll('.nav-btn');
    const adminSections = document.querySelectorAll('.admin-section');

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const sectionId = btn.dataset.section;
            adminSections.forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(sectionId).classList.add('active');
        });
    });

    // Load initial data
    loadDashboardStats();
    loadBooks();

    // Dashboard Functions
    async function loadDashboardStats() {
        try {
            const response = await fetch('/api/books');
            const books = await response.json();

            document.getElementById('total-books').textContent = books.length;
            document.getElementById('avg-rating').textContent = (books.reduce((sum, book) => sum + book.rating, 0) / books.length).toFixed(1);

            // Calculate recent uploads (last 7 days)
            const recentUploads = books.filter(book => {
                const bookDate = new Date(book.id); // Using ID as timestamp
                const weekAgo = new Date();
                weekAgo.setDate(weekAgo.getDate() - 7);
                return bookDate > weekAgo;
            }).length;

            document.getElementById('recent-uploads').textContent = recentUploads;

            // Update activity list
            updateActivityList(books);
        } catch (error) {
            console.error('Error loading dashboard stats:', error);
        }
    }

    function updateActivityList(books) {
        const activityList = document.getElementById('activity-list');
        const recentBooks = books.slice(-5).reverse(); // Last 5 books

        activityList.innerHTML = recentBooks.map(book => `
            <div class="activity-item">
                <i class="fas fa-plus-circle"></i>
                <div class="activity-content">
                    <p>Added "${book.title}"</p>
                    <small>${new Date(book.id).toLocaleDateString()}</small>
                </div>
            </div>
        `).join('');
    }

    // Books Management Functions
    async function loadBooks() {
        try {
            const response = await fetch('/api/books');
            const books = await response.json();
            renderBooksList(books);
        } catch (error) {
            console.error('Error loading books:', error);
        }
    }

    function renderBooksList(books) {
        const booksList = document.getElementById('books-list');
        booksList.innerHTML = books.map(book => `
            <div class="book-item">
                <img src="${book.image}" alt="${book.title}" class="book-image" onerror="this.src='/uploads/default-book.jpg'">
                <div class="book-details">
                    <h3>${book.title}</h3>
                    <p><strong>Author:</strong> ${book.author}</p>
                    <p><strong>Category:</strong> ${book.category}</p>
                    <p class="book-price">$${book.price.toFixed(2)}</p>
                    <div class="book-rating">${'★'.repeat(Math.floor(book.rating))}</div>
                    <div class="book-actions">
                        <button class="edit-btn" data-id="${book.id}">
                            <i class="fas fa-edit"></i> Edit
                        </button>
                        <button class="delete-btn" data-id="${book.id}">
                            <i class="fas fa-trash"></i> Delete
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Search and Filter
    document.getElementById('search-books').addEventListener('input', filterBooks);
    document.getElementById('filter-category').addEventListener('change', filterBooks);

    async function filterBooks() {
        try {
            const response = await fetch('/api/books');
            let books = await response.json();

            const searchTerm = document.getElementById('search-books').value.toLowerCase();
            const categoryFilter = document.getElementById('filter-category').value;

            if (searchTerm) {
                books = books.filter(book =>
                    book.title.toLowerCase().includes(searchTerm) ||
                    book.author.toLowerCase().includes(searchTerm)
                );
            }

            if (categoryFilter) {
                books = books.filter(book => book.category === categoryFilter);
            }

            renderBooksList(books);
        } catch (error) {
            console.error('Error filtering books:', error);
        }
    }

    // Add Book Form
    const addBookForm = document.getElementById('add-book-form');
    addBookForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', document.getElementById('book-title').value);
        formData.append('author', document.getElementById('book-author').value);
        formData.append('price', document.getElementById('book-price').value);
        formData.append('category', document.getElementById('book-category').value);
        formData.append('rating', document.getElementById('book-rating').value);

        const imageFile = document.getElementById('book-image').files[0];
        if (imageFile) {
            formData.append('image', imageFile);
        }

        try {
            const response = await fetch('/api/books', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                alert('Book added successfully!');
                addBookForm.reset();
                document.getElementById('image-preview').style.display = 'none';
                loadBooks();
                loadDashboardStats();
            } else {
                alert('Error adding book');
            }
        } catch (error) {
            console.error('Error adding book:', error);
            alert('Error adding book');
        }
    });

    // Image Preview
    document.getElementById('book-image').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                document.getElementById('image-preview').src = e.target.result;
                document.getElementById('image-preview').style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });

    // Clear Form
    document.getElementById('clear-form').addEventListener('click', () => {
        addBookForm.reset();
        document.getElementById('image-preview').style.display = 'none';
    });

    // Edit Book
    document.addEventListener('click', async (e) => {
        if (e.target.closest('.edit-btn')) {
            const bookId = e.target.closest('.edit-btn').dataset.id;
            try {
                const response = await fetch('/api/books');
                const books = await response.json();
                const book = books.find(b => b.id == bookId);

                if (book) {
                    openEditModal(book);
                }
            } catch (error) {
                console.error('Error loading book for edit:', error);
            }
        }
    });

    function openEditModal(book) {
        document.getElementById('edit-book-id').value = book.id;
        document.getElementById('edit-book-title').value = book.title;
        document.getElementById('edit-book-author').value = book.author;
        document.getElementById('edit-book-price').value = book.price;
        document.getElementById('edit-book-category').value = book.category;
        document.getElementById('edit-book-rating').value = book.rating;

        if (book.image) {
            document.getElementById('edit-image-preview').src = book.image;
            document.getElementById('edit-image-preview').style.display = 'block';
        }

        document.getElementById('edit-modal').style.display = 'flex';
    }

    // Edit Form Submit
    document.getElementById('edit-book-form').addEventListener('submit', async (e) => {
        e.preventDefault();

        const bookId = document.getElementById('edit-book-id').value;
        const formData = new FormData();
        formData.append('title', document.getElementById('edit-book-title').value);
        formData.append('author', document.getElementById('edit-book-author').value);
        formData.append('price', document.getElementById('edit-book-price').value);
        formData.append('category', document.getElementById('edit-book-category').value);
        formData.append('rating', document.getElementById('edit-book-rating').value);

        const imageFile = document.getElementById('edit-book-image').files[0];
        if (imageFile) {
            formData.append('image', imageFile);
        }

        try {
            const response = await fetch(`/api/books/${bookId}`, {
                method: 'PUT',
                body: formData
            });

            if (response.ok) {
                alert('Book updated successfully!');
                document.getElementById('edit-modal').style.display = 'none';
                loadBooks();
                loadDashboardStats();
            } else {
                alert('Error updating book');
            }
        } catch (error) {
            console.error('Error updating book:', error);
            alert('Error updating book');
        }
    });

    // Delete Book
    document.addEventListener('click', (e) => {
        if (e.target.closest('.delete-btn')) {
            const bookId = e.target.closest('.delete-btn').dataset.id;
            const bookTitle = e.target.closest('.book-item').querySelector('h3').textContent;

            document.getElementById('delete-book-title').textContent = bookTitle;
            document.getElementById('confirm-delete').dataset.id = bookId;
            document.getElementById('delete-modal').style.display = 'flex';
        }
    });

    document.getElementById('confirm-delete').addEventListener('click', async () => {
        const bookId = document.getElementById('confirm-delete').dataset.id;

        try {
            const response = await fetch(`/api/books/${bookId}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                alert('Book deleted successfully!');
                document.getElementById('delete-modal').style.display = 'none';
                loadBooks();
                loadDashboardStats();
            } else {
                alert('Error deleting book');
            }
        } catch (error) {
            console.error('Error deleting book:', error);
            alert('Error deleting book');
        }
    });

    // Modal Close Buttons
    document.querySelectorAll('.close-modal').forEach(close => {
        close.addEventListener('click', () => {
            close.closest('.modal').style.display = 'none';
        });
    });

    document.getElementById('cancel-edit').addEventListener('click', () => {
        document.getElementById('edit-modal').style.display = 'none';
    });

    document.getElementById('cancel-delete').addEventListener('click', () => {
        document.getElementById('delete-modal').style.display = 'none';
    });

    // Logout
    document.getElementById('logout-btn').addEventListener('click', () => {
        if (confirm('Are you sure you want to logout?')) {
            window.location.href = '/';
        }
    });
});
