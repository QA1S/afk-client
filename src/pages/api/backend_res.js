// pages/api/backend-response.js
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useAccessToken } from './AccessTokenContext';

// const BackendResponseHandler = () => {
//   const { setAccessToken } = useAccessToken();
//   // const [accessToken, setAccessToken] = useState(null);

//   useEffect(() => {
//     // Set up an API route to handle the POST request from the backend
//     const backendResponseEndpoint = '/backend-response';
//     const handleBackendResponse = async (data) => {
//       // Process and store the received data (access token) from the backend
//       setAccessToken(data.access_token);
//     };

//     // Listen for POST requests from the backend
//     const eventSource = new EventSource(backendResponseEndpoint);
//     eventSource.onmessage = (event) => {
//       const responseData = JSON.parse(event.data);
//       handleBackendResponse(responseData);
//       console.log(responseData);
    
//     };

//     // Clean up the event source on component unmount
//     return () => {
//       eventSource.close();
//     };
//   }, []);

//   return (
//     <div>
//       {/* Display the access token received from the backend */}
//       {accessToken && <p>Access Token: {accessToken}</p>}
//     </div>
//   );
// };

// export default BackendResponseHandler;

const accessToken = null;


export default function handler(req, res) {
    if (req.method === 'POST') {
      // Process the data received from the backend
      const data = req.body; // Assuming the backend sends the data in the request body
  
      // You can process the data and handle it as needed
      // For example, store the access token in state or use it for authorized requests
  
      // Send a response back to the backend (if required)
      res.status(200).json({ message: 'Data received successfully.' });
    } else {
      // For other request methods, return an error response
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  
