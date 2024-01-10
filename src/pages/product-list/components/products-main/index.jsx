import React from "react";
import "./products-main.css";
import PhoneProduct from "../../../../common/components/popular-offers-phones";
import {SAMPLE_PHONES_PRODUCTS_LIST} from "../../../../common/components/constants/samplePhonesProductList";
import Pagination from 'react-bootstrap/Pagination';

const ProductMain =() => {
    return(
            <div className="products-main "> 
        <div className="all-product-list ">
                <div className="row">
                {SAMPLE_PHONES_PRODUCTS_LIST.map(phone =>{
                    return (
                    <div className="col-md-3">
                    <PhoneProduct 
                     productData ={phone} 
                     key={phone.id}
                     />
                    </div>
                    );
                })
                }
                 </div>
            </div>
            <div className="pagination">
            <Pagination className="custom-pagination">
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item >{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
            </div>
            </div>
    );
};

export default ProductMain;