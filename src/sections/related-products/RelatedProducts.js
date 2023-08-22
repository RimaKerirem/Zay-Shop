import "./related-products.css";
import { Container, SliderRelatedProducts } from "../../components/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { relatedProductsData } from "../../data/relatedProductsData";
import { relatedProductsDataM } from "../../data/relatedProductsDataM";
import { useEffect, useState } from "react";

function RelatedProducts() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="related-products">
      <Container>
        <h2>Related Products</h2>
        <Swiper
          slidesPerView={1}
          loop={true}
          spaceBetween={40}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {windowWidth >= 600 &&
            relatedProductsData.map((item) => (
              <SwiperSlide key={item.id}>
                <SliderRelatedProducts item={item} />
              </SwiperSlide>
            ))}
          {windowWidth < 600 &&
            relatedProductsDataM.map((item) => (
              <SwiperSlide key={item.id}>
                <SliderRelatedProducts item={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </Container>
    </section>
  );
}

export default RelatedProducts;
