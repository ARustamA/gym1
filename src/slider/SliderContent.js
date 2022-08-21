import React from "react";


function SliderContent({ activeIndex, sliderImage, length }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (

        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}>
          {(index - 1 < 0) ? index = length-1 : (index + 1 > length) ? index = 1 : index
          }
          <img className="slide-image-1" src={sliderImage[index - 1]} alt="foto" />
          <img className="slide-image" src={sliderImage[index]} alt="foto" />
          <img className="slide-image--1" src={sliderImage[index + 1]} alt="foto" />
          
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
