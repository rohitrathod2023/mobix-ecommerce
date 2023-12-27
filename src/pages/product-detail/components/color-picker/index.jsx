import React from "react";
import "./color-picker.css";
import ResCheckmark from "../../../../common/assets/icon/redcheckmark.svg";

const ColorPicker = (props)  =>{
    const {color, active, onClick} = props;
    
    
    
    return(
        <div onClick={onClick}> 
            <div className="color-picker-main " 
            style={{backgroundColor: color}}
             > 
            <div className="red-checkmark"> 
                {active && <img src={ResCheckmark} 
                alt="Red Color checkmarkar" 
            />
            }
            </div>  
            </div>
            <div 
            className={`color-picker-text ${active ? "pink-color" : ""}`} 
            >
                {color}
             </div>
           
        </div>
    );
};

export default ColorPicker; 