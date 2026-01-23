import "./navbar.css";
import { CiShoppingCart } from "react-icons/ci";

export function Navbar() {
  return (
    <div className="nav">
      <img src="logo.svg" alt="logo" />
      <i className="navicons">
        <CiShoppingCart/>
      </i>
    </div>
  );
}
