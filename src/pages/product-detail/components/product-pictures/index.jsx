import React, { useState } from "react";
import "./product-pictures.css";
import PhoneImg1 from "../../../../common/assets/product-pictures/nothing-phone/phone-img1.svg";
import PhoneImg3 from "../../../../common/assets/product-pictures/nothing-phone/phone-img3.svg";
import PhoneImg4 from "../../../../common/assets/product-pictures/nothing-phone/phone-img4.svg";
import PhoneImg5 from "../../../../common/assets/product-pictures/nothing-phone/phone-img5.svg";

const phoneImges = [PhoneImg1, PhoneImg3, PhoneImg4, PhoneImg5];

const ProductPictures = () => {

    const [selectedThumbnail, setselectedThumbnail] = useState(0);

    return(
        <div className="product-picture-main">
            <div className="row">
                <div className="col-md-2">
                    {phoneImges.map((phoneImg, index)=> {
                        return(
                        <div key={phoneImg}
                        className={`product-thumbnail mb-3 ${selectedThumbnail === index ? "selected": ""}`}
                        onClick={() => {
                            setselectedThumbnail(index);
                        }}
                        >
                             <img src={phoneImg} 
                             className="img-fluid phone-img" 
                             alt="phone product " 
                             />
                        </div>
                        );
                    })}
                    
                   
                </div>
                <div className="col-md-10 phone-container">

                        <img src={phoneImges[selectedThumbnail]} 
                        alt="phone-main"
                        className="img-fluid phone-img" 
                        />
                </div>
            </div>
            
        </div>
    );
};

export default ProductPictures;