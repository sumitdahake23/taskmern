import React from "react";
import { useState } from "react";
import cartImg from "../../src/cart.png";
import { CartState } from "../context/Context";


const Item = (props) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [qty, setqty] = useState(1);
  const [qPrice,setqPrice]=useState(0);
 

  const {
    state: {  },
    dispatch,
  } = CartState();

  const subtract = (value) => {
    setTotalPrice(totalPrice - value);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: props,
    });
  };
  const add = (value) => {
    setqty(qty + 1);
    setTotalPrice(qty * value);

    dispatch({
      type: "ADD_TO_CART",
      payload: props,
    });
  };

  return (
    <div>
      <div className="card shadow-lg m-2 ">
        <div className="card-body ">
          <div className="row ">
            <div className="col-2 d-flex align-items-center justify-content-center ">
              <h6 className="">{props.index + 1}</h6>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-center">
              <img
                src={cartImg}
                alt=""
                style={{
                  width: "75px",
                  height: "30px",
                  backgroundColor: "black",
                }}
              />
            </div>
            <div className="col-2 d-flex align-items-center justify-content-center">
              <h6 className="">{}</h6>
              {props.name}
            </div>
            <div className="col-2 d-flex align-items-center justify-content-center">
              <p className="mt-3">{qty}</p>
              <button
                className="bg-danger mx-1 text-light"
                style={{ width: "30px", height: "30px" }}
                onClick={() => add(props.price)}
              >
                <h6>+</h6>
              </button>
              <button
                className="bg-primary text-light"
                style={{ width: "30px", height: "30px" }}
                onClick={() => subtract(props.price)}
              >
                <h6><i class="bi bi-trash"></i></h6>
              </button>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-center">
              {props.price}
            </div>
            <div className="col-2 d-flex align-items-center justify-content-end">
              <h6 className="">{totalPrice+props.price}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
