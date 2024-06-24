import axios from "axios";

const API_URL = "https://localhost:7204/api";

// Authentication
const register = (userName, email, password) => {
  return axios.post(`${API_URL}/users/register`, {
    userName,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios.post(`${API_URL}/users/login`, {
    email,
    password,
  });
};

// Bookings
const getBookings = () => axios.get(`${API_URL}/bookings`);
const getBooking = (id) => axios.get(`${API_URL}/bookings/${id}`);
const createBooking = (booking) => axios.post(`${API_URL}/bookings`, booking);
const updateBooking = (id, booking) =>
  axios.put(`${API_URL}/bookings/${id}`, booking);
const deleteBooking = (id) => axios.delete(`${API_URL}/bookings/${id}`);

// Hotels
const getHotels = () => axios.get(`${API_URL}/hotels`);
const getHotel = (id) => axios.get(`${API_URL}/hotels/${id}`);
const createHotel = (hotel) => axios.post(`${API_URL}/hotels`, hotel);
const updateHotel = (id, hotel) => axios.put(`${API_URL}/hotels/${id}`, hotel);
const deleteHotel = (id) => axios.delete(`${API_URL}/hotels/${id}`);

// Rooms
const getRooms = () => axios.get(`${API_URL}/rooms`);
const getRoom = (id) => axios.get(`${API_URL}/rooms/${id}`);
const createRoom = (room) => axios.post(`${API_URL}/rooms`, room);
const updateRoom = (id, room) => axios.put(`${API_URL}/rooms/${id}`, room);
const deleteRoom = (id) => axios.delete(`${API_URL}/rooms/${id}`);

export default {
  register,
  login,
  getBookings,
  getBooking,
  createBooking,
  updateBooking,
  deleteBooking,
  getHotels,
  getHotel,
  createHotel,
  updateHotel,
  deleteHotel,
  getRooms,
  getRoom,
  createRoom,
  updateRoom,
  deleteRoom,
};
