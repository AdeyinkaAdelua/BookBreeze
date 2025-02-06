

document.getElementById('generate-btn').addEventListener('click', fetchBooks);


let allBooks = [];  // Store all fetched books
let currentPage = 1;
const booksPerPage = 21;


async function fetchBooks() {
    const selectedGenre = document.getElementById('genre').value;
    const url = `http://localhost:3000/api/books/${selectedGenre}`;
    try {
        const response = await fetch(url);
        const result = await response.json();

        // Remove duplicates based on book title
        const uniqueBooks = [];
        const bookTitles = new Set();

        result.books.forEach(book => {
            if (!bookTitles.has(book.title)) {
                bookTitles.add(book.title);
                uniqueBooks.push(book);
            }
        });

        allBooks = uniqueBooks;
        currentPage = 1;
        displayBooks();
    } catch (error) {
        console.error("Error fetching books:", error);
    }
}



// Function to display books with pagination
function displayBooks() {
    const booksContainer = document.getElementById('books-container');
    booksContainer.innerHTML = ''; // Clear previous results

    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    const booksToShow = allBooks.slice(startIndex, endIndex);

    booksToShow.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book-card');
        bookDiv.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Rating: ${book.rating}</p>
            <img src="${book.smallImageURL}" alt="${book.title}">
            <p><a href="${book.url}" target="_blank">View on Goodreads</a></p>
        `;
        booksContainer.appendChild(bookDiv);
    });

    updatePagination();
}

// Function to handle pagination buttons
function updatePagination() {
    const paginationContainer = document.getElementById('pagination-container');
    paginationContainer.innerHTML = ''; // Clear previous buttons

    const totalPages = Math.ceil(allBooks.length / booksPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.classList.add('page-btn');

        // Add "active" class for the current page
        if (i === currentPage) {
            pageButton.classList.add('active');
        }

        pageButton.onclick = () => {
            currentPage = i;
            displayBooks();
        };

        paginationContainer.appendChild(pageButton);
    }
}

// Attach event listener to the button
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('generate-btn').addEventListener('click', fetchBooks);
});
