// components/ProtectedRoute.js (Protected Route HOC)
// components/ProtectedRoute.js (Protected Route HOC)
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import  isAuthenticated  from '../utils/auth';
import { AuthContext } from "../pages/api/backend_receiver";
import { useContext } from "react";
import { is } from 'date-fns/locale';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated, if not, redirect to the login page or initiate the SSO process
    if (isAuthenticated()) {
      // Replace the following line with the redirection or SSO initiation logic
      // For example, you can redirect to the login page:
    //   router.push('/login');
      // Or, you can initiate the SSO process:
      window.location.href =
    //   "https://prepdoctors.brightspace.com/d2l/oauth2/auth?client_id=b0a6ff9d-4aed-46ba-80ce-1547214fbaee&redirect_uri=http://localhost:5000/auth/callback/brightspace&response_type=code";
    "https://auth.brightspace.com/oauth2/auth?response_type=code&client_id=b0a6ff9d-4aed-46ba-80ce-1547214fbaee&scope=core:*:*"
    }
  }, []);

  return children;
};

export default ProtectedRoute;
