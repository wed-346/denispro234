import { toast } from 'react-toastify';
export const getPhotoFromRedux = (photos, photoId) => {
	const photo = photos.find((elem) => elem.id === photoId);

	return { ...photo };
};

export const getUpdatePhotoForState = (photos, photoId, data) => {
	const newPhotos = [...photos];
	const photosIndex = newPhotos.findIndex(photo => photo.id === photoId);
	newPhotos[photosIndex] = data;
	return newPhotos;
};

export const getUserPagePosts = (posts, postId) => {
	const newPosts = [...posts];
	const newPostsIndex = newPosts.findIndex(post => post.id === postId);
	const postForEdit = newPosts[newPostsIndex];
	return {
		newPosts,

		postForEdit,
	};
};

export const getEroor = ({ response: { status, statusText } }) => {


	toast.error(`${status}: ${statusText} `);

};