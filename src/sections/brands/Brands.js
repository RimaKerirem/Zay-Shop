import { SectionTitle, SliderAbout } from "../../components/modules";
import "./brands.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { listBrands } from "../../data/brandsData";

function Brands() {
  return (
    <section className="brands">
      <div className="container">
        <SectionTitle
          mainTitle="Our Brands"
          mainText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet."
        />

        <Swiper
          slidesPerView={1}
          loop={true}
          spaceBetween={60}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
        >
          {listBrands.map((item) => (
            <SwiperSlide key={item.id}>
              <SliderAbout item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Brands;
