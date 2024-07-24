// backend/server.js
require("dotenv").config();
const express = require("express");
const axios = require("axios");
const qs = require("qs");
const app = express();
const port = process.env.PORT || 3000;

let accessToken = "";
let refreshToken = "";

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Allow cross-origin requests
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Redirect to GoHighLevel Authorization URL
app.get("/authorize", (req, res) => {
  const authUrl = `${process.env.GOHIGHLEVEL_AUTH_URL}?response_type=code&redirect_uri=${process.env.REDIRECT_URI}&client_id=${process.env.CLIENT_ID}&scope=conversations/message.readonly&loginWindowOpenMode=self`;
  res.redirect(authUrl);
});

// Callback endpoint to capture authorization code
app.get("/oauth/callback", async (req, res) => {
  const authorizationCode = req.query.code;

  console.log("Received authorization code:", authorizationCode);
  console.log("TEST");

  console.log(process.env.GOHIGHLEVEL_TOKEN_URL, process.env.REDIRECT_URI, '//////////////////////////////////////////');


  try {
    const response  = await axios.post(
      process.env.GOHIGHLEVEL_TOKEN_URL,
      {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: "authorization_code",
        code: authorizationCode,
        redirect_uri: process.env.REDIRECT_URI,
        user_type: "Location",
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    console.log("Token response:", response.data);

    accessToken = response.data.access_token;
    refreshToken = response.data.refresh_token;

    console.log("Access token: ", accessToken)

    res.redirect(`/dashboard?access_token=${accessToken}`);
  } catch (error) {
    console.error(
      "Error fetching access token:",
      error.response ? error.response.data : error.message
    );
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    }
    res.status(500).send("Failed to fetch access token");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
