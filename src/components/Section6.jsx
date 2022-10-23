import React from "react";
import "./Styles/Section6.css";
import venarus4 from "./imgs/venarus4.png";
import venarus5 from "./imgs/venarus5.png";

function Section6() {
  const bodyStyle = {
    marginTop: "100px",
  };
  const p = {
    marginTop: "30px",
    color: "#7777",
  };
  const img1 = {
    position: "absolute",
    left: "450px",
    zIndex: "10",
  };
  const img2 = {
    position: "absolute",
    left: "850px",
    marginTop: "-50px",
  };

  return (
    <>
      <div id="section6" className="container d-flex" style={bodyStyle}>
        <div className="col-md-2">
          <h1>
            Где купить
          </h1>
          <p style={p}>
            Ветонизирующее средство ВЕНАРУС вы можете приобрести в аптеках
            вашего города
          </p>
        </div>
        <div className="col-md-9">
          <div className="imgs d-flex">
            <img src={venarus4} alt="" style={img1} />
            <img src={venarus5} alt="" style={img2} className="img2"/>
          </div>
          <div className="btns d-flex gap-5">
            <a href="https://apteka.ru/" className="btn">
              apteka.ru
            </a>
            <a href="https://366.ru/" className="btn">
              366.ru
            </a>
            <a href="https://stolichki.ru/" className="btn">
              stolichki.ru
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section6;
