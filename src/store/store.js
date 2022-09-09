import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducer/cartSlice";
import productSlice from "./reducer/productSlice";

const store = configureStore({
  reducer: { product: productSlice, cart: cartSlice },
});

export default store;
