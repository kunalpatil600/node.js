const mongoose = require('mongoose');

const blogShema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    Author:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    tags: {
        type: [String], 
        required: true

    },
    date:{
        type:Date,
        default:Date.now
    },
    userId:{
        type:String,
        required:true
    }
},{
    timestamps:true,
    versionKey:false
})
const blogmodel=mongoose.model("blog",blogShema)
module.exports=blogmodel