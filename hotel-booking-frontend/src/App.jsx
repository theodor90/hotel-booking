import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import PropTypes from "prop-types";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
