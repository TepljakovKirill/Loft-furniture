import React from "react";
import Cart from "./Cart";
import { dataCart } from "../dataProduct.js";

function Promotion() {
  return (
    <div className="container">
      <div className="container-wrap">
        <p className="title">Хиты продаж</p>
        <div className="promotion-block">
          {dataCart.map((item) => (
            <Cart
              key={item.id}
              imageUrl={item.imgUrl}
              title={item.title}
              descr={item.descr}
              price={item.price}
              sizeWidth={item.sizeWidth}
              sizeDepth={item.sizeDepth}
              sizeHeight={item.sizeHeight}
              oldPrice={item.oldPrice}
              discountPrice={item.discountPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Promotion;
