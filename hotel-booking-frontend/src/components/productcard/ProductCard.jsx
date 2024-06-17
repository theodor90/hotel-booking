import React from 'react';
import "./ProductCard.css";

const ProductCard = () => { 
return(
<div className="row">    

      <div className="column">
        <div className="card">
          <img src="./src/assets/images/danai-tsoutreli-unsplash.jpg" className="card-img-top shop-item-image" alt="..."/>                    
          <h4 className="card-title shop-item-title">  Cassandra Hotel </h4>
          <p>Sunshine </p>
          <p className="card-text shop-item-price"> </p>
          <button type="button" className="btn btn-warning mt-auto shop-item-button"><i className="fa-solid fa-cart-shopping "></i>Book Now</button>                    
        </div>
      </div>
  </div>
  )

};

export default ProductCard;