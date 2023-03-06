import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCount,
  deleteFromBasket,
  incrementCount,
} from "../../store/reducer/basketReducer";
import s from "./style.module.css";

export default function BasketItem({ id, title, price, discount, count }) {
  const dispatch = useDispatch();

  return (
    <div className={s.basket_item}>
      <p>Product title: {title}</p>
      <p>Product count: {count}</p>
      <p>Product price: {price}</p>
      <p>Product discount: {discount}</p>
      <p>
        Total price: {((price - price * (discount / 100)) * count).toFixed(2)}
      </p>
      <div className={s.count_wrap}>
        <button onClick={() => dispatch(incrementCount(id))}>+</button>
        <button onClick={() => dispatch(decrementCount(id))}>-</button>
      </div>
      <button
        className={s.delete_btn}
        onClick={() => {
          dispatch(deleteFromBasket(id));
        }}
      >
        Delete product
      </button>
    </div>
  );
}

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   decrementCount,
//   deleteFromBasket,
//   incrementCount,
// } from "../../store/reducer/basketReducer";
// import s from "./style.module.css";

// export default function BasketItem({ id, count }) {
//   const dispatch = useDispatch();

//   const product = useSelector((state) =>
//     state.products.find((prod) => prod.id === id)
//   );

//   return (
//     <>
//       {product && (
//         <div className={s.basket_item}>
//           <p>Product title: {product.title}</p>
//           <p>Product title: {count}</p>
//           <p>Product price: {product.price}</p>
//           <p>Product discount: {product.discount}</p>
//           <p>
//             Total price:{" "}
//             {(product.price - product.price * (product.discount / 100)) * count}
//           </p>
//           <div className={s.count_wrap}>
//             <button onClick={() => dispatch(incrementCount(id))}>+</button>
//             <button onClick={() => dispatch(decrementCount(id))}>-</button>
//           </div>
//           <button
//             className={s.delete_btn}
//             onClick={() => {
//               dispatch(deleteFromBasket(id));
//             }}
//           >
//             Delete product
//           </button>
//         </div>
//       )}
//     </>
//   );
// }
