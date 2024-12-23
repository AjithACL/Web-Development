import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import { logout } from "../Redux/authSlice"; 
import "./Dashboard.css";
import { useState } from "react";

const Dashboard = () => {
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 }); // Track the position of the menu
  const [showMenu, setShowMenu] = useState(false); // State to toggle menu visibility
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
          <h3>Data Visualization</h3>
        </div>
        <div className="user-info">
          <h3>Hi, {user?.username || "Guest"}!</h3> 
          <img src="User.jpg" className="user-img" alt="User" height="40px" width="40px" />
        </div>
      </div>
      <div className="dashboard-body">
      <div className="sidebar">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><a href="#">Analytics</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
      <div className="tiles">
        <div className="tiles1">
        </div>
        <div className="tiles2"></div>
        <div className="tiles3"></div>
        <div className="tiles4"></div>
        <div className="tiles5"></div>
        <div className="tiles6"></div>
      </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
