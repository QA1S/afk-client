import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// create a context object
export const AuthContext = createContext();

const clientId = 'b0a6ff9d-4aed-46ba-80ce-1547214fbaee'  
const CLIENT_SECRET = 'hR40IVbuuIYuhyqpOzDuNL7bz7zFpUR8o1mkzvbAX7w' 
const redirectUri = 'https://localhost/login';

// create a custom provider component
export function AuthProvider({ children }) {
  // create a state to store the access token
  const [token, setToken] = useState(null);

  
  // create a function to fetch the access token from the server
//   async function fetchToken(req, res) {
  
//     if (req) {
//         // get the data from req.body
//         const data = req.headers.authorization.split(' ')


//         // do something with the data, such as saving it to a database
//         setToken(data.access_token);
//         // send back a JSON response with some message
//         console.log(data.access_token);
//         res.json({ message: "Data received successfully" });
//     }else {
//         console.log("no req//////////////");
//     //     // handle other methods or send an error
//     //     res.status(405).json({ message: "Method not allowed" });
//       }

//   }
// const fetchToken = () => {
//    try {
//       const response = fetch('http://localhost/api/backend_receiver');
//       const result = response.json();
//       // Update the state with the fetched data
//       setToken(result);
//       console.log(result);
//       console.log("fetching token");
//     } catch (error) {
//       console.error("error");
//     }
//   }

//   // call the fetch function when the component mounts
//   useEffect(() => {
//     fetchToken();
//   }, []);

  // return the provider component with value prop
  return <AuthContext.Provider value={{token, setToken}}>{children}</AuthContext.Provider>;
};