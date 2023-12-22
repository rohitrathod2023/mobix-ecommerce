import React from "react";
import "./banner.css";
import mobileLarge from "../../assets/images/mobile-large.svg"
import Logo from "../logo"

const Banner = () => {
    return (
    <div className="app-banner">
        <div className="left-container">
          <Logo LightMode/>
         <img src={mobileLarge} alt = "Mobile icon" className="Iphone-img" />  
         <div className="banner-text">
           India's Leading Mobile Comprison Portal
         </div>
        </div>
        
    </div>
    
    
    );
};

export default Banner;