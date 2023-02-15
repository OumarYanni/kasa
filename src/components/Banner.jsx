import React from 'react';
//import '../style/header.css';
import background from '../assets/IMG_1_.webp';

function Banner() {
    return (
        <article>
            <img src={background} alt='paysage' className='paysage'/>
            <div className="paysage_dispo">
                <p className='p_paysage'>Chez vous,</p>
                <p className='p_paysage_deux'>partout et ailleurs</p>
            </div>
         </article>
    )

}

export default Banner;