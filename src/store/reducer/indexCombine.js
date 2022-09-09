import { combineReducers } from "redux";

import productSlice from "./productSlice";
import cartSlice from "./cartSlice";

const rootReducer = combineReducers({
  productsState: productSlice,
  cartState: cartSlice,
});

export default rootReducer;
