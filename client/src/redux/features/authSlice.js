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
export const userLogout = createAsyncThunk(
  "auth/logout",
  async ({ toast, navigate }, { rejectWithValue }) => {
    try {
      const res = await api.userLogOut();
      toast.success("Logout Successful");
      navigate("/");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.res.data);
    }
  }
);
export const isAuthenticated = createAsyncThunk(
  "auth/isAuth",
  async rejectWithValue => {
    try {
      const res = await api.isAuth();
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
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
      state.loading = false;
      state.error = action.payload.message;
    },
    [userLogIn.pending]: (state, action) => {
      state.loading = true;
    },
    [userLogIn.fulfilled]: (state, action) => {
      state.loading = false;
      state.email = action.payload.data.email;
      state.role = action.payload.data.role;
      state.authenticated = true;
    },
    [userLogIn.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [userLogout.pending]: (state, action) => {
      state.loading = true;
    },
    [userLogout.fulfilled]: (state, action) => {
      state.loading = false;
      state.email = "";
      state.role = "";
      state.authenticated = false;
    },
    [userLogout.rejected]: (state, action) => {
      state.loading = false;
    },
    [isAuthenticated.pending]: (state, action) => {
      state.loading = true;
    },
    [isAuthenticated.fulfilled]: (state, action) => {
      state.email = action.payload.user.email;
      state.userName = action.payload.user.name;
      state.authenticated = true;
      state.loading = false;
      state.role = action.payload.user.role;
    },
    [isAuthenticated.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
