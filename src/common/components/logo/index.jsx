import React from "react";
import "./logo.css";
import logo from "../../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";

const Logo = (props) => {
    const {LightMode} = props;
    const textColor = LightMode ?"white-color" : "black-color";
    const navigate = useNavigate();

    const goTohomePage = () =>{
             navigate("/");

    }

      return(
        <div 
        className="d-flex align-items-center cursor-pointer"
        onClick={goTohomePage} >

            <img src={logo} alt="logo of mobox company" />
            <div className={`logo-text mx-2 ${textColor}`}>Mobix</div>
        </div>
      );
};

export default Logo;    