import React from "react";
import "./Styles/Section3.css";
import img from "./imgs/img.png";
import img2 from "./imgs/img2.png";
import play from "./imgs/play.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";

// Import Swiper styles

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

function Section3() {
  const h1Style = {
    paddingTop: "440px",
    paddingBottom: "00px",
    paddingLeft: "100px",
    fontWeight: "900",
    fontSize: "30px",
  };
  return (
    <div className="container-fluid d-flex slider" id="section3">
      <h1 style={h1Style}>
        О производстве <br /> Венарус
      </h1>
      <Swiper
        navigation
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        slidesPerView={2}
        centeredSlides
        className="slides"
      >
        <SwiperSlide className="slide">
          <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={img2} alt="" />
          <a href="https://www.youtube.com/watch?v=Gkr_PhPkbv4">
            <img src={play} alt="" className="play" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={img2} alt="" />
          <a href="https://www.youtube.com/watch?v=Gkr_PhPkbv4">
            <img src={play} alt="" className="play" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={img2} alt="" />
          <a href="https://www.youtube.com/watch?v=Gkr_PhPkbv4">
            <img src={play} alt="" className="play" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={img2} alt="" />
          <a href="https://www.youtube.com/watch?v=Gkr_PhPkbv4">
            <img src={play} alt="" className="play" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={img2} alt="" />
          <a href="https://www.youtube.com/watch?v=Gkr_PhPkbv4">
            <img src={play} alt="" className="play" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={img2} alt="" />
          <a href="https://www.youtube.com/watch?v=Gkr_PhPkbv4">
            <img src={play} alt="" className="play" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={img2} alt="" />
          <a href="https://www.youtube.com/watch?v=Gkr_PhPkbv4">
            <img src={play} alt="" className="play" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={img2} alt="" />
          <a href="https://www.youtube.com/watch?v=Gkr_PhPkbv4">
            <img src={play} alt="" className="play" />
          </a>
        </SwiperSlide>
      </Swiper>
      <a
        href="https://ru.wikipedia.org/wiki/%D0%94%D0%B8%D0%BE%D1%81%D0%BC%D0%B8%D0%BD"
        className="btn"
      >
        Подробнее >
      </a>
    </div>
  );
}

export default Section3;
