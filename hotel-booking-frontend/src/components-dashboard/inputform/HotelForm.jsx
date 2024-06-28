import React, { useState, useEffect } from "react";
import "./InputForm.css";

export default function InputForm({
  onHotelAdded,
  onHotelUpdated,
  onCancel,
  editHotelData,
}) {
  const [formData, setFormData] = useState({
    hotelName: "",
    location: "",
    description: "",
    imgUrl: "",
    hotelId: null, // Include hotelId in formData
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (editHotelData) {
      setFormData({
        hotelName: editHotelData.hotelName,
        location: editHotelData.location,
        description: editHotelData.description,
        imgUrl: editHotelData.imgUrl,
        hotelId: editHotelData.hotelId, // Include hotelId in formData for PUT
      });
    } else {
      setFormData({
        hotelName: "",
        location: "",
        description: "",
        imgUrl: "",
        hotelId: null,
      });
    }
  }, [editHotelData]);

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

    const url = editHotelData
      ? `https://localhost:7204/api/Hotels/${formData.hotelId}`
      : "https://localhost:7204/api/Hotels";
    const method = editHotelData ? "PUT" : "POST";

    const body = editHotelData
      ? JSON.stringify({
          hotelId: formData.hotelId,
          hotelName: formData.hotelName,
          location: formData.location,
          description: formData.description,
          imgUrl: formData.imgUrl,
        })
      : JSON.stringify({
          hotelName: formData.hotelName,
          location: formData.location,
          description: formData.description,
          imgUrl: formData.imgUrl,
        });

    console.log("Sending request with body:", body);

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text(); // Read as text first
      })
      .then((text) => {
        return text ? JSON.parse(text) : {}; // Parse if not empty
      })
      .then((data) => {
        console.log("Success:", data);
        if (editHotelData) {
          onHotelUpdated(data);
        } else {
          onHotelAdded(data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("Failed to save hotel data");
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
      hotelId: null,
    });
    setError("");
    onCancel();
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
        <button className="btn-overview btn-blue" onClick={handleSubmit}>
          {editHotelData ? "Update Hotel" : "Add Hotel"}
        </button>
        <button className="btn-overview btn-red" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
