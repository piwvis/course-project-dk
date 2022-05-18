import {collectionsUserRequest} from "../api/Api";

const SET_COLLECTIONS = "SET_COLLECTIONS"

let initialState = {collections: []};

const collectionsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_COLLECTIONS: {
            return {...state, collections: [...action.data]}
        }
        default:
            return state;
    }
}

export const setUpCollections= (data) => ({type: SET_COLLECTIONS, data})

export const getCollections = (data) => async (dispatch) => {
    collectionsUserRequest(data).then(res => {
        dispatch(setUpCollections(res))
    })
}


export default collectionsReducer;
