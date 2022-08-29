import React, { useState, useEffect } from "react";
import cartImg from "../../src/cart.png";
import ItemCard from "../CartCards/ItemCard";
import "../Home/Home.css";
import { CartState } from "../context/Context";
import { useRef } from "react";

const Home = () => {

  
  const {
    state: { products, cart },
    dispatch,
  } = CartState();

  

  let uniquObjArr =[
    ...new Map(products.map((item)=>[item["type"],item])).values()
 ]
 const [filtdata,setfiltdata]=useState(products)


const handleItemCards = (type ) =>{
console.log(type)
const fillzip = products.filter((data) => { return data.type === type })
setfiltdata(fillzip)
}

 console.log("dfsgbfdsbfklskdfkbkdsblf")
//  console.log(uniquObjArr)
 console.log(filtdata)
 const search=useRef();
const [da,setda]=useState()
const handleSearch= () =>{
  setda(search.current.value)
  const fill = products.filter((data) => { return data.Category === da })
  setfiltdata(fill)
 console.log("============>")
 console.log(fill)
}

  return (
    <div id="home">
      {console.log(products)}
      <div className="row bg-primary head d-flex justify-content-end">
        <div className="col-4  ">
          <a href="#home">
            <img src={cartImg} alt="" className="logo" />
          </a>
        </div>
        <div className="col-5 d-flex justify-content-center ">
          <input
            type="text"
            className="form-control form-rounded w-75 h-50 mt-3"
            placeholder="Search Category"
            ref={search}
          />
        </div>
        <div className="col-3">
          <button type="button" className="btn btn-dark btn-rounded mt-3" onClick={handleSearch}>
            Search
          </button>
          <button type="button" className="btn btn-dark btn-rounded mt-3 mx-2">
            <a href="#header" className="text-light">
              Cart
            </a>
          </button>
          <button type="button" className="btn btn-light btn-rounded mt-3 mx-2">
            <i className="bi bi-cart text-danger"></i>
            {" " + cart.length}
          </button>
        </div>
      </div>
      <div className=" ">
        <div className="row">
          <div className="col-4 data">
            <div className="leftdata ">
          
              <div className="dropdown d-flex justify-content-center mt-3">
                <button
                  className="btn btn-transparent dropdown-toggle w-75"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                      <h4 className="text-center text-secondary pt-5">Category</h4>
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  {uniquObjArr.map((id) => (
                    <li onClick={()=>handleItemCards(id.type)}>
                      <a className="dropdown-item" href="#">
                        {id.type}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-8  data pt-5">
            {filtdata.map((item, index) => {
              return (
                <ItemCard
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  desc={item.Discription}
                  type={item.type}
                  Category={item.Category}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
