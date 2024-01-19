import React, { useState } from "react";
import "./address-selection-section.css";


const AddressSelectionSection = () =>{
    const [selectAddress, setselectAddress] = useState(null);

    const handleAddressClick = (address) =>{
                setselectAddress(address);
    }
    return(
        <div className="address-detail-section-main">
        <div className={`adress-detail-section first ${selectAddress === 'home' ? 'selected' : ''}`} onClick={()=>handleAddressClick("home")}>
                <input
                    className="custom-radio" 
                    type="radio" 
                    name="address-selection" 
                    id="first-address" 
                    checked= {selectAddress === 'home'}
                    readOnly
                    />
                <div className="address-information mx-1">
                    <div className="my-1">
                        <span className="address-name mx-1">Jennifer's Home</span>
                        <span className="mobile-number mx-1">9593214756</span>
                    </div>
                    <span className="adrees-line first">101, Acecity, Sector 1,</span>
                    <span className="adress-line second mx-1">Greater Noida West,</span>
                    <span className="city-name mx-1"> Gautam Budh Nagar,</span>
                    <span className="state-name mx-1">Uttar Pradesh</span>
                    <span className="dash"> - </span>
                    <span className="pincodemx-1"> 201306</span>

                </div>
        </div>
         <div className={`adress-detail-section second ${selectAddress === 'office' ? 'selected' : ''}`} onClick={()=> handleAddressClick('office')}>
                <input 
                    className="custom-radio" 
                    type="radio" 
                    name="address-selection" 
                    id="second-address" 
                    checked = {selectAddress === 'office'}
                    readOnly
                    />
                <div className="address-information mx-1">
                    <div className="my-1">
                        <span className="address-name mx-1">Jennifer's office</span>
                        <span className="mobile-number mx-1">9593214756</span>
                    </div>
                    <span className="adrees-line first">A-90, First Floor,   </span>
                    <span className="adress-line second mx-1">Sector 18, Near Noida Authority,</span>
                    <span className="city-name mx-1">Noida</span>
                    <span className="state-name mx-1">Uttar Pradesh</span>
                    <span className="dash"> - </span>
                    <span className="pincodemx-1">201301</span>
                </div>
        </div>

    </div>
    );
};

export default AddressSelectionSection;