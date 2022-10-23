import React, { useState } from "react";
import header from "./imgs/Group.png";
import search from "./imgs/search.png";
import loc from "./imgs/loc.png";
import bar from "./imgs/bar.png";
import Img1 from "./imgs/img1.png";
import line1 from "./imgs/line1.png";
import line2 from "./imgs/line2.png";
import line3 from "./imgs/line3.png";
import line4 from "./imgs/line4.png";
import line5 from "./imgs/line5.png";
import "./Styles/Header.css";

function Header() {
  const [mobile, setMobile] = useState(false);
  return (
    <div
      className="header container-fluid pt-4 d-flex justify-content-between"
      style={{
        position: "sticky",
        top: "0",
        zIndex: "50",
        background: "#fff",
        padding: "10px 110px",
      }}
    >
      <div className="banner">
        <a href="#section">
          <img src={header} alt="" />
        </a>
      </div>
      <div className="right d-flex" style={{ alignItems: "center" }}>
        {mobile ? (
          ""
        ) : (
          <div class="d-flex searchbar" style={{alignItems: 'center'}}>
          <img
            src={search}
            alt=""
            style={{ marginLeft: "40px", width: "30px" }}
          />
            <input placeholder="Search..." class="form-control none" type="text" />
          </div>
        )}
        <a href="#section6">
          {mobile ? (
            ""
          ) : (
            <img
              src={loc}
              alt=""
              style={{ marginLeft: "40px", width: "30px" }}
            />
          )}
        </a>
        <a href="/#" onClick={() => setMobile(!mobile)}>
          {mobile ? (
            <img src={Img1} style={{ width: "50px" }} />
          ) : (
            <img
              src={bar}
              alt=""
              style={{ marginLeft: "40px", width: "30px" }}
            />
          )}
        </a>
      </div>
      <ul className={mobile ? "bars" : "bar"} onClick={() => setMobile(false)}>
        <a href="#section6">
          <li style={{ marginTop: "100px" }}>Где купить</li>
        </a>
        <a href="#section5">
          <li>О препарате</li>
        </a>
        <a href="#section4">
          <li>О варикозе</li>
        </a>
        <a href="#section3">
          <li>Решение</li>
        </a>
        <a href="#section2">
          <li>Специалистам</li>
        </a>
        <a href="#section">
          <li>Геморрой</li>
        </a>
      </ul>
    </div>
  );
}

export default Header;
