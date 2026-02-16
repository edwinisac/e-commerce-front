import "./loginpage.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// , useNavigate

export function LoginPage() {
  const [users, setUsers] = useState([]);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await axios.get("http://localhost:5000/users");
        setUsers(result.data);
      } catch (error) {
        console.error("unable to fetch users", error);
      }
    };
    fetchUsers();
  }, []);

  // const navigate=useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(users.filter((user) => user.username === userName));
  };
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

          <input
            type="text"
            placeholder="enter your user name"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button className="signin" onClick={(e) => handleSignIn(e)}>
            Sign in
          </button>
          <h4 className="newuser">
            New user?{" "}
            <Link to={"/Register"} className="signup">
              click here
            </Link>
          </h4>
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
