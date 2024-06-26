import { useEffect, useState } from "react";
import "./Grid.css";

function Grid() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7204/api/Hotels")
      .then((response) => response.json())
      .then((data) => setHotels(data))
      .catch((error) => console.error("Error fetching hotels:", error));
  }, []);
  return (
    // RENAME ALL CLASSES
    <div className="grid">
      {hotels.map((hotel) => (
        <div key={hotel.hotelId} className="card">
          <div>
            <img
              src={hotel.imgUrl}
              alt={`${hotel.name}`}
              className="card-image"
            />
            <h2>{hotel.name}</h2>
            <h4>{hotel.location}</h4>
            <p className="hotel-description">{hotel.description}</p>
          </div>
          <button className="btn btn-blue">Book Now</button>
        </div>
      ))}
    </div>
  );
}

export default Grid;
