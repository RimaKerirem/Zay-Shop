import { FaCartPlus, FaEye, FaRegHeart } from "react-icons/fa";
import { Stars } from "../modules";
import "./shop-card.css";
import { Link } from "react-router-dom";

function ShopCard({ card }) {
  return (
    <div className="shop-card">
      <div className="img-card">
        <img src={card.image} alt="" />
        <div className="img-content">
          <Link to="/shop-single">
            <FaRegHeart />
          </Link>
          <Link to="/shop-single">
            <FaEye />
          </Link>
          <Link to="/shop-single">
            <FaCartPlus />
          </Link>
        </div>
      </div>
      <div className="shop-card-body">
        <p>{card.title}</p>
        <p>{card.size}</p>
        <Stars stars={card.stars} />
        <p className="price">{card.price}</p>
      </div>
    </div>
  );
}

export default ShopCard;
