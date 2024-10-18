import React from "react";
import "./Card.css";
import Basket from "../assets/Basket.svg";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <div className="card-image-div">
          <img src={props?.data?.image} alt="food" className="card-image"/>
        </div>
        <div>
          <div className="title-price">
            <p>{props?.data?.name}</p>
            <p className="price"><strong>$ {props?.data?.price}</strong></p>
          </div>
          <div className="card-desc">
            <p>
                {props?.data?.description}
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
