// src/components/Login.jsx
import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className="login-container">
            <div className="image-section">
                <img src={'https://imgmedia.lbb.in/media/2019/08/5d662c8ea84656a7661be92a_1566977166741.jpg'} alt="Homefood" />
                <div className="image-text">
                    <h2>Need some food, yo?</h2>
                    <p>C'mon and order from nearby  food delivery and pickup restaurants</p>
                </div>
            </div>
            <div className="form-section">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
      
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                 <Link to='/home'>  <button type="submit" className="login-button">Login</button></Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
