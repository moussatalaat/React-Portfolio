import { createSlice } from "@reduxjs/toolkit";

const defaultInitialCounter = 0;

const initialState = {
  counter: defaultInitialCounter,
};

//reducer
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCount: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    decrementCount: (state, action) => {
      state.counter = state.counter - action.payload;
    },
    resetCount: (state) => {
      state.counter = defaultInitialCounter;
    },
  },
});

//action
export const { incrementCount, decrementCount, resetCount } =
  counterSlice.actions;

export default counterSlice.reducer;
