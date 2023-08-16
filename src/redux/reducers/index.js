import { combineReducers } from "redux";
import { Photosreducer } from "./photos";
import { usersReducer } from "./users";
import { postsByUserReducer } from "./postsByUser";




export const RootReducer = combineReducers({
	photos: Photosreducer,
	users: usersReducer,
	postsByUser: postsByUserReducer,


});