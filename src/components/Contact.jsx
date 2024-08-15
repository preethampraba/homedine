import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
        <form onSubmit={handleSubmit} style={{ width: '45%' }}>
          <h2>GET IN TOUCH</h2>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              style={{ display: 'block', width: '100%', margin: '10px 0', padding: '10px' }}
            />
          </div>
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              style={{ display: 'block', width: '100%', margin: '10px 0', padding: '10px' }}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              style={{ display: 'block', width: '100%', margin: '10px 0', padding: '10px' }}
            />
          </div>
          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              style={{ display: 'block', width: '100%', margin: '10px 0', padding: '10px' }}
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              style={{ display: 'block', width: '100%', margin: '10px 0', padding: '10px' }}
            />
          </div>
          <button type="submit" style={{ padding: '10px 20px',backgroundColor: 'blue', color:'white' ,borderRadius: '40px' }}>Submit</button>
        </form>

        <div style={{ width: '45%', textAlign: 'center' }}>
          <img src="https://homefoodi.com/wp-content/uploads/2021/02/chef-1.png" alt="Chef" style={{ width: '50%' }} />
          <h2>CONTACT US</h2>
          <p>+91, 8860357937, 7669237937, 9582307779</p>
          <p>info@homefoodi.com</p>
         
        </div>
      </div>

      <div style={{ width: '80%', backgroundColor: '#103810', color: '#fff', padding: '20px', fontFamily: 'Arial, sans-serif', marginTop: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ color: '#fff' }}>
            <p style={{ margin: 0 }}>+91-7373073078</p>
          </div>
          <div>
            <p style={{ margin: 0, color: '#fff' }}>support@cookr.in</p>
          </div>
        </div>

        <div>
          <h2 style={{ color: '#FFD700' }}>Our Address</h2>
          <p>Cloudify Technologies Private Limited,</p>
          <p>3rd floor, Plot no 15, Maruthi Nagar Extn,</p>
          <p>Krishnagiri Bye-pass Road, Hosur - 635109</p>
          <p>Tamil Nadu, India</p>
        </div>

        <div style={{ marginTop: '20px' }}>
          <h3 style={{ color: '#FFD700' }}>We deliver at</h3>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '50px', height: '50px', background: 'green' }}></div>
              <p>Hyderabad</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '50px', height: '50px', background: 'green' }}></div>
              <p>Mysore</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '50px', height: '50px', background: 'green' }}></div>
              <p>Tamilnadu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
