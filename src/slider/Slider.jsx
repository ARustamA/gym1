import React, { useEffect, useState } from 'react';
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import "./slider.css";
import a from "./assets/1.webp";
import b from "./assets/2.webp";
import c from "./assets/3.webp";
import d from "./assets/4.webp";
// import f from "./assets/5.jpg";
import g from "./assets/6.jpg";
import e from "./assets/7.jpg";


const imageArr = [a, b, c, d, g, e];
const len = imageArr.length - 1;


const Slider = () => {
   const [activeIndex, setActiveIndex] = useState(0);

   // useEffect(() => {
   //    const interval = setInterval(() => {
   //       setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
   //    }, 5000);
   //    return () => clearInterval(interval);
   // }, [activeIndex]);

   return (
      <div className="slider-container">
         <SliderContent activeIndex={activeIndex} sliderImage={imageArr} length={len}/>
         
         <Arrows
            prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)    }
            nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)  }
         />
         <Dots
            activeIndex={activeIndex}
            sliderImage={imageArr}
            onclick={(activeIndex) => setActiveIndex(activeIndex)}
         />
      </div>
   );
}

export default Slider