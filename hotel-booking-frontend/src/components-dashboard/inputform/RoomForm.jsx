import React, { useState } from "react";
import "./InputForm.css";

export default function RoomForm({ hotels, onRoomAdded, onCancel }) {
  const [roomType, setRoomType] = useState("");
  const [hotelId, setHotelId] = useState("");
  const [price, setPrice] = useState("");
  const [availability, setAvailability] = useState("Available");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRoom = {
      roomType,
      hotelId,
      price: parseFloat(price),
      availability: availability === "Available",
    };
    onRoomAdded(newRoom);
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <div className="input-form-group">
        <label>Room Type:</label>
        <input
          type="text"
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Hotel:</label>
        <select
          value={hotelId}
          onChange={(e) => setHotelId(e.target.value)}
          required
        >
          <option value="" disabled>
            Select a hotel
          </option>
          {hotels.map((hotel) => (
            <option key={hotel.hotelId} value={hotel.hotelId}>
              {hotel.hotelName}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Availability:</label>
        <select
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          required
        >
          <option value="Available">Available</option>
          <option value="Not Available">Not Available</option>
        </select>
      </div>
      <div className="form-buttons">
        <button type="submit" className="btn btn-blue">
          Add Room
        </button>
        <button type="button" className="btn btn-red" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
