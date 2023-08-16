import { GET_POSTS_FAILED, GET_POSTS_STARTED, GET_POSTS_SUCCESS } from "../actionCreateros/postsByUser";

const initialState = {
	posts: [],
	isPostsLoading: false,
};

export const postsByUserReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_POSTS_STARTED:
			return {
				...state,
				isPostsLoading: true,


			};
		case GET_POSTS_SUCCESS:
			return {
				...state,
				isPostsLoading: false,
				posts: action.payload

			};

		case GET_POSTS_FAILED:
			return {
				...state,
				isPostsLoading: false,
			};
		default:
			return {
				...state,

			};

	}
};