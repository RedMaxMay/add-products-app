import React from "react";
import { useSelector } from "react-redux";

export default function BasketCalculation() {
  const { basket, products } = useSelector((state) => state);

  const basketDescr = basket.map((item) => {
    const product = products.find(({ id }) => id === item.id);
    return { ...item, ...product };
  });

  const totalCount = basket.reduce((acc, { count }) => acc + count, 0);
  const totalPrice = basketDescr.reduce(
    (acc, { count, price, discount }) =>
      acc + (price - price * (discount / 100)).toFixed(2) * count,
    0
  );
  const totalDiscount = basketDescr.reduce(
    (acc, { count, price, discount }) =>
      acc + (price * (discount / 100)).toFixed(2) * count,
    0
  );

  if (totalPrice) {
    return (
      <div>
        <p>Total products: {totalCount}</p>
        <p>Total price: {totalPrice} </p>
        <p>Total discount: {totalDiscount} </p>
      </div>
    );
  } else {
    <div>
      <p>Total products: 0</p>
      <p>Total price: 0 </p>
      <p>Total discount: 0 </p>
    </div>;
  }
}
