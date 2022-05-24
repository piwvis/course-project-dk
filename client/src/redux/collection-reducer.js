import {collectionFieldsRequest, collectionUserRequest} from "../api/Api";

const SET_COLLECTION = "SET_COLLECTION"
const SET_COLLECTION_FIELDS = "SET_COLLECTION_FIELDS"

let initialState = {collection: {name: "", image: "", description: "", itemsCount: ""}, fields: [{name: "", type: ""}]};

const collectionReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_COLLECTION: {
            return {...state, collection: {...action.data}}
        }
        case SET_COLLECTION_FIELDS: {
            return {...state, fields: [...action.data]}
        }
        default:
            return state;
    }
}

export const setUpCollection= (data) => ({type: SET_COLLECTION, data})
export const setUpCollectionFields= (data) => ({type: SET_COLLECTION_FIELDS, data})

export const getCollectionData = (data) => async (dispatch) => {
    collectionUserRequest(data).then(res => {
        dispatch(setUpCollection(res[0]))
    })
    collectionFieldsRequest(data).then(res => {
        dispatch(setUpCollectionFields(res))
    })
}

export default collectionReducer;
