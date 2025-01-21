const usermodel = require("../model/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const signup = async (req, res) => {
    const { username, email, dob, location, password, confirmPassword } = req.body
    if (password !== confirmPassword) {
        return res.status(400).json({ message: "password and confirmpassword are not match ~" })
    }
    if (req.body.role) {
        return res.status(401).json({ message: "you have not permision to send Role !" })
    }
    try {
        const Isexist = await usermodel.findOne({ email })
        if (Isexist) {
            return res.status(400).json({ message: "email already existed" })
        }
        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                return res.status(400).json({ message: "error is hashing password" })
            }
            await usermodel.create({ username, email, dob,location, password:hash})
            res.status(200).json({ message: "user created successfully" })
        });
    } catch (error) {
        res.status(501).json({ message: error.message })
    }
}
const signIn = async (req, res) => {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
        return res.status(400).json({ message: "Please fill all fields." });
    }

    try {
        const Isexist = await usermodel.findOne({ email });
        if (!Isexist) {
            return res.status(400).json({ message: "Please sign up first." });
        }

        bcrypt.compare(password, Isexist.password, (err, result) => {
            if (err) {
                console.error("Error in bcrypt.compare:", err);
                return res.status(500).json({ message: "Error while verifying password." });
            }
            if (!result) {
                return res.status(401).json({ message: "Invalid password." });
            }
            const { password,...rest } = Isexist._doc;

            jwt.sign(    { userdata: rest },   process.env.privateKey,(err, token) => {
                    if (err) {
                        console.error("Error in jwt.sign:", err);
                        return res.status(500).json({ message: "Error while creating token." });
                    }
                    res.cookie("verificationtoken", token,{
                        httpOnly: true, // Prevent JavaScript access
                        secure: false, // Use true in production with HTTPS
                        sameSite: "Lax", // Protect against CSRF
                    });
                    console.log("Generated Token:", token);

                    return res
                        .status(200)
                        .json({ message: "User logged in successfully!", userdata: rest });
                }
            );
        });
    } catch (error) {
        console.error("Error in signIn:", error.message);
        return res.status(500).json({ message: error.message });
    }
};
const Get_user=async(req,res)=>{
    try {
        const data=await usermodel.find()
        res.status(200).json({message:"get data yeee",data})
    } catch (error) {
     res.signup(400).json({message:error.message})   
    }
}
const GetbyId=async(req,res)=>{
    const {id}=req.params
    try {
        const data=await usermodel.findById(id)
        res.status(200).json({message:"get data ",data})
    } catch (error) {
     res.status(400).json({message:error.message})
    }
}
const updatedUser=async(req,res)=>{
   const {id}=req.params
    try {
        const data=await usermodel.findByIdAndUpdate(id,req.body)
        if(!data){
          return  res.status(400).json({message:"data or not axist !"})
        }
        if(data.id!=req.user._id){
            return res.status(400).json({message:"You are not authorized to update this blog"})
        }
        if(req.user.role){
            return res.status(400).json({message:"You are not update the role  "})
        }
        res.status(200).json({message:"data update successfully ",})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
const deleteuser=async(req,res)=>{
    const {id}=req.params 
    try {
        const data=usermodel.findOneAndDelete(id)
        if(data.id!=req.user._id){
            return res.status(400).json({message:"You are not delete this user"})
        }
        res.status(400).json({message:"user delete successfully "})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
module.exports = { signup, signIn,Get_user,GetbyId,updatedUser,deleteuser}