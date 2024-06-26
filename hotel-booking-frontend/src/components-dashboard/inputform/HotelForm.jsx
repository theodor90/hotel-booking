import React, { useState } from "react";
import "./InputForm.css";

export default function InputForm({ onHotelAdded, onCancel }) {
  const [formData, setFormData] = useState({
    hotelName: "",
    location: "",
    description: "",
    imgUrl: "",
  });
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (
      formData.hotelName.trim() === "" ||
      formData.location.trim() === "" ||
      formData.description.trim() === ""
    ) {
      setError("Please fill out all fields");
      return;
    }

    setError("");

    fetch("https://localhost:7204/api/Hotels", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        hotelName: formData.hotelName,
        location: formData.location,
        description: formData.description,
        imgUrl: formData.imgUrl,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setFormData({
          hotelName: "",
          location: "",
          description: "",
          imgUrl: "",
        });
        onHotelAdded(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleCancel() {
    setFormData({
      hotelName: "",
      location: "",
      description: "",
      imgUrl: "",
    });
    setError("");
    onCancel(); // Trigger onCancel function passed from DashboardHotels
  }

  return (
    <form className="input-form">
      <div className="input-form-group">
        <label htmlFor="hotelName">Name</label>
        <input
          type="text"
          id="hotelName"
          name="hotelName"
          placeholder="Enter name"
          value={formData.hotelName}
          onChange={handleChange}
        />
      </div>
      <div className="input-form-group">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Enter location"
          value={formData.location}
          onChange={handleChange}
        />
      </div>
      <div className="input-form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Enter description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div className="input-form-group">
        <label htmlFor="imgUrl">Image URL</label>
        <input
          type="text"
          id="imgUrl"
          name="imgUrl"
          placeholder="Enter image url"
          value={formData.imgUrl}
          onChange={handleChange}
        />
      </div>
      {error && <p style={{ color: "var(--red)" }}>{error}</p>}
      <div>
        <button className="btn btn-blue" onClick={handleSubmit}>
          Add Hotel
        </button>
        <button className="btn btn-red" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
