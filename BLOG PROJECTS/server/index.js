const express=require("express")
const mongoose=require("mongoose")
const app=express()
const cors = require("cors"); 
const dotenv=require("dotenv");
const blogroutes = require("./routes/Blog.rotes");
dotenv.config()
app.use(cors(
));
app.use(express.json())

app.use("/blog",blogroutes)
app.listen(process.env.Port,async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log(`server is running ${process.env.port}`)
    } catch (error) {
      console.log("your database are not connected")   
    }
})