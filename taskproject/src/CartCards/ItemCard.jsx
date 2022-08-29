import React from "react";
import img from "../../src/cart.png";
import { CartState } from "../context/Context";

const ItemCard = (props) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  console.log(cart);

  return (
    <div className="container-sm rounded p-3">
      <div className="card shadow-lg  ">
        <div className="card-body ">
          <div className="row">
            <div className="col-4 d-flex align-items-center">
              <div className="d-flex justify-content-center ">
                <img
                  src={img}
                  alt="photo here"
                  className="bg-dark w-75 h-100 "
                />
              </div>
            </div>
            <div className="col-8">
              <h4 className="text-primary">{props.name}</h4>
              <h4 className="text-success pt-2">{props.price}</h4>

              <hr />
              <div className="row pt-3">
                <div className="col-8">
                  <br />
                  <h6>{props.desc}</h6>
                  <h6>{props.type}</h6>
                  <h6>{props.Category}</h6>
                </div>
                <div className="col-4">
                  {cart.some((p) => p.id === props.id) ? (
                    <button
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: props,
                        });
                      }}
                      type="button"
                      className="btn btn-danger"
                    >
                      Remmove
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: props,
                        });
                      }}
                      type="button"
                      className="btn btn-primary mt-2"
                    >
                      Add
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
