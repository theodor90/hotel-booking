import React, { Fragment, useState } from "react";
import { useNavigate } from 'react-router-dom';
import api from "../../services/api";
import './Form.css'

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await api.login(email, password);
            localStorage.setItem('token', response.data);
            navigate('/dashboard');
        } catch (err) {
            console.error('Error details:', err.response.data);
            setError('Login failed. Please try again.');
        }
    };

    return (
        <div className="form-container">
            <form action="action_page.php" method="post" onSubmit={handleLogin}>
                   <h3 className="login-title">Login</h3>
                    <hr />
                    <div className="form-group">
                        <label htmlFor="formUserEmail"><b>Email</b></label>
                        <input
                            type="text"
                            placeholder="Enter email"
                            name="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="formPassword"><b>Password</b></label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn-login-right">Login</button>

                    <div className="form-group">
                        <input id="form-checkbox" type="checkbox" name="remember" checked="checked" />
                        <label htmlFor="formRemember">Remember me</label>
                    </div>
                <div className="container">
                    <button type="button" className="btn-cancel">Cancel</button>
                    <span className="forgot-password"> Forgot <a href="#">password?</a></span>
                </div>
            </form>
            {error && <p>{error}</p>}
        </div>

    )
}

export default LoginForm;
