import React from "react";
import "./popular-offers.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PopularOffersPhone from "../popular-offers-phone";

const PopularOffer = () => {

    return(
       <div className="container popular-offers-main">
        <div className="top-part">
            <div className="heading">
            <h3 className="section-heading">
                Popular Mobile Offers
            </h3>
            <button 
              className="sub-btn py-1 px-2 mx-3">
                View All</button>
            </div>
            <div className="tab">
            <Tabs
            defaultActiveKey="10000"
            id="justify-tab-example"
            className="mb-3"
              >
          <Tab className="custom-tab"
          eventKey="10000" 
          title="Under Rs. 10,000"
          >
          <PopularOffersPhone/>
         </Tab>

          <Tab className="custom-tab"
           eventKey="1500" 
           title="Rs. 10,000 - Rs. 15,000"
           >
            <PopularOffersPhone/>
         </Tab>
    
          <Tab className="custom-tab"
           eventKey="15000" 
           title="Rs. 15,000 - Rs. 25,500"
           >
            <PopularOffersPhone/>
         </Tab>
    
          <Tab 
           eventKey="25000" 
           title="Rs. 25,000 - Rs. 50,000"
           >
            <PopularOffersPhone/>
          </Tab>
    
          <Tab className="custom-tab"
          eventKey="50000" 
          title="Above Rs. 50,000"
          >
            <PopularOffersPhone/>
           </Tab>

         </Tabs>

         </div>
        </div>
        <div className="bottom-part"></div>

       </div>
        
    );
};

export default PopularOffer;
