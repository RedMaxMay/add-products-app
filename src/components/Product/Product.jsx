import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../store/reducer/productsReducer";
import s from "./style.module.css";

export default function Product({ id, title, price, discount, count }) {
  const dispatch = useDispatch();

  return (
    <div className={s.product}>
      <p>Product title: {title}</p>
      <p>Price: {price}</p>
      <p>Product discount: {discount}</p>

      <Link to={`/test/${id}`}>Open</Link>

      <button
        className={s.delete_product}
        onClick={() => dispatch(deleteProduct(id))}
      >
        Delete product
      </button>
      <button
        className={s.add_product}
        onClick={() =>
          dispatch({
            type: "ADD_TO_BASKET",
            payload: id,
          })
        }
      >
        Add to Basket
      </button>
    </div>
  );
}
