import React from 'react';
import './AboutUs.css';
import foodImage from './path-to-image.png'; // Replace with the actual path to your image

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="header">
        <h1>ABOUT US</h1>
      </div>
      <div className="content">
        <p className="description">
          <strong>Building a marketplace for homemade meals and bakes</strong><br />
          MyKhaana is an app-based aggregator of homechefs and homebakers. Of the foodies, by the foodies, for the foodies! We are proud to be India's first homechef and homebaker marketplace!
        </p>
        <p className="description">
          Founded by Shriya Khanna in 2020 in Bangalore, we are winners of FICCI FLO Startup Awards 2021 in Food Category. We also bagged Billennium Divas 2021 Startup Award in F&B Category. Our team loves food and wants you to have the best food experience too!
        </p>
        <p className="description">
          MyKhaana is currently operational in Bangalore and Mumbai.
        </p>
        <img src={foodImage} alt="Home food" className="food-image" />
      </div>
    </section>
  );
}

export default AboutUs;
