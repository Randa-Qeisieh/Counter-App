import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

const persistConfig = {
    key : "root", //the name used to store our data in the session storage
    storage : storageSession, //the storage engine we use
};

/* wrapping the original counterReducer with persistence, so now when the
state changes it automatically serializes and saves it to session storage,
and on app startup it reads from session storage and restores the previous state (rehydration)*/
const persistedReducer = persistReducer(persistConfig, counterReducer);

export const store = configureStore({
    reducer: {
        counter: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            /* RTK comes with several built-in middleware enabled by default
            this function inspects every action that gets dispatched and warns
            in console if it finds something non-serializable ( can be converted to JSON )*/
            serializableCheck: {
                //if we do not ignore them, RTK will make so much warnings about them in the console because of the safety check
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
            },
        }),
});

export const persistor = persistStore(store);
