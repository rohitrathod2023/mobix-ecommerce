import React from "react";
import "./cart.css"
import NewHeader from "../../common/components/header/new-header";
import Coupon from "../../common/components/coupon";
import PaymentOption from "../../common/assets/footerImages/payment-icon.svg"
import CartItems from "./components/cart-items";

const Cart = () =>{
    return(
        <div className="cart-page-main">
            <NewHeader/>
            <div className="cart-section-main row">
                <div className="cart-left-side-section col-md-7"><CartItems/></div>
                <div className="cart-right-side-section col-md-2"><Coupon/></div>
            </div>
            <div className="payment-opt-section">
                 <img  src={PaymentOption} alt="payment option" />
            </div>
        </div>
    );
};

export default Cart;