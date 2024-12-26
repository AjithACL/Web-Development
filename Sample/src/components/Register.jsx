import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, setError, setUser } from "../Redux/authSlice";
import { useNavigate, Link } from "react-router-dom";
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
      dispatch(setError("Password must meet the criteria."));
    } else if (formData.password !== formData.confirmPassword) {
      dispatch(setError("Passwords do not match."));
    } else {
      dispatch(registerUser(formData));
      dispatch(setUser({ email: formData.email, username: formData.username }));
      navigate("/dashboard/studies/study");
    }
  };

  return (
    <div className="Registercontainer">
      <h2>Sign Up</h2>
      <img src="Developer_image.png" alt="" height="100px" width="100px" />
      <form onSubmit={handleSubmit}>
        <div className="Register-username">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
          />
        </div>
        <div className="Register-email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="Register-password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </div>
        <div className="Register-confirmpassword">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />
        </div>
        {error && <span className="error-register">{error}</span>}

        <button type="submit">Sign Up</button>
      </form>
      <div>
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
};

export default Register;
