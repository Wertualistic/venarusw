import React from "react";
import "./Styles/Section5.css";

function Section5() {
  const bodyStyle = {
    marginTop: "200px",
  };
  const h2Style = {
    color: "#fff",
    fontSize: "36px",
    padding: "22px 20px",
    fontWeight: "100",
    fontFamily: "sans-serif",
  };
  return (
    <div id="section5" className="d-flex" style={bodyStyle}>
      <div className="col-md-2 style">
        <h1>Полезная информация</h1>
        <p>ВЕНАРУС — НАДЕЖНЫЙ ПОМОЩНИК В ЛЕЧЕНИИ ВАРИКОЗА, ХРАНИТЕЛЬ ЖЕНСКИХ НОГ НА ПУТИ 
К ЕЕ МЕЧТЕ!</p>
      </div>
      <div className="col-md-9 d-flex">
        <div className="col-md-3 first">
          <a href="https://samara.a2med.ru/about/articles/profilaktika-gemorroya" style={{textDecoration: 'none'}}><h2 style={h2Style}>Профилак- тические упражнения</h2></a>
        </div>
        <div className="d-flex flex-column">
          <div className="col-md-6 d-flex">
            <div className="col-md-3 second">
              <a href="https://www.goldenpages.uz/rubrics/?Id=4037" style={{textDecoration: 'none'}}><h2 style={h2Style}>Диагностика и способы лечения</h2></a>
            </div>
            <div className="col-md-3 third">
              <a href="https://toitumine.ee/ru/kak-pravilno-pitatsya/sovety-po-zdorovomu-pitaniyu" style={{textDecoration: 'none'}}><h2 style={h2Style}>Рекомен- дации по питанию</h2></a>
            </div>
          </div>
          <div className="col-md-3 fourth">
            <a href="https://institutven.com.ua/flebologiya/10-faktov-o-varikoze/" style={{textDecoration: 'none'}}>
            <h2 style={h2Style}>
              Факты <br /> о варикозе
            </h2>
            </a>
          </div>
          <a href="" className="btn">Подробнее ></a>
        </div>
      </div>
    </div>
  );
}

export default Section5;
