const jwt = require("jsonwebtoken");
require("dotenv").config();

const Auth=async(req,res,next)=>{
const {verificationtoken}=req.cookies
 if(!verificationtoken){
    return res.status(400).json({messsage:"Please log in first!"})   
 }
 jwt.verify(verificationtoken, process.env.privateKey, function(err, decoded) {
    if(err){
        return res.status(400).json({messsage:"Invalid token. Please log in again."})
    }
    req.user=decoded.userdata;
    next()
  });  
}
module.exports=Auth