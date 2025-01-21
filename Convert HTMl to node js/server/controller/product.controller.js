const productmodel = require("../model/product.model")

const Get_product=async(req,res)=>{
try {

    const products = await productmodel.find(); 
    res.render("products",{products})
} catch (error) {
    res.status(500).json({message:error.message})
}
}
module.exports={Get_product}