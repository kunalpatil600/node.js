const blogmodel = require("../model/blog.model")

const create_blog=async(req,res)=>{
    const {title,content,Author,tags}=req.body
     if(!title||!content||!Author || !tags){
        return res.status(400).json({message:"All fields are required"})
     }
    try {
         await blogmodel.create({title,content,Author,tags,userId:req.user._id})
            res.status(200).json({message:"Blog created successfully"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const Get_blog=async(req,res)=>{
     const{userId}=req.params
     if(userId!=req.user._id){
            return res.status(400).json({message:"You are not authorized to get this blog"})
     }
    try {
        const blog=await blogmodel.find({userId})
        if(!(blog.length)>0){
            return res.status(400).json({message:"No blog found"})
        }
        res.status(200).json({blog})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const Get_singlepage=async(req,res)=>{
    const {blogId}=req.params
  try {
     const isexist=await blogmodel.findById(blogId)

     if(!isexist){
        return res.status(400).json({message:"blog not found"})
     }
     if(isexist.userId!=req.user._id){
        return res.status(400).json({message:"you have not permission to access the note "})
     }
     res.status(200).json({message:"notes access successfully",blog:isexist})
  } catch (error) {
    
  }
}
const Delete_blog=async(req,res)=>{
   const {userId}=req.params
    const isexist=await blogmodel.findById(userId)
    if(!isexist){
        return res.status(400).json({message:"blog not axist"})
    }
    if(isexist.userId!=req.user._id){
      return   res.status(400).json({message:"You are not authorized to delete this blog"})
    }
    await blogmodel.findByIdAndDelete(userId) 
    res.status(200).json({message:"Blog deleted successfully"})
}
const Update_blog=async(req,res)=>{
    const {userId}=req.params
    try {
         const isexist=await blogmodel.findById(userId)
         if(!isexist){
            return res.status(400).json({message:"blog nor axist"})
         }
         if(isexist.userId!=req.user._id){
            return res.status(400).json({message:"You are not authorized to update this blog"})
         }
         await blogmodel.findByIdAndUpdate(userId,req.body) 
         res.status(200).json({message:"updated successfully"})
    } catch (error) {
        
    }
}
const addmin_get=async(req,res)=>{
  try {
    const totalBlog=await blogmodel.find()

    if(!(totalBlog.length)>0){
        res.status(400).json({message:"notes not exist !"})
    }
    res.status(200).json({message:"notes gets  successfully ",totalBlog})
  } catch (error) {
    res.status(400).json({message:error.message})
  }
}
const admin_delete=async(req,res)=>{
   try {
    await blogmodel.deleteMany({})
    res.status(200).json({message:"delete all blogs😁"})
   } catch (error) {
    res.status(400).json({message:error.message})
   }
}
module.exports={create_blog,Get_blog,Delete_blog,Update_blog,addmin_get,admin_delete,Get_singlepage}