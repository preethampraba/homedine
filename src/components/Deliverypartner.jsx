import React, { useState } from 'react';

const SwiggyPartnerRegistration = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the data to your backend
    console.log({ name, city, mobileNumber });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Join one of India's Largest Delivery Platforms!</h1>
      <div style={styles.formContainer}>
        <h2 style={styles.subtitle}>Register as HomeFood Partner</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              style={styles.input}
            >
              <option value="" disabled>Select a city</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
              <option value="Coimbatore">Coimbatore</option>
              {/* Add more cities as needed */}
            </select>
          </div>
          <div style={styles.inputGroup}>
            <input
              type="tel"
              placeholder="Enter Your Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: "'Roboto', sans-serif",
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    minHeight: '100vh',
  },
  title: {
    color: '#ff6600',
    fontSize: '2em',
    marginBottom: '20px',
  },
  formContainer: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '1.5em',
    marginBottom: '20px',
    color: '#333',
  },
  inputGroup: {
    margin: '15px 0',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '10px',
    border: '1px solid #ddd',
    fontSize: '1em',
  },
  button: {
    backgroundColor: '#ff6600',
    color: '#ffffff',
    padding: '12px 25px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1em',
    transition: 'background-color 0.3s ease',
  },
};

export default SwiggyPartnerRegistration;
