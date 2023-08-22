import "./shop.css";
import { Brands, ShopContent } from "../../sections/modules";

function Shop() {
  document.title = "Zay Shop - Product Listing Page";

  return (
    <>
      <ShopContent />
      <Brands />
    </>
  );
}

export default Shop;
