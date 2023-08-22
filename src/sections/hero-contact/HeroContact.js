import { Container, SectionTitle } from "../../components/modules";
import "./hero-contact.css";

function HeroContact() {
  return (
    <section className="hero-contact">
      <Container>
        <SectionTitle
          mainTitle="Contact US"
          mainText="Proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet."
        />
      </Container>
    </section>
  );
}

export default HeroContact;
