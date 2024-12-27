const express=require("express")
const mongoose=require("mongoose")
const app=express()
const cors=require("cors")
app.use(express.json())
const cookieParser = require("cookie-parser");
const dotenv=require("dotenv")
const userRoutes = require("./Routes/user.routes")
const blogRoutes = require("./Routes/blog.routes")
dotenv.config()
app.use(cors({ origin: "http://localhost:5173", 
   credentials: true}))
app.use(cookieParser())
 app.use("/user",userRoutes)
 app.use("/blog",blogRoutes)

app.listen(process.env.PORT,async()=>{
   try {
    await mongoose.connect(process.env.mongoURl)
    console.log(`Server is running on port ${process.env.PORT}`)
   } catch (error) {
    
   }
})