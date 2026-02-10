import { useParams, Link } from "react-router-dom";
import "./productDetail.css";
import { allproducts } from "../../data/allproducts";
import { Navbar } from "../../components/Navbar";
import { Space } from "../../components/Space";
import { Footer } from "../../components/Footer";
import { FaArrowLeft, FaStar, FaRegHeart } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { PiShareNetworkThin } from "react-icons/pi";

export function ProductDetail() {
  const { id } = useParams();
  const current = allproducts.find((item) => item.id === Number(id));

  if (!current) return <p>Product not found</p>;
  let price = Math.round(current.originalprice - current.saleprice);
  let percentage = Math.round(
    ((current.originalprice - current.saleprice) / current.originalprice) * 100
  );

  return (
    <div className="product-page">
      <Navbar />
      <Space />

      <Link className="back-link" to="/">
        <FaArrowLeft /> Back to home
      </Link>

      <section className="product-container">
        {price > 0 && <span className="badge-save">Save ${price}</span>}

        {/* Image */}
        <div className="product-image">
          <img src={current.img} alt={current.name} />
        </div>

        {/* Info */}
        <div className="product-info">
          <p className="product-category">{current.category}</p>
          <h1 className="product-name">{current.name}</h1>

          {/* Rating */}
          <div className="product-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="rating-avg">{current.rateavg}</span>
            <span className="rating-count">({current.ratecount})</span>
          </div>

          {/* Pricing */}
          <div className="product-pricing">
            <span className="sale-price">${current.saleprice}</span>
            <span className="original-price">${current.originalprice}</span>
          </div>

          {price > 0 && (
            <p className="save-message">
              You save ${price} ({percentage}% off)
            </p>
          )}

          {/* Description */}
          <h2 className="section-title">Description</h2>
          <p className="product-description">{current.description}</p>

          {/* Actions */}
          <div className="actions">
            <button className="add-cart">
              <BsCartPlus /> Add to cart
            </button>

            <div className="secondary-actions">
              <button>
                <FaRegHeart /> Wishlist
              </button>
              <button>
                <PiShareNetworkThin /> Share
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="features">
            <h2 className="section-title">Product Features</h2>
            <ul>
              <li>Free shipping on orders over $100</li>
              <li>30-day return policy</li>
              <li>1-year manufacturer warranty</li>
              <li>Secure payment processing</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
