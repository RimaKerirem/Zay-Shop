import "./slider-related-products.css";
import { ShopCard } from "../modules";

function SliderRelatedProducts({ item }) {
  return (
    <div className="slider-related">
      {item.products.map((card) => (
        <ShopCard key={card.id} card={card} />
      ))}
    </div>
  );
}

export default SliderRelatedProducts;
