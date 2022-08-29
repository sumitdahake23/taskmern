const mongoose=require("mongoose");
const apimodel=mongoose.Schema({
    name:String,
    price:Number,
    Discription:String,
    type:String,
    Category:String,

})
module.exports = mongoose.model("taskproject", apimodel);