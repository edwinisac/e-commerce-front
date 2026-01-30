import { useState } from "react";
import "./navbar.css";
import { CiShoppingCart, CiHeart, CiUser } from "react-icons/ci";
import { LuSearch } from "react-icons/lu";

export function Navbar() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (

    
    
      <div className="navbar">
      <img src="logo.svg" alt="logo" />
      <div className="search">
        <button className="searchicon">
          <LuSearch />
        </button>
        <input className="searchinput" type="text" placeholder="search for products" />
      </div>
      <div className="navicons">
        {isLoggedIn ? (
          <>
            <button className="navbutton">
              <CiShoppingCart />
            </button>
            <button className="navbutton">
              <CiHeart />
            </button>
            <button className="navbutton">
              <CiUser />
            </button>
          </>
        ) : (
          <button className="signin">Sign In</button>
        )}
      </div>

      </div>

  
  );
}
