import React from "react";
import "./Styles/Section2.css";

function Section2() {
    const aStyle = {
        textDecoration: 'none',
        color: '#590D56',
        display: 'flex',
        alignItems: 'end',
        textDecoration: 'underline'
    }

    const circleStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '30px',
        marginLeft: '40px'
    }

    const h4Style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '150px'
    }

  return (
    <>
      <div className="container d-flex gap-5" id="section2">
        <div className="col-md-3">
          <h1>Комплексное действие</h1>
          <p className="mt-5">
            Венарус показан для терапии симптомов хронических заболеваний вен
            (устранения и облегчения симптомов).
          </p>
        </div>
        <div className="col-md-9">
          <hr />
          <div className="box d-flex">
            <a href="https://ru.wikipedia.org/wiki/%D0%94%D0%B8%D0%BE%D1%81%D0%BC%D0%B8%D0%BD" style={aStyle}>
              <h6>Подробнее ></h6>
            </a>
            <div className="circle" style={circleStyle}></div>
            <h4 style={h4Style}>
              Помогает <br />
              предотвратить судороги
            </h4>
          </div>
          <hr />
          <div className="box d-flex">
            <a href="https://ru.wikipedia.org/wiki/%D0%94%D0%B8%D0%BE%D1%81%D0%BC%D0%B8%D0%BD" style={aStyle}>
              <h6>Подробнее ></h6>
            </a>
            <h4 style={h4Style}>Способствует <br /> снижению тяжести <br /> в ногах</h4>
            <div className="circle" style={circleStyle}></div>
          </div>
          <hr />
          <div className="box d-flex">
            <a href="https://ru.wikipedia.org/wiki/%D0%94%D0%B8%D0%BE%D1%81%D0%BC%D0%B8%D0%BD" style={aStyle}>
              <h6>Подробнее ></h6>
            </a>
            <div className="circle" style={circleStyle}></div>
            <h4 style={h4Style}>Способствует снижению <br /> болевых ощущений</h4>
          </div>
          <hr />
          <div className="box d-flex">
            <a href="https://ru.wikipedia.org/wiki/%D0%94%D0%B8%D0%BE%D1%81%D0%BC%D0%B8%D0%BD" style={aStyle}>
              <h6>Подробнее ></h6>
            </a>
            <h4 style={h4Style}>Помогает <br /> уменьшить отеки</h4>
            <div className="circle" style={circleStyle}></div>
          </div>
          <hr />
          <div className="box d-flex">
            <a href="https://ru.wikipedia.org/wiki/%D0%94%D0%B8%D0%BE%D1%81%D0%BC%D0%B8%D0%BD" style={aStyle} >
              <h6>Подробнее ></h6>
            </a>
            <h4 style={h4Style}>Оказывает <br /> ангиопротекторное <br /> и венотонизурующее <br /> действие</h4>
            <div className="circle" style={circleStyle}></div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}

export default Section2;
