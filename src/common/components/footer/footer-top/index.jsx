import React from "react";
import "./footer-top.css";
import { features } from "./constants/Features";





const FooterTop = () => {
    return(
        <section className="footer-top-main "> 
        <div className="container">
        <div className="row">
        {features.map(feature=>{
            return(
                  <div className="col-md-3 feature-container" key={feature.title}>
                      <div>
                        <img src={feature.icon} 
                        alt="icon of the feature" 
                        className="feature-image"
                        />
                        <h3 className="feature-title">{feature.title}</h3>
                        <h3 className="feature-subtitle">{feature.subTitle
                        }</h3>
                      </div>

                  </div>
            )
        })}
        </div>
        </div>
        </section>
        
    
        );


};

export default FooterTop;