import React, { useEffect, useState } from "react";
import InputForm from "../../components-dashboard/inputform/RoomForm";
import "../../components-dashboard/dashboardcss/DashboardRooms.css";

export default function DashboardRooms() {
  const [rooms, setRooms] = useState([]); // State to hold rooms data
  const [hotels, setHotels] = useState([]); // State to hold hotels data
  const [showInputForm, setShowInputForm] = useState(false); // State to toggle input form visibility
  const [error, setError] = useState(""); // State to manage errors

  useEffect(() => {
    // Function to fetch rooms and hotels data from API on component mount
    const fetchData = async () => {
      try {
        // Fetch rooms data
        const roomsResponse = await fetch("https://localhost:7204/api/Rooms");
        if (!roomsResponse.ok) {
          throw new Error("Failed to fetch rooms");
        }
        const roomsData = await roomsResponse.json();
        setRooms(roomsData);

        // Fetch hotels data
        const hotelsResponse = await fetch("https://localhost:7204/api/Hotels");
        if (!hotelsResponse.ok) {
          throw new Error("Failed to fetch hotels");
        }
        const hotelsData = await hotelsResponse.json();
        setHotels(hotelsData);

        setError(""); // Clear any previous errors on successful data fetch
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again.");
      }
    };

    fetchData(); // Call fetchData function on component mount
  }, []);

  const toggleInputForm = () => {
    // Function to toggle input form visibility
    setShowInputForm(!showInputForm);
  };

  const deleteRoom = async (roomId) => {
    // Function to delete a room by ID
    try {
      const response = await fetch(
        `https://localhost:7204/api/Rooms/${roomId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete room");
      }

      // Update rooms state to remove the deleted room
      setRooms(rooms.filter((room) => room.roomId !== roomId));
    } catch (error) {
      console.error("Error deleting room:", error);
      setError("Failed to delete room. Please try again.");
    }
  };

  const addRoom = async (newRoom) => {
    // Function to add a new room
    try {
      const response = await fetch("https://localhost:7204/api/Rooms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRoom),
      });

      if (!response.ok) {
        throw new Error("Failed to add room");
      }

      const addedRoom = await response.json();
      setRooms([...rooms, addedRoom]);
      setShowInputForm(false); // Hide input form after successful addition
      setError(""); // Clear any previous errors
    } catch (error) {
      console.error("Error adding room:", error);
      setError("Failed to add room. Please try again.");
    }
  };

  const handleCancelForm = () => {
    // Function to handle canceling the input form
    setShowInputForm(false); // Hide input form
    setError(""); // Clear any previous errors
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Rooms</h2>
        <button className="btn btn-blue" onClick={toggleInputForm}>
          + Add Room
        </button>
      </div>

      {/* Display error message if there's an error */}
      {error && <p className="error-message">{error}</p>}

      {/* Display input form if showInputForm is true */}
      {showInputForm && (
        <InputForm
          hotels={hotels}
          onRoomAdded={addRoom}
          onCancel={handleCancelForm}
        />
      )}

      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Hotel</th>
            <th>Location</th>
            <th>Price</th>
            <th>Availability</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room.roomId}>
              <td>{room.roomType}</td>
              <td>
                {hotels.find((hotel) => hotel.hotelId === room.hotelId)
                  ?.hotelName || "Hotel Name"}
              </td>
              <td>
                {hotels.find((hotel) => hotel.hotelId === room.hotelId)
                  ?.location || "Location"}
              </td>
              <td>${room.price}</td>
              <td
                style={{
                  color: room.availability ? "var(--green)" : "var(--red)",
                }}
              >
                {room.availability ? "Available" : "Not Available"}
              </td>
              <td>
                {/* Delete room link */}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (
                      window.confirm(
                        `Are you sure you want to delete "${room.roomType}"?`
                      )
                    ) {
                      deleteRoom(room.roomId);
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
