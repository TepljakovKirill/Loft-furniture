import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-wrap">
          <div className="footer-nav__address flex">
            <div className="footer-navigation-block">
              <p className="footer-title">Навигация</p>
              <ul className="footer-navigation">
                <li>
                  <a href="#">Кухни</a>
                </li>
                <li>
                  <a href="#">Спальни</a>
                </li>
                <li>
                  <a href="#">Гостиные</a>
                </li>
                <li>
                  <a href="#">Прихожие</a>
                </li>
                <li>
                  <a href="#">Офисная мебель</a>
                </li>
                <li>
                  <a href="#">Детская</a>
                </li>
                <li>
                  <a href="#">Шкафы</a>
                </li>
                <li>
                  <a href="#">Матрасы</a>
                </li>
                <li>
                  <a href="#">Мягкая мебель</a>
                </li>
              </ul>
            </div>

            <div className="footer-contact">
              <a href="#" className="footer-logo">
                LM
              </a>
              <p className="footer-address">
                г. Анапа, Анапское шоссе,30 Ж/К Черное море
              </p>
            </div>
          </div>
          <div className="footer-nav__contact flex">
            <div className="footer-link__block flex">
              <a className="red" href="#">
                Акция
              </a>
              <a className="new" href="#">
                Новинки
              </a>
            </div>
            <div className="footer-contact__block flex">
              <a href="#" className="tel flex">
                8 (964) 89 99 119
              </a>
              <a href="#" className="social flex">
                INSTAGRAM
              </a>
              <a href="#" className="mail flex">
                mebel_loft_anapa@mail.ru
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
