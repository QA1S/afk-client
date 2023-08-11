import axios from "axios";
// import { useAccessToken } from '../pages/api/backend_res';
import { AuthContext } from "../pages/api/backend_receiver";
import { useContext } from "react";
// utils/auth.js (Authentication utility)
// export const isAuthenticated = (req) => {
//   // Implement your authentication check logic here
//   // Example: Check if the user information exists in the session or if the access token is valid
//   // const res = axios.get('https://prepdoctors.online/auth/callback/brightspace')
//   // console.log(res)
//   // if (res) {
//   //     return true;
//   // }
//   // return false;

//   // var cookies = document.cookie.split(";"); // get all cookies
//   // var name = "name"; // the name of the cookie you want
//   // var value = ""; // the value of the cookie you want

//   // // loop through the cookies and find the one with the name you want
//   // for (var i = 0; i < cookies.length; i++) {
//   //   var cookie = cookies[i].trim(); // remove any whitespace
//   //   var index = cookie.indexOf("="); // find the index of the equal sign
//   //   var cname = cookie.substring(0, index); // get the cookie name
//   //   var cvalue = cookie.substring(index + 1); // get the cookie value
//   //   if (cname == name) { // if the cookie name matches the one you want
//   //     value = cvalue; // assign the value to the variable
//   //     break; // exit the loop
//   //   }
//   // }

//   const token = useContext(AuthContext);

//   // Check if the accessToken exists
//   if (accessToken) {
//     // Perform actions for an authenticated user
//     console.log("User is authenticated!");
//     return true;
//     // You can also use the accessToken in your API requests or other operations.
//   } else {
//     // Perform actions for an unauthenticated user
//     console.log("User is not authenticated!");
//     // For example, you might redirect them to the login page.
//     return false;
//   }

//   // // do something with the cookie value
//   // console.log(value);

//   // return !!req.session.user; // Replace this with your actual authentication check
// };


// const isAuthenticated = () => {
//   // use useContext hook to get the access token from context
//   const token = useContext(AuthContext);

//   // Check if the accessToken exists
//   if (token) {
//     // Perform actions for an authenticated user
//     console.log("User is authenticated!");
//     return true;
//     // You can also use the accessToken in your API requests or other operations.
//   } else {
//     // Perform actions for an unauthenticated user
//     console.log("User is not authenticated!");
//     // For example, you might redirect them to the login page.
//     return false;
//   }

//   // return <div>Welcome to Next.js!</div>;
// }

// export default isAuthenticated;

export default function isAuthenticated() {
  const token = useContext(null);
  return !!token;
}
