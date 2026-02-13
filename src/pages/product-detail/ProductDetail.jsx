import { ProductPrice } from "./ProductPrice";
import { ProductFeatures } from "./ProductFeatures";
import { Navbar } from "../../components/Navbar";
import { Space } from "../../components/Space";
import { Footer } from "../../components/Footer";
import { ProductRating } from "./ProductRating";

import { allproducts } from "../../data/allproducts";

import { useParams, Link } from "react-router-dom";

import "./productDetail.css";

import { FaArrowLeft, FaRegHeart } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { PiShareNetworkThin } from "react-icons/pi";

export function ProductDetail() {
  const { id } = useParams();
  const current = allproducts.find((item) => item.id === Number(id));

  if (!current) return <p>Product not found</p>;
  let price = Math.round(current.originalprice - current.saleprice);

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
          <ProductRating avg={current.rateavg} count={current.ratecount} />

          {/* Pricing */}
          <ProductPrice
            saleprice={current.saleprice}
            originalprice={current.originalprice}
            price={price}
          />

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
          <ProductFeatures saleprice={current.saleprice} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
