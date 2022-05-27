import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import * as api from "../api";

export const fetchItems = createAsyncThunk(
  "items",
  async ({ toast }, { rejectWithValue }) => {
    try {
      const res = await api.itemFetch();
      return res.data;
    } catch (error) {
      toast.error("internal server error");
      return rejectWithValue(error.res.data);
    }
  }
);

const itemSlice = createSlice({
  name: "AllItems",
  initialState: {
    items: {},
    cart: [],
    cartTotalQty: 0,
    itemTotalPrice: 0,
    loading: false,
    query: true,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingIndex = state.cart.findIndex(
        item => item.id === action.payload.id
      );
      if (existingIndex > -1) {
        state.cart[existingIndex] = {
          ...state.cart[existingIndex],
          qty: state.cart[existingIndex].qty + 1,
        };
        toast.success("Quantity increased");
      } else {
        state.cart.push({ ...action.payload, qty: 1 });
        toast.success("Added to cart");
      }
    },
    totalPrice: (state, action) => {
      let { total, quantity } = state.cart.reduce(
        (cartTotal, item) => {
          const { price, qty } = item;
          const itemTotal = price * qty;
          cartTotal.total += itemTotal;
          cartTotal.quantity += qty;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQty = quantity;
      state.itemTotalPrice = total;
    },
    decreaseCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        item => item.id === action.payload.id
      );
      console.log(itemIndex);
      if (state.cart[itemIndex].qty > 1) {
        state.cart[itemIndex].qty -= 1;
        toast.success("Quantity decreased ");
      } else if (state.cart[itemIndex].qty === 1) {
        const nextCartItems = state.cart.filter(
          item => item.id !== action.payload.id
        );
        state.cart = nextCartItems;
        toast.error("Product removed from cart");
      }
    },
  },
  extraReducers: {
    [fetchItems.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchItems.fulfilled]: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    [fetchItems.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});

export const { addToCart, totalPrice, decreaseCart } = itemSlice.actions;

export default itemSlice.reducer;
