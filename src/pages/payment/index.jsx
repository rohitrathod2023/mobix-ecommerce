import React from "react";
import "./payment.css"
import NewHeader from "../../common/components/header/new-header";
import Coupon from "../../common/components/coupon";
import PaymentOption from "../../common/assets/footerImages/payment-icon.svg"
import PaymentOptionPage from "./components/payment-option-page";
const Payment = () =>{
    return(
        <div className="payment-page-main">
            <NewHeader/>
            <div className="payment-section-main row">
                <div className="payment-left-side-section col-md-7"><PaymentOptionPage/></div>
                <div className="payment-right-side-section col-md-2">
                    <div className="payment-address-selection row">
                        <div className="d-flex justify-content-between">
                            <p className="adress-text">Address</p>
                            <p className="apply-text">Apply</p>
                        </div>
                        <dir>
                            <p className="address-name">Jennifer's Home 9593214756</p>
                            <p className="address">101, Acecity, Sector 1, Greater Noida West, Gautam Budh Nagar, Uttar Pradesh- 201306</p>
                        </dir>
                    </div>
                    <div> 
                        <Coupon name = "Place Order" pageLink = ""/>
                    </div>
                </div>
            </div>
            <div className="payment-opt-section">
                 <img  src={PaymentOption} alt="payment option" />
            </div>
        </div>
    );
};

export default Payment;