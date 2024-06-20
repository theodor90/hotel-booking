import { useEffect, useState } from "react";
import "../../components-dashboard/dashboardcss/DashboardRooms.css";

export default function DashboardRooms() {
  const [rooms, setRooms] = useState([]);
  const [hotels, setHotels] = useState({});

  useEffect(() => {
    const fetchRoomsAndHotels = async () => {
      try {
        // Fetch rooms data
        const roomsResponse = await fetch("https://localhost:7204/api/Rooms");
        if (!roomsResponse.ok) {
          throw new Error("Failed to fetch rooms");
        }
        const roomsData = await roomsResponse.json();
        setRooms(roomsData);

        // Extract unique hotelIds from rooms data
        const hotelIds = [...new Set(roomsData.map((room) => room.hotelId))];

        // Fetch hotels data for each hotelId
        const hotelsDataPromises = hotelIds.map(async (hotelId) => {
          const hotelResponse = await fetch(
            `https://localhost:7204/api/Hotels/${hotelId}`
          );
          if (!hotelResponse.ok) {
            throw new Error(`Failed to fetch hotel ${hotelId}`);
          }
          const hotelData = await hotelResponse.json();
          return { [hotelId]: hotelData };
        });

        // Wait for all hotel data promises to resolve
        const hotelsDataArray = await Promise.all(hotelsDataPromises);
        const hotelsData = Object.assign({}, ...hotelsDataArray);
        setHotels(hotelsData);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error state as needed
      }
    };

    fetchRoomsAndHotels();
  }, []);

  return (
    <div className="dashboard-rooms">
      <div className="dashboard-rooms-header">
        <h2>Rooms</h2>
        {/* Sort out function */}
        <button className="btn btn-blue">Add Room</button>
      </div>
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
              <td>{hotels[room.hotelId]?.hotelName || "Hotel Name"}</td>
              <td>{hotels[room.hotelId]?.location || "Location"}</td>
              <td>${room.price}</td>
              <td
                style={{
                  color: room.availability ? "var(--green)" : "var(--red)",
                }}
              >
                {room.availability ? "Available" : "Not Available"}
              </td>
              <td>
                {/* Sort out functions */}
                {/* <a href="#">Edit</a> |&nbsp; */}
                {/* <a href="#">Delete</a> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
