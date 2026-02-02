import "./homeproducts.css";
import { Card } from "../../../components/Card";
import { featuredData } from "../../../data/featureddata";

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
    </>
  );
}
