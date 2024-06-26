import { useEffect, useState } from "react";
import "./Grid.css";

function Grid({ type }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url =
      type === "hotels"
        ? "https://localhost:7204/api/Hotels"
        : "https://localhost:7204/api/Rooms";

    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(`Error fetching ${type}:`, error));
  }, [type]);

  return (
    <div className="grid-container">
      {type === "hotels" &&
        data.map((hotel) => (
          <div key={hotel.hotelId} className="hotel-card">
            <div>
              <img
                src={hotel.imgUrl}
                alt={`${hotel.name}`}
              />
              <h2>{hotel.name}</h2>
              <h4>{hotel.location}</h4>
              <p className="hotel-description-text">{hotel.description}</p>
            </div>
            <button className="custom-btn btn-blue">Book Now</button>
          </div>
        ))}
      {type === "rooms" &&
        data.map((room) => (
          <div key={room.roomId} className="room-card">
            <div>
              <img
                src={room.imgUrl}
                alt={`${room.name}`}
              />
              <div>
              <h2>{room.type}</h2>
              <h4>{room.price}</h4>
              <h4>{room.availability}</h4>
            </div>  
            </div>
            <button className="custom-btn btn-blue">Book Now</button>
          </div>
        ))}
    </div>
  );
}

export default Grid;
