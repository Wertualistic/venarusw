import React, { useState } from "react";
import ImageSlider from "./ImageSlider";
import "./Styles/Section.css";
import { SliderData } from "./sliderData";
import "./Styles/Section.css";
import video from './venarus.mp4';
import Small from "./Small";
import Section6 from "./Section6";

function Section() {
  return (
    <>
      <div className="section" style={{ marginTop: "60px" }} id="section">
        <h1 style={{fontSize: '55px'}}>
          НАДЕЖНЫЙ <br /> ПОМОЩНИК <br />
          В ЛЕЧЕНИИ <br /> ВАРИКОЗА
        </h1>

        <div className="venarus">
          <ImageSlider slides={SliderData} />
        </div>

        <div
          className="icons icons2"
          style={{ marginTop: "300px", marginLeft: "110px" }}
        >
          <div
            className="icon1"
            style={{ display: "flex", alignItems: "center" }}
          >
            <i className="fas fa-circle-play" style={{ fontSize: "50px" }}></i>
            <a href="https://www.youtube.com/watch?v=Gkr_PhPkbv4" style={{ marginLeft: "20px", color: "#590D56" }}>
              Схема приема
            </a>
          </div>
          <div
            className="icon2"
            style={{ marginTop: "40px", display: "flex", alignItems: "center" }}
          >
            <i className="fas fa-arrow-down" style={{ fontSize: "50px" }}></i>
            <a href="/#" style={{ marginLeft: "20px", color: "#590D56" }} download={video}>
              Инструкция
            </a>
          </div>
          <div
            className="icon3"
            style={{ marginTop: "40px", display: "flex", alignItems: "center" }}
          >
            <i className="fas fa-location-pin" style={{ fontSize: "50px" }}></i>
            <a href="#section6" style={{ marginLeft: "20px", color: "#590D56" }}>
              Где купить
            </a>
          </div>
        </div>
        <div className="marquee-w">
          <div className="marquee">
            <span>
              получить скидку 10% >>> получить скидку 10% >>> получить скидку
              10% >>> получить скидку 10% >>>{" "}
            </span>
          </div>
        </div>
      </div>
      <Small />
    </>
  );
}

export default Section;
