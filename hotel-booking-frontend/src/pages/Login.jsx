import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/form/LoginForm';
import api from '../services/api';

const Login = () => {
    return (
        <div>
         <LoginForm />
        </div>
    );
};

export default Login;
