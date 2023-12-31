import React from "react";
import "./popular-offers-phone.css"
import PhoneProduct from "../../../../common/components/popular-offers-phones";
import { SAMPLE_PHONES } from "../../../../common/components/constants/samplePhones";

const PopularOffersPhone = () =>{

    return(
        <div className="popular-phone-main">
            <div className="row">
              {
                SAMPLE_PHONES.map(phone =>{
                  return <div className="col">
                            <PhoneProduct productData ={phone} key={phone.id}/>
                  </div> 
                })
              }
               </div>
        
        </div>
    );

};

export default PopularOffersPhone;