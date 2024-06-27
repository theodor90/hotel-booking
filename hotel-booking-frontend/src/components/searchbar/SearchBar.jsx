import { useState, useEffect } from "react";
import "./SearchBar.css";
import "../../css/Buttons.css";

function SearchBar() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7204/api/Hotels")
      .then((response) => response.json())
      .then((data) => setHotels(data))
      .catch((error) => console.error("Error fetching hotels:", error));
  }, []);

  return (
    <div className="search-bar">
      <div>
        <h6>Destination</h6>
        <select name="destination" id="destination">
          <option value="" disabled selected>
            Select hotel
          </option>
          {hotels.map((hotel) => (
            <option key={hotel.hotelId} value={hotel.location}>
              {hotel.location}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h6>From</h6>
        <input type="date" />
      </div>
      <div>
        <h6>To</h6>
        <input type="date" />
      </div>
      <button className="btn btn-blue">Find</button>
    </div>
  );
}

export default SearchBar;
