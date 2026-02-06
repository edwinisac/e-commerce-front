import "./homeproducts.css";
import { Card } from "../../../components/Card";
import { featuredData } from "../../../data/featureddata";
import { allproducts } from "../../../data/allproducts";
import { GiArmoredBoomerang } from "react-icons/gi";
import { Link } from "react-router-dom";

export function HomeProducts() {
  return (
    <>
      <div className="featured">
        <h2 className="featuredhead">Featured Products</h2>
        <div className="sameline">
          <p className="featuredpara">Handpicked favourites for you</p>
          <a className="viewall" href="">
            view all
          </a>
        </div>
        <div className="featuredlist">
          {featuredData.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>
      <div className="allproductshome">
        <h2 className="featuredhead">All Products</h2>
        <div className="allproductshomelist">
          {allproducts.map((item) => {
            return <Card key={item.id} data={item} />;
          })}
        </div>
        <div className="explore">
          <Link to="/products">
            {" "}
            <button className="explorebutton">
              view more{" "}
              <i className="exploreicon">
                <GiArmoredBoomerang />
              </i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
