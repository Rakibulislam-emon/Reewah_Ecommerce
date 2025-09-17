// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./cartSlice"

// export const makeStore = () => {
//   return configureStore({
//     reducer: {
//       cart: cartReducer,
//     },
//   });
// };

// store.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartSlice.js";
import favReducer from "./favSlice.js";

const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: favReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "favorites"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
