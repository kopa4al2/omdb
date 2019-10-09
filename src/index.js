import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OmdbApp from './OmdbApp';
import {Provider} from 'react-redux'
import {applyMiddleware, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import * as serviceWorker from './serviceWorker';
import reducers from "./reducers/searchReducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const logger = createLogger();
const store =
    createStore(reducers,
        composeEnhancers(
            applyMiddleware(
                thunkMiddleware,
                // logger
            )));

ReactDOM.render(
    <Provider store={store}>
        <OmdbApp/>
    </Provider>,
    document.getElementById('root'));


serviceWorker.unregister();
