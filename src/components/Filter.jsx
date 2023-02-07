import React from "react";
import OpenSortMenu from "../img/openSortMenu.png";
import Rooms from "./FilterPopUp/Rooms/Rooms";
import Kitchen from "./FilterPopUp/Kitchen";
import Bedrooms from "./FilterPopUp/Bedrooms";
import Rengeslider from "./Rengeslider";

function Filter() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(0);
  const listRoom = [
    "Гостинные",
    "Спальни",
    "Кухни",
    "Прихожие",
    "Офисная мебель",
    "Детская",
  ];

  const onClickListItem = (i) => {
    setSelected(i);
    setOpen(false);
  };
  return (
    <div className="filter">
      <p className="filter-title">Раздел</p>
      <div className="sort-block">
        <div className="sort-block__furniture">
          <div onClick={() => setOpen(!open)} className="room flex">
            <p>{listRoom[selected]}</p>
            <img
              className={open ? "openSortMenu" : ""}
              src={OpenSortMenu}
              alt="Открыть меню"
            />
          </div>
          {open ? (
            <div className="sort-popup">
              <ul>
                {listRoom.map((name, i) => (
                  <li
                    key={i}
                    onClick={() => onClickListItem(i)}
                    className={selected === i ? "active" : ""}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
          {listRoom[selected] === "Гостинные" ? <Rooms /> : ""}
          {listRoom[selected] === "Кухни" ? <Kitchen /> : ""}
          {listRoom[selected] === "Спальни" ? <Bedrooms /> : ""}
        </div>
      </div>
      <p className="filter-title">Цена</p>
      <div className="price-block">
        <Rengeslider />
      </div>
      <p className="filter-title">Цвет</p>
      <div className="filter-color_group flex">
        <label name="color">
          <input type="checkbox" className="check-input" name="color" />
          <span className="check-box red"></span>
        </label>
        <label name="color">
          <input type="checkbox" className="check-input" name="color" />
          <span className="check-box green"></span>
        </label>
        <label name="color">
          <input type="checkbox" className="check-input" name="color" />
          <span className="check-box white"></span>
        </label>
        <label name="color">
          <input type="checkbox" className="check-input" name="color" />
          <span className="check-box black"></span>
        </label>
        <label name="color">
          <input type="checkbox" className="check-input" name="color" />
          <span className="check-box gray"></span>
        </label>
        <label name="color">
          <input type="checkbox" className="check-input" name="color" />
          <span className="check-box brown"></span>
        </label>
      </div>
      <p className="filter-title">Бренд</p>
      <div className="filter-brand__group">
        <label className="check option" name="brand">
          <input type="checkbox" className="check-input" name="brand" />
          <span className="check-box brown"></span>
          Динс
        </label>
        <label className="check option" name="brand">
          <input type="checkbox" className="check-input" name="brand" />
          <span className="check-box brown"></span>
          Кускен
        </label>
        <label className="check option" name="brand">
          <input type="checkbox" className="check-input" name="brand" />
          <span className="check-box brown"></span>
          Эби
        </label>
        <label className="check option" name="brand">
          <input type="checkbox" className="check-input" name="brand" />
          <span className="check-box brown"></span>
          Реджио
        </label>
        <label className="check option" name="brand">
          <input type="checkbox" className="check-input" name="brand" />
          <span className="check-box brown"></span>
          Сайле
        </label>
        <label className="check option" name="brand">
          <input type="checkbox" className="check-input" name="brand" />
          <span className="check-box brown"></span>
          Динс
        </label>
        <label className="check option" name="brand">
          <input type="checkbox" className="check-input" name="brand" />
          <span className="check-box brown"></span>
          Динс
        </label>
      </div>
    </div>
  );
}

export default Filter;
