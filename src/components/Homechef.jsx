import React, { useState } from 'react';
import './homechef.css';

const FoodMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const meals = [
    {
      title: 'Spinach Artichoke-Stuffed Chicken',
      description: 'with green beans almondine',
      imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.6313LsSYgo6m2txHYixRQAAAAA&pid=Api&P=0&h=180',
      tag: 'Culinary Collection',
      freshStart: true,
    },
    {
      title: 'Lemon Piccata Butter Salmon',
      description: 'with ratatouille zucchini ribbons',
      imageUrl: 'https://www.cucinabyelena.com/wp-content/uploads/2022/03/0Z4A7245-683x1024.jpg',
      tag: 'Culinary Collection',
      freshStart: false,
    },
    {
      title: 'Buttermilk Chicken Schnitzel',
      description: 'with cucumber-dill sauce and zucchini',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.pOd_VjtnZ8_RiIu9BUbfWgHaE8&pid=Api&P=0&h=180',
      tag: 'Fresh Start',
      freshStart: true,
    },
    {
      title: 'Biriyani',
      description: 'Delicious Indian dish with fragrant rice and spices',
      imageUrl: 'http://i1.wp.com/www.relishthebite.com/wp-content/uploads/2015/02/EGgBiryani-2.jpg',
      tag: 'Traditional',
      freshStart: false,
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="food-menu">
      <h2 className="menu-header">Food Menu</h2>
      <div className="meal-cards">
        {meals.map((meal, index) => (
          <div
            className={`meal-card ${activeIndex === index ? 'active' : ''}`}
            key={index}
            onClick={() => handleClick(index)}
          >
            <img src={meal.imageUrl} alt={meal.title} className="meal-image" />
            <div className="meal-info">
              {meal.freshStart && <div className="fresh-start-badge">Fresh Start</div>}
              <h3 className="meal-title">{meal.title}</h3>
              <p className="meal-description">{meal.description}</p>
              <span className="meal-tag">{meal.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
