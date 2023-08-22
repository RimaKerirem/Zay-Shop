import {
  CategorieCard,
  Container,
  SectionContainer,
  SectionTitle,
} from "../../components/modules";
import "./categories.css";
import { categoriesData } from "../../data/categoriesData";

function Categories() {
  return (
    <section className="categories">
      <Container>
        <SectionTitle
          mainTitle="Categories of The Month"
          mainText="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />

        <SectionContainer>
          {categoriesData.map((card) => (
            <CategorieCard key={card.id} card={card} />
          ))}
        </SectionContainer>
      </Container>
    </section>
  );
}

export default Categories;
