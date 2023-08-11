import '@/styles/globals.css'
import { set } from 'date-fns';
// import { AuthProvider } from './api/AccessTokenContext';
import { createContext, useState } from 'react';

export const AuthContext = createContext();

export default function App({ Component, pageProps }) {
  // const [accessToken, setAccessToken] = useState(true);
  return (
  // <AuthContext.Provider value={[accessToken, setAccessToken]}>
    <Component {...pageProps} />
  // </AuthContext.Provider> 
  )
}