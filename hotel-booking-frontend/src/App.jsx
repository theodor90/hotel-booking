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
import Footer from "./components/Footer/Footer";
import Buttons from "./components/Buttons/Buttons";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

const App = () => {
  return (
    <>
      <Buttons />
      <Footer />
    </>
    // <Router>
    //   <Routes>
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route
    //       path="/dashboard"
    //       element={
    //         <PrivateRoute>
    //           <Dashboard />
    //         </PrivateRoute>
    //       }
    //     />
    //   </Routes>
    //   <Footer />
    // </Router>
  );
};

export default App;
