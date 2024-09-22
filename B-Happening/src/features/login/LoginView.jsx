import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import DpLogo from '../../assets/DP_Logo.png';


function LoginView() {

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Here you would typically handle authentication
        // For now, we'll just navigate to the dashboard
        navigate('/Dashboard');
    };

    return (
        <div className='Login-Section'>
            <h1>B-Hapenning</h1>
            <img className="Login-logo" src={ DpLogo } />
            <div className="login-form">
                <h1>Login</h1>
                <h6>Sign Up Here</h6>
                <input type="text" placeholder="Username"></input>
                <input type="password" placeholder="Password"></input>
                <button onClick={handleLogin} >Login</button>
            </div>
        </div>
    );
}

export default LoginView;