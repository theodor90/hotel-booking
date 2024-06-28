import React, { useState, useEffect } from "react";
import "./InputForm.css";

export default function RoomForm({
  hotels,
  onRoomAdded,
  onRoomUpdated,
  onCancel,
  editRoomData,
}) {
  const [formData, setFormData] = useState({
    roomId: null,
    hotelId: "",
    roomType: "",
    price: "",
    availability: true,
    imgUrl: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (editRoomData) {
      setFormData({
        roomId: editRoomData.roomId,
        hotelId: editRoomData.hotelId.toString(),
        roomType: editRoomData.roomType,
        price: editRoomData.price.toString(),
        availability: editRoomData.availability,
        imgUrl: editRoomData.imgUrl,
      });
    } else {
      setFormData({
        roomId: null,
        hotelId: "",
        roomType: "",
        price: "",
        availability: true,
        imgUrl: "",
      });
    }
  }, [editRoomData]);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      formData.roomType.trim() === "" ||
      formData.hotelId.trim() === "" ||
      formData.price.trim() === ""
    ) {
      setError("Please fill out all fields");
      return;
    }

    setError("");

    const body = {
      roomId: formData.roomId ?? 0,
      hotelId: parseInt(formData.hotelId, 10),
      roomType: formData.roomType,
      price: parseFloat(formData.price),
      availability: formData.availability, // Boolean value
      imgUrl: formData.imgUrl,
    };

    console.log("Request Body:", body);

    const url = editRoomData
      ? `https://localhost:7204/api/Rooms/${formData.roomId}`
      : "https://localhost:7204/api/Rooms";
    const method = editRoomData ? "PUT" : "POST";

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("Response Status:", response.status);
        return response.text().then((text) => {
          if (!response.ok) {
            console.error("Response Error Text:", text);
            throw new Error(text || "Network response was not ok");
          }
          return text ? JSON.parse(text) : {};
        });
      })
      .then((data) => {
        console.log("Response Data:", data);
        if (editRoomData) {
          onRoomUpdated(data);
        } else {
          onRoomAdded(data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("An error occurred. Please try again.");
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "availability") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value === "Available",
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  }

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <h2>{editRoomData ? "Edit Room" : "Add Room"}</h2>
      {error && <p className="error">{error}</p>}
      <div>
        <label>Hotel:</label>
        <select
          name="hotelId"
          value={formData.hotelId}
          onChange={handleChange}
          required
        >
          <option value="">Select Hotel</option>
          {hotels.map((hotel) => (
            <option key={hotel.hotelId} value={hotel.hotelId}>
              {hotel.hotelName}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Room Type:</label>
        <input
          type="text"
          name="roomType"
          value={formData.roomType}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Availability:</label>
        <select
          name="availability"
          value={formData.availability ? "Available" : "Not Available"}
          onChange={handleChange}
          required
        >
          <option value="Available">Available</option>
          <option value="Not Available">Not Available</option>
        </select>
      </div>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          name="imgUrl"
          value={formData.imgUrl}
          onChange={handleChange}
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="btn-overview btn-blue">
          {editRoomData ? "Update" : "Create"}
        </button>
        <button
          type="button"
          className="btn-overview btn-red"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
