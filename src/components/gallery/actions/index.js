import {LOAD_IMAGE_DATA,LOAD_IMAGE_DATA_REQUEST,LOAD_IMAGE_DATA_FAILURE,LOAD_IMAGE_DATA_SUCCESS} from './actionTypes';

/*Using jquery instead of fetch as Flickr does not support CORS headers*/
import $ from 'jquery';

export function loadImageData({galleryKey, url}) {
    return (dispatch) => {
        dispatch({type: LOAD_IMAGE_DATA_REQUEST});
        return $.getJSON(`${url}?format=json&jsoncallback=?`, (data) => {
                    dispatch(loadImageDataSuccess(galleryKey, data))
                })
                .fail((jqxhr, textStatus, error) => {
                    dispatch({type: LOAD_IMAGE_DATA_FAILURE, payload: error})
                });

        return {type: LOAD_IMAGE_DATA}
    };
}

export function loadImageDataSuccess(galleryKey, data) {
    return {
        type: LOAD_IMAGE_DATA_SUCCESS,
        data: data,
        galleryKey
    };
}
