import React from "react";
import "./product-list.css";
import Header from "../../common/components/header";
import Footer from "../../common/components/footer";
import NavbarMain from "../../common/components/navbar-main";
import Filters from "./components/filters";
import SortBy from "./components/sort-by";
import ProductMain from "./components/products-main";

const ProductList = () => {
  return(
    <div className="product-list-main">
        <Header/>
        <NavbarMain/>
        <div className="body-main">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 text-align-left">
                        <Filters/>
                    </div>
                    <div className="col-md-9 text-align-left">
                        <div className="products-main-heading">
                            <h2 className="products-heading">
                                All Mobile Phones
                            </h2>
                             <SortBy/>
                         </div>
                         <ProductMain/>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
  );  
};
export default ProductList;