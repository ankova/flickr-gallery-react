import rootReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
const logger = createLogger();

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(thunk, logger)
    );
}