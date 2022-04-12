import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './RootReducer';
import createSagaMiddleware from 'redux-saga';
import UserAppSaga from '../Saga/Saga';

const sagaMiddleware = createSagaMiddleware();
const ApiMiddleware = [sagaMiddleware]

export const Store = createStore(
    rootReducer,
    compose(applyMiddleware(...ApiMiddleware)),
);

sagaMiddleware.run(UserAppSaga)