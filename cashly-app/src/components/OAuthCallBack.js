import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const OAuthCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchAccessToken = async () => {
      const code = new URLSearchParams(location.search).get('code');
      console.log("The code fetched from URL: ", code);
      try {
        const response = await axios.get(`http://localhost:3000/oauth/callback?code=${code}`);
        const accessToken = new URLSearchParams(response.data).get('access_token');
        console.log('Access token:', accessToken);

        // Store the access token in local storage
        localStorage.setItem('access_token', accessToken);

        // Navigate to the dashboard
        navigate('/dashboard');
      } catch (error) {
        console.error('Failed to fetch access token:', error.response ? error.response.data : error.message);
      }
    };

    fetchAccessToken();
  }, [location, navigate]);

  return <div>Loading...</div>;
};

export default OAuthCallback;
