import * as types from '../actions/actionTypes';

const initialState = {};

export const galleryDataLoadedReducer = (gallery = {}, action) => {
    switch (action.type) {
        case types.LOAD_IMAGE_DATA_SUCCESS:
            action.data.items.map(i => {
                i.author = i.author.replace(/nobody@flickr.com \(|\)/g, '');
            });
            return {
                ...gallery,
                data: action.data
            };
        default:
            return gallery;
    }
};

const galleryDataReducer = (galleries = initialState, action) => {
    const gallery = galleries[action.galleryKey];

    switch (action.type) {
        case types.LOAD_IMAGE_DATA_SUCCESS:
        return {
                ...galleries,
                [action.galleryKey]: galleryDataLoadedReducer(gallery, action)
            };

        default:
            return galleries
    }
};


export default galleryDataReducer;