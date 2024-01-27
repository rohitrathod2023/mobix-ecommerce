import React from "react";
import "./ordered-items-list.css";
import Phone1 from "../../../common/assets/images/phones/phone1.svg";
const OrderedItemsList = () => {
    return(
        <div className="order-items-list-main">
            <p className="items-count">2 items</p>
            <div className="row">
            <div className="ordered-items d-flex justify-content-center">
                <div className="item-image">
                     <img className="custom-phone-img" src={Phone1} alt="phone" />
                </div>
                <div className="items-name-section-main">
                <div className="items-name-section mx-2">
                    <p className="items-name">Samsung Galaxy Note 8 (Orchid Grey, 6GB RAM, 64GB Storage)</p>
                </div>
                <div className="ordered-items-detail mx-2">
                         <p className="item-color-text">Midnight Black</p>
                        <h5 className="item-price">20,900</h5>
                    
                </div>
            
            </div>
            </div>
            <div className="ordered-items d-flex justify-content-center">
                <div className="item-image">
                     <img className="custom-phone-img" src={Phone1} alt="phone" />
                </div>
                <div className="items-name-section-main">
                <div className="items-name-section mx-2">
                    <p className="items-name">Samsung Galaxy Note 8 (Orchid Grey, 6GB RAM, 64GB Storage)</p>
                </div>
                <div className="ordered-items-detail mx-2">
                         <p className="item-color-text">Midnight Black</p>
                        <h5 className="item-price">20,900</h5>
                    
                </div>
            
            </div>
            </div>
            </div>
           
        </div>
    );
};

export default OrderedItemsList;