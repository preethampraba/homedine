import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="content">
        <h1 className="about-header">About Us</h1>
        <p className="description">
          <strong>Welcome to Homefood Order, your premier destination for delicious, home-cooked meals delivered straight to your doorstep.</strong><br />
          <span>Our mission is to bring the comfort and taste of home cooking to busy individuals and families who crave nutritious, flavorful food without the hassle of preparing it themselves.</span>
        </p>
        <p className="highlights">
          <b>Fresh, High-Quality Ingredients:</b> We believe that great food starts with great ingredients. That's why we carefully select the best produce, meats, and other essentials to create our meals.<br />
          <b>Convenience:</b> Our easy-to-use online ordering system allows you to select your favorite dishes and schedule delivery at a time that works best for you.<br />
          <b>Customization:</b> Whether you have specific dietary needs or just particular preferences, we offer customizable options to ensure your meal is just right.<br />
          <b>Sustainability:</b> We're committed to sustainable practices, from eco-friendly packaging to reducing food waste, so you can feel good about your choice.
        </p>
        <p className="description">
          Our team is a passionate group of food enthusiasts dedicated to making your dining experience exceptional. From our chefs to our delivery personnel, everyone at Homefood Order is committed to bringing a smile to your face with every meal.
        </p>
        <p className="description">
          We invite you to experience the joy of home-cooked meals without the effort. Homefood Order is here to serve you. Thank you for letting us be a part of your dining journey!
        </p>
        <img src='https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600' alt="Home food" className="food-image" />
      </div>
    </section>
  );
}

export default AboutUs;
