import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const userSignUp = createAsyncThunk(
  "auth/signup",
  async ({ toast, dataForm, navigate }, { rejectWithValue }) => {
    try {
      const res = await api.userSignUp(dataForm);
      toast.success("Sign Up Successful");
      navigate("/");
      return res.data;
    } catch (error) {
      toast.error("Please give all the values");
      return rejectWithValue(error.res.data);
    }
  }
);
export const userLogIn = createAsyncThunk(
  "auth/login",
  async ({ toast, dataForm, navigate }, { rejectWithValue }) => {
    try {
      const res = await api.userLogIn(dataForm);
      toast.success("Log In Successful");
      navigate("/");
      return res.data;
    } catch (error) {
      toast.error("Wrong Credentials");
      return rejectWithValue(error.res.data);
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    role: "",
    error: "",
    authenticated: false,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [userSignUp.pending]: (state, action) => {
      state.loading = true;
    },
    [userSignUp.fulfilled]: (state, action) => {
      state.loading = false;
      state.email = action.payload.data.email;
      state.role = action.payload.data.role;
      state.authenticated = true;
    },
    [userSignUp.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.payload.message;
    },
    [userLogIn.pending]: (state, action) => {
      state.loading = true;
    },
    [userLogIn.fulfilled]: (state, action) => {
      state.loading = false;
      console.log(action.payload.data);
      state.email = action.payload.data.email;
      state.role = action.payload.data.role;
      state.authenticated = true;
    },
    [userLogIn.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.payload.message;
    },
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
