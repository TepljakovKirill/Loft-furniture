import React from "react";
import { Link } from "react-router-dom";
import Bunner1 from "../img/BunnerSlider/bunner-1.jpg";
import Bunner2 from "../img/BunnerSlider/bunner-2.jpg";
import Bunner3 from "../img/BunnerSlider/bunner-3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderMyStyle.scss";

function BunnerSlider() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    Arrow: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          Arrow: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <div className="wrap-slider">
        <Slider {...settings}>
          <div className="bunner">
            <img className="bunnerImg" src={Bunner1} alt="cart" />
            <div className="bunner-content">
              <p className="bunner-title">Loft мебель</p>
              <div className="bunner-descr">
                Современная и удобная мебель в Анапе
              </div>
              <Link className="button-slider flex" to="/catalog">
                смотреть каталог
              </Link>
            </div>
          </div>
          <div>
            <img className="bunnerImg" src={Bunner2} alt="cart" />
          </div>
          <div>
            <img className="bunnerImg" src={Bunner3} alt="cart" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default BunnerSlider;
