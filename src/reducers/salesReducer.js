import { FETCH_SALE, NEW_SALE} from "../actions/types";

const initialSate = {
    items:[],
    item:{}
}


export default function (state = initialSate, action) {
    
    switch (action.type) {

        case FETCH_SALE:
            return {
                ...state,
                items: action.payload
            };
        
        default:
            return state;
    }
}