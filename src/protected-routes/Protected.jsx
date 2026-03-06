import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Protected({ children }) {
  const { currentLogin } = useAuth();
  if (currentLogin) {
    return children;
  }
  return <Navigate to="/" replace/>;
 
}
