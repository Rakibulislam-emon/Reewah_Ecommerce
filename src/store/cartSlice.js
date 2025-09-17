const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  items: [],
  totalQuantity: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //    check
      const product = action.payload;
      const isExist = state.items.find((item) => item.id === product.id);
      if (isExist) {
        isExist.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }
      state.totalQuantity += 1;
    },
    // Remove item from cart
    removeFromCart: (state, action) => {
      const id = action.payload; // item id
      state.items = state.items.filter((item) => item.id !== id);
    },

    // Update item quantity
    updateCartQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        item.quantity = quantity > 0 ? quantity : 1; // prevent negative quantity
      }
    },
    // Clear entire cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart,removeFromCart, updateCartQuantity, clearCart  } = cartSlice.actions;
export default cartSlice.reducer;
