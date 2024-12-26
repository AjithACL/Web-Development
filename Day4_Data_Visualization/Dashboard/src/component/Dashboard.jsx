import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../Redux/authSlice";
import "./Dashboard.css";
import Tiles from "./Tiles";
import Dataset from "../Dataset/Dataset"; // Import Dataset component
import Studies from "./Studies";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard"); // Default menu

  const handleLogout = () => {
    dispatch(logout());
    navigate("/register");
  };

  const toggleUserDetails = () => {
    setShowUserDetails((prev) => !prev);
  };

  // Function to render content based on active menu
  const renderContent = () => {
    switch (activeMenu) {
      case "dashboard":
        return <Studies />;
      case "dataset":
        return <Dataset />;
      case "settings":
        return <div>Settings</div>;
      default:
        return <Tiles />;
    }
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
          <img
            src="User.jpg"
            className="user-img"
            alt="User"
            height="40px"
            width="40px"
            onClick={toggleUserDetails}
            style={{ cursor: "pointer", margin:'0 10px' }}
          />
        </div>
      </div>

      {showUserDetails && (
        <div className="user-details">
          <h2>Profile</h2>
        </div>
      )}

      <div className="dashboard-body">
        <div className="sidebar">
          <ul>
            <li
              onClick={() => setActiveMenu("dashboard")}
              className={activeMenu === "dashboard" ? "active" : ""}
            >
              <img src="Dashboard_icon.png" alt="" height="20px" width="20px" style={{margin:'0 10px'}} />
              <span>Studies</span>
            </li>
            <li
              onClick={() => setActiveMenu("dataset")}
              className={activeMenu === "dataset" ? "active" : ""}
            >
              <img src="Analytics.png" alt="" height="20px" width="20px" style={{margin:'0 10px'}}/>
              <span>Dataset</span>
            </li>
            <li
              onClick={() => setActiveMenu("settings")}
              className={activeMenu === "settings" ? "active" : ""}
            >
              <img src="Settings.png" alt="" height="20px" width="20px" style={{margin:'0 10px'}}/>
              <span>Settings</span>
            </li>
          </ul>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>

        <div className="content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
