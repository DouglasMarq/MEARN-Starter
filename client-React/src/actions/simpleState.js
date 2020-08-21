import { SIMPLE_ACTION } from '../contants/actionTypes';

export function simpleAction(data) {
    return dispatch => {
        dispatch({
            type: SIMPLE_ACTION,
            payload: data
        });
    }
}