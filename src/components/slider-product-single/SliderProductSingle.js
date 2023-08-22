import "./slider-product-single.css";

function SliderProductSingle({ item, setImg }) {
  return (
    <div className="images-box">
      {item.products.map((img) => (
        <div className="img" key={img.id} onClick={() => setImg(img.image)}>
          <img src={img.image} alt="" />
        </div>
      ))}
    </div>
  );
}

export default SliderProductSingle;
