import "./loginpage.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";



export function LoginPage() {
  const navigate=useNavigate();
  return (
    <div className="login-container">
      <div className="login-card">

        {/* LEFT : IMAGE SECTION */}
        <div className="login-image">
          <h2>Welcome Back 👋</h2>
          <p>Login to continue shopping smarter</p>
        </div>

        {/* RIGHT : FORM SECTION */}
        <form className="login-form">
          <h1>Sign In</h1>

          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />

          <button className="signin" onClick={()=>navigate("/")}>Sign in</button>
          <h4 className="newuser">New user?  <Link to={"/Register"} className="signup">click here</Link></h4>
          <div className="divider">
            <span>OR</span>
          </div>

          <button type="button" className="google">
            <FcGoogle />
            Continue with Google
          </button>

          <button type="button" className="apple">
            <FaApple />
            Continue with Apple
          </button>
        </form>

      </div>
    </div>
  );
}
