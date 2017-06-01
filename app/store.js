import { createStore, compose, applyMiddleware, combineReducers } from 'redux';

import app from './reducers/app';

export default function (...middlewares) {
    const store = createStore(
        combineReducers({
            app
        }),
        compose(
            applyMiddleware(...middlewares),
        )
    );

    return store;
}
