import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem(
    "cart",
    JSON.stringify(store.getState().cart.cart)
  );
});

export default store;