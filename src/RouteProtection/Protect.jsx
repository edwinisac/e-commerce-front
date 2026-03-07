import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";



export function Protect(){
const {currentLogin}=useAuth();
return(currentLogin?<Outlet/>:<Navigate to="/"/>);
}