import "./card.css";
import { FaStar } from "react-icons/fa6";
import { BsCartPlus } from "react-icons/bs";

export function Card({ data }) {
  return (
    <>
      <div className="productcard">
        <div className="cardimage">
          {data.sale && <span className="badge">sale</span>}
          <img src={data.img} alt="product image" />
        </div>
        <div className="carddetails">
          <p className="category">{data.category}</p>
          <p className="name">{data.name}</p>
          <div className="rating">
            <i className="star">{<FaStar />}</i>
            <span className="ratingaverage">{data.rateavg}</span>
            <span className="ratingcount">({data.ratecount})</span>
          </div>
          <div className="price">
            <p className="saleprice">${data.saleprice}</p>
            {/* only sale is active */}
            {data.sale && <p className="normalprice">${data.originalprice}</p>}
          </div>
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
