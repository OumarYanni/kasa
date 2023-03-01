import React from "react";
import "../style/banner.css";

function Banner({ imageURL, title, alt = "" }) {
  return (
    <article className="banner">
      <img src={imageURL} alt={alt} className="banner_img" />
      <div>{title && <p className="banner_paragraphe">{title}</p>}</div>
    </article>
  );
}

export default Banner;
