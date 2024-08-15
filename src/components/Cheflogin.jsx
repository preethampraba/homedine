import React, { useState } from "react";
import './cheflogin.css';
import { Link } from "react-router-dom";
const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="login-signup-container">
      <div className="form-container">
        <h2>{isLogin ? "Login" : "Signup"}</h2>
        {isLogin ? (
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email</label>
              <input type="email" required />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input type="password" required />
            </div>
            <button type="submit" className="btn">
                <Link  to="/homechef">
              Login
              </Link>
              
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignup}>
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" required />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input type="email" required />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input type="password" required />
            </div>
            <div className="input-group">
              <label>Confirm Password</label>
              <input type="password" required />
            </div>
            <button type="submit" className="btn">
              Signup
            </button>
          </form>
        )}
        <p onClick={toggleForm} className="toggle-form">
          {isLogin
            ? "Don't have an account? Signup here"
            : "Already have an account? Login here"}
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
