import React from "react";
import { useParams } from "react-router-dom";
import '../style/logement.css';
import Header from '../components/Header';
import Tags from "../components/Tags";
import Rate from "../components/Rate";
import Host from "../components/Host";
import Footer from "../components/Footer";
import Collapses from "../components/Collapses";
import Untraceable from "../pages/Untraceable";
import productsList from "../products/products.json";
import { Carrousel } from '../components/Carrousel';
import '../style/collapses.css';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';



function Logement () {
    const [visible, setVisible] = useState(false);
const display = () => {
  setVisible((prevVisible) => !prevVisible);
};
const { id } = useParams();
console.log(id);

const product = productsList.find((p) => p.id === id);
if (!product) {
  return <Untraceable />;
}

console.log(product);




    return (
        <>    
            <Header />           
             <Carrousel product={product}/>    
            <div className="tags_host_rate">
                <div className="tags">
                    <Tags product={product}/>
                </div>
                <div className="host_rate">
                    <Host product={product}/>            
                    <Rate product={product}/> 
                </div>
            </div>
            <Collapses product={product}/>          
            <Footer/>
        </>
      
    )
}
export default Logement;