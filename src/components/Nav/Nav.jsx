import React from "react";
import { NavLink } from "react-router-dom";
import s from "./style.module.css";

export default function Nav() {
  const checkClass = ({ isActive }) => (isActive ? s.active : "");

  return (
    <nav className={s.nav}>
      <NavLink className={checkClass} to="/">
        Add Product
      </NavLink>
      <NavLink className={checkClass} to="/products">
        Products
      </NavLink>
      <NavLink className={checkClass} to="/basket">
        Basket
      </NavLink>
      <NavLink className={checkClass} to="/about">
        About
      </NavLink>
    </nav>
  );
}
