import React from "react";
import "./address-detail.css";
import AddressFormSection from "../address-form-section";
import AddressSelectionSection from "../address-selection-section";
import ShoppingProgressBar from "../../../../common/components/shopping-progress-bar";

const AddressDetail = () =>{
    return(
        <div>
             <div>
                <ShoppingProgressBar/>
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
