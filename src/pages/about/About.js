import { Brands, HeroAbout, Services } from "../../sections/modules";
import "./about.css";

function About() {
  document.title = "Zay Shop - About page";

  return (
    <>
      <HeroAbout />
      <Services />
      <Brands />
    </>
  );
}

export default About;
