import React from "react";
import "./header.css";
import Logo from "../logo";
import CartIcon from "../../assets/icon/carticon.jsx";
import userIcon from "../../assets/icon/user.svg"
import { useNavigate } from "react-router-dom";


const Header = () =>{

    const navigate = useNavigate();

    const goTologinPage = () =>{
        navigate("/login");


    }
    return(

        <div className="container-lg">
            <div className="main-container">
                <div className="left-part">
                    <Logo/>
                    <div className="input-group mx-4">
                    <input 
                    type="text" 
                    className="form-control custome-width" 
                    placeholder="search for the product, brand and more..." 
                    aria-label="search for the product, brand and more..." 
                    aria-describedby="basic-addon2"/>
                     <span className="input-group-text" id="basic-addon2">
                     <i className="bi bi-search"></i>
                        </span> 
                   </div>
                </div>
                <div className="right-part">
                    <div className="header-icons">
                        <CartIcon/>
                        <span className="header-text mx-2">Cart</span>
                    </div>
                    <div className="header-icons marginLeft20" onClick={goTologinPage}>
                        <img src={userIcon} alt="cart Icon" />
                        <span className="header-text mx-2">Login/Sign up</span>
                    </div>


                </div>
            </div>
           
        </div>
    );
};

export default Header;