import "./footer.css";
import { Link, NavLink } from "react-router-dom";

import { LuFacebook,LuTwitter,LuInstagram,LuYoutube } from "react-icons/lu";

export function Footer() {
  return (
    <>
      <footer className="footer">
        {/* BRAND / CONNECT */}
        <div className="connect footersub">
          <img src="logo dark.svg" alt="Cartit logo" className="footer-logo" />
          <p className="footer-desc">
            Your one-stop shop for premium electronics and gadgets.
          </p>

          <div className="socials">
            <a target="_blank" href="https://www.facebook.com/"><i><LuFacebook/></i></a>
            <a target="_blank" href=""><i ><LuTwitter/></i></a>
            <a target="_blank" href="https://www.instagram.com/"><i><LuInstagram/></i></a>
            <a target="_blank" href="https://www.youtube.com/"><i><LuYoutube/></i></a>
          </div>
        </div>

        {/* SHOP */}
        <div className="shop footersub">
          <h4>Shop</h4>
          <NavLink to="/products">All Products</NavLink>
          <NavLink to="/featured">Featured</NavLink>
          <NavLink to="/bestsellers">Best Sellers</NavLink>
          <NavLink to="/new">New Arrivals</NavLink>
          <NavLink to="/deals">Deals</NavLink>
        </div>

        {/* CUSTOMER SERVICE */}
        <div className="customerservice footersub">
          <h4>Customer Service</h4>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/shipping">Shipping Info</NavLink>
          <NavLink to="/returns">Returns</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/track-order">Track Order</NavLink>
        </div>

        {/* ABOUT */}
        <div className="about footersub">
          <h4>About</h4>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/careers">Careers</NavLink>
          <NavLink to="/privacy">Privacy Policy</NavLink>
          <NavLink to="/terms">Terms of Service</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </div>
      </footer>

      <div className="copyright">
        © 2026 Cartit. All rights reserved.
      </div>
    </>
  );
}
