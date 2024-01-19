import React from "react";
import "./shopping-progress-bar.css";
import CheckMarkIcon from "../../assets/icon/checkmarkicon"
import TwoIcon from "../../assets/numericicon/twoicon.svg";
import ThreeIcon from "../../assets/numericicon/threeicon.svg";

const ShoppingProgressBar = () =>{
    return(
        <div className="progress-step-main">
                <div className="progress-step ">
                    <CheckMarkIcon color = "#21C17A" width = "20" height = "20"/>
                    <span className="progress-step-text shopping mx-2">Shopping Cart</span>
                </div>
                 <div className="progress-step  mx-4">
                    <img src={TwoIcon} alt="Two number Icon" />
                    <span className="progress-step-text address mx-2">Select Address</span>
                 </div>
                <div className="progress-step  mx-2">
                    <img src={ThreeIcon} alt="three number Icon" />
                    <span className="progress-step-text payment mx-2">Payment</span>
                 </div>
            </div>
    );
};

export default ShoppingProgressBar;