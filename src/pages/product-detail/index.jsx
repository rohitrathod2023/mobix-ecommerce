import React from "react";
import "./product-detail.css";
import Header from "../../common/components/header";
import NavbarMain from "../../common/components/navbar-main";
import Footer from "../../common/components/footer";
import BreadCrumbs from "./components/breadcrumbs";
import ShareButton from "../../common/components/share-button";
import ProductDetailSection from "./components/product-detail-section";
import ProductPictures from "./components/product-pictures";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {SAMPLE_PHONES_PRODUCTS_LIST} from "../../common/components/constants/samplePhonesProductList";
const ProductDetail = () => {
    const params = useParams();
    const {productId} = params;
    const [productDetail, setproductDetail] = useState({});


    const getProductDetails = productId =>{
            const matchingProduct = SAMPLE_PHONES_PRODUCTS_LIST.find(phoneData => {
                return phoneData.id === productId;
            });
          
            setproductDetail(matchingProduct);
          

    };

    useEffect(() => {
        getProductDetails(productId);
      
    }, [productId]);
 

    return(
            <div className="product-detail-main">
                <Header/>
                <NavbarMain/>
                <div className="body-main">
                    <div className="container">
                     
                      <BreadCrumbs  productDetail= {productDetail}/>
                    <div className="product-section">
                        <div className="row">
                            <div className="col-md-5"><ProductPictures/></div>
                            <div className="col-md-6">  <ProductDetailSection productDetail={productDetail}/> </div>
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
