import React, { useState } from "react";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md"
import "./CarrousselImage.css" 


const Slider = ({ slides }) => {

  // Empêche la seletion des images //
  document.onselectstart = (e) => { e.preventDefault() }
    const [current, setCurrent] = useState(0);
    const length = slides?.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  if(length === 1) {
    return (
      <img className="slide-img" src={slides} alt="Photos du logement" />
    )
  } else {
    return (
      <div className="slider">
        <MdOutlineArrowBackIosNew className="leftArrow" onClick={prevSlide} />
        <MdOutlineArrowForwardIos className="rightArrow" onClick={nextSlide} />
        {slides?.map((slide, index) => {
          return (
            <div key={index}>
              {index === current && <><img className="slide-img" src={slide} alt="Photos du logement" /><div className="count">{current + 1}/{length} </div></>}
            </div>
          );
        })}
      </div>
    );

  }
  };
  
  export default Slider;