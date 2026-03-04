import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentLogin, setCurrentLogin] = useState(null);

  useEffect(() => {
    let storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setCurrentLogin(JSON.parse(storedUser));
      } catch (error) {
        console.error("invalid json in local storage", error);
      }
    }
  },[]);
  return (
    <AuthContext.Provider value={{ currentLogin, setCurrentLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(){
  return useContext(AuthContext);
}