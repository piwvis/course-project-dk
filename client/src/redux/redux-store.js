import { combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./auth-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    auth: authReducer, users: usersReducer
});

const store = configureStore({
    reducer: reducers
})
export default store;
