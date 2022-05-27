import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: "",
    loading: false,
  },
  reducers: {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
