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
                    <h2>{hotel.name}</h2>
                    <h4>{hotel.location}</h4> 
                    <p>{hotel.description}</p> 
                    <button>Book Now</button>                                       
                </div>
                )
            })
        }
      </div>
  );
};

export default ProductCard;
