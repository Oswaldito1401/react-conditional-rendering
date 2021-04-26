import React from 'react';

import './product-row.style.css';

const ProductRow = (props) => {
    return (
        <div className="product-row-container">
        {

         props.product.name === "name"
         
         ?
        <span className= "name"  > {props.product.name} </span>
        :
        <span> {props.product.name}  </span>
        
        
        }
        
      
        {

         props.product.gender === "gender"
         
         ?
        <span className= "gender"  > {props.product.gender}  </span>
        :
        <span> {props.product.gender}  </span>
        
        
        }

        
         
        {

          props.product.note <= 2.9  
          ?
          <span className= "note" > {props.product.note}</span> 
          :
          <span> {props.product.note } </span> 

        
          
        }
        
       
         

         
          

             </div>
    );
}

export default ProductRow;