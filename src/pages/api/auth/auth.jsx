import axios from "axios";
// import { useAccessToken } from '../pages/api/backend_res';
import { AuthContext } from "../backend_receiver";
import { useContext } from "react";

function isAuthenticated() {
  const token = useContext(AuthContext);
  return !!token;
}
export default isAuthenticated;