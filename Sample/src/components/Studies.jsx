import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const pageButtonStyle = {
  padding: '10px 15px',
  margin: '0 10px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const Studies = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '90%' }}>
      {/* Main content displayed via Outlet */}
      
      
      {/* Navigation buttons placed at the bottom */}
      <div style={{ display: 'flex', justifyContent: 'end', marginTop: '20px' }}>
        <button onClick={() => navigate('study')} style={pageButtonStyle}>1</button>
        <button onClick={() => navigate('datasets')} style={pageButtonStyle}>2</button>
        <button onClick={() => navigate('graph')} style={pageButtonStyle}>3</button>
        <button onClick={() => navigate('widgets')} style={pageButtonStyle}>4</button>

      </div>
      <div style={{ flex: 1, marginBottom: '20px' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Studies;
