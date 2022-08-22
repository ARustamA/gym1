import React, { useEffect, useState } from 'react';
import {SliderContent} from "./SliderContent";
import {Dots }from "./Dots";
import {Arrows} from "./Arrows";
import "./slider.css";




export const Slider = ({imageArr, len}) => {
   const [activeIndex, setActiveIndex] = useState(0);

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
