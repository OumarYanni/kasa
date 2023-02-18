import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Collapses from '../components/Collapses';
import collapseInformation from '../collapse/collapse.json';
import background_apropos from '../assets/bg.jpg';
import '../style/apropos.css';

function Apropos() {
  
  return (
    <>
        <Header/>
        <div className="background">
          <img className='background_apropos' src={background_apropos} alt='background a propose'/>
        </div>
        <Collapses collapseInformation={collapseInformation} />
        <Footer />
    </>
  )
}

export default Apropos;