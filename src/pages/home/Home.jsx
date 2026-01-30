import { Navbar } from "../../components/Navbar";
import "./home.css";

export function Home() {
  return (
    <>
      <Navbar />
      <div className="space"></div>
      <div className="landingbanner">
        <div className="message">
        <div className="strike">New Collection 2026</div>
        <h1>Premium Electronics at Your Fingertips</h1>
        <p>
          Discover the latest tech gadgets and electronics with unbeatable
          prices and fast shipping.
        </p>
        </div>

        <div className="buttons">
          <button className="shop">Shop Now</button>
          <button className="learn">Learn More →</button>
        </div>
      </div>
      <div className="demo"></div>
    </>
  );
}
