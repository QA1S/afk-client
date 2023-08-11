import { useContext, useEffect } from "react";
import axios from "axios";

// import { testtoken, updateToken, testtoken2 } from "@/pages/login";

const clientId = "b0a6ff9d-4aed-46ba-80ce-1547214fbaee";
const CLIENT_SECRET = "hR40IVbuuIYuhyqpOzDuNL7bz7zFpUR8o1mkzvbAX7w";
const redirectUri = "https://localhost/chat";
let flag = false;

function ProtectedRoute ({children}) {
  const handleLogin = () => {
    const authUrl = "http://localhost/chat";
    window.location.replace(authUrl);
  };
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    if (code) {
      axios
        .post(
          "https://prepdoctors.online/api/token",
          {
            grant_type: "authorization_code",
            client_id: clientId,
            client_secret: CLIENT_SECRET,
            code: code,
            redirect_uri: redirectUri,
            scope: "enrollment:own_enrollment:read",
          },
          { withCredentials: true }
        )
        .then((response) => {
          console.log("response =", response);
          if (response.data["error_here"]){
            window.location.replace("http://localhost/login");
          }else{
            flag = true;
            return children;
          }
          // const accessToken = response.data["access_token"];
          // console.log("Access Token:", accessToken);
          
          
        })
        .catch((error) => {
          console.error("Error fetching access token:", error);
        });
    }
  },[]); // Add setAccessToken as a dependency
  console.log("get_token");
  
  


  return children;}
  export default ProtectedRoute;