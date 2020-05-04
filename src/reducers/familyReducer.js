import { FETCH_FAMILY, NEW_FAMILY } from "../actions/types";

const initialSate = {
    items:[],
    item:{}
}


export default function (state = initialSate, action) {
    
    switch (action.type) {

        case FETCH_FAMILY:
            return {
                ...state,
                items: action.payload
            };
        
        default:
            return state;
    }
}