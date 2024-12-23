import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorData, setErrorData] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
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

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.username.trim()) {
      errors.username = "Username is required.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required.";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      errors.email = "Enter a valid email address.";
      isValid = false;
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required.";
      isValid = false;
    } else if (!validatePassword(formData.password)) {
      errors.password =
        "Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character.";
      isValid = false;
    }

    if (!formData.confirmPassword.trim()) {
      errors.confirmPassword = "Confirm password is required.";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
      isValid = false;
    }

    setErrorData(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Save user data to local storage
      localStorage.setItem("userData", JSON.stringify(formData));

      // Navigate to /home
      navigate("/home");
    }
  };

  return (
    <div className="Registercontainer">
      <div>
        <h2>SIGN UP</h2>
        <div>
          <img
            src="Developer_image.png"
            alt="Register Illustration"
            height="100px"
          />
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">USERNAME</label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="User Name"
                onChange={handleChange}
              />
              {errorData.username && (
                <span className="error">{errorData.username}</span>
              )}
            </div>
            <div className="input-group">
              <label htmlFor="email">EMAIL</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
              />
              {errorData.email && (
                <span className="error">{errorData.email}</span>
              )}
            </div>
            <div className="input-group">
              <label htmlFor="password">PASSWORD</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
              {errorData.password && (
                <span className="error">{errorData.password}</span>
              )}
            </div>
            <div className="input-group">
              <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
              {errorData.confirmPassword && (
                <span className="error">{errorData.confirmPassword}</span>
              )}
            </div>
            <br />
            <button type="submit">SIGN UP</button>
            <br />
          </form>
          <div>
            <label>ALREADY HAVE AN ACCOUNT?</label>
            <Link to="/login"> LOG IN</Link>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Register;