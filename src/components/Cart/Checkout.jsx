import React, { useRef, useState } from "react";
import Classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    zip: true,
  });

  /// refs
  const nameInput = useRef();
  const streetInput = useRef();
  const postalInput = useRef();
  const cityInput = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInput.current.value;
    const enteredAddress = streetInput.current.value;
    const enteredZip = postalInput.current.value;
    const enteredCity = cityInput.current.value;
    /////////
    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredZipIsValid = isFiveChars(enteredZip);
    ////////

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredAddressIsValid,
      city: enteredCityIsValid,
      zip: enteredZipIsValid,
    });
    //////

    const formIsValid =
      enteredNameIsValid &&
      enteredAddressIsValid &&
      enteredCityIsValid &&
      enteredZipIsValid;

    /// submit ////
    if (!formIsValid) {
    }
  };

  const nameControlCLass = `${Classes.control} ${
    formInputValidity.name ? "" : Classes.invalid
  }`;
  const addressControlCLass = `${Classes.control} ${
    formInputValidity.street ? "" : Classes.invalid
  }`;
  const cityControlCLass = `${Classes.control} ${
    formInputValidity.street ? "" : Classes.invalid
  }`;
  const ZipControlCLass = `${Classes.control} ${
    formInputValidity.street ? "" : Classes.invalid
  }`;

  return (
    <form onSubmit={confirmHandler}>
      <div className={nameControlCLass}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameInput} />
        {!formInputValidity.name && <p>entere valid name</p>}
      </div>
      <div className={addressControlCLass}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInput} />
        {!formInputValidity.street && <p>entere valid address</p>}
      </div>
      <div className={ZipControlCLass}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInput} />
        {!formInputValidity.zip && <p>entere valid zip code</p>}
      </div>
      <div className={cityControlCLass}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInput} />
        {!formInputValidity.city && <p>entere valid city</p>}
      </div>
      <div className={Classes.actions}>
        <button>Confirm</button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Checkout;
