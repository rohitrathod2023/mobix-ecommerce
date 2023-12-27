import React from "react";
import "./popular-offers-phone.css";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const PhoneProduct = props => {
    const navigate = useNavigate();

     const {productData} = props;

     const {  id,
            imageFile, 
            name, 
            currrentPrice, 
            originalPrice, 
            offer, 
            emi, 
            discount,
          
        } = productData;

        const goToProductDetail = () => {
                   const prodName = name.replaceAll(" ","-");
                   navigate(`/products/${prodName}/${id}`);
        }
    return(
        <div className="phone-product " onClick={goToProductDetail}>
            <div className="phone-image">
                <Link to="/products/product-detail"> 
                <img src={imageFile} alt="phone" />
                </Link> 
            </div>
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
