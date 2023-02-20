import Collapse from './Collapse';

import '../style/collapses.css';
import React, { useState } from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
//import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


function Collapses(props) {
    const [ visible, setVisible ] = useState (false);
    const display=() => {
        setVisible(!visible);
    }

    console.log(props.product);
    console.log(props.collapseInformation);

    
    return (

        <div className="collapse">
     
            <div> 
                {props.product ?         
                <Collapse prod={props.product}/> :
                props.collapseInformation?.map((info) =>                             
                <Collapse info={info}/>
               ) 
        } 
            </div>                         
             
        </div>
                    
        )
        
}

export default Collapses;