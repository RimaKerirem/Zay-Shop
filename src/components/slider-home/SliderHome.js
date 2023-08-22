import { Container } from "../modules";
import "./slider-home.css";

export default function SliderHome({ slider, first }) {
  return (
    <div className="slider-home">
      <Container>
        <div className="hero-left">
          <h1 className={first ? "title first" : "title"}>{slider.title}</h1>
          <h3 className="subtitle">{slider.subtitle}</h3>
          <p className="text">{slider.text}</p>
        </div>
        <div className="hero-right">
          <img src={slider.image} alt="" />
        </div>
      </Container>
    </div>
  );
}
