import React from "react";
import "./bill-details.css";
import InformationSymbol from "../../../common/assets/icon/informationsymbol.svg";
const BillDetails = () =>{
    return(
        <div>
               <div className="payment-address-selection row">
                        <div className="d-flex justify-content-between">
                            <p className="adress-text">Delever to</p>
                        </div>
                        <div>
                            <p className="address-name">Jennifer's Home 9593214756</p>
                            <p className="address">101, Acecity, Sector 1, Greater Noida West, Gautam Budh Nagar, Uttar Pradesh- 201306</p>
                        </div>
                    </div>
                    <div>
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
                    </div>
        </div>
    );
};

export default BillDetails;