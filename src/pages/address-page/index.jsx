import React from "react";
import "./address-page.css"
import NewHeader from "../../common/components/header/new-header";
import AddressDetail from "./components/address-detail";
import Coupon from "../../common/components/coupon";
import PaymentOption from "../../common/assets/footerImages/payment-icon.svg"


const AddressPage = () => {
    return(
        <div> 
          <NewHeader/>
          <div className="address-page-main-section row">
           <div className="checkout-left-side col-md-6"><AddressDetail/></div>
           <div className="checkout-right-side col-md-2"><Coupon  name = "Proceed to Payment" pageLink = "/payment"/></div>
          </div>
          <div className="payment-opt-section">
          <img  src={PaymentOption} alt="payment option" />
          </div>
        </div>
        

    );
};

export default AddressPage;