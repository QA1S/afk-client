// import Get_token from "./api/backend_receiver";
import React from "react";
import { useContext, useEffect } from "react";
import { AuthContext } from "./_app";
import { testtoken, testtoken2 } from "./login";
const MyPage = () => {
  // window.location.href = "http://localhost/chat";

  useEffect(() => {
  console.log("testtoken: " + testtoken);
  console.log("testtoken2: " + testtoken2.testing);
  })
          return (
      <div>
        {/* <Get_token /> */}
        <h1>This is My Page</h1>
        
      </div>
    );
  };
  
  export default MyPage;

