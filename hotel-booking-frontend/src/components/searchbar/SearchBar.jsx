import { useState, useEffect } from "react";
import "./SearchBar.css";
import "../../css/Buttons.css";

function SearchBar({ onSearch }) {
  const [hotels, setHotels] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState("");

  useEffect(() => {
    fetch("https://localhost:7204/api/Hotels")
      .then((response) => response.json())
      .then((data) => {
        // Extract unique destinations
        const uniqueDestinations = [
          ...new Set(data.map((hotel) => hotel.location)),
        ];
        setDestinations(uniqueDestinations);
        setHotels(data);
      })
      .catch((error) => console.error("Error fetching hotels:", error));
  }, []);

  const handleDestinationChange = (event) => {
    setSelectedDestination(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(selectedDestination);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div>
        <h6>Destination</h6>
        <select
          name="destination"
          id="destination"
          value={selectedDestination}
          onChange={handleDestinationChange}
          required
        >
          <option value="" disabled>
            Select destination
          </option>
          {destinations.map((destination) => (
            <option key={destination} value={destination}>
              {destination}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h6>From</h6>
        <input type="date" required />
      </div>
      <div>
        <h6>To</h6>
        <input type="date" required />
      </div>
      <button className="btn btn-blue">Find</button>
    </form>
  );
}

export default SearchBar;
// WORKING
