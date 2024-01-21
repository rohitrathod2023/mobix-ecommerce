import {React, useState} from "react";
import "./cart-items.css";
import ShoppingProgressBar from "../../../../common/components/shopping-progress-bar";
import ItemsList from "../items-list";
import { useEffect } from "react";
import { SAMPLE_PHONES_PRODUCTS_LIST } from "../../../../common/components/constants/samplePhonesProductList";
const CartItems = props=>{
    const {id} = props;
    const [productDetail, setproductDetail] = useState({});


    const getProductDetails = id =>{
            const matchingProduct = SAMPLE_PHONES_PRODUCTS_LIST.find(phoneData => {
                return phoneData.id === id;
            });
            setproductDetail(matchingProduct);
          
          

    };

    useEffect(() => {
        getProductDetails(id);
      
    }, [id]);
    return(
        <div className="cart-items-main">
            <div>
                <ShoppingProgressBar/>
            </div>
            <div className="list-section">
                <div className="list-section-heading">
                        <p className="list-section-heading">Shopping Cart</p>
                </div>
                <div className="items-list">
                    <div><ItemsList productId = {id}/></div>
                    <div><ItemsList/></div>
                </div>

            </div>
        </div>
    );
};

export default CartItems;