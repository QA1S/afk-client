import { useContext, useEffect } from 'react';
import axios from 'axios';
// import { AuthContext } from './AccessTokenContext';

const clientId = 'b0a6ff9d-4aed-46ba-80ce-1547214fbaee'  
const CLIENT_SECRET = 'hR40IVbuuIYuhyqpOzDuNL7bz7zFpUR8o1mkzvbAX7w' 
const redirectUri = 'https://localhost/chat';
// console.log("token =", useContext(AuthContext));
// export default function Get_token () {
//   const { setToken } = useContext(AuthContext);
  
//   useEffect(() => {
    
//     const params = new URLSearchParams(window.location.search);
//     const code = params.get('code');
//     if (code) {
//         axios.post('https://prepdoctors.online/api/token', {
//             grant_type: 'authorization_code',
//             client_id: clientId,
//             client_secret: CLIENT_SECRET,
//             code: code,
//             redirect_uri: redirectUri,
//             scope: 'enrollment:own_enrollment:read',
//           })
//         .then((response) => {
//           const accessToken = response.data["access_token"];
//           console.log('Access Token:', accessToken);
//           setToken(accessToken);
//           return accessToken; // Set the access token in the context
//         })
//         .catch((error) => {
//           console.error('Error fetching access token:', error);
//         });
//     }
//   }, [setToken]); // Add setAccessToken as a dependency
//   console.log("get_token");
//   console.log("Backend Token =", useContext(AuthContext));
//   return useContext(AuthContext);
// };

// export default get_token;



// this file is used to receive data from the backend, the data contains the access token which i need to export so that other files are able to use it
// useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const code = params.get('code');
//     if (code) {
//       axios.post('https://prepdoctors.online/api/token', {
//         grant_type: 'authorization_code',
//         client_id: clientId,
//         client_secret: CLIENT_SECRET,
//         code: code,
//         redirect_uri: redirectUri,
//         scope: 'enrollment:own_enrollment:read',
//       })
//         .then((response) => {
//           const accessToken = response.data["access_token"];
//           setToken(accessToken);
//           console.log('Access Token:', accessToken);
//           // Use the accessToken to make authorized requests to the backend API
//         })
//         .catch((error) => {
//           console.error('Error fetching access token:', error);
//         });
//     }
//   }, []);