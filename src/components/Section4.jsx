import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import big from "./imgs/big.png";
import "./Styles/Section4.css";
import play from './imgs/play.png';
SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

function Section4() {
  return (
    <div id="section4" className="container d-flex gap-5">
      <div className="col-md-3">
        <h1>Мнение специалистов</h1>
        <p className="mt-5">
          Фармакотерапия — неотъемлемый компонент современного лечения
          хронического заболевания вен.
        </p>
      </div>
      <div className="col-md-9">
        <Swiper
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1}
          centeredSlides
          className="swiper2"
        >
          <SwiperSlide className="slider2">
            <img src={big} alt="" />
            <a href="https://www.youtube.com/watch?v=Gkr_PhPkbv4"><img src={play} alt="" className="play"/></a>
          </SwiperSlide>
          <SwiperSlide className="slider2">
            <img src={big} alt="" />
            <a href="https://www.youtube.com/watch?v=Gkr_PhPkbv4"><img src={play} alt="" className="play"/></a>
          </SwiperSlide>
          <SwiperSlide className="slider2">
            <img src={big} alt="" />
            <a href="https://www.youtube.com/watch?v=Gkr_PhPkbv4"><img src={play} alt="" className="play"/></a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Section4;
