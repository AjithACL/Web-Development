import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import { logout } from "../Redux/authSlice"; 
import "./Dashboard.css";
import { useState } from "react";
const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user); 
  const [showUserDetails, setShowUserDetails] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/register"); 
  };
  const toggleUserDetails = () => {
    setShowUserDetails((prev) => !prev);
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
          <img src="User.jpg" className="user-img" alt="User" height="40px" width="40px"  onClick={toggleUserDetails} // Add the click handler
            style={{ cursor: "pointer" }} />
        </div>
      </div>
      
      {showUserDetails && (
        <div className="user-details">
          <p>sdfasdf</p>
        </div>
      )} 

      <div className="dashboard-body">
      <div className="sidebar">
        <ul>
          <li><Link to="/dashboard" className="sidebar-dashboard">Dashboard</Link>
          <img src="Dashboard_icon.png" alt="" height='20px' width='20px'/>
          </li>
          <li><a href="#">Analytics</a>
          <img src="Analytics.png" alt="" height='20px' width='20px' />
          </li>
          <li><a href="#">Settings</a>
          <img src="Settings.png" alt="" height='20px' width='20px'  />
          </li>
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
