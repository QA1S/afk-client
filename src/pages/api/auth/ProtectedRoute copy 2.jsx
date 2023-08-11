import { useContext, useEffect } from "react";
import axios from "axios";
// import { AuthContext } from "../../_app";
import { testtoken, updateToken, testtoken2 } from "@/pages/login";
// import { set } from "date-fns";


function ProtectedRoute () {
  // const [accessToken, setAccessToken] = useContext(AuthContext);
  // console.log("access token =", accessToken);
  console.log("testtoken =", testtoken);
  console.log("testtoken2 =", testtoken2);
  const handleLogin = () => {
    const authUrl = "http://localhost/_auth";
    window.location.replace(authUrl);
  };
  updateToken("Changed");
  console.log("testtoken =", testtoken);
  testtoken2.testing = "changed2";
  console.log("testtoken2 =", testtoken2);
  // useEffect(async() => {
  //   // if (accessToken === null) {
  //   //   console.log("no access token");
  //   // }
  //   // console.log("logged in");
  //   // // await sleep(5000);
  //   // console.log(accessToken);
  //   // // await sleep(5000);
  //   // setAccessToken(false);
  //   // console.log("logged out")
  //   // // console.log(accessToken);
    
  // });
  return (
    <div
    >
      <h1>Welcome to Your Next.js App</h1>
      <button
        onClick={handleLogin}
        className="alignItems-center mr-2 bg-white hover:opacity-50 active:opacity-100 transition-colors py-2 px-3 rounded-xl"
      >
        redirect route
        
      </button>
    </div>
  );}
  export default ProtectedRoute;