
import React, { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'

import "./RegisterForm.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
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
    axios.post('http://localhost:80/register', formData)
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
      <h2 className="title">Register</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <label>First Name</label>
        <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} required />

        <label>Last Name</label>
        <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <button type="submit"> Register</button>
        <p style={{ marginTop: '10px', textAlign: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;

