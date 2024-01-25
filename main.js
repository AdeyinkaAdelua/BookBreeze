async function fetchBooks() {
    const selectedGenre = document.getElementById('genre').value;
    const url = `https://goodreads-books.p.rapidapi.com/genres/${selectedGenre}/best`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a5019cca0amsh64bdbc0fccc1b72p1ececcjsn5634fe37b586',
            'X-RapidAPI-Host': 'goodreads-books.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        // Display books
        const booksContainer = document.getElementById('books-container');
        booksContainer.innerHTML = ''; // Clear previous results

        result.books.forEach(book => {
            const bookDiv = document.createElement('div');
            bookDiv.innerHTML = `
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Rating: ${book.rating}</p>
                <img src="${book.smallImageURL}" alt="${book.title}">
                <p><a href="${book.url}" target="_blank">View on Goodreads</a></p>
                <hr>
            `;
            booksContainer.appendChild(bookDiv);
        });
    } catch (error) {
        console.error(error);
    }
}
