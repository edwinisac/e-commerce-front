import "./register.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Register() {
  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create Account</h2>
        <p className="subtitle">Sign up to get started</p>

        <form className="register-form">
          <div className="row">
            <input type="text" placeholder="Full Name" required />
            <input type="number" placeholder="Age" required />
          </div>

          <select required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />

          <button className="primary-btn" type="submit">
            Register
          </button>
        </form>

        <div className="login-redirect">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </div>

        <div className="divider">
          <span>OR</span>
        </div>

        <div className="social-buttons">
          <button className="google-btn">
            <FcGoogle />
            Sign up with Google
          </button>

          <button className="apple-btn">
            <FaApple />
            Sign up with Apple
          </button>
        </div>
      </div>
    </div>
  );
}
