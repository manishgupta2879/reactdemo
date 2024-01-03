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
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {userReducer} from "./features/User/userReducer";
import {fileReducer} from "./features/User/fileReducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["file"],
};

const persistedReducer = persistReducer(persistConfig, userReducer);


  const store = configureStore({
    reducer: {
      user: persistedReducer,
      file: fileReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
  });

  export const persistor = persistStore(store);
  export default store;
 