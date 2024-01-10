import React from "react";
import "./product-detail-section.css";
import OffersIcon from "../../../../common/assets/icon/offersicon.jsx";
import CartIcon from "../../../../common/assets/icon/carticon.jsx";
import CheckMarkIcon from "../../../../common/assets/icon/checkmark.svg";
import CalenderIcon from "../../../../common/assets/icon/calender.svg";
import TruckIcon from "../../../../common/assets/icon/truckicon.svg";
import ReturnIcon from "../../../../common/assets/icon/returnicon.svg";
import Rightcheck from "../../../../common/assets/icon/rightmark.svg"
import ColorPickerSection from "../color-picker-section/index.jsx";


const ProductDetailSection = props => {
   
 const {productDetail} = props;
    
 const {name= "",  
        currrentPrice = "", 
        originalPrice= "", 
        discount= "",
        offer = "",
        emi = "",
        availablecolors = [],
        keyfeatures = [] ,
    } = productDetail;
    
    return(
        <div className="product-section-main">
           <div className="product-title">  
              <h4>{productDetail !== undefined ? name : "Name is not defined"}</h4> 
           </div>
           <div className="features section-gap">
             <p className="features-heading">KRY FEATURES</p>
             <ul className="features-detail">
                {keyfeatures.map(featuresText=>{
                    return(
                        <li>
                    <img src={CheckMarkIcon}  alt="checkmark icon" />
                    <span className="mx-2">{featuresText}</span>
                </li>
                    )
                })}
    
             </ul>
           </div>
           <div className="color-picker section-gap">
            <ColorPickerSection availablecolors = {availablecolors}/>
            </div>
           <div className="quntity-selection section-gap">
            <label className="quntity-selection-heading">Select Qty. </label>
            <select className="quntity-selection-qty">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
           </div>
           <div className="prices-and-taxes section-gap">
            <div className="top-part d-flex align-items-center justify-space-between"> 
            <div className="current-price">
                {productDetail !== undefined ? currrentPrice : "Name is not defined"}
                </div>
            <div className="orignal-price mx-3">
                {productDetail !== undefined ? originalPrice : "Name is not defined"}
                </div>
            <div className="discount mx-1">
                {productDetail !== undefined ? discount : "Name is not defined"}
            </div>
            </div>
            <div className="bottom-part">
                Inclusive of all taxes  
            </div>
           </div>
           <div className="offers section-gap">
                <div className="emi-offers">
                    <img src={CalenderIcon} alt=" calender Icon" />
                    <span>No cost {emi}, Standerd EMI also availabel. T&C</span>
                </div>
                <div className="bank-offers">
                    <OffersIcon color="black" width="16" height="16"/>
                    <span>Bank offer {offer} on flipkart Axis Bank Credit Cart. T&C</span>
                </div>
           </div>
           <div className="add-to-cart section-gap"> 
           <button  className="add-to-cart-btn btn felx align-items-center"> 
                <CartIcon color = "white"/>
                <span className="mx-2">Add to Cart</span>
            </button>
           </div>
           <div className="quick-policies d-flex justify-space-between align-items-center">

                <div className="quick-policies-part d-flex align-items-start ">
                   <div>
                      <img src={TruckIcon} alt="truck Icon" />
                    </div>
                    <div className="mx-2">
                        <span>Shipping</span>
                        <div className="policy-value">Free</div>
                    </div>
                </div>
                <div className="quick-policies-part d-flex align-items-start mx-3 " >
                  <div>
                    <img src={ReturnIcon} alt="Return Icon" />
                  </div>
                    <div className="mx-2">
                        <span>Return Policy</span>
                        <div className="policy-value">30 days</div>
                    </div>
                </div>
                <div className="quick-policies-part d-flex align-items-start mx-2" >
                   <div>
                     <img src={Rightcheck} alt="Right marked Icon" />
                    </div>
                    <div className="mx-2">
                        <span>Cancellation Policy </span>
                        <div className="policy-value">Allowed</div>
                    </div>
                </div>
                
           </div>
        </div> 
    );
};

export default ProductDetailSection;