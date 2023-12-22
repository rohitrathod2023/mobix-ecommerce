import React from "react";
import "./footer-bottom.css";
import {footerLinks } from "./constants/footerOptions.js";
import PaymentIcons from "../../../assets/footerImages/payment-icon.svg";
import AppDownload from "../../../assets/footerImages/appdownload.svg";
import Facebook from "../../../assets/socialmedia/facebook.svg"
import Instagram from "../../../assets/socialmedia/instagram.svg"
import Twitter from "../../../assets/socialmedia/twitter.svg"
import YouTube from "../../../assets/socialmedia/youtube.svg"


const FooterBottom = () => {
    return(
        <section className="footer-bottom-main"> 
        <div className="container">
            <div className="row">
            <div className="left-main col-md-9">
                <div className="left-top">
                    <div className="row">
                        {footerLinks.map(footerLink =>{
                            return (
                                <div className="col-md-3">
                                <h2 className="footer-list-heading">
                                    {footerLink.heading}
                                </h2>
                                <ul>
                                    {footerLink.items.map(item => {
                                      return (
                                        <li className="footer-list-item">
                                            <a href="#/">
                                                {item}
                                            </a> 
                                        </li>
                                      ); 
                                    })}
                                    
                                  
                                </ul>
                            </div>
                            )
                        })}
                       
                    </div>
                </div>
                <div className="left-bottom">
                    <img src={PaymentIcons} alt="all payment icons " />
                </div>
            </div>
            <div className="rigth-main col-md-3">
                <div className="right-top">
                    <h3 className="footer-right-subheading">
                        Download our amazing app
                          
                    </h3>
                      <div className="footer-right-image">
                      <img src={AppDownload} alt="App Download icon" />
                      </div>
                    
                </div>
                <div className="right-bottom">
                    <h3 className="footer-right-subheading">
                        Connect us on 
                    </h3>
                    <div className="footer-right-image">
                      <img src={Facebook} alt="Facebook" />
                      <img src={Twitter} alt="Twitter" />
                      <img src={Instagram} alt="SInstagram" />
                      <img src={YouTube} alt="YouTube" />
                      </div>

                </div>
            </div>
            </div>
        </div>
        
        </section>
    )


};

export default FooterBottom;