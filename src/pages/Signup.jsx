import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dob: '',
    phone: '',
    employeeId: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your signup logic/API call
    console.log('User signed up:', formData);
    navigate('/login'); // Redirect after successful signup
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Sign Up</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Enter your name" 
              required 
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Enter your email" 
              required 
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              placeholder="Enter a password" 
              required 
            />
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input 
              type="date" 
              name="dob" 
              value={formData.dob} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              placeholder="Enter your phone number" 
              required 
            />
          </div>
          <div className="form-group">
            <label>Employee ID</label>
            <input 
              type="text" 
              name="employeeId" 
              value={formData.employeeId} 
              onChange={handleChange} 
              placeholder="Enter your employee ID" 
              required 
            />
          </div>
          <button type="submit" className="btn-auth">Sign Up</button>
        </form>
        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
