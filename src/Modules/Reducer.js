import {
    USER_RESPONSE_FAILURE,
    USER_RESPONSE_SUCCESS,
} from './ActionTypes';

const initialState = {
    User: {
        response: [],
    },
};
export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_RESPONSE_SUCCESS:
            return {
                ...state,
                User: {
                    response: action.payload,
                },
            };
        case USER_RESPONSE_FAILURE:
            return {
                ...state,
                response: action.payload
            };
        default:
            return state;
    }
}