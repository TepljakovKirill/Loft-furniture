import React from "react";
import Cart from "./Cart";

function Promotion() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://63c7b376075b3f3a91d11226.mockapi.io/Loft")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, []);
  return (
    <div className="container">
      <div className="container-wrap">
        <p className="title">Хиты продаж</p>
        <div className="promotion-block">
          {items.map((item) => (
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
