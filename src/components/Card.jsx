import "./card.css";
import { FaStar } from "react-icons/fa6";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

export function Card({ data }) {
  return (
    <>
      <div className="productcard">
        <Link to={`/product/${data.id}`} className="go-to-link">
          <div className="cardimage">
            {data.sale && <span className="badge">sale</span>}
            <img src={data.img} alt="product image" />
          </div>
        </Link>
        <div className="carddetails">
          <Link to={`/product/${data.id}`} className="go-to-link">
            <div className="details">
              <p className="category">{data.category}</p>
              <p className="name">{data.name}</p>
              <div className="rating">
                <i className="star">{<FaStar />}</i>
                <span className="ratingaverage">{data.rateavg}</span>
                <span className="ratingcount">({data.ratecount})</span>
              </div>
              <div className="price">
                <p className="saleprice">${data.saleprice}</p>
                {data.sale && (
                  <p className="normalprice">${data.originalprice}</p>
                )}
              </div>
            </div>
          </Link>
          <button className="addtocart">
            <i className="addcarticon">
              <BsCartPlus />
            </i>
            <p className="addcarttext">Add to Cart</p>
          </button>
        </div>
      </div>
    </>
  );
}
