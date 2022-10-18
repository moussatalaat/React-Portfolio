import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
  cartCount: 0,
};
//reducer

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartCount = +1;
      state.cartList.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const nextCartItems = state.cartList.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      state.cartItems = nextCartItems;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
