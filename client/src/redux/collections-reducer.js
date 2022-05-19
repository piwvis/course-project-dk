import {collectionsUserRequest, createCollection} from "../api/Api";

const SET_COLLECTIONS = "SET_COLLECTIONS"
const ADD_COLLECTION = "ADD_COLLECTION"

let initialState = {collections: []};

const collectionsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_COLLECTIONS: {
            return {...state, collections: [...action.data]}
        }
        case ADD_COLLECTION: {
            return {...state, collections: [state.collections, ...action.data]}
        }
        default:
            return state;
    }
}

export const setUpCollections= (data) => ({type: SET_COLLECTIONS, data})
export const setUpCollection= (data) => ({type: ADD_COLLECTION, data})

export const getCollections = (data) => async (dispatch) => {
    collectionsUserRequest(data).then(res => {
        dispatch(setUpCollections(res))
        console.log(res)
        return res;
    })
}

export const addCollection = (data) => async (dispatch) => {
    createCollection(data).then(res => {
        dispatch(setUpCollection(res))
    })
}


export default collectionsReducer;
