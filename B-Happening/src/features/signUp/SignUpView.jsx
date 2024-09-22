import React from 'react';
import './SignUp.css';
import DpLogo from '../../assets/DP_Logo.png';

function SignUpView() {
    return (
        <div className='SignUp-Section'>
            <h1>B-Hapenning</h1>
            <img className="SignUp-logo" src={ DpLogo } />
            <div className="SignUp-form">
                <h1>Sign Up </h1>
                <input type="text" placeholder="Username"></input>
                <input type="password" placeholder="Password"></input>
                <button>SignUp</button>
            </div>
        </div>
    );
}

export default SignUpView;