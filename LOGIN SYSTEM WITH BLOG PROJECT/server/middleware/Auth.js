const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const Auth=(req,res,next)=>{
  const {verificationtoken}=req.cookies;
  if(!verificationtoken){
    return res.status(400).json({message:"You need to login first"})
  }
  jwt.verify(verificationtoken,process.env.priventkey,(err,decoded)=>{
    if(err){
        return res.status(400).json({message:err.message})
    }
    req.user=decoded.userdata
    next()
  })
}
module.exports=Auth