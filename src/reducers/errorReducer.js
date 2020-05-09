import { GET_ERRORS,CLEAR_ERRORS,SET_SUCCESS,DELETE_SUCCESS } from '../actions/types'

const initialState = {
    errors: null,
    success: false,
   // delete_success: false
}


export default function (state = initialState, action) {

    switch (action.type) {
        case GET_ERRORS:
            return {
                ...state,
                errors: action.payload
            };
        case SET_SUCCESS:
                return {
                    ...state,
                    success: true
            };
        case CLEAR_ERRORS:
                return {
                    ...state,
                    errors: null,
                    success: false
                };
        default:
            return state;
    }
}