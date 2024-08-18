import {React, useState} from "react";
import "./cart-items.css";
import ShoppingProgressBar from "../../../../common/components/shopping-progress-bar";
import ItemsList from "../items-list";
import { useEffect } from "react";
import { SAMPLE_PHONES_PRODUCTS_LIST } from "../../../../common/components/constants/samplePhonesProductList";
const CartItems = props=>{
    const {productId} = props;
    console.log(productId)
    const [productDetailCart, setproductDetailCart] = useState({});
    useEffect(() =>{
        console.log( "Sate = ",productDetailCart)
    },[productDetailCart])

    const getProductDetails = productId =>{
            const matchingProductCart = SAMPLE_PHONES_PRODUCTS_LIST.find(phoneData => {
                return phoneData.id === productId;
            });
            setproductDetailCart(matchingProductCart);
            //console.log(matchingProductCart);
            //console.log("find matching product")
          

    };

    useEffect(() => {
        getProductDetails(productId);
      
    }, [productId]);
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
                    <div><ItemsList productDetailCart = {productDetailCart}/></div>
                    {/* <div><ItemsList/></div>                      */}
                </div>

            </div>
        </div>
    );
};

export default CartItems;