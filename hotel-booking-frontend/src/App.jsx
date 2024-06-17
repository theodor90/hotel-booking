import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Register from './pages/Register';
import Login from './pages/Login';
import Product from "./pages/product/Product";
import Dashboard from './pages/dashboard/Dashboard';
import ProductCard from './components/productcard/ProductCard';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    return token ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

const App = () => {
    return (
        <Router>            
            <ProductCard/>  
            <Routes>            
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />                
                <Route path="/product" element={<Product />} />
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />                
            </Routes>            
        </Router>
    );
};

export default App;

