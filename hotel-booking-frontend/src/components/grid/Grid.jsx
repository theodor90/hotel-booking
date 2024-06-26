import React from "react";
import "./Grid.css";
import data from "./../productcard/hotels.json";

function Grid() {
  return (
    <div className="grid">
      {data.map((hotel) => (
        <div key={hotel.image} className="card">
          <div key={hotel.name}>
            <img
              src={hotel.image}
              alt={`${hotel.name}`}
              className="card-image"
            />
            <h2>{hotel.name}</h2>
            <h4>{hotel.location}</h4>
            <p className="hotel-description">{hotel.description}</p>
          </div>
          <div className="card-footer">
            <p className="price-info">{hotel.price}</p>
            <button className="btn btn-blue">Book Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Grid;
