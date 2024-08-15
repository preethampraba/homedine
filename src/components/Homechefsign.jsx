import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './homechefsign.css'; 

const Homecheflogin = () => {
    const navigate = useNavigate();

    return (
        <div className="signup-container">
            <h3 className="signup-option" onClick={() => navigate('/homechef')}>
                signup as a Homechef <span className="arrow">→</span>
                <div className="underline"></div>
            </h3>
            <br></br>
            <h3 className="signup-or">or</h3>
            <br></br>
            <h3 className="signup-option" onClick={() => navigate('/logindeliverypartner')}>
                signup as a delivery partner <span className="arrow">→</span>
                <div className="underline"></div>
            </h3>
        </div>
    );
}

export default Homecheflogin;