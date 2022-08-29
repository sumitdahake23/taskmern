import React from "react";

const Checkout = () => {
  return (
    <div>
      <div className=" bg-info">
        <div className="row p-5">
          <div className="col-6">
            <input type="radio" name="payment" value={1} />
            <span> Credit/Debit Card</span>
            <br />
            <input type="radio" name="payment" value={2} />
            <span> Credit/Debit Card</span>
            <br />
            <input type="radio" name="payment" value={3} />
            <span> Credit/Debit Card</span>
            <br />
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <button className="btn btn-success">Pay Now</button>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Checkout;
