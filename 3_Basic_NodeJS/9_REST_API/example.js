// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON requests
app.use(bodyParser.json());

// Sample data (in-memory database)
let books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
];

// Route to get all books
app.get('/api/books', (req, res) => {
    res.json(books);
});

// Route to get a specific book by ID
app.get('/api/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(book => book.id === id);
    if (!book) {
        res.status(404).json({ message: 'Book not found' });
    } else {
        res.json(book);
    }
});

// Route to add a new book
app.post('/api/books', (req, res) => {
    const { title, author } = req.body;
    const id = books.length + 1;
    const newBook = { id, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
