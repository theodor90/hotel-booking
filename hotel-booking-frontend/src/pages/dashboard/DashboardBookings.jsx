import React, { useState, useEffect } from "react";
import BookingForm from "../../components-dashboard/inputform/BookingForm";
import "../../components-dashboard/dashboardcss/DashboardBookings.css";

export default function DashboardBookings() {
  const [bookings, setBookings] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [showInputForm, setShowInputForm] = useState(false);
  const [editBookingData, setEditBookingData] = useState(null);

  useEffect(() => {
    fetchBookings();
    fetchRooms();
    fetchHotels();
  }, []);

  const fetchBookings = () => {
    fetch("https://localhost:7204/api/Bookings")
      .then((response) => response.json())
      .then((data) => setBookings(data))
      .catch((error) => console.error("Error fetching bookings:", error));
  };

  const fetchRooms = () => {
    fetch("https://localhost:7204/api/Rooms")
      .then((response) => response.json())
      .then((data) => setRooms(data))
      .catch((error) => console.error("Error fetching rooms:", error));
  };

  const fetchHotels = () => {
    fetch("https://localhost:7204/api/Hotels")
      .then((response) => response.json())
      .then((data) => setHotels(data))
      .catch((error) => console.error("Error fetching hotels:", error));
  };

  const handleBookingAdded = (newBooking) => {
    fetchBookings();
    setShowInputForm(false);
  };

  const handleBookingUpdated = (updatedBooking) => {
    fetchBookings();
    setShowInputForm(false);
    setEditBookingData(null);
  };

  const handleEdit = (booking) => {
    setEditBookingData(booking);
    setShowInputForm(true);
  };

  const handleCancelForm = () => {
    setShowInputForm(false);
    setEditBookingData(null);
  };

  const getHotelName = (roomId) => {
    const room = rooms.find((room) => room.roomId === roomId);
    if (room) {
      const hotel = hotels.find((hotel) => hotel.hotelId === room.hotelId);
      return hotel ? hotel.hotelName : "Unknown Hotel";
    }
    return "Unknown Hotel";
  };

  const getRoomType = (roomId) => {
    const room = rooms.find((room) => room.roomId === roomId);
    return room ? room.roomType : "Unknown Room";
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
          onBookingUpdated={handleBookingUpdated}
          onCancel={handleCancelForm}
          rooms={rooms}
          hotels={hotels}
          editBookingData={editBookingData}
          fetchBookings={fetchBookings} // Pass fetchBookings as a prop
        />
      )}

      <table>
        <thead>
          <tr>
            <th>Guest Name</th>
            <th>Guest Email</th>
            <th>Guest Phone</th>
            <th>Hotel</th>
            <th>Room</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
            <th>Status</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.bookingId}>
              <td>{booking.guestName}</td>
              <td>{booking.guestEmail}</td>
              <td>{booking.guestPhone}</td>
              <td>{getHotelName(booking.roomId)}</td>
              <td>{getRoomType(booking.roomId)}</td>
              <td>{new Date(booking.checkInDate).toLocaleDateString()}</td>
              <td>{new Date(booking.checkOutDate).toLocaleDateString()}</td>
              <td>{booking.status}</td>
              <td>
                <button onClick={() => handleEdit(booking)}>Edit</button>
                <button
                  onClick={() => {
                    if (
                      window.confirm(
                        `Are you sure you want to delete booking with ID ${booking.bookingId}?`
                      )
                    ) {
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
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
