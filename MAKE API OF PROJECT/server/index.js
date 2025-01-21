const express=require("express")
const mongoose=require("mongoose")
const userRoutes = require("./Routes/user.Routes")
const cookieParser = require("cookie-parser");
const cors=require("cors")
require("dotenv").config()
const app=express()
app.use(express.json())
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173", // Replace with your frontend URL
  credentials: true,
}))
app.use("/user",userRoutes)
app.listen(process.env.PORT,async()=>{
   try {
     mongoose.connect(process.env.MONGO_URL)
     console.log(`data base are connected port is ${process.env.PORT}`)
   } catch (error) {
    console.log("data base are not connected ~")
   }
})