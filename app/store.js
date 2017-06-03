import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import app from './reducers/app';
import rootSaga from './sagas';


const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    return {
        ...createStore(
            combineReducers({ app }),
            applyMiddleware(sagaMiddleware)
        ),
        runSaga: sagaMiddleware.run(rootSaga)
    };
};

export default configureStore;
