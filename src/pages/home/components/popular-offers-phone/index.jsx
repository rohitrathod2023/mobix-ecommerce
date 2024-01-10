import React from "react";
import "./popular-offers-phone.css"
import PhoneProduct from "../../../../common/components/popular-offers-phones";
import { SAMPLE_PHONES_PRODUCTS_LIST } from "../../../../common/components/constants/samplePhonesProductList";

const PopularOffersPhone = () =>{

    return(
        <div className="popular-phone-main">
            <div className="row">
              {
                SAMPLE_PHONES_PRODUCTS_LIST.map(phone =>{
                  return <div className="col" key={phone.id}>
                            <PhoneProduct productData ={phone} />
                  </div> 
                })
              }
               </div>
        
        </div>
    );

};

export default PopularOffersPhone;