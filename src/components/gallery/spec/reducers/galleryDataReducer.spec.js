import * as actions from '../../actions';
import galleryDataReducer, {galleryDataLoadedReducer} from '../../reducers/galleryDataReducer';
import expect from 'expect';

describe("galleryDataLoadedReducer", () => {
    it("should return initial empty state", () => {
        const state = galleryDataReducer({}, {});
        expect(state).toEqual({});
    });

    it("test galleryDataLoadedReducer", () => {
        const payload = {items: [{author: "nobody@flickr.com (r_lizzimore)"}]};
        const action = actions.loadImageDataSuccess(2, payload);
        const newState = galleryDataLoadedReducer({}, action);
        expect(newState.data.items).toEqual([ { author: 'r_lizzimore' } ]);
    });

    it("test galleryDataReducer", () => {
        const gallery = 'gallery1';
        const payload = {items: [{author: "nobody@flickr.com (r_lizzimore)"}]};
        const newState = galleryDataReducer( payload, gallery);
        expect(newState).toBe(payload);
    });
});