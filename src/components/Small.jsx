import React from "react";
import aim from "./imgs/aim.png";
import kvadrat from "./imgs/kvadrat.png";
import rectangle from "./imgs/rectangle.png";
import "./Styles/Small.css";

function Small() {
  const pStyle = {
    marginLeft: "30px",
    marginTop: "20px",
    fontWeight: "900",
  };

  const boxStyle = {
    marginTop: "280px",
    marginBottom: "100px",
  };
  return (
    <>
      <div className="container d-flex box" style={boxStyle}>
        <div className="col-md-4 d-flex align-items-center">
          <img src={aim} alt="" />
          <h6 style={pStyle}>
            Доказанная <br /> эффективность
          </h6>
        </div>
        <div className="col-md-4 d-flex align-items-center">
          <img src={kvadrat} alt="" />
          <h6 style={pStyle}>
            Новая дозировка <br />
            100 мг + 900 мг
          </h6>
        </div>
        <div className="three col-md-4 d-flex align-items-center">
          <img src={rectangle} alt="" />
          <h6 style={pStyle}>
            Удобный прием. <br />
            Одна таблетка в сутки*

          </h6>
        </div>
      </div>
    </>
  );
}

export default Small;
