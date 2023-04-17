import {configureStore} from '@reduxjs/toolkit'
import cartReducer from "./slices/cartSlice.js";
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE,} from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: "root",
    storage,
};


const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
    reducer: {
        cart: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistor = persistStore(store);