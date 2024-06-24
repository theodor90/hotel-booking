import React, { useState, useEffect } from "react";
import BookingForm from "../../components-dashboard/inputform/BookingForm"; // Make sure to create this component
import "../../components-dashboard/dashboardcss/DashboardBookings.css";

export default function DashboardBookings() {
  const [bookings, setBookings] = useState([]);
  const [users, setUsers] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [showInputForm, setShowInputForm] = useState(false);

  useEffect(() => {
    fetch("https://localhost:7204/api/Bookings")
      .then((response) => response.json())
      .then((data) => setBookings(data))
      .catch((error) => console.error("Error fetching bookings:", error));

    fetch("https://localhost:7204/api/Users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));

    fetch("https://localhost:7204/api/Rooms")
      .then((response) => response.json())
      .then((data) => setRooms(data))
      .catch((error) => console.error("Error fetching rooms:", error));

    fetch("https://localhost:7204/api/Hotels")
      .then((response) => response.json())
      .then((data) => setHotels(data))
      .catch((error) => console.error("Error fetching hotels:", error));
  }, []);

  const handleBookingAdded = (newBooking) => {
    setBookings([...bookings, newBooking]);
    setShowInputForm(false);
  };

  const handleCancelForm = () => {
    setShowInputForm(false);
  };

  const getUserName = (userId) => {
    const user = users.find((user) => user.userId === userId);
    return user ? user.userName : "Unknown User";
  };

  const getHotelName = (roomId) => {
    const room = rooms.find((room) => room.roomId === roomId);
    if (room) {
      const hotel = hotels.find((hotel) => hotel.hotelId === room.hotelId);
      return hotel ? hotel.hotelName : "Unknown Hotel";
    }
    return "Unknown Hotel";
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Bookings</h2>
        <button className="btn btn-blue" onClick={() => setShowInputForm(true)}>
          + Add Booking
        </button>
      </div>

      {showInputForm && (
        <BookingForm
          onBookingAdded={handleBookingAdded}
          onCancel={handleCancelForm}
          users={users}
          rooms={rooms}
          hotels={hotels}
        />
      )}

      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Hotel</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
            <th>Status</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.bookingId}>
              <td>{getUserName(booking.userId)}</td>
              <td>{getHotelName(booking.roomId)}</td>
              <td>{new Date(booking.checkInDate).toLocaleDateString()}</td>
              <td>{new Date(booking.checkOutDate).toLocaleDateString()}</td>
              <td
                style={{
                  color:
                    booking.status === "Paid"
                      ? "var(--green)"
                      : booking.status === "Pending"
                      ? "var(--yellow)"
                      : booking.status === "Declined"
                      ? "var(--red)"
                      : "inherit",
                }}
              >
                {booking.status}
              </td>
              <td>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (
                      window.confirm(
                        `Are you sure you want to delete booking with ID ${booking.bookingId}?`
                      )
                    ) {
                      // Implement delete functionality
                      fetch(
                        `https://localhost:7204/api/Bookings/${booking.bookingId}`,
                        {
                          method: "DELETE",
                        }
                      )
                        .then((response) => {
                          if (response.ok) {
                            const updatedBookings = bookings.filter(
                              (b) => b.bookingId !== booking.bookingId
                            );
                            setBookings(updatedBookings);
                          } else {
                            throw new Error("Failed to delete booking");
                          }
                        })
                        .catch((error) =>
                          console.error("Error deleting booking:", error)
                        );
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
