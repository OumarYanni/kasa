import React from "react";
import { Link } from "react-router-dom";
import "../style/Cards.css";

function Card({ id, cover, title }) {
  return (
    <Link to={`/products/${id}`}>
      <article className="article_Cards">
        <img src={cover} alt="location" />
        <div className="layer_Cards">
          <p className="p_Cards">{title}</p>
        </div>
      </article>
    </Link>
  );
}

export default Card;
