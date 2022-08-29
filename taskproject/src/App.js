import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CartMenu from "./cartMenu/CartMenu";
import Home from "./Home/Home";
import Header from "./cartMenu/Header";


function App() {
  return (
    
      <div className=" m-0" >
        <Home />
        <br /> <br /> <br /> 
        <CartMenu />
        <br /> <br /> 
        <Header />
      </div>
   
  );
}

export default App;
