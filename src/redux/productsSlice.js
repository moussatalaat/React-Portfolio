import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//api call

// const baseURL = "https://fakestoreapi.com/products";

export const fetchProducts = createAsyncThunk("shop/fetchProducts", () => {
  return fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => json);
});

//state
const initialState = {
  productsList: [],
  loading: false,
  err: {},
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    //pending
    [fetchProducts.pending]: (state) => {
      state.loading = true;
    },
    //fulfilled
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.productsList = action.payload;
    },
    //rejected
    [fetchProducts.rejected]: (state, action) => {
      state.loading = false;
      state.err = action.payload;
    },
  },
});
// console.log({ productsSlice });
//  export const {productsSlice} = productsSlice.actions;

export default productsSlice.reducer;
