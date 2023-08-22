import { Container } from "../../components/modules";
import "./hero-about.css";

function HeroAbout() {
  return (
    <section className="hero-about">
      <Container>
        <div className="about-left">
          <h1 className="about-title">About Us</h1>
          <p className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="about-right">
          <img src="/images/about-hero.svg" alt="" />
        </div>
      </Container>
    </section>
  );
}

export default HeroAbout;
