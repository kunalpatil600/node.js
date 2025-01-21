const mongoose =require("mongoose")

const productSchema=new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    imageUrl: String,
})
const productmodel=mongoose.model("product",productSchema)
module.exports=productmodel