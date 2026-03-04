import { useState } from "react";
import "./navbar.css";
import { CiShoppingCart, CiHeart, CiUser } from "react-icons/ci";
import { LuSearch } from "react-icons/lu";
import { Link } from "react-router-dom";
import {  useAuth } from "../context/AuthContext";



export function Navbar() {


  const{currentLogin,setCurrentLogin}=useAuth();

  const[isDropdownOpen,setDropDownOpen]=useState(false);

  const toggleDropdown=()=>{setDropDownOpen(!isDropdownOpen)}

  const handleLogout=()=>{
    setCurrentLogin(null)
    setDropDownOpen(false)
    localStorage.removeItem("user")
  }
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
        {currentLogin ? (
          <>
            <button className="navbutton">
              <CiShoppingCart />
            </button>
            <button className="navbutton">
              <CiHeart />
            </button>


            <div className="user-wrapper">
              <button className="navbutton" onClick={toggleDropdown}>
                <CiUser />
              </button>

              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/profile" className="dropdown-item">
                    Profile
                  </Link>
                  <Link to="/orders" className="dropdown-item">
                    Orders
                  </Link>
                  <button className="dropdown-item logout" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
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
