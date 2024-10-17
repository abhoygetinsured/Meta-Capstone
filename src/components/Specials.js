import React from "react";
import "./Specials.css";
import Button from "./Button";
import Card from "./Card";

import { specialsMenu } from "../assets/speicalsData";

export default function Specials() {
  return (
    <>
      <article className="specials">
        <div className="specials-topbar">
          <p>This weeks Specials!</p>
          <Button text="Online Menu" width="200px" />
        </div>
      </article>
      <div className="card-holder-out">
        <div className="card-holder-in">
            {specialsMenu.map((dish) => {
                return <Card />
            })}
          <Card />
        </div>
      </div>
    </>
  );
}
