import React, { useState, useEffect } from "react";
import "../../components-dashboard/dashboardcss/DashboardOverview.css";

export default function DashboardOverview() {
  const [hotelCount, setHotelCount] = useState(0);
  const [bookingCount, setBookingCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [roomCount, setRoomCount] = useState(0);
  const [availableRoomCount, setAvailableRoomCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hotelResponse = await fetch("https://localhost:7204/api/Hotels");
        const bookingResponse = await fetch(
          "https://localhost:7204/api/Bookings"
        );
        const userResponse = await fetch("https://localhost:7204/api/Users");
        const roomResponse = await fetch("https://localhost:7204/api/Rooms");

        if (
          !hotelResponse.ok ||
          !bookingResponse.ok ||
          !userResponse.ok ||
          !roomResponse.ok
        ) {
          throw new Error("Failed to fetch data");
        }

        const hotelData = await hotelResponse.json();
        const bookingData = await bookingResponse.json();
        const userData = await userResponse.json();
        const roomData = await roomResponse.json();

        setHotelCount(hotelData.length);
        setBookingCount(bookingData.length);
        setUserCount(userData.length);
        setRoomCount(roomData.length);

        // Calculate available rooms
        const availableRooms = roomData.filter(
          (room) => room.availability === true
        );
        setAvailableRoomCount(availableRooms.length);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error as needed
      }
    };

    fetchData();
  }, []);

  return (
    <div className="overview">
      <div className="overview-header">
        <h2>Overview</h2>
      </div>

      <div className="overview-row">
        <div className="overview-card overview-col">
          <h5>Hotels</h5>
          <h2>{hotelCount}</h2>
        </div>
        <div className="overview-card overview-col">
          <h5>Bookings</h5>
          <h2>{bookingCount}</h2>
        </div>
        <div className="overview-card overview-col">
          <h5>Available Rooms</h5>
          <h2>
            {availableRoomCount} / {roomCount}
          </h2>
        </div>
        <div className="overview-card overview-col">
          <h5>Users</h5>
          <h2>{userCount}</h2>
        </div>
      </div>
    </div>
  );
}
