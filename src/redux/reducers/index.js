import { combineReducers } from "redux";
import { Photosreducer } from "./photos";
import { usersReducer } from "./users";



 export const RootReducer = combineReducers({
    photos: Photosreducer,
    users: usersReducer,

});