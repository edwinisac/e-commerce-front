import { createContext, useState,useEffect, useContext} from "react";

export const AuthContext=createContext();
export function AuthProvider({children}){

const[currentLogin,setCurrentLogin]=useState(null)

  // Restore login on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setCurrentLogin(JSON.parse(storedUser));
      } 
      catch(error) {
        console.error("Invalid JSON in localStorage",error);
      }
    }
  }, []);

  return(
    <AuthContext.Provider value={{currentLogin,setCurrentLogin}}>
      {children}
    </AuthContext.Provider>
  )
}

// using custom hooks for using the data

export function useAuth(){
  return useContext(AuthContext);
}