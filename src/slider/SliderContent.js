import React from "react";
import { useId } from "react";

export function SliderContent({ activeIndex, sliderImage, length }) {
  const id = useId()
  return (
    <section>
      {sliderImage.map((slide, index) => {
        const prevIndex = (index - 1 + length) % length;
        const nextIndex = (index + 1) % length;

        return (
          <div
            key={index + id}
            className={index === activeIndex ? "slides active" : "inactive"}
          >
            <>
              <img className="slide-image-1" src={sliderImage[prevIndex]} alt="foto" />
              <img className="slide-image" src={sliderImage[index]} alt="foto" />
              <img className="slide-image--1" src={sliderImage[nextIndex]} alt="foto" />
            </>
          </div>
        );
      })}
    </section>
  );
}

