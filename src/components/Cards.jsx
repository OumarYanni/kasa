import React from 'react';
import '../style/Cards.css';
import Card from './Card';


function Cards(props) {
    console.log(props.productsList[0].id);
    return (
        <section className='Cards'>{
            props.productsList.map((product) =>
            <Card product={product}/>
        )
        }</section>
    )
}
export default Cards;