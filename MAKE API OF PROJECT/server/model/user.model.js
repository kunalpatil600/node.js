const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    dob: { type: Date, required: true },
    role: {
         type: String,
         default:"user"
        },
    location: { type: String, required: true },
    password: { type: String, required: true }
})
const usermodel=mongoose.model("user",userSchema)
module.exports=usermodel