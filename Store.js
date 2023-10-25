import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialCartState={
    isClicked:false
}
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
      toggle: (state) => {
        state.isClicked = !state.isClicked;
      },
    },
  });
  
const store=configureStore({
    reducer:{cart:cartSlice.reducer}
})

export const cartActions=cartSlice.actions;
export default store;