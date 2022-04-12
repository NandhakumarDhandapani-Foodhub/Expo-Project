import { all, call, put, takeEvery } from 'redux-saga/effects'

import {
    USER_RESPONSE,
    USER_RESPONSE_FAILURE,
    USER_RESPONSE_SUCCESS,
} from '../Modules/ActionTypes';

import { url } from '../Network/NetworkURL';

function* takeResponse(action) {
    try {
        const urlResponse = yield call(url.getDatas);
        //console.log(urlResponse,'response');
        if (urlResponse.data) {
            yield put({
                type: USER_RESPONSE_SUCCESS,
                payload: urlResponse.data,
            });
        } else {
            yield put({
                type: USER_RESPONSE_FAILURE,
                payload: null,
            })
        }
    } catch {
        yield put({
            type: USER_RESPONSE_FAILURE,
            payload: null,
        });
    }
}

export default function* UserAppSaga() {
    yield all([takeEvery(USER_RESPONSE, takeResponse)])
}