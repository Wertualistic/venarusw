import React from "react";
import logo from './imgs/logo.png';
import './Styles/Footer.css'

function Footer() {
  return (
    <div className="container" id="footer">
      <h3>БИОЛОГИЧЕСКИ АКТИВНАЯ ДОБАВКА. НЕ ЯВЛЯЕТСЯ ЛЕКАРСТВОМ</h3>
      <div className="d-flex foot">
        <div className="col-md-4">
          <h6>Сообщить о нежелательном явлении</h6>
        </div>
        <div className="col-md-4">
          <h6>Условия пользования сайтом и файлами Cookies</h6>
        </div>
        <div className="col-md-4 d-flex">
          <div className="col-md-1">
            <i class="fa-brands fa-vk"></i>
          </div>
          <div className="col-md-1">
            <i class="fa-brands fa-square-facebook"></i>
          </div>
          <div className="col-md-1">
            <i class="fa-brands fa-square-twitter"></i>
          </div>
          <div className="col-md-1">
            <i class="fa-brands fa-square-odnoklassniki"></i>
          </div>
        </div>
      </div>
      <div className="d-flex foot">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <h6>
            г. Москва, ул. Шаболовка, д. 31, стр. 11, 4 этаж Телефон: +7 (495)
            555-55-55
          </h6>
        </div>
        <div className="col-md-4 d-flex logo">
            <img src={logo} alt="" />
            <h5>Создание сайтов Фарм-студия №1 в Рунете</h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;
