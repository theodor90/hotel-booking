import React, { useState, useEffect } from "react";
import InputForm from "../../components-dashboard/inputform/InputForm";
import "../../components-dashboard/dashboardcss/DashboardHotels.css";

export default function DashboardHotels() {
  const [hotels, setHotels] = useState([]);
  const [showInputForm, setShowInputForm] = useState(false);

  useEffect(() => {
    fetch("https://localhost:7204/api/Hotels")
      .then((response) => response.json())
      .then((data) => setHotels(data))
      .catch((error) => console.error("Error fetching hotels:", error));
  }, []);

  const toggleInputForm = () => {
    setShowInputForm(!showInputForm);
  };

  const deleteHotel = (hotelId) => {
    fetch(`https://localhost:7204/api/Hotels/${hotelId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          const updatedHotels = hotels.filter(
            (hotel) => hotel.hotelId !== hotelId
          );
          setHotels(updatedHotels);
        } else {
          throw new Error("Failed to delete hotel");
        }
      })
      .catch((error) => console.error("Error deleting hotel:", error));
  };

  const handleHotelAdded = (newHotel) => {
    setHotels([...hotels, newHotel]);
    setShowInputForm(false);
  };

  const handleCancelForm = () => {
    setShowInputForm(false);
  };

  return (
    <div className="dashboard-hotels">
      <div className="dashboard-hotels-header">
        <div>
          <h2 style={{ display: "inline" }}>Hotels</h2>
        </div>
        <button className="btn btn-blue" onClick={toggleInputForm}>
          Add Hotel
        </button>
      </div>

      {showInputForm && (
        <InputForm
          onHotelAdded={handleHotelAdded}
          onCancel={handleCancelForm}
        />
      )}

      <table>
        <thead>
          <tr>
            <th>Hotel</th>
            <th>Location</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel) => (
            <tr key={hotel.hotelId}>
              <td>{hotel.hotelName}</td>
              <td>{hotel.location}</td>
              <td>
                {/* Sort out function */}
                {/* <a href="#">Edit</a> |&nbsp; */}
                <a
                  href="#"
                  onClick={() => {
                    if (
                      window.confirm(
                        `Are you sure you want to delete "${hotel.hotelName}"?`
                      )
                    ) {
                      deleteHotel(hotel.hotelId);
                    }
                  }}
                >
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
