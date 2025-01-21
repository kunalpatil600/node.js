const express=require("express")
const { Addhero, Get_heros, Update, deleteheroes } = require("../controller/heroes")
const { addID } = require("../middlewares/addID.middleware")
const auth = require("../middlewares/auth.middleware")


const heroes=express.Router()
heroes.post("/add/hero",addID,Addhero)
heroes.get("/heroes",Get_heros)
heroes.patch("/update/villain/:hero_id",auth,Update)
heroes.delete("/delete/hero/:hero_id",auth,deleteheroes)
module.exports=heroes
