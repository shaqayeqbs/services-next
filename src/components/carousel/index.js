import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/swiper-bundle.css";
import APP_CONFIG from "../../@core/constants/app-config";
import Link from "next/link";

function Carousel({ store, data }) {
  console.log("data", data);
  const myData = data?.images ? data?.images : data;
  return (
    <div className={`${store ? "" : "p-5 pb-0"} container relative`}>
      <Swiper
        spaceBetween={4}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          renderBullet: (index, className) =>
            `<span class="${className} bg-primary"></span>`,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className={`${
          store ? "h[25rem]" : "h-[14rem] l:h-[25rem]"
        } w-full relative`}
      >
        {myData?.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`${
                store ? "h-[400px]" : "h-[189px] lgh[23rem]"
              } w-full relative`}
            >
              {item?.link && (
                <div className="text-left p-5 flex  flex-col justify-between h-full">
                  <div>
                    <div className="font-bold text-[25px]">{item?.header}</div>
                    <div className="text-s text-[white]">
                      {item?.description}
                    </div>
                    <div className="text-s">{item?.discount}%</div>
                  </div>
                  <div>
                    <Link
                      href={item?.link}
                      className="button !w-fit text-s !mb-0 !py-1 !px-4"
                    >
                      Get Now
                    </Link>
                  </div>
                </div>
              )}
              <div>
                <Image
                  src={APP_CONFIG.apiBaseUrl + item?.image}
                  alt={`slides ${index}`}
                  layout="fill"
                  className={`${item.link ? "rounded-xl" : ""} absolute -z-10`}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
