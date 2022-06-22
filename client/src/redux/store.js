import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import ItemReducer from "./features/itemSlice";
import OrderReducer from "./features/orderSlice";
import logger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage/session";
const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  auth: AuthReducer,
  item: ItemReducer,
  order: OrderReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  // devTools: false,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
