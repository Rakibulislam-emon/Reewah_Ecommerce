// src/store/favSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], 
};

export const favSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    // Add item to favorites
    addToFavorites: (state, action) => {
      const item = action.payload; // { id, name, photo, price, ... }
      const exists = state.items.find((i) => i.id === item.id);
      if (!exists) {
        state.items.push(item);
      }
    },

    // Remove item from favorites
    removeFromFavorites: (state, action) => {
      const id = action.payload; // item id
      state.items = state.items.filter((item) => item.id !== id);
    },

    // Toggle favorite status
    toggleFavorite: (state, action) => {
      const item = action.payload; // { id, name, photo, price, ... }
      const exists = state.items.find((i) => i.id === item.id);
      if (exists) {
        state.items = state.items.filter((i) => i.id !== item.id);
      } else {
        state.items.push(item);
      }
    },

    // Clear all favorites
    clearFavorites: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToFavorites,
  removeFromFavorites,
  toggleFavorite,
  clearFavorites,
} = favSlice.actions;

export default favSlice.reducer;

