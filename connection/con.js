const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/blog")
.then(()=>{
    console.log("connection successfuly.......")
}).catch((err)=>{
    console.log(err)
})

module.exports=mongoose