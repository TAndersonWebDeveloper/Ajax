import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  cartSize: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { _id } = action.payload;
      const itemInCart = state.items.find((i) => i._id === _id);
      if (itemInCart) {
        state.items[state.items.indexOf(itemInCart)].quantity += 1;
        state.cartSize += 1;
        state.total += itemInCart.price;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        state.cartSize += 1;
        state.total += action.payload.price;
      }
    },
    removeFromCart: (state, action) => {
      const { _id, price } = action.payload;
      const itemInCart = state.items.find((i) => i._id === _id);
      if (itemInCart.quantity > 1) {
        state.items[state.items.indexOf(itemInCart)].quantity -= 1;
        state.cartSize -= 1;
        state.total -= price;
      } else {
        state.items = state.items.filter((i) => i._id !== _id);
        state.cartSize -= 1;
        state.total -= price;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
