import React from "react";
import "./new-header.css"
import Logo from "../../logo";
import SecurePaymentIcon from "../../../assets/icon/secure-payment.svg";

const NewHeader = () =>{
    return(
        <div className="main-container">  
            <div className="logo">
               <Logo/>
            </div>
            <div className=" d-flex justify-space-around align-items-center secure-transaction">
                <div className="secure-transaction-icon mx-3">
                  <img src={SecurePaymentIcon} alt="Secure payment Icon"/>
                </div>
               <div className="secure-transaction-text">
                <span>100% Secure Transaction</span>
               </div>
            </div>
        </div>
    );
};

export default NewHeader;