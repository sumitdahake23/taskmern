const express=require ('express');
const app=express();
const bodyparser=require("body-parser")
const cors=require("cors")
const mongoose=require('mongoose');
const product=require('./routes/product')

app.use(bodyparser.json());
app.use(cors());

app.use('/product',product)

mongoose.connect('mongodb+srv://sumitdahake:sumit%4099@cluster0.pui4vlc.mongodb.net/taskproject?retryWrites=true&w=majority')
.then(()=>console.log("db connected"))
.catch((err)=>console.log(err))

app.listen(5000,()=>{
    console.log("app is working");
})