import React, { useContext, useEffect, useState } from "react";
import Style from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [buttonHighlight, setButtonHighlight] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${Style.button} ${buttonHighlight ? Style.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonHighlight(true);

    const timer = setTimeout(() => {
      setButtonHighlight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onShowCart}>
      <span className={Style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={Style.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
