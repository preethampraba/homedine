import React, { useState } from 'react';
import './paymentpage.css';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [orderSummary, setOrderSummary] = useState({
    items: [
      { name: 'Pizza', price: 15 },
      { name: 'Pasta', price: 10 },
      { name: 'Salad', price: 7 },
    ],
    total: 32,
  });

  const handlePayment = (e) => {
    e.preventDefault();
    alert('Payment processed successfully!');
    // Add payment processing logic here
  };

  const renderPaymentFields = () => {
    if (paymentMethod === 'creditCard' || paymentMethod === 'debitCard') {
      return (
        <>
          <div className="form-group">
            <label>Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>
          <div className="form-group">
            <label>Expiry Date</label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="form-group">
            <label>CVV</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="123"
              required
            />
          </div>
          <div className="form-group">
            <label>Name on Card</label>
            <input
              type="text"
              value={nameOnCard}
              onChange={(e) => setNameOnCard(e.target.value)}
              placeholder="John Doe"
              required
            />
          </div>
        </>
      );
    } else if (paymentMethod === 'paypal') {
      return (
        <div className="form-group">
          <label>PayPal Email</label>
          <input
            type="email"
            placeholder="youremail@example.com"
            required
          />
        </div>
      );
    }
  };

  return (
    <div className="payment-container">
      <div className="order-summary">
        <h2>Order Summary</h2>
        <ul>
          {orderSummary.items.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
        <h3>Total: ${orderSummary.total}</h3>
      </div>
      <div className="payment-form">
        <h2>Payment Details</h2>
        <form onSubmit={handlePayment}>
          <div className="form-group">
            <label>Payment Method</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="payment-dropdown"
            >
              <option value="creditCard">Credit Card</option>
              <option value="debitCard">Debit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
          {renderPaymentFields()}
          <button type="submit" className="payment-button">Pay ${orderSummary.total}</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
