import React from 'react';
import { useNavigate } from 'react-router-dom';


const Login1 = () => {
    const navigate = useNavigate();

    return (
        <div className="signup-container">
            <h3 className="signup-option" onClick={() => navigate('/cheflogin')}>
                Login as a Homechef <span className="arrow">→</span>
                <div className="underline"></div>
            </h3>
            <br></br>
            <h3 className="signup-or">or</h3>
            <br></br>
            <h3 className="signup-option" onClick={() => navigate('/partner')}>
                Login as a delivery partner <span className="arrow">→</span>
                <div className="underline"></div>
            </h3>
        </div>
    );
}

export default Login1;