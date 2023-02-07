import React from "react";
import Promotion from "../components/Promotion";
import Filter from "../components/Filter";

function Catalog() {
  return (
    <div className="container">
      <div className="catalog-wrap flex">
        <Filter />
        <Promotion />
      </div>
    </div>
  );
}

export default Catalog;
