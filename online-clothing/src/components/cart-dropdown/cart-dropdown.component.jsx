import React from "react";

import CustomButton from "../custom-bottom/custom-button.component";

import "./cart-dropdown.style.scss";
const CartDropdown = () => (
  <div className="cart-dopdown">
    <div className="cart-items"></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);
export default CartDropdown;
