import { GET_PHOTOS_FAILED, GET_PHOTOS_STARTED, GET_PHOTOS_SUCCESS, MUTATE_PHOTOS_FAILED, MUTATE_PHOTOS_STARTED, MUTATE_PHOTOS_SUCCESS, SET_PHOTOS_TOTAL } from "../actionCreateros/photos"


const initialState = {
    photos: [],
    isPhotosLoading: true,
    totalPhotos: 0,
    isMutateLoading: false,

}

export const Photosreducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PHOTOS_STARTED:
            return {
                ...state,
                isPhotosLoading: true,


            };
        case GET_PHOTOS_FAILED:
            return {
                ...state,
                isPhotosLoading: false,
            };
        case GET_PHOTOS_SUCCESS:
            return {
                ...state,
                photos: action.payload,
                isPhotosLoading: false,
            };
        case SET_PHOTOS_TOTAL:
            return {
                ...state,
                totalPhotos: action.payload,
            };

        case MUTATE_PHOTOS_STARTED:
            return {
                ...state,
                isMutateLoading: true,

            };
        case MUTATE_PHOTOS_SUCCESS:
            return {
                ...state,
                isMutateLoading: false,

            };
        case MUTATE_PHOTOS_FAILED:
            // TODO ADD errors
            return {
            ...state,
            isMutateLoading: false,

            };

        default: {
            return {
                ...state,

            }
        }

    }
};