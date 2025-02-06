# Readify 📚🚀

Readify is a book discovery web application that fetches book recommendations based on genre. The backend utilizes the Goodreads API via RapidAPI, while the frontend provides an interactive UI for users to explore books.

---

## 🌟 Features
- Fetches top-rated books from Goodreads based on selected genres
- Displays book details such as title, author, rating, and cover image
- Implements pagination for easy browsing
- Simple and user-friendly interface

---

## 🛠️ Technologies Used

### **Backend** (Node.js + Express)
- Node.js
- Express.js
- Axios (for API requests)
- dotenv (for environment variables)
- CORS (for cross-origin access)

### **Frontend** (HTML + JavaScript)
- Vanilla JavaScript (DOM manipulation, event listeners, API calls)
- Fetch API
- CSS for styling

---

## 🚀 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
 git clone https://github.com/yourusername/readify.git
 cd readify
```

### **2️⃣ Backend Setup**

#### Install Dependencies
```sh
 npm install
```

#### Create a `.env` File
In the root of the project, create a `.env` file and add:
```env
RAPID_API_KEY=your_rapidapi_key_here
PORT=3000
```

#### Start the Backend Server
```sh
 node index.js
```
Your API should now be running at:
> **http://localhost:3000**

---

### **3️⃣ Frontend Setup**

#### Update API URL in `main.js`
Replace:
```js
const url = `https://readify-fh1hcmr8v-adeyinka-adeluas-projects.vercel.app/api/books/${selectedGenre}`;
```
With:
```js
const url = `http://localhost:3000/api/books/${selectedGenre}`;
```

#### Open `index.html`
Simply open `index.html` in your browser, or run a local server:
```sh
npx live-server
```
OR
```sh
python -m http.server 8000
```
Visit **http://localhost:8000** in your browser.

---

## 📌 API Endpoints

### 🔹 **Fetch Books by Genre**
**GET** `/api/books/:genre`

#### Example Request:
```sh
GET http://localhost:3000/api/books/comedy
```

#### Example Response:
```json
{
  "books": [
    {
      "title": "The Hitchhiker's Guide to the Galaxy",
      "author": "Douglas Adams",
      "rating": "4.3",
      "smallImageURL": "https://imageurl.com/book.jpg",
      "url": "https://goodreads.com/book"
    },
    ...
  ]
}
```

---

## ⚡ Troubleshooting

1. **Backend API not working?**
   - Ensure `index.js` is running (`node index.js`).
   - Check your `.env` file for a valid `RAPID_API_KEY`.
   - Check your terminal logs for errors.

2. **Frontend not fetching books?**
   - Open the **console (F12 > Console)** and check for errors.
   - Verify the API URL in `main.js` (`http://localhost:3000/api/books/:genre`).
   - Ensure CORS is enabled in the backend:
     ```js
     app.use(cors({ origin: "*" }));
     ```

3. **API returning Unauthorized (401)?**
   - Make sure your RapidAPI key is correct and has access to the Goodreads API.
   - Check [RapidAPI Dashboard](https://rapidapi.com/) for any quota limits.

---

## 🏗️ Future Improvements
- Enhance UI with better styling
- Add a search functionality for books
- Implement user authentication for a personalized experience
- Deploy backend to a cloud server

