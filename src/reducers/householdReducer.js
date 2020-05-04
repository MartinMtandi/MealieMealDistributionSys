import { FETCH_HOUSEHOLD, NEW_HOUSEHOLD } from "../actions/types";

const initialSate = {
    items:[],
    item:{}
}


export default function (state = initialSate, action) {
    
    switch (action.type) {

        case FETCH_HOUSEHOLD:
            return {
                ...state,
                items: action.payload
            };
        
            case NEW_HOUSEHOLD:
                return {
                    ...state,
                    item: action.payload
                };
        default:
            return state;
    }
}