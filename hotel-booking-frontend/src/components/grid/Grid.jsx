import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Grid.css";

function Grid({ type, filter }) {
  const [hotels, setHotels] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [originalRooms, setOriginalRooms] = useState([]);
  const navigate = useNavigate();
  const DISPLAY_LIMIT = 6;

  useEffect(() => {
    fetchHotelsAndRooms();
  }, []);

  useEffect(() => {
    if (hotels.length > 0 && originalRooms.length > 0) {
      filterRooms();
    }
  }, [hotels, filter]);

  const fetchHotelsAndRooms = () => {
    Promise.all([fetchHotels(), fetchRooms()])
      .then(([hotelsData, roomsData]) => {
        setHotels(hotelsData);
        setRooms(roomsData);
        setOriginalRooms(roomsData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const fetchHotels = () => {
    return fetch("https://localhost:7204/api/Hotels")
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error fetching hotels:", error);
        return [];
      });
  };

  const fetchRooms = () => {
    return fetch("https://localhost:7204/api/Rooms")
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error fetching rooms:", error);
        return [];
      });
  };

  const filterRooms = () => {
    const filteredRooms = filter
      ? originalRooms.filter((room) => {
          const hotel = hotels.find((h) => h.hotelId === room.hotelId);
          return (
            hotel &&
            hotel.location.toLowerCase() === filter.toLowerCase().trim()
          );
        })
      : originalRooms;
    setRooms(filteredRooms);
  };

  const shuffleArray = (array) => {
    return array
      .map((item) => ({ item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ item }) => item);
  };

  const getAvailableRoomCount = (hotelId) => {
    return rooms.filter((room) => room.hotelId === hotelId && room.availability)
      .length;
  };

  const hotelMap = hotels.reduce((map, hotel) => {
    map[hotel.hotelId] = hotel;
    return map;
  }, {});

  const handleClick = (roomId) => {
    navigate(`/product/${roomId}`);
  };

  const handleHotelClick = (hotelId) => {
    navigate(`/hotels/${hotelId}`);
  };

  const shuffledHotels = shuffleArray(hotels);
  const shuffledRooms = shuffleArray(rooms);

  return (
    <>
      {type === "hotels" && <h1 className="centered-title">Hotels</h1>}
      <div className="grid-container">
        {type === "hotels" &&
          shuffledHotels.slice(0, DISPLAY_LIMIT).map((hotel) => (
            <div key={hotel.hotelId} className="hotel-card">
              <div>
                {hotel.imgUrl ? (
                  <img src={hotel.imgUrl} alt={`${hotel.hotelName}`} />
                ) : (
                  <div className="placeholder-image">Image not available</div>
                )}
                <h2>{hotel.hotelName}</h2>
                <h4>{hotel.location}</h4>
                <p className="hotel-description-text">{hotel.description}</p>
                <p>Available rooms: {getAvailableRoomCount(hotel.hotelId)}</p>
              </div>
              <button
                className="btn btn-blue"
                onClick={() => handleHotelClick(hotel.hotelId)}
              >
                Book Now
              </button>
            </div>
          ))}
      </div>
      {type === "rooms" && <h1 className="centered-title">Rooms</h1>}
      <div className="grid-container-room">
        {type === "rooms" &&
          shuffledRooms.slice(0, DISPLAY_LIMIT).map((room) => {
            const hotel = hotelMap[room.hotelId];
            return (
              <div key={room.roomId} className="room-card">
                {room.imgUrl ? (
                  <img src={room.imgUrl} alt={`${room.name}`} />
                ) : (
                  <div className="placeholder-image">Image not available</div>
                )}
                <div>
                  <h2>{room.roomType}</h2>
                  <h5>{hotel?.hotelName || "Hotel name not available"}</h5>
                  <h6>{hotel?.location || "Location not available"}</h6>
                </div>
                <div>
                  <h3>Price per night</h3>
                  <h2>${room.price}</h2>
                  <button
                    className="btn btn-blue"
                    onClick={() => handleClick(room.roomId)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Grid;
