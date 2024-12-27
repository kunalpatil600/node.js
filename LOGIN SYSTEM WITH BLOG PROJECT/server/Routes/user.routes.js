const express=require("express")
const { singup, singin } = require("../controller/user.contoller")
const userRoutes=express.Router()

userRoutes.post("/singup",singup)
userRoutes.post("/singin",singin)

module.exports=userRoutes