import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import "./RoomListPage.css"; // Ensure this includes your button styles
import "../../css/Buttons.css";
import Product from "../product/Product";

const RoomListPage = () => {
  const { hotelId } = useParams();
  const [rooms, setRooms] = useState([]);
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const fetchHotelAndRooms = async () => {
      try {
        const hotelResponse = await fetchHotel();
        const roomsResponse = await fetchRooms(hotelId);

        setHotel(hotelResponse);
        setRooms(roomsResponse);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchHotelAndRooms();
  }, [hotelId]);

  const fetchHotel = () => {
    return fetch(`https://localhost:7204/api/Hotels/${hotelId}`)
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error fetching hotel:", error);
        return null;
      });
  };

  const fetchRooms = (hotelId) => {
    return fetch(`https://localhost:7204/api/Rooms`)
      .then((response) => response.json())
      .then((rooms) =>
        rooms.filter((room) => room.hotelId === parseInt(hotelId))
      )
      .catch((error) => {
        console.error("Error fetching rooms:", error);
        return [];
      });
  };

  const handleClick = (roomId) => {
    <Product roomId={roomId} />;
  };

  return (
    <Container className="room-list-page" maxWidth="lg">
      {hotel && (
        <div>
          <Typography
            variant="h4"
            component="h1"
            className="page-title"
            gutterBottom
          >
            Rooms in {hotel.hotelName}
          </Typography>
          <Grid container spacing={4}>
            {rooms.map((room) => (
              <Grid item key={room.roomId} xs={12}>
                <Paper elevation={3}>
                  <Card className="room-card">
                    {room.imgUrl ? (
                      <CardMedia
                        component="img"
                        alt={room.name}
                        height="200"
                        image={room.imgUrl}
                      />
                    ) : (
                      <div className="placeholder-image">
                        Image not available
                      </div>
                    )}
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="room-type"
                      >
                        {room.roomType}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="room-description"
                      >
                        {room.description}
                      </Typography>
                      <Typography variant="h6" className="room-price">
                        Price: ${room.price}
                      </Typography>
                      <button
                        className="btn btn-green"
                        onClick={() => handleClick(rooms.roomId)}
                      >
                        Book Now
                      </button>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </Container>
  );
};

export default RoomListPage;
