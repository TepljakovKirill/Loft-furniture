import React from "react";
import size from "../img/separator.svg";
import discountImg from "../img/discount.png";

function Cart({
  id,
  imageUrl,
  title,
  descr,
  sizeWidth,
  sizeDepth,
  sizeHeight,
  price,
  oldPrice,
  discountPrice,
}) {
  return (
    <div key={id} className="cart">
      <div className="favorit">
        <svg
          width="19"
          height="17"
          viewBox="0 0 19 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.29442 8.54442L9.75 16L17.2056 8.54442C18.0344 7.71562 18.5 6.59152 18.5 5.41942C18.5 2.97864 16.5214 1 14.0806 1C12.9085 1 11.7844 1.46562 10.9556 2.29442L9.75 3.5L8.54442 2.29442C7.71562 1.46562 6.59152 1 5.41942 1C2.97864 1 1 2.97864 1 5.41942C1 6.59152 1.46561 7.71561 2.29442 8.54442Z"
            stroke="black"
          />
        </svg>
      </div>
      {oldPrice ? (
        <div className="discount">
          <div className="discount-block flex">
            <img src={discountImg} alt="Скидка" />
            <p className="discount-price">-{discountPrice}%</p>
          </div>
        </div>
      ) : (
        " "
      )}

      <img src={imageUrl} alt="Продукт" />
      <p className="cart-title">{title}</p>
      <p className="cart-descr">{descr}</p>

      <div className="cart-price flex">
        <p className="cart-price__currenеt ">
          {price
            .toString()
            .split(/(?=(?:\d{3})+(?:\.|$))/g)
            .join(" ")}
          ₽
        </p>

        <p className="cart-price__old">
          {oldPrice
            ? oldPrice
                .toString()
                .split(/(?=(?:\d{3})+(?:\.|$))/g)
                .join(" ")
            : " "}
          ₽
        </p>
      </div>

      <div className="hover-size__block">
        <p className="cart-size__title">Размеры</p>
        <div className="cart-size__block flex">
          <div className="cart-size">
            <p className="size-title">Ширина</p>
            <p className="size-width">{sizeWidth} см</p>
          </div>
          <img src={size} alt="X" />
          <div className="cart-size">
            <p className="size-title">Глубина</p>
            <p className="size-depth">{sizeDepth} см</p>
          </div>
          <img src={size} alt="X" />
          <div className="cart-size">
            <p className="size-title">Высота</p>
            <p className="size-height">{sizeHeight} см</p>
          </div>
        </div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
}

export default Cart;
