import { ProductSingle, RelatedProducts } from "../../sections/modules";
import "./shop-single.css";

function ShopSingle() {
  document.title = "Zay Shop - Product Detail Page";

  return (
    <>
      <ProductSingle />
      <RelatedProducts />
    </>
  );
}

export default ShopSingle;
