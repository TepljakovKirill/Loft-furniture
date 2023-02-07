import React from "react";
import sortIcon from "../img/sort-icon.png";

function Sort() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="sort-container flex">
      <div className="sort-wrap flex">
        <button onClick={() => setOpen(!open)} className="sort">
          Сортировать
          <img src={sortIcon} alt="Сортировка" />
        </button>
      </div>
      {open && (
        <div className="sort-popup flex">
          <ul>
            <li>по убыванию цены</li>
            <li>по возрастанию цены</li>
            <li>по популярности</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
