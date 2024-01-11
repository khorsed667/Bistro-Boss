import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import swImg1 from "./../../../assets/home/slide1.jpg";
import swImg2 from "./../../../assets/home/slide2.jpg";
import swImg3 from "./../../../assets/home/slide3.jpg";
import swImg4 from "./../../../assets/home/slide4.jpg";
import Headings from "../../../Components/Headings/Headings";

const SwiperItems = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Headings subHeading={"From 11:00am to 10:00pm"} headings={"Online Order"}></Headings>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          380: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className=" w-full mx-auto">
          <div className="relative mx-auto">
            <img className="" src={swImg1} alt="" />
            <div className="absolute bottom-10 w-full">
              <p className="text-2xl text-white text-center shadow-sm">SALAD</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={swImg2} alt="" />
            <div className="absolute bottom-10 w-full">
              <p className="text-2xl text-white text-center shadow-sm">SOUP</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={swImg3} alt="" />
            <div className="absolute bottom-10 w-full">
              <p className="text-2xl text-white text-center shadow-sm">PIZZA</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={swImg4} alt="" />
            <div className="absolute bottom-10 w-full">
              <p className="text-2xl text-white text-center shadow-sm">
                DESSERTS
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperItems;
