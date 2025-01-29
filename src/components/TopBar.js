import React from 'react';
import logo from '../images/logo2.jpg'; // Adjust the path if necessary
import theme from '../config/config'; // Import the global theme

function TopBar() {
  return (
    <div
      className="d-flex justify-content-between align-items-center px-5 py-3 text-white shadow"
      style={{
        backgroundColor: theme.blueColor, // Use the global color
        height: '100px',
      }}
    >
      <h1
        className="m-0"
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginLeft: '20px',
        }}
      >
        AutoStatX
      </h1>
      <img
        src={logo}
        alt="Logo"
        style={{
          height: '80px',
          marginRight: '20px',
        }}
      />
    </div>
  );
}

export default TopBar;
