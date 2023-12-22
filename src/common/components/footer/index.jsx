import React from "react";
import "./footer.css";
import FooterTop from "./footer-top";
import FooterBottom from "./footer-bottom";

const Footer = () => {
    return(
        <div className="footer-main">
           <FooterTop/>
           <FooterBottom/>
        </div>
    )


};

export default Footer;