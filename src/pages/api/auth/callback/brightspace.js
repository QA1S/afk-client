// pages/api/auth/callback/brightspace.js

import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { code } = req.query;

    // Exchange the authorization code for an access token
    const tokenResponse = await axios.post(
      'https://your-d2l-instance.com/d2l/oauth2/token',
      {
        grant_type: 'authorization_code',
        client_id: 'YOUR_CLIENT_ID',
        client_secret: 'YOUR_CLIENT_SECRET',
        redirect_uri: 'YOUR_CALLBACK_URL',
        code,
      }
    );

    const accessToken = tokenResponse.data.access_token;

    // Fetch user information using the access token
    const userResponse = await axios.get('https://your-d2l-instance.com/api/userinfo', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const userInformation = userResponse.data;

    // Store the user information in a session or cookie
    req.session.user = userInformation; // Example: Using sessions

    // Redirect the user to a protected page after successful authentication
    res.redirect('/dashboard');
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
