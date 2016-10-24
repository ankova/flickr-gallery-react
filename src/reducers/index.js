import {combineReducers} from 'redux';
import galleryDataReducer from '../components/gallery/reducers/galleryDataReducer';

const rootReducer = combineReducers({
  galleries: galleryDataReducer
});

export default rootReducer;