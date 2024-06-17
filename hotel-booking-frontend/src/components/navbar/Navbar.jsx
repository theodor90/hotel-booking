import React from 'react'; 
import { Link } from 'react-router-dom'; 

const Navigation = () => { 
    return (
    <nav>
        <ul>
            <li>
            <li><Link to="/product">Product</Link></li>
                <Link to="/register">Register</Link>
                </li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/dashboard">Dashboard</Link>
                </li>
                </ul>
                </nav>
                ); 
            }; 
    export default Navigation;