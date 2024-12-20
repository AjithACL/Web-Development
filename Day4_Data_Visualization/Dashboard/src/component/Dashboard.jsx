import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
        <div className="dashboard-nav">
           <div className="datavis">
           <img src="Developer_image.png" alt="" height='40px' width='40px'  />
           <h1>Data Visualization</h1>
           </div>
               <h3>DashBoard</h3> 
               <img src="User.jpg" className='user-img' alt="" height='40px' width='40px'/>
            
        </div>
      <div className="sidebar">
       
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><a href="#">Analytics</a></li>
          <li><a href="#">Settings</a></li>
          <li><Link to='/login'>Logout</Link></li>
        </ul>

      </div>

     
      
    </div>
  );
};

export default Dashboard;
