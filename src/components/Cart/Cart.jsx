import React from "react";

import Classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const CartItems = (
    <ul className={Classes["cart-items"]}>
      {[{ id: "C1", name: "any", amount: 2, price: 14 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onCloseModal={props.onClose}>
      {CartItems}
      <div className={Classes.total}>
        <span>Total Amount</span>
        <span>35.99</span>
      </div>
      <div className={Classes.actions}>
        <button className={Classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={Classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
