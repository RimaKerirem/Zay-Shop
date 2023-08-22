import "./hero-home.css";
import { heroHomeData } from "../../data/heroHomeData";
import { SliderHome } from "../../components/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

function Hero() {
  return (
    <section className="hero-home">
      <Swiper
        slidesPerView={1}
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {heroHomeData.map((slider, index) => (
          <SwiperSlide key={slider.id}>
            {index === 0 && <SliderHome slider={slider} first={true} />}
            {index !== 0 && <SliderHome slider={slider} first={false} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;
