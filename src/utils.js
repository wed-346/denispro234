export const getPhotoFromRedux = (photos, photoId) => {
    const photo = photos.find((elem) => elem.id === photoId);

    return {...photo };
};

export const getUpdatePhotoForState = (photos, photoId, data) => {
    const newPhotos = [...photos];
    const photosIndex = newPhotos.findIndex(photo => photo.id === photoId);
    newPhotos[photosIndex] = data;
    return newPhotos;
};