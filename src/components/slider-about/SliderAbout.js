import "./slider-about.css";

function SliderAbout({ item }) {
  return (
    <div className="img-container">
      {item.brands.map((brand) => (
        <div className="img-item" key={brand.id}>
          <a href="/#">
            <img src={brand.image} alt="" />
          </a>
        </div>
      ))}
    </div>
  );
}

export default SliderAbout;
