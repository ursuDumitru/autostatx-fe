import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar'; // Adjust the path as needed
import theme from '../config/config'; // Import the global theme

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        username,
        password,
      });

      if (response.data.success) {
        navigate('/dashboard');
      } else {
        setError(response.data.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('Error connecting to the server');
    }
  };

  return (
    <div>
      <TopBar />
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{ backgroundColor: '#FFFFFF' }} // Use the global color
      >
        <div className="card p-4 shadow-lg" style={{ width: '400px' }}>
          <h2 className="text-center mb-4" style={{ color: theme.generalColor }}>
            Login
          </h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn w-100 text-white"
              style={{ backgroundColor: theme.generalColor }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
