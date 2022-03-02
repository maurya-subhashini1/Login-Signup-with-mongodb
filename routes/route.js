const express=require("express")

const router=express.Router()

const {Resgitartion, Login}=require("../controller/app")

router.post("/api/Resgitartion",Resgitartion)
router.post("/login",Login)

// app.use(express.json())

module.exports=router