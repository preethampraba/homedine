import React from "react";
import './Home.css';
import { Link } from "react-router-dom";

export default function NavBar (){

   return(
    <header className="header">
    <div className="logo">Homemade</div>
    
        <ul>
            <li><Link to={'/'}>Home</Link>

            </li>
            <Link to={'/login'}><li>Login</li></Link>
            <li><a href="#homechef">Home Chef</a></li>
            <li><a href="#delivery">Delivery Partner</a></li>
            <li><a href="#delivery">Delivery Partner</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#Dashboard" className="Dashboard">Dashboard</a></li>
        </ul>
    
</header>
   )

}