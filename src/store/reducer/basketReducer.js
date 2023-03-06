const ADD_TO_BASKET = "ADD_TO_BASKET";
const DELETE_FROM_BASKET = "DELETE_FROM_BASKET";
const INCREMENT_COUNT = "INCREMENT_COUNT";
const DECREMENT_COUNT = "DECREMENT_COUNT";

export const addToBasket = (id) => {
  return { type: ADD_TO_BASKET, payload: id };
};

export const deleteFromBasket = (id) => {
  return { type: DELETE_FROM_BASKET, payload: id };
};

export const incrementCount = (id) => {
  return { type: INCREMENT_COUNT, payload: id };
};

export const decrementCount = (id) => {
  return { type: DECREMENT_COUNT, payload: id };
};



export const basketReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      const target = state.find(({ id }) => id === action.payload);

      if (target === undefined) {
        return [...state, { id: action.payload, count: 1 }];
      } else {
        target.count++;
        return [...state];
      }

    case DELETE_FROM_BASKET:
      return [...state.filter((item) => item.id !== action.payload)];

    case INCREMENT_COUNT:
      const incrTarget = state.find(({ id }) => id === action.payload);
      incrTarget.count++;
      return [...state];

    case DECREMENT_COUNT:
      const decrTarget = state.find(({ id }) => id === action.payload);
      if (decrTarget.count === 1) {
        return [...state.filter((item) => item.id !== action.payload)];
      }
      decrTarget.count--;
      return [...state];

    default:
      return state;
  }
};

// export const basketReducer = (state = [], action) => {
//   if (action.type === ADD_TO_BASKET) {
//     const target = state.find(({ id }) => id === action.payload);

//     if (target === undefined) {
//       return [...state, { id: action.payload, count: 1 }];
//     } else {
//       target.count++;
//       return [...state];
//     }
//   } else if (action.type === DELETE_FROM_BASKET) {
//     return [...state.filter((item) => item.id !== action.payload)];
//   } else if (action.type === INCREMENT_COUNT) {
//     const target = state.find(({ id }) => id === action.payload);
//     target.count++;
//     return [...state];
//   } else if (action.type === DECREMENT_COUNT) {
//     const target = state.find(({ id }) => id === action.payload);
//     if (target.count === 1) {
//       return [...state.filter((item) => item.id !== action.payload)];
//     }
//     target.count--;
//     return [...state];
//   } else {
//     return state;
//   }
// };
