import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="container header-container flex">
        <nav>
          <ul className="header-container__nav flex">
            <li className="header-list">
              <a className="header-link" href="#">
                Главная
              </a>
            </li>
            <li className="header-list">
              <a className="header-link" href="#">
                О нас
              </a>
            </li>
            <li className="header-list">
              <a className="header-link" href="#">
                Контакты
              </a>
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
  );
}

export default Header;
