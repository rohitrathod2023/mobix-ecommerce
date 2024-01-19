import React from "react";
import "./coupon.css";
import OffersIcon from "../../../../common/assets/icon/offersicon";
import InformationSymbol from "../../../../common/assets/icon/informationsymbol.svg";
const Coupon = () =>{
    return(
        <div className="coupon-page-main">
            <div>
                <p className="coupon-heading">Apply Coupon</p>
                <div className="coupon-code-section">
                    <OffersIcon color = "#21C17A" width="16" height = "16"/>
                    <input className="coupon-code mx-1" type="text" placeholder="Enter Coupon Code"/>
                    <button className="apply-btn mx-4">Apply</button>
                </div>
            </div>

            <div className="bill-detail-section">
                <h6>Bill Details</h6>
                <div className="item-total-section d-flex justify-content-between align-items-center">
                    <p className="item-total">Item Total</p>
                    <p className="item-total-price">1,200.00</p>
                </div>
                 <div className="taxes-charges-section d-flex justify-content-between">
                    <span className="taxes-charges">Taxes & Charges <img src = {InformationSymbol} alt="Imformation Symbol Icon" /> </span>
                    <p className="taxes-charges-price">239</p>
                </div>
                <div className="total-amount-section d-flex justify-content-between align-items-center">
                    <p className="total-amount">Total Amount</p>
                    <p className="total-amount-price">1,439.00</p>
                </div>
            </div>
            <div>
                <button className="payment-btn">Proceed to Payment</button>
            </div>
        </div>
    );
};

export default Coupon;