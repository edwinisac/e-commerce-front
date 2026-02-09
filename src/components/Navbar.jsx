import { useState } from "react";
import "./navbar.css";
import { CiShoppingCart, CiHeart, CiUser } from "react-icons/ci";
import { LuSearch } from "react-icons/lu";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="navbar">
      <Link to="/">
        <img src="../../public/logo.svg" alt="logo" />
      </Link>
      <div className="search">
        <button className="searchicon">
          <LuSearch />
        </button>
        <input
          className="searchinput"
          type="text"
          placeholder="search for products"
        />
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
          <Link to="/login">
            <button className="navsignin">Sign In</button>
          </Link>
        )}
      </div>
    </div>
  );
}
