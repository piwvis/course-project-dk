import {collectionsUserRequest, createCollection, tagsRequest} from "../api/Api";

const SET_COLLECTIONS = "SET_COLLECTIONS"
const SET_TAGS = "SET_TAGS"
const SET_FETCHING_STATUS = "SET_FETCHING_STATUS"

let initialState = {collections: [], isFetching: false, tags: [{name: '', id: ''}]};

const collectionsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_COLLECTIONS: {
            console.log(action.data)
            return {collections: [...action.data]}
        }
        case SET_FETCHING_STATUS: {
            return {...state, isFetching: action.data}
        }
        case SET_TAGS: {
            return {...state, tags: [...action.data]}
        }
        default:
            return state;
    }
}

export const setUpCollections= (data) => ({type: SET_COLLECTIONS, data})
export const setUpFetch= (data) => ({type: SET_FETCHING_STATUS, data})
export const setUpTags= (data) => ({type: SET_TAGS, data})

export const getCollections = (data) => async (dispatch) => {
   collectionsUserRequest(data).then(res => {
        dispatch(setUpCollections(res))
        dispatch(setUpFetch(false))
    })
}

export const getTags = () => async (dispatch) => {
    tagsRequest().then(res => {
        console.log(res)
        dispatch(setUpTags(res))
    })
}

export const addCollection = (data) => async (dispatch) => {
    createCollection(data).then(res => {
        dispatch(setUpFetch(true))
    })
}

export default collectionsReducer;
