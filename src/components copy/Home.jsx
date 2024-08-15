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
                            <p>This is some content for slide 1.</p>
                        </div>
                    </div>
                    <div className="scroll-item">
                        <div className="scroll-image">
                            <img src={'https://www.campushaat.com/wp-content/uploads/2021/08/lai-yuching-WxePxgrIJbQ-unsplash-1-2048x1154.jpg'} alt="Meals" />
                        </div>
                        
                        <div className="scroll-content">
                            <h2>Meals</h2>
                            <p>This is some content for slide 2.</p>
                        </div>
                    </div>
                    <div className="scroll-item">
                        <div className="scroll-image">
                            <img src={'https://i.ytimg.com/vi/W97XSGLDm7I/maxresdefault.jpg'} alt="Biryani" />
                        </div>
                        <div className="scroll-content">
                            <h2>Biryani</h2>
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
          MyKhaana is a marketplace where you can order from homechefs and homebakers around you.
          We lovingly call them ‘KitchenStars’ and 'BakeStars'. KitchenStars serve meals and snacks
          from their own homes and offer you their regional specialities. BakeStars bake variety of
          cakes, cookies, pastries and breads at their home using best ingredients. With MyKhaana you
          can order freshly homemade meals and bakes which are made just for you only when you place
          your order on the app! So be it a regional specialty, or comfort food. Indulgent cakes, sweets
          or mousse. Choose to schedule your delivery in advance, or insta-order from available choices.
          Yummy homemade meals and bakes are now available only on MyKhaana App! Download and discover
          homemade delights. Only on MyKhaana App!
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
