import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/swiper-bundle.css";
import RecomendedSlides from "./recomended-slides";
import TopExpertSlides from "./top-expert-slide";
import StorePageSlides from "./store-page-slides";

function MultiImageCarosel({ data, expert, store }) {
  const breakpoints = {
    // when window width is >= 768px
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    // when window width is >= 1200px
    768: {
      slidesPerView: 2.7,
      spaceBetween: 30,
    },
  };

  return (
    <div className="relative !px-6 mb-5 bg-[white] shadow-lg">
      <Swiper
        spaceBetween={30}
        slidesPerView={2.7}
        centeredSlides={true}
        centeredSlidesBounds={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        breakpoints={breakpoints}
      >
        {data?.map((item, index) => (
          <SwiperSlide
            key={index}
            className="py-5 !min-w-[120px] lg!min-w-[320px]"
          >
            {expert ? (
              <TopExpertSlides item={item} />
            ) : store ? (
              <div className="!me-8 !w-[136px]  lg!w-[320px]">
                <StorePageSlides item={item} />
              </div>
            ) : (
              <RecomendedSlides item={item} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MultiImageCarosel;
