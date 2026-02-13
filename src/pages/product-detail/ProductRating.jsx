import { FaStar } from "react-icons/fa";

export function ProductRating({ avg, count }) {
  let starCount = Math.round(avg);
  let remaining = 5 - starCount;
  return (
    <>
      <div className="product-rating">
        <div className="stars">
          {[...Array(starCount)].map((_, i) => (
            <FaStar key={i} className="color-star" />
          ))}
          {remaining>0 && [...Array(remaining)].map((_,i)=>
          <FaStar key={i} className="normal-star" />
          )}
        </div>
        <span className="rating-avg">{avg}</span>
        <span className="rating-count">({count})</span>
      </div>
    </>
  );
}
