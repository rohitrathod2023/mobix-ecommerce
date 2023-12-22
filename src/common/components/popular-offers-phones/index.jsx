import React from "react";
import "./popular-offers-phone.css";


const PhoneProduct = props => {
     const {productData} = props;

     const {imageFile, name, currrentPrice, originalPrice, offer, emi, discount} = productData;
    return(
        <div className="phone-product col">
            <div className="phone-image">
                <img src={imageFile} alt="phone" /></div>
            <div className="phone-offer"> {offer}</div>
            <div className="phone-name"> {name}</div>
            <div className="phone-price">
                <div className="current-price">{currrentPrice}</div>
                <div className="orignal-price">{originalPrice}</div>
                <div className="discount">{discount}</div>
            </div>
            <div className="emi">{emi}</div>
        </div>

    );

}
export default PhoneProduct;
