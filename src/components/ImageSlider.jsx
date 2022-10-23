import React, { useState } from "react";
import { SliderData } from "./sliderData";
import './Styles/Section.css';

function ImageSlider({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }
  
    const imageStyle = {
      position: 'absolute',
      left: '700px',
      top: '300px'

    }
  return (
    <>
      <div className="carousel">
        <div className="icons">
          <i className="fas fa-circle-chevron-left" onClick={nextSlide}></i>
          <i className="fas fa-circle-chevron-right" onClick={prevSlide}></i>
        </div>
        <a href="#section6" className="btn">
          Где купить >
        </a>
      </div>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' style={imageStyle}/>
            )}
          </div>
        );
      })}
    </>
  );
}

export default ImageSlider;
