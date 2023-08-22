import "./featured-product.css";
import {
  Container,
  FeatureProdCard,
  SectionContainer,
  SectionTitle,
} from "../../components/modules";
import { featuredProductData } from "../../data/featuredProductData";

function FeaturedProduct() {
  return (
    <section className="featured-product">
      <Container>
        <SectionTitle
          mainTitle="Featured Product"
          mainText="Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        />
        <SectionContainer>
          {featuredProductData.map((card) => (
            <FeatureProdCard key={card.id} card={card} />
          ))}
        </SectionContainer>
      </Container>
    </section>
  );
}

export default FeaturedProduct;
