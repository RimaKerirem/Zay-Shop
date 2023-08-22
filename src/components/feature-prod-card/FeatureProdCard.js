import { Link } from "react-router-dom";
import "./feature-prod-card.css";
import { Stars } from "../modules";

function FeatureProdCard({ card }) {
  return (
    <div className="feature-prod-card">
      <Link className="card-image" to="/shop-single">
        <img src={card.image} alt="" />
      </Link>
      <div className="card-body">
        <div className="top">
          <Stars stars={card.stars} />
          <p className="price">{card.price}</p>
        </div>
        <div className="middle">
          <Link to="/shop-single" className="feature-title">
            {card.featureTitle}
          </Link>
          <p className="feature-text">{card.featureText}</p>
        </div>
        <p className="bottom">{card.reviews}</p>
      </div>
    </div>
  );
}

export default FeatureProdCard;
