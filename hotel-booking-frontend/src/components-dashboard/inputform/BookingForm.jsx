import React, { useState } from "react";
import "./InputForm.css"; // Make sure to include your CSS file for styling

export default function BookingForm({
  onBookingAdded,
  onCancel,
  users,
  rooms,
  hotels,
}) {
  const [formData, setFormData] = useState({
    userId: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: "",
    status: "Pending", // Default status
  });
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (
      formData.userId.trim() === "" ||
      formData.roomId.trim() === "" ||
      formData.checkInDate.trim() === "" ||
      formData.checkOutDate.trim() === ""
    ) {
      setError("Please fill out all fields");
      return;
    }

    setError("");

    // Assuming you have an API endpoint to add bookings
    fetch("https://localhost:7204/api/Bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: formData.userId,
        roomId: formData.roomId,
        checkInDate: formData.checkInDate,
        checkOutDate: formData.checkOutDate,
        status: formData.status,
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
          userId: "",
          roomId: "",
          checkInDate: "",
          checkOutDate: "",
          status: "Pending", // Reset status after successful submission
        });
        onBookingAdded(data); // Notify parent component about the new booking
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
      userId: "",
      roomId: "",
      checkInDate: "",
      checkOutDate: "",
      status: "Pending", // Reset status on cancel
    });
    setError("");
    onCancel(); // Notify parent component about cancellation
  }

  return (
    <form className="input-form">
      <div className="input-form-group">
        <label htmlFor="userId">Customer</label>
        <select
          id="userId"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
        >
          <option value="">Select Customer</option>
          {users.map((user) => (
            <option key={user.userId} value={user.userId}>
              {user.userName}
            </option>
          ))}
        </select>
      </div>
      <div className="input-form-group">
        <label htmlFor="roomId">Room</label>
        <select
          id="roomId"
          name="roomId"
          value={formData.roomId}
          onChange={handleChange}
        >
          <option value="">Select Room</option>
          {rooms.map((room) => (
            <option key={room.roomId} value={room.roomId}>
              {room.roomName} -{" "}
              {
                hotels.find((hotel) => hotel.hotelId === room.hotelId)
                  ?.hotelName
              }
            </option>
          ))}
        </select>
      </div>
      <div className="input-form-group">
        <label htmlFor="checkInDate">Check-in Date</label>
        <input
          type="date"
          id="checkInDate"
          name="checkInDate"
          value={formData.checkInDate}
          onChange={handleChange}
        />
      </div>
      <div className="input-form-group">
        <label htmlFor="checkOutDate">Check-out Date</label>
        <input
          type="date"
          id="checkOutDate"
          name="checkOutDate"
          value={formData.checkOutDate}
          onChange={handleChange}
        />
      </div>
      <div className="input-form-group">
        <label htmlFor="status">Status</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="Pending">Pending</option>
          <option value="Paid">Paid</option>
          <option value="Declined">Declined</option>
        </select>
      </div>
      {error && <p style={{ color: "var(--red)" }}>{error}</p>}
      <div>
        <button className="btn btn-blue" onClick={handleSubmit}>
          Add Booking
        </button>
        <button className="btn btn-red" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
