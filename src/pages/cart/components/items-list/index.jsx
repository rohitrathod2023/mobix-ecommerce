import React from "react";
import "./items-list.css";
import Phome1 from "../../../../common/assets/images/phones/phone1.svg"
const ItemsList = () =>{
    
    return(
        <div className="items-list-section">
            <div className="cart-phone-container">
                <img src={Phome1} alt="phone" className="cart-phone-img"/>
            </div>
            <div className="name-price-section">
                <div className="items-name-section mx-2">
                    <p className="items-name">Samsung Galaxy Note 8 (Orchid Grey, 6GB RAM, 64GB Storage)</p>
                </div>
                <div className="items-price-section mx-2">
                        <h5 className="items-price">20,900</h5>
                        <p className="price-section-text">Inclusive ot all taxes</p>
                </div>
            </div>
            
            <div className="items-quntity row">
            <label className="items-quntity-heading">Qty</label>
            <select className="items-quntity-selection">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            </div>
            <div className="items-color row">
            <label className="color-selection-heading">Color</label>
            <div className="color-selection d-flex justifu-center algin-items-center">
                <div className="color-selection-circle">

                </div>
                <select className="select-color">
                    <option value="blue">blue</option>
                    <option value="white">white</option>
                    <option value="pink">pink</option>
                    <option value="yellow">yellow</option>
                    <option value="black">black</option>
                </select>
            </div>
            </div>  
                <p className="items-remove">Remove</p>
            
        </div>
    );
};

export default ItemsList;