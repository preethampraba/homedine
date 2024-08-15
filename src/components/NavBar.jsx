import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">Homemade</div>
      <ul className="nav-links">
        <li><Link to="/login1">Login</Link></li>
        
        <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
        <li><Link to="/about"><i className="fas fa-info-circle"></i> About Us</Link></li>
        <li><Link to="/homech"><i className="fas fa-utensils"></i> Home Chef</Link></li>
         {/* <li><Link to="/delivery"><i className="fas fa-truck"></i> Delivery Partner</Link></li> */}
        <li><Link to="/contact"><i className="fas fa-envelope"></i> Contact Us</Link></li>
        {/* <li><a href="#dashboard" className="dashboard"><i className="fas fa-tachometer-alt"></i> Dashboard</a></li> */}
        <li><Link to="/order"><i className="fas fa-shopping-cart"></i> Order</Link></li>
        <li><Link to="/deliver"><i className="fas fa-shopping-cart"></i> Delivery Partner</Link></li>
      </ul>
    </div>
  );
}
