import { createSlice } from "@reduxjs/toolkit";

const storedCart = localStorage.getItem("cart");

const initialState = {
  cart: storedCart ? JSON.parse(storedCart) : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;

      const existing = state.cart.find((item) => item.id === product.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.cart.push({
          ...product,
          quantity: 1,
        });
      }
    },
    deleteFromCart(state, action) {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload,
      );
    },
    increaseQuantity(state, action) {
      const cartItem = state.cart.find((item) => item.id === action.payload);

      if (cartItem) {
        cartItem.quantity += 1;
      }
    },
    decreaseQuantity(state, action) {
      const cartItem = state.cart.find((item) => item.id === action.payload);

      if (!cartItem) return;

      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
      } else {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      }
    },
  },
});

export const selectCart = (state) => state.cart.cart;

export const selectTotalItems = (state) =>
  state.cart.cart.reduce((total, item) => total + item.quantity, 0);

export const selectTotalPrice = (state) =>
  state.cart.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

export const { addToCart, deleteFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
