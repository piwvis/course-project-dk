import {blockUserRequest, deleteUserRequest, makeUsersRequest, unBlockUserRequest} from "../api/Api";
import {changeAuth} from "./auth-reducer";

const SET_USERS = "SET_USERS"
const CHECK_ALL_USERS = "CHECK_ALL_USERS"
const UNCHECK_ALL_USERS = "UNCHECK_ALL_USERS"
const CHECK_USER = "CHECK_USER"
const UNCHECK_USER = "UNCHECK_USER"

let initialState = {users: [], selectedUsers: []};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS: {
            return {...state, users: [...action.data]}
        }
        case CHECK_ALL_USERS: {
            let usersArray = []
            state.users.map(user => {
                usersArray.push(user._id)
            })
            return {...state, selectedUsers: [...usersArray]}
        }
        case CHECK_USER: {
            return {...state, selectedUsers: [...state.selectedUsers, action.data]}
        }
        case UNCHECK_USER: {
            let usersArray = [...state.selectedUsers]
            let index = state.selectedUsers.indexOf(action.data);
            usersArray.splice(index, 1);
            return {...state, selectedUsers: [...usersArray]}
        }
        case UNCHECK_ALL_USERS: {
            return {...state, selectedUsers: []}
        }
        default:
            return state;
    }
}

export const setUpUsers = (data) => ({type: SET_USERS, data})
export const setUpAllCheckedUsers = (data) => ({type: CHECK_ALL_USERS, data})
export const setUpCheckedUser = (data) => ({type: CHECK_USER, data})
export const setUpUnCheckedUser = (data) => ({type: UNCHECK_USER, data})
export const setUpUnCheckedAllUsers = (data) => ({type: UNCHECK_ALL_USERS, data})

export const getUsers = () => async (dispatch) => {
    makeUsersRequest().then(res => {
        dispatch(setUpUsers(res))
    })
}

export const selectUser = (data) => async (dispatch) => {
    dispatch(setUpCheckedUser(data));
}

export const unCheckUser = (data) => async (dispatch) => {
    dispatch(setUpUnCheckedUser(data));
}

export const checkAllUsers = () => async (dispatch) => {
    dispatch(setUpAllCheckedUsers());
}

export const unCheckAllUsers = () => async (dispatch) => {
    dispatch(setUpUnCheckedAllUsers());
}

export const deleteUser = (data, userId) => async (dispatch) => {
    let checkedUsers = [...data];
    checkedUsers.forEach(user => {(deleteUserRequest(user))})
    if(checkedUsers.includes(userId)) {dispatch(changeAuth(false))};
    dispatch(setUpUnCheckedAllUsers());
}

export const blockUser = (data, userId) => async (dispatch) => {
    let checkedUsers = [...data];
    checkedUsers.forEach(user => {(blockUserRequest(user))})
    if(checkedUsers.includes(userId)) {dispatch(changeAuth(false))};
    dispatch(setUpUnCheckedAllUsers());
}

export const unBlockUser = (data) => async (dispatch) => {
    let checkedUsers = [...data];
    checkedUsers.forEach(user => {unBlockUserRequest(user)})
    makeUsersRequest().then(res => {
        dispatch(setUpUsers(res));
        dispatch(setUpUnCheckedUser(data));
    })
}



export default usersReducer;
