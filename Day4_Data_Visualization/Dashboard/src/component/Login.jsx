import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setError } from "../Redux/authSlice";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { registeredUsers, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(formData.email === "ajith@gmail.com" && formData.password === "Ajith@123"){
     navigate("/dashboard");
    }else {
      dispatch(setError("Invalid email or password."));
    }

    // const user = registeredUsers.find(
    //   (user) =>
    //     user.email === formData.email && user.password === formData.password
    // );

    // if (user) {
    //   dispatch(setUser(user));
    //   navigate("/Dashboard");
    // } 
  };

  return (
    <div className="Logincontainer">
      <h2>Log In</h2>
      <img src="Developer_image.png" alt="" height="100px" width="100px" />
      <form onSubmit={handleSubmit}>
        <div className="login-email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div className="login-password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        {error && <span className="login-error">{error}</span>}
        <button type="submit">Log In</button>
      </form>
      <div className="login-dont">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
