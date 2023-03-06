import { combineReducers, createStore } from "redux";
import { basketReducer } from "./reducer/basketReducer";
import { productsReducer } from "./reducer/productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  basket: basketReducer,
});

export const store = createStore(rootReducer);
