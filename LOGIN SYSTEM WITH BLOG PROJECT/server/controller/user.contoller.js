const usermodel = require("../model/user.model")
const bcrypt=require("bcrypt")
var jwt = require('jsonwebtoken');
const singup= async(req,res)=>{
   const {email,password,username}=req.body
   if(req.body.role){
    return res.status(400).json({message:"user role cannot be defined"})
   }
   if(!email||! password || !username){
    return res.status(400).json({message:"All fields are required"})
   }
    try {
      userExist = await usermodel.findOne({email})
      if(userExist){
      return  res.status(400).json({message:"User already exist"})
      }
      bcrypt.hash(password,5, async(err, hash) =>{
        if(err){
            return res.status(500).json({message:"error is hashing password"})
        }
        await usermodel.create({email,username,password:hash})
        return res.status(200).json({message:"user created successfully"})
    });
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}
const singin=async(req,res)=>{
  const {email,password}=req.body
   if(!email||!password){
    return res.status(400).json({message:"please fill in all"})
   }

   const userExist=await usermodel.findOne({email})
   if(!userExist){
    res.status(400).json({message:"please singup"})
   }
   bcrypt.compare(password, userExist.password, function(err, result) {
    if(err){
    return res.status(400).json({message:"error in compare"})
    }
    if(result){
        const {password,...rest}=userExist._doc
        jwt.sign({userdata:rest},process.env.priventkey,function(err,token){
            if(err){
                return res.status(400).json({message:"error while creating token "})
               }
            res.cookie("verificationtoken",token)
            return res.status(200).json({message:"user login succesfully", userdata:rest})
        })
    } 
    else{
        return res.status(400).json({message:"password is incorrect "})
    }

});
}
module.exports={singup,singin}