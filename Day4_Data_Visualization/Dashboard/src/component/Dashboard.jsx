import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import { logout } from "../Redux/authSlice"; 
import "./Dashboard.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user); 

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login"); 
  };

  return (
    <div className="dashboard">
      <div className="dashboard-nav">
        <div className="datavis">
          <img src="Developer_image.png" alt="Developer" height="40px" width="40px" />
          <h1>Data Visualization</h1>
        </div>
        <div className="user-info">
          <h3>Welcome, {user?.username || "Guest"}!</h3> 
          <img src="User.jpg" className="user-img" alt="User" height="40px" width="40px" />
        </div>
      </div>
      <div className="sidebar">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><a href="#">Analytics</a></li>
          <li><a href="#">Settings</a></li>
          <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
