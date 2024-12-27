const express = require("express");
const bookRoutes = express.Router();
const { bookByID, fetchbooks } = require("../controllers/Bookcontroller");

bookRoutes.get("/book", fetchbooks);
bookRoutes.get("/book/:id", bookByID);

module.exports = bookRoutes;
