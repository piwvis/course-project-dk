import {loginUser, registerUser} from "../api/Api";

const SET_AUTH = "SET_AUTH"
const CHANGE_AUTH_STATUS = "CHANGE_AUTH_STATUS"
const SET_LOGIN_ID = "SET_LOGIN_ID"

let initialState = {isAuth: false, userId: ""};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH: { console.log("OK"); return {...state, isAuth: true}}
        case CHANGE_AUTH_STATUS: {return {...state, isAuth: action.data}}
        case SET_LOGIN_ID: { return {...state, userId: action.data}}
        default: return state;
    }
}

export const setUpAuth = (data) => ({type: SET_AUTH, data})
export const changeAuthStatus = (data) => ({type: CHANGE_AUTH_STATUS, data})
export const setUpLoginID = (data) => ({type: SET_LOGIN_ID, data})

export const signUpUser = (data) => async (dispatch) => {
    let response = await registerUser(data);
    dispatch(setUpAuth());
    dispatch(setUpLoginID(response.id));
}

export const changeAuth = (data) => async (dispatch) => {
    dispatch(changeAuthStatus(data))
}

export const logInUser = (data) => async (dispatch) => {
    let response = await loginUser(data);
    if (response) {
        if (response.status === "blocked") alert("You was Blocked!")
        else{dispatch(setUpAuth()); dispatch(setUpLoginID(response.id))}}
}
export default authReducer;
