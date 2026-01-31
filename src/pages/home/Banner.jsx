import "./banner.css"

export function Banner() {
  return (
    <>
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
          <button className="shop button">Shop Now</button>
          <button className="learn button">Learn More →</button>
        </div>
      </div>
    </>
  );
}
