import React from "react";
import { Link } from "react-router-dom";

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
                  <Link to="#">Кухни</Link>
                </li>
                <li>
                  <Link to="#">Спальни</Link>
                </li>
                <li>
                  <Link to="#">Гостиные</Link>
                </li>
                <li>
                  <Link to="#">Прихожие</Link>
                </li>
                <li>
                  <Link to="#">Офисная мебель</Link>
                </li>
                <li>
                  <Link to="#">Детская</Link>
                </li>
                <li>
                  <Link to="#">Шкафы</Link>
                </li>
                <li>
                  <Link to="#">Матрасы</Link>
                </li>
                <li>
                  <Link to="#">Мягкая мебель</Link>
                </li>
              </ul>
            </div>

            <div className="footer-contact">
              <Link to="#" className="footer-logo">
                LM
              </Link>
              <p className="footer-address">
                г. Анапа, Анапское шоссе,30 Ж/К Черное море
              </p>
            </div>
          </div>
          <div className="footer-nav__contact flex">
            <div className="footer-link__block flex">
              <Link className="red" to="#">
                Акция
              </Link>
              <Link className="new" to="#">
                Новинки
              </Link>
            </div>
            <div className="footer-contact__block flex">
              <Link to="#" className="tel flex">
                8 (964) 89 99 119
              </Link>
              <Link to="#" className="social flex">
                INSTAGRAM
              </Link>
              <Link to="#" className="mail flex">
                mebel_loft_anapa@mail.ru
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
