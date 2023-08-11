// components/ProtectedRoute.js (Protected Route HOC)
// components/ProtectedRoute.js (Protected Route HOC)
import { useEffect } from "react";
// import { useRouter } from "next/router";
// import { isAuthenticated } from './auth';
// import { AuthContext } from "../backend_receiver";
// import { useContext } from "react";
import axios from "axios";
// import { AuthContext } from "../AccessTokenContext";
// import Get_token from "../backend_receiver";

const clientId = "b0a6ff9d-4aed-46ba-80ce-1547214fbaee";
const CLIENT_SECRET = "hR40IVbuuIYuhyqpOzDuNL7bz7zFpUR8o1mkzvbAX7w";
const redirectUri = "https://localhost/chat";
var accessToken = null;

async function Get_token2() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    if (code) {
      axios
        .post("https://prepdoctors.online/api/token", {
          grant_type: "authorization_code",
          client_id: clientId,
          client_secret: CLIENT_SECRET,
          code: code,
          redirect_uri: redirectUri,
          scope: "enrollment:own_enrollment:read",
        })
        .then((response) => {
          const accessToken = response.data["access_token"];
          console.log("Access Token:", accessToken);
          return accessToken; // Set the access token in the context
        })
        .catch((error) => {
          console.error("Error fetching access token:", error);
          return "N/A";
        });
    }
  }, []);
}

export default function ProtectedResource({children}) {
    const getToken = async () => {
      useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");
        if (code) {
          axios
            .post("https://prepdoctors.online/api/token", {
              grant_type: "authorization_code",
              client_id: clientId,
              client_secret: CLIENT_SECRET,
              code: code,
              redirect_uri: redirectUri,
              scope: "enrollment:own_enrollment:read",
            })
            .then((response) => {
              const accessToken = response.data["access_token"];
              console.log("Access Token:", accessToken);
              return accessToken; // Set the access token in the context
            })
            .catch((error) => {
              console.error("Error fetching access token:", error);
              return "N/A";
            });
        }
      }, []);
    };
    const check_for_token = async () => {
      if (accessToken === null) {
      console.log("=== calling get_token");
      accessToken = await getToken();
      console.log("=== skipped");
      if (typeof accessToken === "undefined" || accessToken.PromiseResult === undefined || accessToken === "N/A") {
        console.log("Token not found");
      }else {
        console.log("Token found");
        console.log("token =", accessToken);
      }
    } else {
  
      console.log("token =", accessToken);
      useEffect(() => {
        // Check if the user is authenticated, if not, redirect to the login page or initiate the SSO process
        if (typeof accessToken === "undefined" || accessToken.PromiseResult === undefined || accessToken === "N/A") {
          // Replace the following line with the redirection or SSO initiation logic
          // For example, you can redirect to the login page:
          //   router.push('/login');
          // Or, you can initiate the SSO process:
          console.log("===NO token");
          window.location.href ="https://auth.brightspace.com/oauth2/auth?response_type=code&client_id=b0a6ff9d-4aed-46ba-80ce-1547214fbaee&scope=core:*:*";
          //   "https://prepdoctors.brightspace.com/d2l/oauth2/auth?client_id=b0a6ff9d-4aed-46ba-80ce-1547214fbaee&redirect_uri=http://localhost:5000/auth/callback/brightspace&response_type=code";
        } else {
          console.log("found token");
          window.location.href = "http://localhost/chat"
        }
      }, []);
    }}
    check_for_token();
    return children;
  };


// const ProtectedRoute = ({ children }) => {
//   //
//   if (accessToken === null) {
//     console.log("=== calling get_token");
//     accessToken = Get_token2();
//     console.log("=== skipped");
//     if (typeof accessToken === "undefined" || accessToken.PromiseResult === undefined) {
//       console.log("Token not found");
//     }else {
//       console.log("Token found");
//       console.log("token =", accessToken);
//     }
//   } else {
//     // window.location.href = "http://localhost/chat"
//     // const { accessToken2 } = useContext(AuthContext);
//     // console.log("token2 =", accessToken2);
//     // useEffect(() => {
//     //   const params = new URLSearchParams(window.location.search);
//     //   const code = params.get('code');
//     //   if (code) {
//     //     axios.post('https://prepdoctors.online/api/token', {
//     //       grant_type: 'authorization_code',
//     //       client_id: clientId,
//     //       client_secret: CLIENT_SECRET,
//     //       code: code,
//     //       redirect_uri: redirectUri,
//     //       scope: 'enrollment:own_enrollment:read',
//     //     })
//     //       .then((response) => {
//     //         const accessToken = response.data["access_token"];
//     //         // setToken(accessToken);
//     //         console.log('=Access Token (route):', accessToken);
//     //         // Use the accessToken to make authorized requests to the backend API
//     //       })
//     //       .catch((error) => {
//     //         console.error('Error fetching access token:', error);
//     //       });
//     //   }
//     // }, []);
//     // const router = useRouter();
//     // const token = useContext(AuthContext);
//     // console.log("token =", accessToken);
//     // console.log("token.lenght =", token.length);

//     // const response =  fetch('http://localhost/api/backend_receiver');
//     // const result = response.body;
//     // Update the state with the fetched data
//     // setToken(result);
//     // console.log(result);
//     // console.log("fetching token");

//     console.log("token =", accessToken);
//     useEffect(() => {
//       // Check if the user is authenticated, if not, redirect to the login page or initiate the SSO process
//       if (typeof accessToken === "undefined") {
//         // Replace the following line with the redirection or SSO initiation logic
//         // For example, you can redirect to the login page:
//         //   router.push('/login');
//         // Or, you can initiate the SSO process:
//         console.log("===NO token");
//         window.location.href ="https://auth.brightspace.com/oauth2/auth?response_type=code&client_id=b0a6ff9d-4aed-46ba-80ce-1547214fbaee&scope=core:*:*";
//         //   "https://prepdoctors.brightspace.com/d2l/oauth2/auth?client_id=b0a6ff9d-4aed-46ba-80ce-1547214fbaee&redirect_uri=http://localhost:5000/auth/callback/brightspace&response_type=code";
//       } else {
//         console.log("found token");
//         window.location.href = "http://localhost/chat"
//       }
//     }, []);
//   }

//   return children;
// };

// export default ProtectedRoute;
