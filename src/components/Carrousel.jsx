import React, { useState } from "react";
import "../style/carrousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export function Carrousel({ product }) {
  const [slide, setSlide] = useState(0);
  const array = product.pictures;
  const totalSlides = array.length;

  const handleClickLeft = () => {
    slide === 0 ? setSlide(totalSlides - 1) : setSlide(slide - 1);
  };

  const handleClickRight = () => {
    slide === totalSlides - 1 ? setSlide(0) : setSlide(slide + 1);
  };

  return (
    <div className="carrousel">
      <div
        className="carrousel_img"
        style={{ backgroundImage: `url(${array[slide]})` }}
      >
        <div className="icons_situation">
          <div>
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="left"
              onClick={handleClickLeft}
            />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="right"
              onClick={handleClickRight}
            />
          </div>
        </div>
        <span className="slide-count">
          {slide + 1}/{totalSlides}
        </span>
      </div>
    </div>
  );
}
