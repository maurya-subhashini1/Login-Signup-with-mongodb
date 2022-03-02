const router=require("./routes/route")

const express=require("express")
const cookieParser=require("cookie-parser")

const app=express()
app.use(express.json())
app.use(cookieParser())
app.use("/",router)


app.listen(7000,()=>{
    console.log("port listing 7000")
})