import React from 'react';
import "./ProductCard.css"
import data from "./hotels.json";

const ProductCard = () => {
  return (
      <div className="container">
        {data.map(hotel => {
            return(
              <div className="card" key={hotel.name}>
                <div>
                <img src={hotel.image} alt={`${hotel.name}`} className="image"/>
                    <h2>{hotel.name}</h2>
                    <h4>{hotel.location}</h4>
                </div>
                <div>
                <p className="hotel-description">{hotel.description}</p> 
                <p>{hotel.details}</p>
                </div>
                <div className="card-footer">
                <p className="price">{hotel.price}</p>
                <button className="btn btn-blue">Book Now</button>
                </div>                                                                            
              </div>
                )
            })
        }       
        
        
      </div>
  );
};

export default ProductCard;
