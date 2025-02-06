require('dotenv').config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Default Route
app.get("/", (req, res) => {
    res.send("Welcome to the Readify API! 🚀 Use /api/books/:genre to fetch books.");
});

// Fetch books based on genre
app.get("/api/books/:genre", async (req, res) => {
    const genre = req.params.genre;
    const url = `https://goodreads-books.p.rapidapi.com/genres/${genre}/best`;

    try {
        const response = await axios.get(url, {
            headers: {
                "X-RapidAPI-Key": process.env.RAPID_API_KEY,
                "X-RapidAPI-Host": "goodreads-books.p.rapidapi.com"
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error("API Error:", error);
        res.status(500).json({ error: "Failed to fetch books" });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error("Error:", err.stack);
    res.status(500).json({ message: "Internal Server Error" });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
