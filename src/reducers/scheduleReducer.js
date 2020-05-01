import { FETCH_SCHEDULE, NEW_SCHEDULE } from "../actions/types";

const initialSate = {
    items:[],
    item:{}
}


export default function (state = initialSate, action) {
    
    switch (action.type) {

        case FETCH_SCHEDULE:
            return {
                ...state,
                items: action.payload
            };
        
        default:
            return state;
    }
}