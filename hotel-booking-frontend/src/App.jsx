import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import PropTypes from "prop-types";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Payment from "./pages/payment/Payment";
import Product from "./pages/product/Product";
import Grid from "./components/grid/Grid";
import ProductList from "./pages/productlist/ProductList";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contact/Contact";
import NavBar from "./components/navbar/NavBar";
import HotelListPage from "./pages/hotellistpage/HotelListPage";
import RoomListPage from "./pages/roomlistpage/RoomListPage";
import "./index.css";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

const App = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/product/:roomId" element={<Product />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hotels" element={<HotelListPage />} />
        <Route path="/hotels/:hotelId" element={<RoomListPage />} />

        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
      {!isDashboard && <Footer />}
    </>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
