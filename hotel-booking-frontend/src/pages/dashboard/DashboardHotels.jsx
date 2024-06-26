import React, { useState, useEffect } from "react";
import InputForm from "../../components-dashboard/inputform/HotelForm";
import "../../components-dashboard/dashboardcss/DashboardHotels.css";

export default function DashboardHotels() {
  const [hotels, setHotels] = useState([]);
  const [showInputForm, setShowInputForm] = useState(false);
  const [editHotelId, setEditHotelId] = useState(null);

  const fetchHotels = () => {
    fetch("https://localhost:7204/api/Hotels")
      .then((response) => response.json())
      .then((data) => setHotels(data))
      .catch((error) => console.error("Error fetching hotels:", error));
  };

  useEffect(() => {
    fetchHotels();
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
          fetchHotels();
        } else {
          throw new Error("Failed to delete hotel");
        }
      })
      .catch((error) => console.error("Error deleting hotel:", error));
  };

  const handleHotelAdded = (newHotel) => {
    fetchHotels();
    setShowInputForm(false);  // Close the input form
  };

  const handleHotelUpdated = (updatedHotel) => {
    fetchHotels();
    setShowInputForm(false);  // Close the input form
    setEditHotelId(null);     // Reset edit mode
  };

  const handleCancelForm = () => {
    setShowInputForm(false);
    setEditHotelId(null); // Reset edit mode
  };

  const updateHotel = (hotelId) => {
    setEditHotelId(hotelId);
    setShowInputForm(true);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h2 style={{ display: "inline" }}>Hotels</h2>
        </div>
        <button className="btn btn-blue" onClick={toggleInputForm}>
          + Add Hotel
        </button>
      </div>

      {showInputForm && (
        <InputForm
          onHotelAdded={handleHotelAdded}
          onHotelUpdated={handleHotelUpdated}
          onCancel={handleCancelForm}
          editHotelData={hotels.find((hotel) => hotel.hotelId === editHotelId)}
          fetchHotels={fetchHotels} // Pass fetchHotels as a prop
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
                <a href="#" onClick={() => updateHotel(hotel.hotelId)}>
                  Edit
                </a>{" "}
                |&nbsp;
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
