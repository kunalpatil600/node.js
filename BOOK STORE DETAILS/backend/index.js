const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
const port = 8080;
const bookroutes=require("./routes/bookroutes")

app.use(express.json());
app.use(cors());

app.use("/books",bookroutes)

app.listen(port, async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/");
        console.log("connected to mongodb");
        console.log(`server is running on port ${port}`);
    } catch (error) {
        console.log(error);
    }
});