// backend/server.js
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

let accessToken = '';
let refreshToken = '';

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Allow cross-origin requests
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Redirect to GoHighLevel Authorization URL
app.get('/authorize', (req, res) => {
  const authUrl = `${process.env.GOHIGHLEVEL_AUTH_URL}?response_type=code&redirect_uri=${process.env.REDIRECT_URI}&client_id=${process.env.CLIENT_ID}&scope=conversations/message.readonly conversations/message.write`;
  res.redirect(authUrl);
});

// Callback endpoint to capture authorization code
app.get('/oauth/callback/gohighlevel', async (req, res) => {
  const authorizationCode = req.query.code;

  try {
    const response = await axios.post(process.env.GOHIGHLEVEL_TOKEN_URL, {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      grant_type: 'authorization_code',
      code: authorizationCode,
      redirect_uri: process.env.REDIRECT_URI
    });

    accessToken = response.data.access_token;
    refreshToken = response.data.refresh_token;
    res.send('Authorization successful. You can close this tab.');
  } catch (error) {
    console.error('Error fetching access token:', error.message);
    res.status(500).send('Failed to fetch access token');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
