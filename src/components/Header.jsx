import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
import Etc from "../img/etc.png";

function Header({ onClickMenu }) {
  return (
    <div className="header-wrap">
      <div className="header">
        <div className="container header-container flex">
          <nav>
            <ul className="header-container__nav flex">
              <li className="header-list">
                <Link className="header-link" to="/">
                  Главная
                </Link>
              </li>
              <li className="header-list">
                <a className="header-link" href="#">
                  О нас
                </a>
              </li>
              <li className="header-list">
                <Link to="/contacts" className="header-link">
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header-contact flex">
            <p className="header-contact__tel">8 (964) 89 99 119</p>
            <div className="header-contact__delivery">
              <a className="flex" href="#">
                <svg
                  width="29"
                  height="18"
                  viewBox="0 0 29 18"
                  fill="blue"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.85418 14.9584H5.43751C5.10401 14.9584 4.83334 14.6877 4.83334 14.3542C4.83334 14.0207 5.10401 13.75 5.43751 13.75H7.85418C8.18768 13.75 8.45834 14.0207 8.45834 14.3542C8.45834 14.6877 8.18768 14.9584 7.85418 14.9584Z"
                    fill="white"
                  />
                  <path
                    d="M27.4896 14.9584H25.9792C25.6457 14.9584 25.375 14.6877 25.375 14.3542C25.375 14.0207 25.6457 13.75 25.9792 13.75H26.9881L27.8026 9.40971C27.7917 7.18879 25.8946 5.29171 23.5625 5.29171H19.5956L17.6731 13.75H21.1459C21.4794 13.75 21.75 14.0207 21.75 14.3542C21.75 14.6877 21.4794 14.9584 21.1459 14.9584H16.9167C16.733 14.9584 16.559 14.875 16.4442 14.7312C16.3294 14.5886 16.2859 14.4001 16.327 14.2213L18.5238 4.55462C18.5866 4.27792 18.8307 4.08337 19.1134 4.08337H23.5625C26.5604 4.08337 29 6.523 29 9.52087L28.0829 14.4654C28.0297 14.7517 27.7808 14.9584 27.4896 14.9584Z"
                    fill="white"
                  />
                  <path
                    d="M23.5625 17.375C21.8974 17.375 20.5417 16.0205 20.5417 14.3542C20.5417 12.6879 21.8974 11.3334 23.5625 11.3334C25.2276 11.3334 26.5833 12.6879 26.5833 14.3542C26.5833 16.0205 25.2276 17.375 23.5625 17.375ZM23.5625 12.5417C22.5632 12.5417 21.75 13.3549 21.75 14.3542C21.75 15.3535 22.5632 16.1667 23.5625 16.1667C24.5618 16.1667 25.375 15.3535 25.375 14.3542C25.375 13.3549 24.5618 12.5417 23.5625 12.5417Z"
                    fill="white"
                  />
                  <path
                    d="M10.2708 17.375C8.60576 17.375 7.25001 16.0205 7.25001 14.3542C7.25001 12.6879 8.60576 11.3334 10.2708 11.3334C11.9359 11.3334 13.2917 12.6879 13.2917 14.3542C13.2917 16.0205 11.9359 17.375 10.2708 17.375ZM10.2708 12.5417C9.27155 12.5417 8.45834 13.3549 8.45834 14.3542C8.45834 15.3535 9.27155 16.1667 10.2708 16.1667C11.2701 16.1667 12.0833 15.3535 12.0833 14.3542C12.0833 13.3549 11.2701 12.5417 10.2708 12.5417Z"
                    fill="white"
                  />
                  <path
                    d="M7.85417 4.08337H3.02084C2.68734 4.08337 2.41667 3.81271 2.41667 3.47921C2.41667 3.14571 2.68734 2.87504 3.02084 2.87504H7.85417C8.18767 2.87504 8.45834 3.14571 8.45834 3.47921C8.45834 3.81271 8.18767 4.08337 7.85417 4.08337Z"
                    fill="white"
                  />
                  <path
                    d="M7.85418 7.70837H1.81251C1.47901 7.70837 1.20834 7.43771 1.20834 7.10421C1.20834 6.77071 1.47901 6.50004 1.81251 6.50004H7.85418C8.18768 6.50004 8.45834 6.77071 8.45834 7.10421C8.45834 7.43771 8.18768 7.70837 7.85418 7.70837Z"
                    fill="white"
                  />
                  <path
                    d="M7.85417 11.3334H0.604167C0.270667 11.3334 0 11.0627 0 10.7292C0 10.3957 0.270667 10.125 0.604167 10.125H7.85417C8.18767 10.125 8.45833 10.3957 8.45833 10.7292C8.45833 11.0627 8.18767 11.3334 7.85417 11.3334Z"
                    fill="white"
                  />
                  <path
                    d="M16.9167 14.9584L12.6875 14.9584C12.354 14.9584 12.0833 14.6877 12.0833 14.3542C12.0833 14.0207 12.354 13.75 12.6875 13.75H16.4346L19.1799 1.66671H5.43751C5.10401 1.66671 4.83334 1.39604 4.83334 1.06254C4.83334 0.729041 5.10401 0.458374 5.43751 0.458374H19.9375C20.1212 0.458374 20.2952 0.541749 20.41 0.685541C20.5248 0.828124 20.5683 1.01662 20.5272 1.19546L17.5063 14.4871C17.4435 14.7638 17.1982 14.9584 16.9167 14.9584Z"
                    fill="white"
                  />
                </svg>
                <p>Доставка</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="header-logo__block flex">
          <Link to="/">
            <img src={Logo} alt="Логотип" />
          </Link>
          <input className="input" type="text" placeholder="Поиск" />
          <div className="header-contact flex block">
            <p className="header-contact__tel">8 (964) 89 99 119</p>
            <div className="header-contact__delivery">
              <a className="flex" href="#">
                <p>Доставка</p>
              </a>
            </div>
          </div>
          <div className="header-icon__block">
            <a href="#">
              <svg width="22" height="19" viewBox="0 0 22 19" fill="none">
                <path
                  d="M2.467 9.55034L10.9167 18L19.3663 9.55034C20.3056 8.61103 20.8333 7.33706 20.8333 6.00867C20.8333 3.24246 18.5909 1 15.8247 1C14.4963 1 13.2223 1.5277 12.283 2.46701L10.9167 3.83333L9.55034 2.46701C8.61103 1.5277 7.33706 1 6.00867 1C3.24246 1 1 3.24246 1 6.00867C1 7.33706 1.5277 8.61103 2.467 9.55034Z"
                  stroke="black"
                />
              </svg>
            </a>
            <Link to="/basket">
              <svg width="17" height="20" viewBox="0 0 17 20" fill="none">
                <path
                  d="M4.70653 5.5V4.85714C4.70653 2.7269 6.43343 1 8.56367 1C10.6939 1 12.4208 2.7269 12.4208 4.85714V5.5M2.00802 8.5723L1.00802 17.5723C0.923392 18.3339 1.51957 19 2.28587 19H14.8415C15.6078 19 16.2039 18.3339 16.1193 17.5723L15.1193 8.5723C15.047 7.92117 14.4966 7.42857 13.8415 7.42857H3.28587C2.63073 7.42857 2.08036 7.92117 2.00802 8.5723Z"
                  stroke="black"
                />
              </svg>
            </Link>
            <a href="#">
              <svg
                width="15"
                height="20"
                viewBox="0 0 15 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2924 4.85714C11.2924 6.98757 9.56458 8.71428 7.43276 8.71428C5.30094 8.71428 3.5731 6.98757 3.5731 4.85714C3.5731 2.72671 5.30094 1 7.43276 1C9.56458 1 11.2924 2.72671 11.2924 4.85714Z"
                  stroke="black"
                />
                <path
                  d="M13.8655 19H1C1 18.0865 1 17.2174 1 16.4304C1 14.2988 2.72803 12.5714 4.85966 12.5714H10.0059C12.1375 12.5714 13.8655 14.2988 13.8655 16.4304C13.8655 17.2174 13.8655 18.0865 13.8655 19Z"
                  stroke="black"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="header-menu flex">
          <nav className="menu flex">
            <li>
              <a className="link-block flex" href="#">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
                  <path
                    d="M11.5 0V12.9375H0V23H23V0H11.5ZM11.5 21.5625H1.4375V14.375H11.5V21.5625ZM21.5625 21.5625H12.9375V7.1875H21.5625V21.5625ZM21.5625 5.75H12.9375V1.4375H21.5625V5.75Z"
                    fill="black"
                  />
                  <path
                    d="M10.0625 4.73369L8.625 3.29619V0H7.1875V3.89131L8.625 5.32881V5.75H2.875V5.32881L4.3125 3.89131V0H2.875V3.29619L1.4375 4.73369V7.1875H10.0625V4.73369Z"
                    fill="black"
                  />
                  <path
                    d="M8.625 15.8125H4.3125V17.25H8.625V15.8125Z"
                    fill="black"
                  />
                  <path
                    d="M15.8125 2.875H14.375V4.3125H15.8125V2.875Z"
                    fill="black"
                  />
                  <path
                    d="M15.8125 10.0625H14.375V14.375H15.8125V10.0625Z"
                    fill="black"
                  />
                  <path
                    d="M2.875 8.625H1.4375V10.0625H2.875V8.625Z"
                    fill="black"
                  />
                  <path
                    d="M6.46875 8.625H5.03125V10.0625H6.46875V8.625Z"
                    fill="black"
                  />
                  <path
                    d="M10.0625 8.625H8.625V10.0625H10.0625V8.625Z"
                    fill="black"
                  />
                </svg>
                <p>Кухни</p>
                <div className="popup-menu">
                  <ul className="popup-list flex">
                    <li>
                      <a href="">Модульные кухни</a>
                    </li>
                    <li>
                      <a href="">Барная зона</a>
                    </li>
                    <li>
                      <a href="">Кухонные уголки</a>
                    </li>
                    <li>
                      <a href="">Обеденная зона</a>
                    </li>
                    <li>
                      <a href="">Столешницы</a>
                    </li>
                    <li>
                      <a href="">Стеновые панели</a>
                    </li>
                    <li>
                      <a href="">Мойки, сушки, смесители для кухни</a>
                    </li>
                    <li>
                      <a href="">Дополнительная фурнитура</a>
                    </li>
                    <li>
                      <a href="">Бытовая техника</a>
                    </li>
                  </ul>
                </div>
              </a>
            </li>
            <li>
              <a className="link-block flex" href="#">
                <svg width="28" height="23" viewBox="0 0 28 23" fill="none">
                  <path
                    d="M28 12.6475C28 11.7213 27.4932 10.8869 26.6773 10.4697C25.8454 10.0442 24.7681 9.82849 23.4756 9.82849H9.42501C9.32384 9.32362 9.09967 8.8649 8.7634 8.49111L6.77086 6.2761C6.2778 5.72797 5.56927 5.39514 4.77586 5.33903L4.41793 5.31371C4.23467 5.30053 4.04846 5.3264 3.86974 5.38634V4.21542C3.86974 3.80527 3.69698 3.43487 3.42081 3.17242C3.70087 2.83675 3.86974 2.40516 3.86974 1.93484C3.86974 0.867945 3.00174 0 1.9349 0C0.868055 0 0 0.868 0 1.9349C0 2.40527 0.168875 2.8368 0.44893 3.17248C0.172758 3.43498 0 3.80532 0 4.21548V21.6712C0 21.9732 0.244836 22.2181 0.546875 22.2181H2.43441C2.71649 22.2181 2.9523 22.0036 2.97888 21.7227C3.04402 21.034 3.40818 19.1427 4.31041 18.2946H5.77478C6.07682 18.2946 6.32166 18.0497 6.32166 17.7477C6.32166 17.4457 6.07682 17.2008 5.77478 17.2008L1.0937 17.2008V12.3863L8.39316 12.3861V13.8112C8.39316 14.6544 9.07911 15.3404 9.92234 15.3404H26.4709C26.6177 15.3404 26.7655 15.3191 26.9062 15.2773V17.2008H23.8926C23.8921 17.2008 23.8917 17.2009 23.8912 17.2009H10.5867C10.2847 17.2009 10.0399 17.4457 10.0399 17.7477C10.0399 18.0497 10.2847 18.2946 10.5867 18.2946H23.6896C24.5883 19.1404 24.9548 21.0335 25.0212 21.7227C25.0478 22.0036 25.2835 22.2182 25.5656 22.2182H27.4531C27.7552 22.2182 28 21.9733 28 21.6713V12.6475ZM3.87105 7.17445C3.8792 6.94143 3.84727 6.70064 4.03927 6.5293C4.23243 6.35693 4.46414 6.41342 4.69864 6.43005C5.21533 6.46663 5.6507 6.6663 5.95766 7.0076L7.9502 9.22266C8.27318 9.58163 8.42811 10.082 8.38638 10.6315C8.37036 10.843 8.37419 11.0305 8.19591 11.1798C8.03299 11.3162 7.85619 11.2907 7.66008 11.2849C7.10927 11.2684 6.62807 11.0615 6.30509 10.7025L4.31255 8.4875C3.99027 8.12913 3.85443 7.65023 3.87105 7.17445ZM1.09375 11.2925V4.21548C1.09375 4.02484 1.24884 3.86974 1.43948 3.86974H2.43015C2.62079 3.86974 2.77588 4.02484 2.77588 4.21548V11.2924L1.09375 11.2925ZM3.86969 9.63047L5.36473 11.2925H3.86969V9.63047ZM1.93484 1.0938C2.39859 1.0938 2.77594 1.47109 2.77594 1.9349C2.77594 2.3987 2.39865 2.77599 1.93484 2.77599C1.47104 2.77599 1.09375 2.3987 1.09375 1.9349C1.09375 1.47109 1.47104 1.0938 1.93484 1.0938ZM1.95792 21.1244H1.09375V18.2947H2.92753C2.3357 19.2635 2.06806 20.4619 1.95792 21.1244ZM9.92239 14.2467C9.68237 14.2467 9.48708 14.0514 9.48708 13.8114L9.48686 10.9222H23.4756C24.5933 10.9222 25.503 11.0976 26.1793 11.4435C26.6277 11.6727 26.9062 12.1341 26.9062 12.6475V13.8093C26.9062 13.81 26.9061 13.8107 26.9061 13.8114C26.9061 14.0515 26.7108 14.2467 26.4708 14.2467L9.92239 14.2467ZM26.0421 21.1244C25.9319 20.4619 25.6643 19.2635 25.0725 18.2947H26.9062V21.1244H26.0421Z"
                    fill="black"
                  />
                  <path
                    d="M8.68597 17.5387C8.57282 17.2629 8.24628 17.1294 7.97175 17.2429C7.69623 17.3567 7.56186 17.6817 7.67588 17.9571C7.78985 18.2323 8.11486 18.367 8.39011 18.2529C8.66481 18.1391 8.80032 17.8134 8.68597 17.5387Z"
                    fill="black"
                  />
                </svg>
                <p>Спальни</p>
                <div className="popup-menu">
                  <ul className="popup-list flex">
                    <li>
                      <a href="">Модульные кухни</a>
                    </li>
                    <li>
                      <a href="">Барная зона</a>
                    </li>
                    <li>
                      <a href="">Кухонные уголки</a>
                    </li>
                    <li>
                      <a href="">Обеденная зона</a>
                    </li>
                    <li>
                      <a href="">Столешницы</a>
                    </li>
                    <li>
                      <a href="">Стеновые панели</a>
                    </li>
                    <li>
                      <a href="">Мойки, сушки, смесители для кухни</a>
                    </li>
                    <li>
                      <a href="">Дополнительная фурнитура</a>
                    </li>
                    <li>
                      <a href="">Бытовая техника</a>
                    </li>
                  </ul>
                </div>
              </a>
            </li>
            <li>
              <a className="link-block flex" href="#">
                <svg
                  width="30"
                  height="23"
                  viewBox="0 0 30 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.5312 15.9375H28.125V13.125H29.0625C29.3214 13.1249 29.5311 12.9149 29.531 12.656C29.531 12.6304 29.5289 12.6047 29.5247 12.5794L29.0559 9.76688C29.0184 9.54082 28.8229 9.37512 28.5938 9.375H26.7188C26.4896 9.37512 26.2941 9.54082 26.2566 9.76688L25.7878 12.5794C25.7453 12.8347 25.9179 13.0762 26.1734 13.1187C26.1987 13.1229 26.2243 13.125 26.25 13.125H27.1875V15.9375H25.3125C25.2967 15.9397 25.281 15.9428 25.2656 15.9469C25.0455 14.8525 24.0851 14.0644 22.9688 14.0625H22.0312V12.6562C22.0312 11.8796 21.4017 11.25 20.625 11.25H16.875C16.0983 11.25 15.4688 11.8796 15.4688 12.6562V14.0625H14.5312V12.6562C14.5312 11.8796 13.9017 11.25 13.125 11.25H9.375C8.59834 11.25 7.96875 11.8796 7.96875 12.6562V14.0625H7.03125C5.91492 14.0644 4.95445 14.8525 4.73438 15.9469C4.71897 15.9428 4.70332 15.9397 4.6875 15.9375H2.8125V13.125H3.75C4.00887 13.1249 4.21863 12.9149 4.21852 12.656C4.21852 12.6304 4.21641 12.6047 4.21219 12.5794L3.74344 9.76688C3.70588 9.54082 3.51041 9.37512 3.28125 9.375H1.40625C1.17709 9.37512 0.981621 9.54082 0.944062 9.76688L0.475313 12.5794C0.432832 12.8347 0.605449 13.0762 0.860859 13.1187C0.886172 13.1229 0.911836 13.125 0.9375 13.125H1.875V15.9375H0.46875C0.209883 15.9375 0 16.1474 0 16.4062V21.5625C0 21.8214 0.209883 22.0312 0.46875 22.0312H29.5312C29.7901 22.0312 30 21.8214 30 21.5625V16.4062C30 16.1474 29.7901 15.9375 29.5312 15.9375ZM1.49109 12.1875L1.80328 10.3125H2.88422L3.19641 12.1875H1.49109ZM4.21875 21.0938H0.9375V16.875H4.21875V21.0938ZM16.4062 12.6562C16.4062 12.3974 16.6161 12.1875 16.875 12.1875H20.625C20.8839 12.1875 21.0938 12.3974 21.0938 12.6562V14.0625H16.4062V12.6562ZM8.90625 12.6562C8.90625 12.3974 9.11613 12.1875 9.375 12.1875H13.125C13.3839 12.1875 13.5938 12.3974 13.5938 12.6562V14.0625H8.90625V12.6562ZM24.375 21.0938H5.625V19.6875H24.375V21.0938ZM24.375 18.75H5.625V16.4062C5.625 15.6296 6.25459 15 7.03125 15H22.9688C23.7454 15 24.375 15.6296 24.375 16.4062V18.75ZM26.8036 12.1875L27.1158 10.3125H28.1967L28.5089 12.1875H26.8036ZM29.0625 21.0938H25.7812V16.875H29.0625V21.0938Z"
                    fill="black"
                  />
                  <path
                    d="M9.375 8.4375H19.6875C19.9464 8.4375 20.1562 8.22762 20.1562 7.96875V0.46875C20.1562 0.209883 19.9464 0 19.6875 0H9.375C9.11613 0 8.90625 0.209883 8.90625 0.46875V7.96875C8.90625 8.22762 9.11613 8.4375 9.375 8.4375ZM9.84375 0.9375H19.2188V5.69438L18.1786 4.39453C18.0954 4.29029 17.9719 4.22637 17.8387 4.21875C17.7058 4.21289 17.5764 4.26223 17.4811 4.35516L15.9375 5.89969L12.9877 2.94984C12.8145 2.77693 12.5374 2.76633 12.3516 2.92547L9.84375 5.07516V0.9375ZM9.84375 6.30891L12.6314 3.91828L15.6061 6.8925C15.7891 7.07549 16.0859 7.07549 16.2689 6.8925L17.7736 5.38781L19.2188 7.19625V7.5H9.84375V6.30891Z"
                    fill="black"
                  />
                  <path
                    d="M16.4062 4.21875C17.1829 4.21875 17.8125 3.58916 17.8125 2.8125C17.8125 2.03584 17.1829 1.40625 16.4062 1.40625C15.6296 1.40625 15 2.03584 15 2.8125C15 3.58916 15.6296 4.21875 16.4062 4.21875ZM16.4062 2.34375C16.6651 2.34375 16.875 2.55363 16.875 2.8125C16.875 3.07137 16.6651 3.28125 16.4062 3.28125C16.1474 3.28125 15.9375 3.07137 15.9375 2.8125C15.9375 2.55363 16.1474 2.34375 16.4062 2.34375Z"
                    fill="black"
                  />
                </svg>
                <p>Гостинные</p>
              </a>
            </li>
            <li>
              <a className="link-block flex" href="#">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.2695 0H0.644531C0.288578 0 0 0.288578 0 0.644531C0 1.00048 0.288578 1.28906 0.644531 1.28906H0.6875V21.3555C0.6875 21.7114 0.976078 22 1.33203 22C1.68798 22 1.97656 21.7114 1.97656 21.3555V20.9688H19.9375V21.3555C19.9375 21.7114 20.2261 22 20.582 22C20.938 22 21.2266 21.7114 21.2266 21.3555V1.28906H21.2695C21.6255 1.28906 21.9141 1.00048 21.9141 0.644531C21.9141 0.288578 21.6255 0 21.2695 0ZM11.6016 13.3633H19.9375V15.8555H11.6016V13.3633ZM19.9375 12.0742H11.6016V9.58203H19.9375V12.0742ZM10.3125 19.6797H6.78906V1.28906H10.3125V19.6797ZM1.97656 1.28906H5.5V19.6797H1.97656V1.28906ZM11.6016 19.6797V17.1445H19.9375V19.6797H11.6016ZM19.9375 8.29297H11.6016V1.28906H19.9375V8.29297Z"
                    fill="black"
                  />
                  <path
                    d="M8.55078 11.6445C8.90675 11.6445 9.19531 11.356 9.19531 11C9.19531 10.644 8.90675 10.3555 8.55078 10.3555C8.19482 10.3555 7.90625 10.644 7.90625 11C7.90625 11.356 8.19482 11.6445 8.55078 11.6445Z"
                    fill="black"
                  />
                  <path
                    d="M3.73828 11.6446C4.09425 11.6446 4.38281 11.356 4.38281 11C4.38281 10.6441 4.09425 10.3555 3.73828 10.3555C3.38232 10.3555 3.09375 10.6441 3.09375 11C3.09375 11.356 3.38232 11.6446 3.73828 11.6446Z"
                    fill="black"
                  />
                </svg>
                <p>Прихожие</p>
              </a>
            </li>
            <li>
              <a className="link-block flex" href="#">
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.3125 10.3984H21.3211C21.5413 10.0189 21.668 9.57881 21.668 9.10938V7.17578C21.668 6.81983 21.3794 6.53125 21.0234 6.53125H19.8029C20.1742 4.80137 21.9349 3.85352 21.9653 3.8375C22.2804 3.67366 22.4037 3.28552 22.2405 2.96978C22.0771 2.65353 21.6883 2.52961 21.372 2.69302C21.3088 2.72577 20.4899 3.15842 19.7344 3.99536V1.97656C19.7344 1.62061 19.4458 1.33203 19.0898 1.33203C18.7339 1.33203 18.4453 1.62061 18.4453 1.97656V3.99536C17.6898 3.15842 16.8709 2.72577 16.8076 2.69302C16.4913 2.52953 16.1025 2.65358 15.9391 2.96978C15.7757 3.28604 15.8996 3.67486 16.2158 3.83823C16.2358 3.84854 18.0075 4.78427 18.3777 6.53125H17.1562C16.8003 6.53125 16.5117 6.81983 16.5117 7.17578V9.10938C16.5117 9.57881 16.6384 10.0189 16.8586 10.3984H11.0663L10.4218 9.10938H13.2891C13.645 9.10938 13.9336 8.8208 13.9336 8.46484V0.644531C13.9336 0.288578 13.645 0 13.2891 0H2.89062C2.53467 0 2.24609 0.288578 2.24609 0.644531V8.46484C2.24609 8.8208 2.53467 9.10938 2.89062 9.10938H5.75793L5.1134 10.3984H1.60156C1.24561 10.3984 0.957031 10.687 0.957031 11.043C0.957031 11.3989 1.24561 11.6875 1.60156 11.6875H2.24609V21.3555C2.24609 21.7114 2.53467 22 2.89062 22C3.24658 22 3.53516 21.7114 3.53516 21.3555V19.4219H12.6445V21.3555C12.6445 21.7114 12.9331 22 13.2891 22H21.0234C21.3794 22 21.668 21.7114 21.668 21.3555V11.6875H22.3125C22.6685 11.6875 22.957 11.3989 22.957 11.043C22.957 10.687 22.6685 10.3984 22.3125 10.3984ZM17.8008 9.10938V7.82031H20.3789V9.10938C20.3789 9.82016 19.8006 10.3984 19.0898 10.3984C18.3791 10.3984 17.8008 9.82016 17.8008 9.10938ZM3.53516 1.28906H12.6445V7.82031H3.53516V1.28906ZM7.1991 9.10938H8.98059L9.62512 10.3984H6.55457L7.1991 9.10938ZM3.53516 18.1328V11.6875H12.6445V18.1328H3.53516ZM13.9336 16.8438H20.3789V20.7109H13.9336V16.8438ZM20.3789 15.5547H13.9336V11.6875H20.3789V15.5547Z"
                    fill="black"
                  />
                  <path
                    d="M17.1562 14.2656C17.5122 14.2656 17.8008 13.9771 17.8008 13.6211C17.8008 13.2651 17.5122 12.9766 17.1562 12.9766C16.8003 12.9766 16.5117 13.2651 16.5117 13.6211C16.5117 13.9771 16.8003 14.2656 17.1562 14.2656Z"
                    fill="black"
                  />
                  <path
                    d="M17.1562 19.4219C17.5122 19.4219 17.8008 19.1333 17.8008 18.7773C17.8008 18.4214 17.5122 18.1328 17.1562 18.1328C16.8003 18.1328 16.5117 18.4214 16.5117 18.7773C16.5117 19.1333 16.8003 19.4219 17.1562 19.4219Z"
                    fill="black"
                  />
                </svg>
                <p>Офисная мебель</p>
              </a>
            </li>
            <li>
              <a className="link-block flex" href="#">
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.7717 18.3255C22.5233 18.0729 22.1181 18.0685 21.8641 18.3145C21.8641 18.3145 21.8632 18.3149 21.862 18.3161L21.8602 18.3143L21.8639 18.3107C21.8617 18.3127 21.7854 18.3842 21.6246 18.501V8.46145C21.6246 8.1055 21.3361 7.81693 20.9801 7.81693C20.6242 7.81693 20.3356 8.1055 20.3356 8.46145V9.09862C18.0346 9.04633 16.8496 8.71517 15.7014 8.39386C14.6413 8.09717 13.64 7.81693 11.9568 7.81693C10.2736 7.81693 9.27226 8.09717 8.21219 8.39386C7.064 8.71522 5.87907 9.04637 3.57804 9.09862V5.88336C3.57804 3.57057 4.63222 1.99566 6.54641 1.44872C8.32412 0.940834 10.1995 1.67812 11.1667 3.2132C10.9322 3.32904 10.7334 3.45331 10.5707 3.58582L9.8345 2.84952C9.58283 2.59781 9.17472 2.59781 8.92301 2.84952C8.67131 3.10123 8.67131 3.50929 8.92301 3.761L9.75634 4.59432L8.92301 5.42765C8.67131 5.67935 8.67131 6.08742 8.92301 6.33913C9.17468 6.59079 9.58279 6.59083 9.8345 6.33913L10.5708 5.60287C10.7934 5.78419 11.0834 5.95022 11.4403 6.10014C12.0498 6.35601 12.7753 6.52797 13.2459 6.52797C14.3121 6.52797 15.1795 5.66057 15.1795 4.59441C15.1795 3.52824 14.3121 2.66085 13.2459 2.66085C13.0134 2.66085 12.7187 2.70291 12.4065 2.77626C11.1887 0.591332 8.62073 -0.484503 6.19235 0.20926C3.71176 0.918018 2.28904 2.98616 2.28904 5.88336V18.501C2.12826 18.3841 2.05194 18.3127 2.0498 18.3106L2.05349 18.3142L2.05173 18.316C2.05139 18.3157 2.04984 18.3142 2.04984 18.3142C1.79581 18.0683 1.39045 18.0728 1.14205 18.3254C0.892451 18.5792 0.895802 18.9872 1.14961 19.2369C1.20565 19.2926 1.93679 19.9887 3.64086 20.6654C5.34485 21.3427 8.01845 22.0002 11.9569 22C15.8953 22.0002 18.5689 21.3427 20.2729 20.6654C21.9769 19.9887 22.7081 19.2926 22.7641 19.2369C23.0179 18.9873 23.0213 18.5792 22.7717 18.3255ZM12.1081 4.21045C12.5686 4.03935 13.0291 3.9498 13.2459 3.9498C13.6013 3.9498 13.8904 4.23893 13.8904 4.59432C13.8904 4.94971 13.6013 5.23884 13.2459 5.23884C13.0291 5.23884 12.5686 5.1493 12.1081 4.9782C11.7087 4.82974 11.4836 4.68541 11.3749 4.59432C11.4836 4.50323 11.7087 4.3589 12.1081 4.21045ZM3.57809 10.3878C6.06435 10.333 7.38484 9.964 8.55963 9.63516C9.57432 9.35119 10.4506 9.10597 11.9569 9.10597C13.4631 9.10597 14.3394 9.35123 15.3541 9.63516C16.5289 9.96396 17.8494 10.333 20.3356 10.3878V16.8402H3.57809V10.3878ZM3.57809 18.1293H20.3356V19.2335C17.8845 20.3596 14.6765 20.7073 11.9569 20.7073C9.23741 20.7073 6.02933 20.3597 3.57809 19.2335V18.1293Z"
                    fill="black"
                  />
                  <path
                    d="M6.8002 15.5512C7.15615 15.5512 7.44473 15.2626 7.44473 14.9067V12.3286C7.44473 11.9726 7.15615 11.6841 6.8002 11.6841C6.44426 11.6841 6.15568 11.9726 6.15568 12.3286V14.9067C6.15568 15.2626 6.44426 15.5512 6.8002 15.5512Z"
                    fill="black"
                  />
                  <path
                    d="M9.37827 15.5512C9.73422 15.5512 10.0228 15.2626 10.0228 14.9067V12.3286C10.0228 11.9726 9.73422 11.6841 9.37827 11.6841C9.02232 11.6841 8.73375 11.9726 8.73375 12.3286V14.9067C8.73375 15.2626 9.02232 15.5512 9.37827 15.5512Z"
                    fill="black"
                  />
                  <path
                    d="M11.9564 15.5512C12.3123 15.5512 12.6009 15.2626 12.6009 14.9067V12.3286C12.6009 11.9726 12.3123 11.6841 11.9564 11.6841C11.6004 11.6841 11.3118 11.9726 11.3118 12.3286V14.9067C11.3118 15.2626 11.6004 15.5512 11.9564 15.5512Z"
                    fill="black"
                  />
                  <path
                    d="M14.5345 15.5512C14.8904 15.5512 15.179 15.2626 15.179 14.9067V12.3286C15.179 11.9726 14.8904 11.6841 14.5345 11.6841C14.1785 11.6841 13.8899 11.9726 13.8899 12.3286V14.9067C13.8899 15.2626 14.1785 15.5512 14.5345 15.5512Z"
                    fill="black"
                  />
                  <path
                    d="M17.1125 15.5512C17.4685 15.5512 17.757 15.2626 17.757 14.9067V12.3286C17.757 11.9726 17.4685 11.6841 17.1125 11.6841C16.7566 11.6841 16.468 11.9726 16.468 12.3286V14.9067C16.468 15.2626 16.7566 15.5512 17.1125 15.5512Z"
                    fill="black"
                  />
                </svg>
                <p>Детская</p>
              </a>
            </li>
            <li>
              <a className="link-block flex" href="#">
                <p className="red">Акция</p>
              </a>
            </li>
          </nav>
          <button onClick={onClickMenu}>
            <img src={Etc} alt="Кнопка меню" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
