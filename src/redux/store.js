import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { cartSlice } from "./cartSlice";
import { productsSlice } from "./productsSlice";

export const store = configureStore({
  reducer: {
    //reducers
    counterStore: counterSlice.reducer,
    cartStore: cartSlice.reducer,
    productsStore: productsSlice.reducer,
  },
});
