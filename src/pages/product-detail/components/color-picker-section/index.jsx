import React from "react";
import "./color-picker-section.css";
import { useState } from "react";
import ColorPicker from "../color-picker";

const ColorPickerSection = () =>{
    const [activeColor, setActiveColor] = useState(null);

    const handleColorClick = (color) =>{
         setActiveColor((prevActiveColor) =>(prevActiveColor === color ? null : color));
    }
    const colorData = [
         { color: 'black', active: activeColor === 'black' },
         { color: 'grey', active: activeColor === 'grey' },
         { color: 'blue', active: activeColor === 'blue' },
         { color: 'white', active: activeColor === 'white' },
         { color: 'silver', active: activeColor === 'silver' },
      ];
    return(
        <div className="color-picker-section-main">
           <div>  
                <p className="color-heading">Choose Color</p>
                </div>
              
               <div  className="d-flex justify-space-between align-items-center" >
               {colorData.map((data)=> 
                    <ColorPicker
                    key={data.color}
                    color={data.color}
                    active={data.active}
                    onClick={() => handleColorClick(data.color)}
                  />
               )}
               </div>
        </div>
    );
};

export default ColorPickerSection;