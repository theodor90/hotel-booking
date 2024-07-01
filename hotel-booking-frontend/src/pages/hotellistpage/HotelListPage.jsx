import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Container, Grid, Paper } from "@mui/material";
import "./HotelListPage.css"; // Ensure this includes your button styles
import "../../css/Buttons.css"

const HotelListPage = () => {
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = () => {
    fetch("https://localhost:7204/api/Hotels")
      .then((response) => response.json())
      .then((data) => setHotels(data))
      .catch((error) => {
        console.error("Error fetching hotels:", error);
      });
  };

  const handleHotelClick = (hotelId) => {
    navigate(`/hotels/${hotelId}`);
  };

  return (
    <Container className="hotel-list-page" maxWidth="lg">
      <Typography variant="h4" component="h1" className="page-title" gutterBottom>
        Hotels
      </Typography>
      <Grid container spacing={4}>
        {hotels.map((hotel) => (
          <Grid item key={hotel.hotelId} xs={12} md={6}>
            <Paper elevation={3}>
              <Card className="hotel-card">
                {hotel.imgUrl ? (
                  <CardMedia component="img" alt={hotel.hotelName} height="200" image={hotel.imgUrl} />
                ) : (
                  <div className="placeholder-image">Image not available</div>
                )}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className="hotel-name">
                    {hotel.hotelName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="hotel-location">
                    {hotel.location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="hotel-description">
                    {hotel.description}
                  </Typography>
                  <button className="btn btn-blue" onClick={() => handleHotelClick(hotel.hotelId)}>
                    View Rooms
                  </button>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HotelListPage;
