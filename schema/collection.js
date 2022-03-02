const mongoose=require("../connection/con")
var Schema = mongoose.Schema;

var errSchema = new Schema({
    FirstName:{
        type:String
    },
    LastName:{
        type:String
    },
    Password:{
        type:String
    },
    Email:{
        type:String
    }
})

const Users=new mongoose.model("Users",errSchema)
module.exports=Users