
import React, { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'

import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    axios.post('http://localhost:80/login', formData)
      .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
    // You can add logic here to send data to a backend
  };

  return (
    <div className="form-wrapper">
      <h2 className="title">login</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

         <p>Don't have an account? <Link to="/register">Register here</Link>.</p>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

