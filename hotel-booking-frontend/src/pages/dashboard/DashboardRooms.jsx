import React, { useEffect, useState } from "react";
import InputForm from "../../components-dashboard/inputform/RoomForm";
import "../../components-dashboard/dashboardcss/DashboardRooms.css";

export default function DashboardRooms() {
  const [rooms, setRooms] = useState([]); // State to hold rooms data
  const [hotels, setHotels] = useState([]); // State to hold hotels data
  const [showInputForm, setShowInputForm] = useState(false); // State to toggle input form visibility
  const [error, setError] = useState(""); // State to manage errors
  const [editRoomId, setEditRoomId] = useState(null); // State to hold room ID for editing

  const fetchRooms = async () => {
    try {
      const roomsResponse = await fetch("https://localhost:7204/api/Rooms");
      if (!roomsResponse.ok) {
        throw new Error("Failed to fetch rooms");
      }
      const roomsData = await roomsResponse.json();
      setRooms(roomsData);
    } catch (error) {
      console.error("Error fetching rooms:", error);
      setError("Failed to fetch rooms. Please try again.");
    }
  };

  const fetchHotels = async () => {
    try {
      const hotelsResponse = await fetch("https://localhost:7204/api/Hotels");
      if (!hotelsResponse.ok) {
        throw new Error("Failed to fetch hotels");
      }
      const hotelsData = await hotelsResponse.json();
      setHotels(hotelsData);
    } catch (error) {
      console.error("Error fetching hotels:", error);
      setError("Failed to fetch hotels. Please try again.");
    }
  };

  useEffect(() => {
    fetchRooms();
    fetchHotels();
  }, []);

  const toggleInputForm = () => {
    setShowInputForm(!showInputForm);
  };

  const deleteRoom = async (roomId) => {
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

      fetchRooms(); // Refresh the room list
    } catch (error) {
      console.error("Error deleting room:", error);
      setError("Failed to delete room. Please try again.");
    }
  };

  const handleRoomAdded = (newRoom) => {
    fetchRooms();
    setShowInputForm(false);  // Close the input form
  };

  const handleRoomUpdated = (updatedRoom) => {
    fetchRooms();
    setShowInputForm(false);  // Close the input form
    setEditRoomId(null);      // Reset edit mode
  };

  const handleCancelForm = () => {
    setShowInputForm(false);
    setEditRoomId(null); // Reset edit mode
  };

  const updateRoom = (roomId) => {
    setEditRoomId(roomId);
    setShowInputForm(true);
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
          onRoomAdded={handleRoomAdded}
          onRoomUpdated={handleRoomUpdated}
          onCancel={handleCancelForm}
          editRoomData={rooms.find((room) => room.roomId === editRoomId)}
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
                <a href="#" onClick={() => updateRoom(room.roomId)}>
                  Edit
                </a>{" "}
                |&nbsp;
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
