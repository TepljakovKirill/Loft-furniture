import React from "react";
import OpenSortMenu from "../../../img/openSortMenu.png";
import Furniture from "./Furniture";

function Rooms() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(0);
  const listRoom = ["Мягкая мебель", "Столы", "Торшеры"];

  const onClickListItem = (i) => {
    setSelected(i);
    setOpen(false);
  };

  return (
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
      {listRoom[selected] === "Мягкая мебель" ? <Furniture /> : ""}
    </div>
  );
}

export default Rooms;
