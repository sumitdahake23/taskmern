const express=require('express');
const route=express.Router();
const apimodel=require("../Model/productModel")

route.get("/all", async (req, res) => {
  try {
    const allproduct = await apimodel.find();
    res.json(allproduct);
  } catch (err) {
    res.json(err);
  }
});

route.post("/createproduct",(req, res) => {
    const product = new apimodel({
        name:req.body.name,
        price:req.body.price,
        Discription:req.body.Discription,
        type:req.body.type,
        Category:req.body.Category
    });
    product
      .save()
      .then(() => res.send(product))
      .catch((error) => {
        res.send(error);
      });
  });

  module.exports=route;