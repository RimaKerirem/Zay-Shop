import { Categories, FeaturedProduct, HeroHome } from "../../sections/modules";
import "./home.css";

function Home() {
  document.title = "Zay Shop";

  return (
    <>
      <HeroHome />
      <Categories />
      <FeaturedProduct />
    </>
  );
}

export default Home;
