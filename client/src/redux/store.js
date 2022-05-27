import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import ItemReducer from "./features/itemSlice";
import logger from "redux-logger";
export default configureStore({
  reducer: {
    auth: AuthReducer,
    item: ItemReducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(logger);
  },
});
