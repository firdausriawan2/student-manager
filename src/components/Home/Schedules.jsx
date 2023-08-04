import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function Schedules() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://cdn.smkn1ttslp.sch.id/2021/09/smk-n-1-tebing-tinggi-slide-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.smkn1ttslp.sch.id/2021/09/smk-n-1-tebing-tinggi-slide-2.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
