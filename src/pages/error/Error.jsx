import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import "./error.css";

export function Error() {
  return (
    <>

      <main className="error-page">
        <div className="error-wrapper">
          
          <div className="error-left">
            <h1 className="error-code">404</h1>
            <h2 className="error-heading">Page Not Found</h2>
            <p className="error-description">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>

            <Link to="/" className="error-btn">
              Back to Home
            </Link>
          </div>

          <div className="error-right">
            <img
              src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
              alt="404 Illustration"
            />
          </div>

        </div>
      </main>

    </>
  );
}