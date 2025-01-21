const express=require("express")
const mongoose=require("mongoose")
const AllRoutes = require("./routes/AllRoutes")
const bodyParser = require('body-parser');
const app=express()
app.use(bodyParser.urlencoded({ extended: true })); // for form data
app.use(bodyParser.json()); // for JSON data

app.set("view engine","ejs")
app.use("/",AllRoutes) 
app.listen(8080,async()=>{
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/ejs")
    console.log("data base are connected ")
  } catch (error) {
    console.log("DATA BASE ARE NOT CONNECTED !")
  }
})