import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get user data from local storage
    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (storedUser) {
      const { email, password } = storedUser;

      // Check if credentials match
      if (formData.email === email && formData.password === password) {
        navigate("/home"); // Navigate to /home
      } else {
        setError("Invalid email or password."); // Set a string
      }
    } else {
      setError("No account found. Please register first."); // Set a string
    }
  };

  return (
    <div className="Logincontainer">
      <div>
        <h2>LOGIN</h2>
        <div>
          <img
            src="Developer_image.png"
            alt="Register Illustration"
            height="100px"
          />
          <br />
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <br />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <br />
            </div>
            <br />
            <div>
              <label htmlFor="password">Password:</label>
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <br />
            </div>
            <br />
            {error && <span className="error">{error}</span>} {/* Display error */}
            <br />
            <button type="submit">LOGIN</button>
            <br />
            <div>
              <label htmlFor="">DON'T HAVE AN ACCOUNT?</label>
              <Link to="/register"> SIGN UP</Link>
            </div>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;