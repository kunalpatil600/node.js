const express=require("express")
const { signup, signIn, Get_user, GetbyId, updatedUser, deleteuser } = require("../controller/user.controller")
const Auth = require("../middleware/Authenticator")
const isAdmin = require("../middleware/validator")

const userRoutes=express.Router()

userRoutes.post("/signup",signup)
userRoutes.post("/signin",signIn)
userRoutes.get("/get",Auth,isAdmin,Get_user)
userRoutes.get("/singleproduct/:id",Auth,GetbyId)
userRoutes.put("/update/:id",Auth,isAdmin,updatedUser)
userRoutes.delete("/delete/:id",Auth,isAdmin,deleteuser)
module.exports=userRoutes

 