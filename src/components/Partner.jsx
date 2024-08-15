// import React, { useState } from 'react';
// import './partner.css';
// import { Link } from 'react-router-dom';

// const DeliveryPartnerLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here (e.g., API call)
//     console.log('Logging in:', { email, password });
//   };

//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h2>Delivery Partner Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               onChange={handleEmailChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               onChange={handlePasswordChange}
//               required
//             />
//           </div>
//           <button type="submit" className="login-button"><Link to="/deliver">Login</Link></button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DeliveryPartnerLogin;

import React, { useState } from "react";
import './cheflogin.css';
import { Link } from "react-router-dom";
const  DeliveryPartnerLogin= () => {
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
                <Link  to="/deliver">
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

export default DeliveryPartnerLogin;

