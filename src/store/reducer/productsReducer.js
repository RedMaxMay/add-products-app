const ADD = "PRODUCTS_ADD";
const DELETE = "DELETE_ADD";

export const addProduct = (title, price, discount) => {
  return {
    type: ADD,
    payload: { id: Date.now(), title, price, discount },
  };
};

export const deleteProduct = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};

const initialState = [
  {
    id: 1,
    title: "Bike",
    price: 100,
    discount: 15,
  },
  {
    id: 2,
    title: "Sneakers ",
    price: 500,
    discount: 10,
  },
  {
    id: 3,
    title: "Skate",
    price: 150,
    discount: 18,
  },
  {
    id: 4,
    title: "Helmet",
    price: 220,
    discount: 23,
  },
  {
    id: 5,
    title: "Gloves",
    price: 335,
    discount: 7,
  },
];

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];

    case DELETE:
      return state.filter((prod) => prod.id !== action.payload);

    default:
      return state;
  }
};

// export const productsReducer = (state = products, action) => {
//   if (action.type === ADD) {
//     return [...state, action.payload];
//   } else if (action.type === DELETE) {
//     return state.filter((prod) => prod.id !== action.payload);
//   } else {
//     return state;
//   }
// };
