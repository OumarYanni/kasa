import React from 'react';
import '../style/host.css';

function Host({product}) {  
    
    return (
        <>
        <div className="host">            
            <p className='host_name'>{product.host.name}</p>
            <img src={product.host.picture} alt={product.host.name} className="host_picture"/>            
        </div>
        </>
    );
}

export default Host;