import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        mobile: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage('');

        axios.post('http://localhost:7777/api/add', formData)
        .then((response) => {
            console.log('User created:', response.data);
            setFormData({
                name: '',
                email: '',
                password: '',
                mobile: '',
            });
            navigate('/login');
        })
        .catch((error) => {
            console.error('Error creating user:', error);

            if (error.response) {
                // Server responded with a status other than 200 range
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
                setErrorMessage(error.response.data.message || 'Something went wrong, please try again.');
            } else if (error.request) {
                // No response received
                console.error('Request data:', error.request);
                setErrorMessage('No response from the server. Please try again later.');
            } else {
                // Other errors
                console.error('Error message:', error.message);
                setErrorMessage('An error occurred. Please try again.');
            }
        });
    };

    return (
        <div className="signup-page-background">
            <div className="signup-container">
                <div className="signup-header">
                    <div className="signup-title">Sign Up</div>
                    <div className="header-underline"></div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="signup-inputs">
                        <div className="input-field">
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-field">
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-field">
                            <input
                                type="tel"
                                placeholder="Mobile Number"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-field">
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    <div className="signup-submit-container">
                        <button type="submit" className="signup-submit-button">Sign Up</button>
                    </div>
                </form>
                <p className="signup-already">
                    Already have an account? <Link to="/login" className="signup-login">Login</Link>
                </p>
                <footer className="signup-footer">
                    <Link to="/terms">Terms of Use</Link>
                    <span className="signup-footer-separator"> | </span>
                    <Link to="/privacy">Privacy Policy</Link>
                </footer>
            </div>
        </div>
    );
};

export default Signup;
