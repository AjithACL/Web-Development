import React from 'react';

const Navbar = () => (
  <div style={{ display: 'flex', background: '#506edc', alignItems: 'center', justifyContent:'space-between',padding: '10px', backgroundColor: '#333', color: 'white' }}>
    <div style={{display:'flex', alignItems:'center'}}>
    <img src="Developer_image.png" alt="Logo" height='50px' width='50px' style={{ borderRadius: '50%', marginRight: '10px' }} />
    <h1 style={{ margin: 0 }}>Data Visualization</h1>
    </div>
    <img src="User.jpg" alt="" height='50px' width='50px' style={{borderRadius:'50%',margin:' 0 30px'}} />
  </div>
);


export default Navbar;
