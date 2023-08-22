import "./categorie-card.css";

function CategorieCard({ card }) {
  return (
    <div className="categorie-card">
      <div className="top">
        <img src={card.image} alt="" />
      </div>
      <div className="bottom">
        <h3 className="card-title">{card.categoryTitle}</h3>
        <button className="go-shop">Go Shop</button>
      </div>
    </div>
  );
}

export default CategorieCard;
