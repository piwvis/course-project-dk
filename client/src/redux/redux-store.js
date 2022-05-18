import { combineReducers, applyMiddleware} from "redux";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import authReducer from "./auth-reducer";
import usersReducer from "./users-reducer";
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import collectionsReducer from "./collections-reducer";


const persistConfig = {
    key: 'main-root',
    storage,
}

let reducers = combineReducers({
    auth: authReducer, users: usersReducer, collectionsUser: collectionsReducer
});

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,   middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
})

const Persistor = persistStore(store)

export {Persistor};
export default store;
