import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import * as api from "../api";

export const fetchOrders = createAsyncThunk(
  "orders",
  async ({ toast }, { rejectWithValue }) => {
    try {
      const res = await api.orderList();
      return res.data;
    } catch (error) {
      console.log(error);
      toast.error("No orders found");
      return rejectWithValue(error.res.data);
    }
  }
);

const orderSlice = createSlice({
  name: "AllOrders",
  initialState: {
    orders: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchOrders.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchOrders.fulfilled]: (state, action) => {
      state.loading = false;
      state.orders = action.payload.data;
    },
    [fetchOrders.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});

export const {} = orderSlice.actions;

export default orderSlice.reducer;
