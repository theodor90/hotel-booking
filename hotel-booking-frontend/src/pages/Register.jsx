import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/form/RegisterForm';
import api from '../services/api';

const Register = () => {
    return (
        <div>
        <RegisterForm />
        </div>
    );
};

export default Register;
