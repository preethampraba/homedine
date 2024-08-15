import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:7777/api/login', {
                email,
                password
            });
            console.log('Login successful:', response.data);

            // Show success toast
            toast.success('Login Successful!', {
                onClose: () => {
                    // Redirect to home page after 3 seconds
                    setTimeout(() => {
                        navigate('/home');
                    }, 500);
                },
                autoClose: 2000 // Close the toast after 3 seconds
            });
        } catch (error) {
            console.error('Error logging in:', error);
            toast.error('Login Failed. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <div className="image-section">
                <img src={'https://imgmedia.lbb.in/media/2019/08/5d662c8ea84656a7661be92a_1566977166741.jpg'} alt="Homefood" />
                <div className="image-text">
                    <h2>Need some food, yo?</h2>
                    <p>C'mon and order from nearby food delivery and pickup restaurants</p>
                </div>
            </div>
            <div className="form-section">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="email">Email id</label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                    <button type="submit" className="login-button">Login</button>
                    <br /><br />
                    Don't have an account? <Link to='/register'>register here</Link>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
