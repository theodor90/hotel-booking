import React from 'react';

const ProductCard = () => { 
return(
<div className="row">
    <div className="column">
      <div className="card">
        <img src="" className="card-img-top shop-item-image" alt=""/>                    
        <h4 className="card-title shop-item-title">  </h4>
        <p className="card-text shop-item-price"> </p>
        <button type="button" className="btn btn-warning mt-auto shop-item-button"><i className="fa-solid fa-cart-shopping "></i>Add To Cart</button>                    
      </div>
    </div>
    
    <div className="column">
        <div className="card">
          <img src="" className="card-img-top shop-item-image" alt="" />                    
          <h4 className="card-title shop-item-title"> </h4>
          <p className="card-text shop-item-price"> </p>
          <button type="button" className="btn btn-warning mt-auto shop-item-button"><i className="fa-solid fa-cart-shopping "></i>Add To Cart</button>                    
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src="" className="card-img-top shop-item-image" alt="..."/>                    
          <h4 className="card-title shop-item-title">  </h4>
          <p className="card-text shop-item-price"> </p>
          <button type="button" className="btn btn-warning mt-auto shop-item-button"><i className="fa-solid fa-cart-shopping "></i>Add To Cart</button>                    
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src="" className="card-img-top shop-item-image" alt="..."/>                    
          <h4 className="card-title shop-item-title">  </h4>
          <p className="card-text shop-item-price"> </p>
          <button type="button" className="btn btn-warning mt-auto shop-item-button"><i className="fa-solid fa-cart-shopping "></i>Add To Cart</button>                    
        </div>
      </div>
  </div>
  )

};

export default ProductCard;