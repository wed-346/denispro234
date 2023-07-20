import { api } from "../../api";
import { getPhotoFromRedux, getUpdatePhotoForState } from "../../utils";
import {
    getPhotosFailed,
    getPhotosStarted,
    getPhotosSucces,
    mutatePhotosFailed,
    mutatePhotosStarted,
    mutatephotosSuccess,
    setPhotosTotal,
} from "../actionCreateros/photos";

export const getPhotos = (page = 1) => {
    return async(dispatch, getState) => {
        try {
            const store = getState();
            if (page === 1) {
                dispatch(getPhotosStarted());
            }
            const responcer = await api.photos.getPhotos({
                params: {
                    _page: page,
                    _limit: 5,
                },
            });
            if (page === 1) {
                dispatch(setPhotosTotal(responcer.headers["x-total-count"]));
                dispatch(getPhotosSucces([...responcer.data]));
            } else {
                dispatch(getPhotosSucces([...store.photos.photos, ...responcer.data]));
            }
        } catch (error) {
            dispatch(getPhotosFailed(error));
        }
    };
};

export const mutatePhoto = (userId, photoId) => {
    return async(dispatch, getState) => {

        const state = getState();

        const newPhoto = getPhotoFromRedux(state.photos.photos, photoId);

        if (newPhoto.likes.includes(userId)) {
            newPhoto.likes = newPhoto.likes.filter((like) => like !== userId);
        } else {
            newPhoto.likes.push(userId);
        }

        try {
            const response = await api.photos.mutatePhoto({
                data: newPhoto,
                url: `/${photoId}`,
            });

            const newPhotos = getUpdatePhotoForState(state.photos.photos, photoId, response.data);

            dispatch(getPhotosSucces(newPhotos));


        } catch (error) {
            dispatch(mutatePhotosFailed(error));
        }
    };
};

export const sendComments = (nickname, photoId, text) => {
    return async(dispatch, getState) => {
        dispatch(mutatePhotosStarted());
        const state = getState();
        const newPhoto = getPhotoFromRedux(state.photos.photos, photoId);
        newPhoto.comments.push({ nickname, text });

        try {
            const response = await api.photos.mutatePhoto({
                data: newPhoto,
                url: `/${photoId}`,
            });
            const newPhotos = getUpdatePhotoForState(state.photos.photos, photoId, response.data);

            dispatch(getPhotosSucces(newPhotos));
            dispatch(mutatephotosSuccess());
        } catch (error) {
            dispatch(mutatePhotosFailed(error));
        }
    };
};