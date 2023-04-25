import React from "react";
import Style from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button className={Style.button}>
      <span className={Style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={Style.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
