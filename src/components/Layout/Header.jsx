import React from "react";

import Styles from "./Header.module.css";

import MealsImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={Styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={Styles["main-image"]}>
        <img src={MealsImg} alt="meals" />
      </div>
    </>
  );
};

export default Header;
