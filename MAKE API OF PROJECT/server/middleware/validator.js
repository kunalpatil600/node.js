 const isAdmin=(req,res,next)=>{
    if(req.user.role !=="admin"){
        res.status(400).json({message:"you have not permission to get "})
    }
    next()
 }
 module.exports=isAdmin