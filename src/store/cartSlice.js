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
      const product = action.payload
      const isExist = state.items.find(item => item.id === product.id)
      if (isExist) {
        isExist.quantity += 1
      } else{
        state.items.push({
            ...product ,quantity :1
        })
      }
      state.totalQuantity +=1;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
