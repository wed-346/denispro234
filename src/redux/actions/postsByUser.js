import { api } from "../../api";
import { getUserPagePosts } from "../../utils";
import { mutatePhotosFailed, mutatePhotosStarted, mutatephotosSuccess } from "../actionCreateros/photos";

import { getPostsFailed, getPostsStarted, getPostsSuccess } from "../actionCreateros/postsByUser"

export const getPostsByUser = (userId) => {
	return async (dispatch) => {
		try {
			dispatch(getPostsStarted());

			const responce = await api.postsByUser.getPostsByUser({
				url: `/${userId}`,
			});
			dispatch(getPostsSuccess(responce.data.posts));
		} catch (error) {
			dispatch(getPostsFailed(error));

		}

	};
};

export const toggleLikeInPost = (userId, postId, postAuthorId) => {
	return async (dispatch, getState) => {
		try {
			const posts = getState().postsByUser.posts;
			const { newPosts, postForEdit } = getUserPagePosts(posts, postId)

			if (postForEdit.likes.includes(userId)) {
				postForEdit.likes = postForEdit.likes.filter((like) => like !== userId);
			} else {
				postForEdit.likes.push(userId);
			}
			const responcers = await api.postsByUser.mutatePosts({
				url: `/${postAuthorId}`,
				data: {
					id: postAuthorId,
					posts: newPosts
				}

			});
			dispatch(getPostsSuccess([...responcers.data.posts]));
		} catch (error) {

		}





	}
};


export const sendCommentsOnUserPage = (nickname, postId, postAuthorId, text, nickName) => {
	return async (dispatch, getState) => {
		dispatch(mutatePhotosStarted());
		const posts = getState().postsByUser.posts;
		const { newPosts, postForEdit } = getUserPagePosts(posts, postId)


		postForEdit.comments.push({ nickname, text });

		try {
			const responcers = await api.postsByUser.mutatePosts({
				url: `/${postAuthorId}`,
				data: {
					id: postAuthorId,
					posts: newPosts
				}

			});
			dispatch(getPostsSuccess([...responcers.data.posts]));


			dispatch(mutatephotosSuccess());
		} catch (error) {
			dispatch(mutatePhotosFailed(error));
		}
	};
};