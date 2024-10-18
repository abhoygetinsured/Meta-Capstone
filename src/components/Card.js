import React from "react";
import "./Card.css";
import Basket from "../assets/Basket.svg";

import Brushetta from "../assets/bruchetta.svg";

export default function Card() {
  return (
    <>
      <div className="card">
        <div className="card-image-div">
          <img src={Brushetta} alt="food" className="card-image"/>
        </div>
        <div>
          <div className="title-price">
            <p>Greek Salad</p>
            <p className="price"><strong>$ 12.99</strong></p>
          </div>
          <div className="card-desc">
            <p>
              The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
            </p>
          </div>
          <div className="order-bascet-icon">
            <p>Order a delivery</p>
            <img src={Basket} height={30} alt="basket" />
          </div>
        </div>
      </div>
    </>
  );
}
