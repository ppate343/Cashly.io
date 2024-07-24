import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  //const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'puja.patel@gocashly.io' && password === 'cashly.io') {
      window.location.href = 'http://localhost:3000/authorize'; // Redirect to the backend authorization route
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login to your account</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login now</button>
        <div className="links">
          <a href="#">Forgot?</a>
          <a href="#">Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
