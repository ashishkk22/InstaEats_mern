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
      return rejectWithValue(error.res.data);
    }
  }
);
export const adminAllOrders = createAsyncThunk(
  "order/admin",
  async ({ toast }, { rejectWithValue }) => {
    try {
      const res = await api.adminGetOrder();
      return res.data.orders;
    } catch (error) {
      return rejectWithValue(error.res.data);
    }
  }
);
export const updateOrderStatus = createAsyncThunk(
  "order/updateOrder",
  async ({ toast, orderId, changedStatus }, { rejectWithValue }) => {
    try {
      const res = await api.updateOrderStatus({ orderId, changedStatus });
      toast.success("Order Status Updated");
      return res.data.orders;
    } catch (error) {
      toast.error("Not able to update order status");
      return rejectWithValue(error.res.data);
    }
  }
);
const orderSlice = createSlice({
  name: "AllOrders",
  initialState: {
    orders: [],
    loading: false,
    orderUpdate: false,
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
      state.loading = false;
    },
    [adminAllOrders.pending]: (state, action) => {
      state.loading = true;
    },
    [adminAllOrders.fulfilled]: (state, action) => {
      state.loading = false;
      state.allOrders = action.payload;
    },
    [adminAllOrders.rejected]: (state, action) => {
      state.loading = false;
    },
    [updateOrderStatus.pending]: (state, action) => {
      state.loading = true;
    },
    [updateOrderStatus.fulfilled]: (state, action) => {
      state.loading = false;
      state.orderUpdate = !state.orderUpdate;
    },
    [updateOrderStatus.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const {} = orderSlice.actions;

export default orderSlice.reducer;
