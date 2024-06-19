import React from 'react';
import './Grid.css';
import data from './../productcard/hotels.json';

function Grid() {

  return <div className="grid grid-cols-4 gap-10">
    {data.map(hotel => (
      <div key={hotel.image} className="card">
        <div key={hotel.name}>
            <img src={hotel.image} alt={`${hotel.name}`} />
            <h2>{hotel.name}</h2>
            <h4>{hotel.location}</h4> 
            <p>{hotel.description}</p>                                                  
        </div> 
        <button className="card-footer">Book Now</button>        
      </div >
    ))
    }
  </div >
}

export default Grid;
