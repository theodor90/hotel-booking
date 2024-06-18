import React from 'react';
import "./ProductCard.css"
import data from "./hotels.json";

const ProductCard = () => {
  return (
      <div className="container">
        {data.map(hotel => {
            return(
              <div className="card" key={hotel.name}>
                    <img src={hotel.image} alt={`${hotel.name}`} className="object-cover rounded-md w-60 shadow-md" />
                    <p>{hotel.name}</p>
                    <p>{hotel.location}</p> 
                    <p>{hotel.description}</p> 
                    <button className="btn-dark-blue">Book Now</button>                                       
                </div>
                )
            })
        }
      </div>
  );
};

export default ProductCard;
