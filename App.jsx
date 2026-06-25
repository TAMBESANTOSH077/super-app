import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Correct path since both files are in the 'src' folder

function App() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', userName: '', email: '', mobile: '', checkbox: false });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Field is required";
    if (!formData.userName) newErrors.userName = "Field is required";
    if (!formData.email) newErrors.email = "Field is required";
    if (!formData.mobile) newErrors.mobile = "Field is required";
    if (!formData.checkbox) newErrors.checkbox = "Check this box if you want to proceed";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      navigate('/page1');
    }
  };

  return (
    <div className="signup-container">
      <div className="left-panel">
        <h1>Discover new things on <br />Superapp</h1>
      </div>
      
      <div className="right-panel">
        <div className="form-container"> 
          <h2 className="title">Super app</h2>
          <p className="subtitle">Create your new account</p>
          
          <form onSubmit={handleSubmit} noValidate>
            {['name', 'userName', 'email', 'mobile'].map((field) => (
              <div key={field} className="input-group">
                <input 
                  type="text" 
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)} 
                  className={errors[field] ? 'error-border' : ''}
                  onChange={(e) => setFormData({...formData, [field]: e.target.value})}
                />
                {errors[field] && <p className="error-text">{errors[field]}</p>}
              </div>
            ))}
            
            <div className="checkbox-group">
              <input type="checkbox" onChange={(e) => setFormData({...formData, checkbox: e.target.checked})} />
              <label>Share my registration data with Superapp</label>
            </div>
            {errors.checkbox && <p className="error-text">{errors.checkbox}</p>}
            
            <button type="submit" className="signup-btn">SIGN UP</button>
          </form>

          <div className="footer-text">
            <p>By clicking on Sign up, you agree to Superapp <span>Terms and Conditions of Use</span></p>
            <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head to the Superapp <span>Privacy Policy</span></p>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default App;