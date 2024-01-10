import React from "react";
import "./color-picker-section.css";
import { useState } from "react";
import ColorPicker from "../color-picker";

const ColorPickerSection = ({availablecolors}) =>{
    
    const [activeColor, setActiveColor] = useState(null);

    const handleColorClick = (color) =>{
         setActiveColor((prevActiveColor) =>(prevActiveColor === color ? null : color));
    }
 
    return(
        <div className="color-picker-section-main">
           <div>    
                <p className="color-heading">Choose Color</p>
                </div>
              
               <div  className="d-flex justify-space-between align-items-center" >
               {availablecolors.map((color)=> 
                    <ColorPicker
                    key={color}
                    color={color}
                    active={activeColor === color}
                    onClick={() => handleColorClick(color)}
                  />
               )}
               </div>
        </div>
    );
};

export default ColorPickerSection;