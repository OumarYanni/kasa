import React from 'react';
import { Link } from "react-router-dom";
import '../style/Cards.css';

function Cards(props) {
  return (
    <section className='Cards'>
      {props.productsList.map((product) => (
        <Link to={`/products:${product.id}`} key={product.id}>
          <article className='article_Cards'>
            <img src={product.cover} alt='location' key={product.cover} />
            <div className='layer_Cards'>
              <p className='p_Cards' key={product.title}>{product.title}</p>
            </div>
          </article>
        </Link>
      ))}
    </section>
  );
}

export default Cards;
