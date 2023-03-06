import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/reducer/productsReducer";
import s from "./style.module.css";

export default function AddProductForm() {
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const { title, price, discount } = e.target;
    dispatch(addProduct(title.value, price.value, discount.value));
    e.target.reset();
  };

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <input type="text" name="title" placeholder="Title..." />
      <input type="number" name="price" placeholder="Price..." />
      <input type="number" name="discount" placeholder="Discount.." />
      <button>Add product</button>
    </form>
  );
}
