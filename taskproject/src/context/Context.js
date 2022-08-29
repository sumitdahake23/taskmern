import React, {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import cartReducer from "./Reducer";
import axios from "axios";

const Cart = createContext();

const Context = ({ children }) => {
  // useEffect(() => {
  //     dfserver();

  //   }, []);

  // const dfserver = () => {
  //     axios.get("http://localhost:5000/product/all").then((res) => {
  //         // const dfromserver = res;
  //         // console.log(dfromserver.data)
  //         // setdata(dfromserver.data);
  //         const getdata = res.data
  //         // getdata.map(())
  //         // console.log(getdata)
  //         const ID = getdata.filter((id) => id);
  //         // ID.map((data1)=>console.log(data1.email))
  //         // console.log(ID.map((data1) => data1.email))
  //         // console.log(bdata)
  //         setdata(ID)
  //       });
  //   };

  //   const [data, setdata]=useState([])

  // const {d} =data()
  // console.log("data"+data);

  // .map((id)=>{

  //   return{
  //     id: id._id,
  //     name: id.name,
  //     price: id.price,
  //     Discription:id.Discription,
  //     type:id.Discription,
  //     Category:id.Category

  // }})
  const products = [
    {
      id: 1,
      name: "HP",
      price: 15222,
      Discription: "Ram:4GB  |  HDD : 1TB ",
      type: "Laptop",
      Category: "Electronics",
    },
    {
      id: 2,
      name: "LENOVO",
      price: 45000,
      Discription: "Ram:16GB  |  HDD : 1TB ",
      type: "Laptop",
      Category: "Electronics",
    },
    {
      id: 3,
      name: "DELL",
      price: 25000,
      Discription: "Ram:512GB  |  SSD : 1TB ",
      type: "Laptop",
      Category: "Electronics",
    },
    {
      id: 4,
      name: "Samsung Au4200",
      price: 45000,
      Discription: "42inch  |  Smart LED ",
      type: "TV",
      Category: "Electronics",
    },
    {
      id: 5,
      name: "Sony bravia_1a",
      price: 65000,
      Discription: "62inch  |  Android LED ",
      type: "TV",
      Category: "Electronics",
    },
    {
      id: 6,
      name: "LG k31",
      price: 22500,
      Discription: "32  |  Smart LED ",
      type: "TV",
      Category: "Electronics",
    },
    {
      id: 7,
      name: "Samsung",
      price: 21350,
      Discription: "6Liter  |  3Star ",
      type: "Washing Machine",
      Category: "Electronics",
    },
    {
      id: 8,
      name: "LG",
      price: 40000,
      Discription: "18lit  |  5star ",
      type: "Washing Machine",
      Category: "Electronics",
    },
    {
      id: 9,
      name: "Godrej",
      price: 14500,
      Discription: "8lit  | 4star ",
      type: "Washing Machine",
      Category: "Electronics",
    },
    {
      id: 10,
      name: "T-shirt",
      price: 1522,
      Discription: "Nike ",
      type: "Men",
      Category: "Fashion",
    },
    {
      id: 11,
      name: "Casual T-shirt",
      price: 2000,
      Discription: "Nike ",
      type: "Men",
      Category: "Fashion",
    },
    {
      id: 12,
      name: "Jeans",
      price: 2500,
      Discription: "Nike ",
      type: "Men",
      Category: "Fashion",
    },
    {
      id:13,
      name: "Suta",
      price: 4500,
      Discription: "Nike ",
      type: "Women",
      Category: "Fashion",
    },
    {
      id: 14,
      name: "Koski",
      price: 6500,
      Discription: "Nike",
      type: "Women",
      Category: "Fashion",
    },
    {
      id: 15,
      name: "Aglana",
      price: 500,
      Discription: "Nike ",
      type: "Women",
      Category: "Fashion",
    },
    {
      id: 16,
      name: "T-shirts",
      price: 1350,
      Discription: "Nike ",
      type: "Kids",
      Category: "Fashion",
    },
    {
      id: 17,
      name: "Jeans",
      price: 4200,
      Discription: "Nike ",
      type: "Kids",
      Category: "Fashion",
    },
    {
      id: 18,
      name: "Bags",
      price: 1500,
      Discription: "Nike ",
      type: "Kids",
      Category: "Fashion",
    },
  ];
  // console.log("asss  "+products.map((id)=>{
  //   return [id.name, id.price , id.Category]
  // }))
  // console.log(data)

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
