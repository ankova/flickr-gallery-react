import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
const rootEl = document.getElementById('app');
import Main from './components/Main';

    const store = configureStore();

    render(
        <Provider store={store}>
            <Main>
            </Main>
        </Provider>,
        rootEl
    );