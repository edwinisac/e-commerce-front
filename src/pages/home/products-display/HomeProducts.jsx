import "./homeproducts.css";
import image1 from "../../../assets/images/image1.jpg"

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
            <div className="productcard">
                <div className="cardimage">
                    <img src={image1} alt="" />
                </div>
                <div className="carddetails">
                    
                </div>
            </div>
        </div>

        <div className="demo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et at eveniet quibusdam maxime corrupti nihil rerum! Ipsum est, ab architecto excepturi facilis voluptatem obcaecati eaque aut necessitatibus in atque!
        </div>
      </div>
    </>
  );
}
