import expect from 'expect';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import * as actions from '../../actions';
import * as types from '../../actions/actionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe.only('async actions', () => {

    afterEach(() => {
        nock.cleanAll()
    });

    it('should return a function', () => {
        expect(actions.loadImageData).toBeA('function');
    });


    // it('creates LOAD_IMAGE_DATA_REQUEST when fetching data has been done', () => {
    //
    //     nock('https://still-scrubland-9880.herokuapp.com')
    //         .defaultReplyHeaders({
    //             'Content-Type': 'application/json'
    //         })
    //         .matchHeader('accept', 'application/json')
    //         .get('/services/feeds/photos_public.gne?format=json&jsoncallback=?')
    //         .reply(200, {galleries: {data: []}});
    //
    //     const expectedActions = [
    //         { type: types.LOAD_IMAGE_DATA_REQUEST },
    //         { type: types.LOAD_IMAGE_DATA_SUCCESS, payload: { galleries: 'test' } }
    //     ];
    //     const store = mockStore();
    //
    //     return store.dispatch(actions.loadImageData('gallery1')).then(() => {
    //         console.log(store.getActions())
    //         expect(store.getActions()).toEqual(expectedActions);
    //     });
    // });
});