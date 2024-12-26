import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/authSlice'; // Import the logout action
import DatasetIcon from '@mui/icons-material/Dataset'; // Correct import for the icon
import AddchartIcon from '@mui/icons-material/Addchart';
import SettingsIcon from '@mui/icons-material/Settings';

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  padding: '10px',
  display: 'flex', // Changed to flex for horizontal alignment
  alignItems: 'center', // Aligns the icon and text vertically centered
  margin: '5px 0',
  backgroundColor: '#ddd',
  borderRadius: '5px',
};

const activeLinkStyle = {
  ...linkStyle,
  backgroundColor: '#506edc',
  color: '#fff',
};

const hoverStyle = {
  backgroundColor: '#ccc',
};

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState('studies');
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseEnter = (menu) => {
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    navigate('/'); // Navigate back to the login page
  };

  return (
    <div style={{ width: '200px', backgroundColor: '#f8f9fa', padding: '10px', height: '100vh' }}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <Link
              to="studies/study"
              style={activeMenu === 'studies' ? activeLinkStyle : hoveredMenu === 'studies' ? { ...linkStyle, ...hoverStyle } : linkStyle}
              onClick={() => handleClick('studies')}
              onMouseEnter={() => handleMouseEnter('studies')}
              onMouseLeave={handleMouseLeave}
            >
              <AddchartIcon style={{ marginRight: '8px' }} />
              Studies
            </Link>
          </li>
          <li>
            <Link
              to="dataset"
              style={activeMenu === 'dataset' ? activeLinkStyle : hoveredMenu === 'dataset' ? { ...linkStyle, ...hoverStyle } : linkStyle}
              onClick={() => handleClick('dataset')}
              onMouseEnter={() => handleMouseEnter('dataset')}
              onMouseLeave={handleMouseLeave}
            >
              <DatasetIcon style={{ marginRight: '8px' }} />
              Dataset
            </Link>
          </li>
          <li>
            <Link
              to="settings"
              style={activeMenu === 'settings' ? activeLinkStyle : hoveredMenu === 'settings' ? { ...linkStyle, ...hoverStyle } : linkStyle}
              onClick={() => handleClick('settings')}
              onMouseEnter={() => handleMouseEnter('settings')}
              onMouseLeave={handleMouseLeave}
            >
              <SettingsIcon style={{ marginRight: '8px' }} />
              Settings
            </Link>
          </li>
          {/* Logout button */}
          <li>
            <button
              style={{
                ...linkStyle,
                backgroundColor: '#f44336', // Red background for logout
                color: '#fff', // White text color
                border: 'none', // Remove border
                cursor: 'pointer',
              }}
              onClick={handleLogout} // Handle logout
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
