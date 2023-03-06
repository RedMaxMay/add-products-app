import { React } from "react";
import { useSelector } from "react-redux";
import BasketItem from "../BasketItem/BasketItem";
import s from "./style.module.css";

export default function Basket() {
  const { basket, products } = useSelector((state) => state);
  const basketDescr = basket.map((item) => {
    const product = products.find(({ id }) => id === item.id);
    return { ...item, ...product };
  });

  return (
    <div className={s.basket}>
      <h1>Your basket:</h1>

      <div>
        {basketDescr.map((prod) => {
          return prod.price && <BasketItem key={prod.id} {...prod} />;
        })}
      </div>
    </div>
  );
}
