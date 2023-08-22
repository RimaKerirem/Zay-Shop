import "./product-single.css";
import {
  Container,
  SectionContainer,
  SliderProductSingle,
  Stars,
} from "../../components/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { productSingleData } from "../../data/productSingleData";
import { useState } from "react";

function ProductSingle() {
  const [img, setImg] = useState("./images/product_single_10.jpg");
  const [qte, seQte] = useState(1);
  const [activeSize, setActiveSize] = useState("");

  const size = [
    { id: "s", elt: "S" },
    { id: "m", elt: "M" },
    { id: "l", elt: "L" },
    { id: "xl", elt: "XL" },
  ];

  return (
    <section className="product-single">
      <Container>
        <SectionContainer>
          <div className="prod-images">
            <img src={img} alt="" />

            <Swiper
              slidesPerView={1}
              loop={true}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
            >
              {productSingleData.map((item) => (
                <SwiperSlide key={item.id}>
                  <SliderProductSingle item={item} setImg={setImg} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="prod-info">
            <h1 className="product-title">Active Wear</h1>
            <p className="product-price">$25.00</p>
            <div className="rate-comment">
              <Stars stars="4" />
              <div>
                <p className="rating">Rating 4.8</p>
                <span>|</span>
                <p className="comments">36 comments</p>
              </div>
            </div>
            <div className="brand">
              <h6>Brand:&ensp;</h6>
              <p>Easy Wear</p>
            </div>
            <div className="description">
              <h6>Description:</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod temp incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse. Donec condimentum elementum convallis. Nunc
                sed orci a diam ultrices aliquet interdum quis nulla.
              </p>
            </div>
            <div className="color">
              <h6>Avaliable Color:&ensp;</h6>
              <p> White / Black</p>
            </div>
            <div className="specification">
              <h6>Specification: </h6>
              <ul>
                <li>Lorem ipsum dolor sit</li>
                <li>Amet, consectetur</li>
                <li>Adipiscing elit,set</li>
                <li>Dui aute irure</li>
                <li>Ut enim ad minim</li>
                <li>Dolore magna aliqua</li>
                <li>Excepteur sint</li>
              </ul>
            </div>
            <form action="" onSubmit={(e) => e.preventDefault()}>
              <div className="size-quantity">
                <ul className="size">
                  <li>Size:</li>
                  {size.map((li) => (
                    <li key={li.id}>
                      <button
                        className={activeSize === li.id ? "active" : ""}
                        onClick={() => setActiveSize(li.id)}
                      >
                        {li.elt}
                      </button>
                    </li>
                  ))}
                </ul>

                <ul className="quantity">
                  <li>Quantity</li>
                  <li>
                    <button
                      onClick={(e) => {
                        if (qte <= 0) {
                          e.stopPropagation();
                        } else {
                          seQte(qte - 1);
                        }
                      }}
                    >
                      -
                    </button>
                  </li>
                  <li>
                    {qte >= 1 && <span>{qte}</span>}
                    {qte < 1 && <span>1</span>}
                  </li>
                  <li>
                    <button onClick={() => seQte(qte + 1)}>+</button>
                  </li>
                </ul>
              </div>
              <div className="buttons">
                <button className="buy">Buy</button>
                <button className="add-to-cart">Add To Cart</button>
              </div>
            </form>
          </div>
        </SectionContainer>
      </Container>
    </section>
  );
}

export default ProductSingle;
