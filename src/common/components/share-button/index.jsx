import React from "react";
import  "./share-button.css";
import Sharebutton from "../../assets/icon/shareicon.svg";

const ShareButton = () =>{
        return(
           
            <button  className="btn btn-share d-flex"> 
                <img src={Sharebutton} alt="share button icon" />
                <span className="mx-2">share</span>
            </button>
           
        );
};

export default ShareButton;