import React from "react";
import { useSelector } from "react-redux";
import Product from "../Product/Product";
import s from "./style.module.css";

export default function ProductsList() {
  const products = useSelector((state) => state.products);

  return (
    <div className={s.products}>
      <h1>Products list:</h1>
      {products.map((prod) => (
        <Product key={prod.id} {...prod} />
      ))}
    </div>
  );
}
