import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser, setError } from "../Redux/authSlice";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const error = useSelector((state) => state.auth.error); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username) {
      dispatch(setError("Username is required."));
    } else if (!validateEmail(formData.email)) {
      dispatch(setError("Enter a valid email address."));
    } else if (!validatePassword(formData.password)) {
      dispatch(
        setError(
          "Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character."
        )
      );
    } else if (formData.password !== formData.confirmPassword) {
      dispatch(setError("Passwords do not match."));
    } else {
      dispatch(registerUser(formData));
      navigate("/login"); 
    }
  };

  return (
    <div className="Registercontainer">
      <h2>Sign Up</h2>
      <img src="Developer_image.png" alt="" />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
           
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
          
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
           
            onChange={handleChange}
          />
        </div>
        {error && <span className="error">{error}</span>}
        <button type="submit">Sign Up</button>
      </form>
      <div>
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
};

export default Register;
