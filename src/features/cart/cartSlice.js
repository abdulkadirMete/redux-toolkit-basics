import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const url = "blablabla";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
  return fetch(url).then((resp) =>
    resp.json().catch((err) => console.log(err))
  );
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
  },

  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = true;
    },
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
