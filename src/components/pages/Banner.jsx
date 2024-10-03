import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
 import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";


 function Banner() {
  return (
    <>
      <Swiper
      
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src="public/img/blogbanner.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="public/img/banner2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="public/img/blogbanner3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="public/img/blogbanner4.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
export default Banner
