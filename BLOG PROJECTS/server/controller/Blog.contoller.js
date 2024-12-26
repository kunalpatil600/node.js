const blogmodel=require("../model/Blog.model")
const Blog_getdata=async(req,res)=>{
 try {
   const  data=await blogmodel.find()
     res.status(200).json({message:"data get successfully",data})

 } catch (error) {
    res.status(500).json({message:error.message})
 }
}
const Create_blog=async(req,res)=>{
   const {title,author,content,tags,publishedDate}=req.body

  if(!title||!author||!content ||!tags ){
   return res.status(400).json({message:"please fill the all field"})
  }
   try {
  const blogsave= await blogmodel.create({title,author,content,tags,publishedDate})
    res.status(200).json({message:"data created successfully",blogsave})
 } catch (error) {
    res.status(500).json({message:error.message})
 }
}

const delete_blog = async (req, res) => {
    const { blogid } = req.params;
  
   
    if (!blogid) {
      return res.status(400).json({ message: "Blog ID is required" });
    }
  
    try {
    
      const deleteblog = await blogmodel.findByIdAndDelete(blogid);
  
      if (!deleteblog) {
       
        return res.status(404).json({ message: "Blog not found" });
      }
  
      // Send success response
      res.status(200).json({ message: "Blog deleted successfully", blog: deleteblog });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  const update_blog = async (req, res) => {
    const { blogid } = req.params;
    try {
      const isblogexist = await blogmodel.findById(blogid);
      if (!isblogexist) {
        return res.status(404).json({ message: "Blog not found" });
      }
      const updatedBlog = await blogmodel.findByIdAndUpdate(blogid, req.body, { new: true });
  
      res.status(200).json({ message: "Blog updated successfully", blog: updatedBlog });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  const get_blog_id=async(req,res)=>{
    try { 
     const blog=await blogmodel.findById(req.params.id)
      if(!blog){
        return res.status(404).json({message:"blog not found"})
      }
      res.status(200).json({message:"blog get successfully",blog})
    } catch (error) {
      resizeBy.status(500).json({message:error.message})
    }
  }
  
module.exports={Blog_getdata,Create_blog,delete_blog,update_blog,get_blog_id}