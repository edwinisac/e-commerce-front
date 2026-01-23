import { useState } from "react";
import "./navbar.css";
import { CiShoppingCart, CiHeart, CiUser } from "react-icons/ci";
import { LuSearch } from "react-icons/lu";

export function Navbar() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (

    
    <div className="nav">
      <img src="logo.svg" alt="logo" />
      <div className="search">
        <button className="searchicon">
          <LuSearch />
        </button>
        <input type="text" placeholder="search for products" />
      </div>
      <div className="navicons">
        {isLoggedIn ? (
          <>
            <button>
              <CiShoppingCart />
            </button>
            <button>
              <CiHeart />
            </button>
            <button>
              <CiUser />
            </button>
          </>
        ) : (
          <button className="button">Sign In</button>
        )}
      </div>
    </div>
  );
}
