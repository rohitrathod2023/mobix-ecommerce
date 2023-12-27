import React from "react";
import "./product-detail.css";
import Header from "../../common/components/header";
import NavbarMain from "../../common/components/navbar-main";
import Footer from "../../common/components/footer";
import BreadCrumbs from "./components/breadcrumbs";
import ShareButton from "../../common/components/share-button";
import ProductDetailMiddel from "./components/product-detail-section";
const ProductDetail = () => {

    return(
            <div className="product-detail-main">
                <Header/>
                <NavbarMain/>
                <div className="body-main">
                    <div className="container">
                     
                      <BreadCrumbs/>
                    <div className="product-section">
                        <div className="row">
                            <div className="col-md-5">  left part</div>
                            <div className="col-md-6">  <ProductDetailMiddel/> </div>
                            <div className="col-md-1"> <ShareButton/> </div>
                        </div>
                    </div>
                </div>
                    
                  
                </div>
                <Footer/>
            </div>

    );
};
export default ProductDetail;
