import '../style/tags.css';


function Tags({product}) {
    console.log(product.tags);
    return (
        <div className="tags">    
            <>              
                <h1 className="housing_title">{product.title}</h1>
                <p className="housing_location">{product.location}</p>
                <div className='tag_container'>
                    {product.tags.map((el, index) =>
                   
                    <span key={index} className='housing_tag'>{el}</span>
                       
                    )}   
                </div>                  
            </>        
        </div>
    )
}

export default Tags;