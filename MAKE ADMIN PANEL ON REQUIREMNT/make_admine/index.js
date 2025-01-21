const express=require("express")
const heroes = require("./Route/Routes")
const logger = require("./middlewares/logger.middleware")

const app=express()
app.use(express.json())
app.use(logger)
app.use("/",heroes)

app.listen(8080,()=>{
   console.log("server is running on port 8080")
})