import { configureStore } from "@reduxjs/toolkit";
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
import storage from "redux-persist/lib/storage";
import usersReducer from "./slices/usersSlice";

const persistConfig = {
  key: "users",
  version: 1,
  storage,
  whitelist: ["items", "lastUpdated"],
};

const persistedUsersReducer = persistReducer(persistConfig, usersReducer);

export const store = configureStore({
  reducer: {
    users: persistedUsersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
