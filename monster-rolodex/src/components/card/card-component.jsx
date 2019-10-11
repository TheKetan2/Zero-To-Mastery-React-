import React from "react";
import "./card-component-style.css";
export const Card = props => (
  <div className="card-container">
    <img
      alt="monsters"
      src={`https://robohash.org/${props.monster.id}?set=set1&size=180x180`}
    ></img>
    <h1>{props.monster.name}</h1>
    <h4>{props.monster.email}</h4>
  </div>
);
