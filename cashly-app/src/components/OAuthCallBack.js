// src/components/OAuthCallback.js
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const OAuthCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchAccessToken = async () => {
      const code = new URLSearchParams(location.search).get('code');
      try {
        await axios.get(`http://localhost:3000/oauth/callback/gohighlevel?code=${code}`);
        navigate('/dashboard');
      } catch (error) {
        console.error('Failed to fetch access token:', error.message);
      }
    };

    fetchAccessToken();
  }, [location, navigate]);

  return <div>Loading...</div>;
};

export default OAuthCallback;
