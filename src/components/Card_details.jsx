import React from 'react';
import '../style/Cards.css';

const Card_details = (props) => {
    console.log(props.product.title);
  return (
    <article className='article_Cards'>
            
        <img src={props.product.cover} alt='location' key={props.product.cover}/>
        <div className='layer_Cards'>
            <p className='p_Cards' key={props.product.title}>{props.product.title}</p>
        </div>

    </article> 

  )
}

export default Card_details