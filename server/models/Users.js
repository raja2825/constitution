const mongoose=require("mongoose");
const { number } = require("prop-types");
const UsersSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    password:String
})
const UserModel=mongoose.model("users",UsersSchema)
module.exports=UserModel