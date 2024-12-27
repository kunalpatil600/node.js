const book = require('../models/Book');

const fetchbooks = async (req, res) => {
    try {
        const books = await book.find();
        res.json(books);
    } catch (error) {
        res.status(420).json({ message: error.message });
    }
};

const bookByID = async (req, res) => {
    try {
        const book = await book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: "Book not found" });
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    fetchbooks,
    bookByID
};
