import "./shop-content.css";
import {
  Container,
  SectionContainer,
  ShopCard,
  SideBarShop,
} from "../../components/modules";

import { shopData } from "../../data/shopData";

function ShopContent() {
  const gender = [
    { id: "a", name: "All" },
    { id: "m", name: "Men's" },
    { id: "w", name: "Women's" },
  ];

  return (
    <section className="shop-content">
      <Container>
        <div className="shop-left">
          <h1>Categories</h1>

          <SideBarShop />
        </div>
        <div className="shop-right">
          <div className="shop-right-top">
            <ul className="gender">
              {gender.map((li) => (
                <li key={li.id}>
                  <a href="#top-nav">{li.name}</a>
                </li>
              ))}
            </ul>

            <select name="" id="">
              <option value="featured">Featured</option>
              <option value="a-to-z">A to Z</option>
              <option value="item">Item</option>
            </select>
          </div>
          <SectionContainer>
            {shopData.map((card, index) => (
              <ShopCard card={card} key={card.id} />
            ))}
          </SectionContainer>
          <ul className="shop-right-bottom">
            <li>
              <a href="#top-nav" className="active">
                1
              </a>
            </li>
            <li>
              <a href="#top-nav">2</a>
            </li>
            <li>
              <a href="#top-nav">3</a>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default ShopContent;
