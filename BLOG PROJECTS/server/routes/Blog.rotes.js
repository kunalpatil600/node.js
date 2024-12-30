const express=require("express")
const { Blog_getdata, Create_blog, delete_blog, update_blog, get_blog_id } = require("../controller/Blog.contoller")
const blogroutes=express.Router()

blogroutes.get("/blogs",Blog_getdata)
blogroutes.post("/create",Create_blog)
blogroutes.delete("/delete/:blogid",delete_blog)
blogroutes.patch('/update/:blogid', update_blog); 
blogroutes.get("/blog/:id",get_blog_id)
module.exports=blogroutes 