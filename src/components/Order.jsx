import React, { useState } from 'react';
import './order.css';

const OrderPage = () => {
  const products = [
    {
      image: 'https://tse1.mm.bing.net/th?id=OIP.mAs-ziEDbpRhyQ9PLZ4urgHaE7&pid=Api&P=0&h=180',
      title: 'Paneer Tikka',
      price: 149,
      delivery: 'Today'
    },
    {
      image: 'https://www.tripsavvy.com/thmb/f-VZrcG8tCbTyAw3pcGI7RGBpx8=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-639704020-7fc1d09875084524bada655b9ff7e678.jpg',
      title: 'Chicken Biriyani',
      price: 200,
      delivery: 'Today'
    },
    {
      image: 'https://imgmedia.lbb.in/media/2019/08/5d662c8ea84656a7661be92a_1566977166741.jpg',
      title: 'Meals',
      price: 120,
      delivery: 'Today'
    },
    {
      image: 'https://img.freepik.com/premium-photo/mutton-biryani-served-golden-dish-isolated-dark-background-side-view-indian-food_689047-2129.jpg?w=2000',
      title: 'Mutton Biriyani',
      price: 250,
      delivery: 'Today'
    },
    {
      image: 'https://tse2.mm.bing.net/th?id=OIP.Ewp71KHeRZ7KrLj_iLujvQHaFj&pid=Api&P=0&h=180',
      title: 'Veg Thali',
      price: 180,
      delivery: 'Today'
    },
    {
      image: 'https://images.pexels.com/photos/437397/pexels-photo-437397.jpeg?cs=srgb&dl=chicken-curry-437397.jpg&fm=jpg',
      title: 'Chicken Curry',
      price: 220,
      delivery: 'Today'
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [specifications, setSpecifications] = useState('');
  const [additionalItems, setAdditionalItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
  };

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleSpecificationsChange = (e) => {
    setSpecifications(e.target.value);
  };

  const handleAddItem = () => {
    setAdditionalItems([...additionalItems, specifications]);
    setSpecifications('');
  };

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery)
  );

  if (selectedProduct) {
    return (
      <div className="product-details-modal">
        <div className="product-details">
          <img src={selectedProduct.image} alt={selectedProduct.title} className="product-image" />
          <div className="product-info">
            <h3>{selectedProduct.title}</h3>
            <p>Price: ₹{selectedProduct.price}</p>
            <p>Delivery: {selectedProduct.delivery}</p>
            <div className="quantity-selector">
              <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
              <input type="number" value={quantity} onChange={handleQuantityChange} min="1" />
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <label>
              Specifications:
              <input
                type="text"
                value={specifications}
                onChange={handleSpecificationsChange}
                placeholder="Enter specifications"
              />
            </label>
            <button onClick={handleAddItem}>Add Specification</button>
            <ul>
              {additionalItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button onClick={handlePlaceOrder} className="place-order-button">
              Place Order
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="order-page">
      <input
        type="text"
        className="search-bar"
        placeholder="Search for food..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div className="products-grid">
        {filteredProducts.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>Price: ₹{product.price}</p>
              <p>Delivery: {product.delivery}</p>
              <button onClick={() => handleBuyNow(product)} className="buy-now-button">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
