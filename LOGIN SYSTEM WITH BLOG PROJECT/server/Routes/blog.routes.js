const express=require("express")
const { create_blog, Get_blog, Delete_blog, Update_blog, addmin_get, admin_delete, Get_singlepage } = require("../controller/blog.controller")
const Auth = require("../middleware/Auth")
const isAdmin = require("../middleware/Admin")

const blogRoutes=express.Router()

   blogRoutes.post("/create",Auth,create_blog)
   blogRoutes.get("/get/:userId",Auth,Get_blog)
   blogRoutes.delete("/delete/:userId",Auth,Delete_blog)
  blogRoutes.patch("/update/:userId",Auth,Update_blog) 
  blogRoutes.get("/singlepage/:blogId",Auth,Get_singlepage)
  //admin 
  blogRoutes.get("/admin",Auth,isAdmin,addmin_get)
  blogRoutes.delete("/deleteall",Auth,isAdmin,admin_delete)

module.exports=blogRoutes