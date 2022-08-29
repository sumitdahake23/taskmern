import React from "react";
import Cartimg from "../../src/cart.png";
import "../Home/Home.css";
import Checkout from "./Checkout";
import Item from "./Item";
import { CartState } from "../context/Context";

const Header = () => {
  const {
    state: { cart },
    
  } = CartState();

  let uniqu =[
    ...new Map(cart.map((item)=>[item["name"],item])).values()
 ]

let arr=cart.map((d)=>{return d.price})
let sum=0;
arr.forEach(i=>{
  sum+=i;
})

console.log(sum)

  return (
    <div className="container" id="header">
      <div className="row bg-secondary ">
        <div className="col-6 d-flex justify-content-start">
          <h4 className="text-light">Shopping Cart</h4>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <h4 className="text-light">Price</h4>
        </div>
      </div>
      <div className="row my-2">
        {/* Cart item here */}
        {uniqu.map((item, index) => {
          return (
            <Item
              id={item.id}
              name={item.name}
              price={item.price}
              desc={item.Discription}
              type={item.type}
              Category={item.Category}
              key={index}
              index={index}
            />
          );
        })}
      </div>
      <div className="row bg-danger ">
        <div className="col-6 d-flex justify-content-start"></div>
        <div className="col-6 d-flex justify-content-end">
          <h4 className="text-info">{sum} /-</h4>
        </div>
        <Checkout />
      </div>{" "}
      <br />
    </div>
  );
};

export default Header;
