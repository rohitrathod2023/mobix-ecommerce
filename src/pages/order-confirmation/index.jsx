import React from "react";
import "./order-confirmation.css";
import Logo from "../../common/components/logo";
import CheckMarkIcon from "../../common/assets/icon/checkmarkicon";
import OrderedItemsList from "../../common/components/ordered-items-list";
import BillDetails from "../../common/components/bill-details";
import { useNavigate } from "react-router-dom";
const OrderConfirmation = () =>{
    const navigate = useNavigate();
    const goToHomePage = () =>{
        navigate("/")
    }

    return(
        <div className="order-confirmation">
           <div className="logo"><Logo/></div>
           <div className="order-confirmation-main row ">
                <div className="confirmation-left-side col-md-7">
                    <div className="check-mark-icon">
                    <CheckMarkIcon color = "#21C17A" width = "48" height = "48"/>
                    </div>
                    <div className="ordered-confirmation-details">
                        <p className="congrats-text">Congratulation!!!</p>
                        <p className="order-place-text">Order Place Successfully</p>
                        <div className="order-details-section">
                            <span>Order No. 4757532490967</span>
                            <span> Date 29 July 2022</span>
                            <span> Cash on Delivery</span>
                        </div>
                        <div className="ordered-items-section">
                            <OrderedItemsList/>
                        </div>
                        <div className="continue-btn" onClick={goToHomePage}>
                            <button className="custom-btn"> 
                                Continue Shopping 
                            </button>
                        </div>
                    </div>
                </div>
                <div className="confirmation-right-side col-md-2">
                    <BillDetails/>
                </div>
           </div>
        </div>
    );
};

export default OrderConfirmation;