import React from "react";
import "./order-failed.css";
import Logo from "../../common/components/logo";
import RedInformationSys from "../../common/assets/icon/redinformationsym.svg";
import OrderedItemsList from "../../common/components/ordered-items-list";
import BillDetails from "../../common/components/bill-details";
import { useNavigate } from "react-router-dom";
const OrderFailedPage = () =>{
    const navigate = useNavigate();
    const goToPaymentPage = () =>{
        navigate("/payment")
    }

    return(
        <div className="order-confirmation">
           <div className="logo"><Logo/></div>
           <div className="order-confirmation-main row ">
                <div className="confirmation-left-side col-md-7">
                    <div className="check-mark-icon">
                    <img src={RedInformationSys} alt="Information symbol" />
                    </div>
                    <div className="ordered-confirmation-details">
                        <p className="failed-text">Oh uh</p>
                        <p className="order-place-text">Order Failed</p>
                        <div className="order-details-section">
                            <span>Order No. 4757532490967</span>
                            <span> Date 29 July 2022</span>
                            <span> Cash on Delivery</span>
                        </div>
                        <div className="ordered-items-section">
                            <OrderedItemsList/>
                        </div>
                        <div className="continue-btn" onClick={goToPaymentPage}>
                            <button className="custom-btn"> 
                                Try Again
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

export default OrderFailedPage;