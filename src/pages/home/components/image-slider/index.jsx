import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';



const ImageSlider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            

           {/*<Carousel.Item>
           <img
             className="d-block w-100" 
            src="https://www.reliancedigital.in/medias/Redmi-13C-1365x260-1-.jpg?context=bWFzdGVyfGltYWdlc3wxMjUyMjN8aW1hZ2UvanBlZ3xpbWFnZXMvaDgwL2gxNS8xMDA5MTE3ODM5MzYzMC5qcGd8ZjlkNGFlMGYzZmVmNTFkNDAwMTZlNmFmZTAyYzBmZjZlM2ZhNTY0ZTY1Y2IxN2VlZGZkNWYyOTQxOGIyNzZjYg" 
            alt="nothing phone " />
            </Carousel.Item>

            <Carousel.Item>
            <img
             className="d-block w-100" 
            src="https://www.reliancedigital.in/medias/Smartphone-Bonanza-1365x260-1-.jpg?context=bWFzdGVyfGltYWdlc3wxMjMzNTl8aW1hZ2UvanBlZ3xpbWFnZXMvaDA0L2g5MC8xMDA5MDI4NTg1ODg0Ni5qcGd8NzhhZjZiMjU1YTlhOTE4YTg3OTY3MDhiODlmZDc1MmRhMDM4MGExOWFkMmM2NzlkYjc1OTM2NzkwZWIxMWM3OQ" 
            alt="nothing phone " />
                </Carousel.Item>*/}

            <Carousel.Item>
            <img
             className="d-block w-100" 
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/05bb7df5ea472731.jpg?q=20" 
            alt="first slide" />
            </Carousel.Item>

            <Carousel.Item>
            <img
             className="d-block w-100" 
            src="https://rukminim2.flixcart.com/fk-p-flap/844/140/image/6b9674d4ff87b98b.jpg?q=50" 
            alt="second slide " />
            </Carousel.Item>

          <Carousel.Item>
          <img 
          className="d-block w-100"
          src="https://rukminim2.flixcart.com/fk-p-flap/844/140/image/a2fdd4e385897b17.jpg?q=50" 
          alt="Third slide " />
            
          </Carousel.Item>
          <Carousel.Item>
          <img
           className="d-block w-100" 
          src="https://rukminim2.flixcart.com/fk-p-flap/844/140/image/80d5b99810267376.jpg?q=50" 
          alt="Forth slide" />
          </Carousel.Item>
          <Carousel.Item>
          <img 
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/71ae841f2308328f.jpg?q=20" 
          alt="fith slide" />
            
          </Carousel.Item>
        </Carousel>
        
      );


};

export default ImageSlider;