// pages/login.js
import React, { useState } from "react";

let testtoken = "test";
function updateToken(value) {
  testtoken = value;
}

var testtoken2 = { testing: "test2" };

export { testtoken, updateToken, testtoken2 };
const LoginPage = () => {
  //   const handleLogin = () => {
  //     // Handle login button click, redirect to D2L Brightspace login page
  //     window.location.href ="https://auth.brightspace.com/oauth2/auth?response_type=code&client_id=b0a6ff9d-4aed-46ba-80ce-1547214fbaee&scope=core:*:*";

  // };

  const handleLogin = () => {
    const authUrl =
      "https://auth.brightspace.com/oauth2/auth?response_type=code&client_id=b0a6ff9d-4aed-46ba-80ce-1547214fbaee&scope=core:*:*";
    window.location.replace(authUrl);
  };

  return (
    <div

    //   style={{
    //     display: "flex",
    //     "justify-content": "center",
    //     "align-items": "center",
    //   }}
    >
      <h1 style={{ color: "white",fontSize: "36px", fontWeight: "bold", textAlign: "center", margin: "0 auto" }}>
        Welcome to Your AFK Course AI Assistant
      </h1>
      <button
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "20px",
        }}
        onClick={handleLogin}
        className="alignItems-center mr-2 bg-white hover:opacity-50 active:opacity-100 transition-colors py-2 px-3 rounded-xl"
      >
        Login with D2L Brightspace
      </button>
    </div>
  );
  // return (
  //   <div>
  //     <h1>OAuth2.0 Example</h1>
  //     <button onClick={handleLogin}>Login with OAuth2</button>
  //   </div>
  // );
};

export default LoginPage;

// const LoginButton = () => {
//     const handleLogin = async () => {
//       try {
//         // Replace 'YOUR_FLASK_API_ENDPOINT/login' with your Flask backend's login route
//         const response = await axios.get('YOUR_FLASK_API_ENDPOINT/login');

//         // Redirect the user to the D2L authorization endpoint
//         window.location.href = response.data.auth_url;
//       } catch (error) {
//         console.error('Error initiating OAuth flow:', error);
//       }
//     };

//     return (
//       <button onClick={handleLogin}>Login with D2L</button>
//     );
//   };

//   export default LoginButton;
