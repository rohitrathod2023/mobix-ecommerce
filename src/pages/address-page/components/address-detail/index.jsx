import React from "react";
import "./address-detail.css";
import CheckMarkIcon from "../../../../common/assets/icon/checkmarkicon"
import TwoIcon from "../../../../common/assets/numericicon/twoicon.svg";
import ThreeIcon from "../../../../common/assets/numericicon/threeicon.svg";
import AddressFormSection from "../address-form-section";
import AddressSelectionSection from "../address-selection-section";
const AddressDetail = () =>{
    return(
        <div>
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
            <div className="address-selection-headline">
                <span className="address-setect-text">Select Delivery Address</span>
                <span className="add-new-address-text">Add New Address</span>
                
            </div>
               <div>
                <AddressSelectionSection/>
               </div>
            <div className="new-address-creation-section">
                <AddressFormSection/>
            </div>
        </div>
    );
};

export default AddressDetail;
