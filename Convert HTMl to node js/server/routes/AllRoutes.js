const express = require("express")
const { Get_product } = require("../controller/product.controller");
const { Get_contact, Submit_contact } = require("../controller/contact.controller");

const AllRoutes = express.Router()
AllRoutes.get('/', (req, res) => res.render('home'));
AllRoutes.get('/about', (req, res) => res.render('about'));
AllRoutes.get("/contact",Get_contact)
AllRoutes.post("/contact",Submit_contact)
AllRoutes.get("/products",Get_product)

module.exports = AllRoutes