import React from 'react';
//import '../style/header.css';
import background from '../assets/IMG_1_.png';

function Banner() {
    return (
        <article className='banner'>
            <img src={background} alt='bannière représentant des rochers et la mer' className='banner_img'/>
            <div /*</article>className="paysage_dispo"*/>
                <p className='banner_paragraphe'>Chez vous, partout et ailleurs</p>
            </div>
         </article>
    )

}

export default Banner;