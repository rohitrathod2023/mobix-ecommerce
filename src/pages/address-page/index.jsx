import React from "react";
import "./address-page.css"
import NewHeader from "../../common/components/header/new-header";
import AddressDetail from "./components/address-detail";


const AddressPage = () => {
    return(
        <div> 
          <NewHeader/>
          <div className="row">
           <div className="checkout-left-side col-md-7"><AddressDetail/></div>
           <div className="checkout-right-side col-md-4">right side</div>
          </div>
        </div>
        

    );
};

export default AddressPage;