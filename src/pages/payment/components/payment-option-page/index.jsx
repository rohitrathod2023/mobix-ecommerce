import React from "react";
import "./payment-option-page.css";
import ShoppingProgressBar from "../../../../common/components/shopping-progress-bar";
const PaymentOptionPage = () =>{
    return(
        <div>
            <div>
                <ShoppingProgressBar/>
            </div>
            <div className="payment-section-main">
                <div className="payment-section-headline">
                    <p className="payment-headline">Payment</p>
                </div>
                <div className="payment-option-section-main">
                    <div className="payment-option-section">
                        <input type="radio" />
                        <label className="payment-option-headline mx-3" >Cash on delivery</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentOptionPage;