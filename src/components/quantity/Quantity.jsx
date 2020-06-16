import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Quantity.scss";

export default function Quantity({ value, onClickMinus, onClickPlus }) {
  return (
    <div className="quantity__container">
      <button type="button" className="quantity_icons" onClick={onClickMinus}>
        <FontAwesomeIcon icon="minus" />
      </button>
      <div className="quantity__value">{value}</div>
      <button type="button" className="quantity_icons" onClick={onClickPlus}>
        <FontAwesomeIcon icon="plus" />
      </button>
    </div>
  );
}
