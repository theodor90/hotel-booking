import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faKitchenSet,
  faElevator,
  faBath,
  faSquareParking,
  faTv,
  faDog,
  faComputer,
  faSoap,
} from "@fortawesome/free-solid-svg-icons";

export default function Product() {
  const { roomId } = useParams();
  const [room, setRoom] = useState(null);
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [checkInDate, setCheckInDate] = useState(localStorage.getItem("startDate"));
  const [checkOutDate, setCheckOutDate] = useState(localStorage.getItem("endDate"));
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const roomResponse = await fetch(
          `https://localhost:7204/api/Rooms/${roomId}`
        );
        if (!roomResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const roomData = await roomResponse.json();
        setRoom(roomData);

        const hotelResponse = await fetch(
          `https://localhost:7204/api/Hotels/${roomData.hotelId}`
        );
        if (!hotelResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const hotelData = await hotelResponse.json();
        setHotel(hotelData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRoomData();
  }, [roomId]);

  const calculateTotalNights = () => {
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const diffTime = Math.abs(checkOut - checkIn);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // convert time difference to days
  };

  const totalNights = checkInDate && checkOutDate ? calculateTotalNights() : 0;
  const totalPrice = room ? room.price * totalNights : 0;
  const adminFee = totalPrice * 0.05;

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!room || !hotel) {
    return <p>No data available.</p>;
  }

  const handleClick = () => {
    navigate("/payment");
  }

  return (
    <div className="product">
      <img src={room.imgUrl} alt={`${room.roomType} image`} />
      <div className="row">
        <div className="col-left">
          <h2 className="product-title">
            {room.roomType} at {hotel.hotelName}
          </h2>
          <p className="product-availability">
            {room.availability ? "✓ Available" : "X Not Available"}
          </p>
          <table className="amenities-table">
            <tbody>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faWifi} />
                  &nbsp;&nbsp;&nbsp;Free WiFi
                </td>
                <td>
                  <FontAwesomeIcon icon={faKitchenSet} />
                  &nbsp;&nbsp;&nbsp;Kitchenette
                </td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faSoap} />
                  &nbsp;&nbsp;&nbsp;Washer & Dryer
                </td>
                <td>
                  <FontAwesomeIcon icon={faBath} />
                  &nbsp;&nbsp;&nbsp;Bathtub
                </td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faElevator} />
                  &nbsp;&nbsp;&nbsp;Elevator
                </td>
                <td>
                  <FontAwesomeIcon icon={faSquareParking} />
                  &nbsp;&nbsp;&nbsp;Free parking
                </td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faDog} />
                  &nbsp;&nbsp;&nbsp;Pets allowed
                </td>
                <td>
                  <FontAwesomeIcon icon={faTv} />
                  &nbsp;&nbsp;&nbsp;TV
                </td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faComputer} />
                  &nbsp;&nbsp;&nbsp;Dedicated workspace
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-right">
          <div className="split-col">
            <div className="product-input-group">
              <label htmlFor="toDate">Check-in</label>
              <input
                type="date"
                id="toDate"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
              />
            </div>

            <div className="product-input-group">
              <label htmlFor="fromDate">Check-out</label>
              <input
                type="date"
                id="fromDate"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
              />
            </div>
          </div>
          <button className="btn btn-blue" onClick={handleClick}>Book</button>
          <div className="v-line"></div>
          <table className="product-table">
            <tbody>
              <tr className="product-tr">
                <td>
                  <p>
                    ${room.price} x {totalNights}
                  </p>
                </td>
                <td>
                  <p>${totalPrice.toFixed(2)}</p>
                </td>
              </tr>
              <tr className="product-tr">
                <td>
                  <p>Administration fee</p>
                </td>
                <td>
                  <p>${adminFee.toFixed(2)}</p>
                </td>
              </tr>
              <tr className="product-tr">
                <td>
                  <p>Total price</p>
                </td>
                <td>
                  <p>${(totalPrice + adminFee).toFixed(2)}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
