import React, { useRef } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className="home-container">
            

            <section className="horizontal-scroll">
                <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
                <div className="scroll-container" ref={scrollRef}>
                    <div className="scroll-item">
                        <div className="scroll-image">
                            <img src={'https://tse1.mm.bing.net/th?id=OIP.UnU-Nc7KAW_EYqedR4SWvAHaDO&pid=Api&P=0&h=180'} alt="Dosa" />
                        </div>
                        <div className="scroll-content">
                            <h2>Dosa</h2>
                            <p> This recipe yields one of the best tasting </p>
                        </div>
                    </div>
                    <div className="scroll-item">
                        <div className="scroll-image">
                            <img src={'https://www.campushaat.com/wp-content/uploads/2021/08/lai-yuching-WxePxgrIJbQ-unsplash-1-2048x1154.jpg'} alt="Meals" />
                        </div>
                        
                        <div className="scroll-content">
                            <h2>Meals</h2>
                            <p> Meal recipes with our cheap and healthy family.</p>
                        </div>
                    </div>
                    <div className="scroll-item">
                        <div className="scroll-image">
                            <img src={'https://i.ytimg.com/vi/W97XSGLDm7I/maxresdefault.jpg'} alt="Biryani" />
                        </div>
                        <div className="scroll-content">
                            <h2>Biryani</h2>
                            <p> worth every bit of the effort.</p>
                        </div>
                    </div>
                    <div className="scroll-item">
                        <div className="scroll-image">
                            <img src={'https://cookr.in/images/home/hero/dosa.webp'} alt="Biryani" />
                        </div>
                        <div className="scroll-content">
                            <h2>Slide 3 Title</h2>
                            <p>This is some content for slide 3.</p>
                        </div>
                    </div>
                    <div className="scroll-item">
                        <div className="scroll-image">
                            <img src={'https://cookr.in/images/home/hero/dosa.webp'} alt="Biryani" />
                        </div>
                        <div className="scroll-content">
                            <h2>Slide 3 Title</h2>
                            <p>This is some content for slide 3.</p>
                        </div>
                    </div>
                </div>
                <button className="scroll-button right" onClick={scrollRight}>&gt;</button>
            </section>
            <div className="mykhaana-container">
      <header className="mykhaana-header">
        <h1>Welcome to India's First Online Marketplace for Homemade Meals and Bakes!</h1>
      </header>
      <section className="mykhaana-content">
        <p>
        Sure, here's a sample First Online Marketplace for Homemade Meals and Bakes:

Welcome to Homefoodorder India's First Online Marketplace for Homemade Meals and Bakes!
We are thrilled to offer a unique platform where passionate home cooks and bakers can share their culinary creations with food lovers across the country. Our mission is to connect you with the delightful flavors of home-cooked meals and freshly baked goods, made with love and care by talented individuals in your community.

Founded in 2010, Homefoodorder was born out of a desire to celebrate and preserve the rich culinary heritage of India. Our founders, recognized the incredible talent of home chefs and bakers who create mouth-watering dishes and treats in their kitchens every day. They envisioned a marketplace that would bring these hidden culinary gems to a wider audience, providing a platform for home cooks to showcase their skills and for food enthusiasts to discover and enjoy authentic homemade flavors.

        </p>
      </section>
      <section className="mykhaana-features">
        <div className="feature">
          <div className="feature-icon">🍽️</div>
          <h3>Carefully Crafted Menu</h3>
        </div>
        <div className="feature">
          <div className="feature-icon">📑</div>
          <h3>Verified Home Kitchens</h3>
        </div>
        <div className="feature">
          <div className="feature-icon">🚚</div>
          <h3>Doorstep Delivery</h3>
        </div>
        <div className="feature">
          <div className="feature-icon">🍭</div>
          <h3>Super Yummy Taste</h3>
        </div>
      </section>
    </div>
            <footer className="footer">
                <p>&copy; 2024 Cook. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
