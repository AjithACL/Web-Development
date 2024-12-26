import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
    {/* Navbar at the top, full width */}
    <Navbar />
    <div style={{ display: 'flex', flex: 1 }}>
      {/* Sidebar on the left */}
      <Sidebar />
      {/* Main content area */}
      <div style={{ flex: 1, overflowY: 'hidden', padding: '10px 20px' }}>
        <Outlet />
      </div>
    </div>
  </div>
);

export default DashboardLayout;
